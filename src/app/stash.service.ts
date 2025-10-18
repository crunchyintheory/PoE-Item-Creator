import { Injectable, SecurityContext } from "@angular/core";
import { ItemService } from "./item-service.service";
import { Item, SerializedItem, StashedItem } from "./item";
import { BehaviorSubject, firstValueFrom } from "rxjs";
import { Alert, AlertService, AlertStatus, AlertType } from "./alert.service";
import { DomSanitizer } from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class StashService {

  private stashKey?: string;
  public showUids = false;

  private readonly _stash = new BehaviorSubject<StashedItem[]>([]);
  public get Stash() {
    return this._stash.asObservable();
  }

  constructor(private is: ItemService, private alert: AlertService, private sanitizer: DomSanitizer) {
    this.loadStash();
    this.showUids = !!JSON.parse(localStorage.getItem("showStashUids") ?? "false");
  }

  private async saveStash(checkKey = true, backup = false): Promise<boolean> {
    let key = this.getStashKey();

    if (checkKey && key !== this.stashKey) {
      return false;
    }

    try {
      let stash = await firstValueFrom(this.Stash);
      if(backup) localStorage.setItem("preMigrationStash", localStorage.getItem("stash") ?? "");
      localStorage.setItem("stash", JSON.stringify(stash.map(x => this.is.export(x, true))));
      this.setStashKey();
      return true;
    }
    catch (e) {
      console.error(e);
      return false;
    }
  }

  private getStashKey() {
    return localStorage.getItem("stashId") || undefined;
  }

  private setStashKey() {
    let key = Math.floor((Math.random() * 256)).toString()
    this.stashKey = key;

    localStorage.setItem("stashId", key);
  }

  private async loadStash() {
    this.stashKey = this.getStashKey();
    let loadedItems = JSON.parse(localStorage.getItem("stash") ?? "[]") as SerializedItem[];
    let parsedItems: StashedItem[] = [];

    let appliedMigration = await this.migrateStash(loadedItems);

    for (let i = 0; i < loadedItems.length; i++) {
      parsedItems[i] = this.is.parse(loadedItems[i]);
      parsedItems[i].uid = loadedItems[i].uid;
    }

    this._stash.next(parsedItems);

    if(appliedMigration) {
      let status = await this.saveStash(true, true);
      if(!status) {
        this.alert.Dispatch(new Alert({
          status: AlertStatus.Success,
          text: "Unable to migrate stash to the latest version. Corrupted data may appear. A backup is located at the 'preMigrationStash' Local Storage key.",
          title: "Stash Migration Failed",
          type: AlertType.Toast,
          lifetime: 5000
        }));
      }
      else {
        this.alert.Dispatch(new Alert({
          status: AlertStatus.Success,
          text: "Migrated stash to the latest version. Minor changes may appear. A backup is located at the 'preMigrationStash' Local Storage key.",
          title: "Stash Migrated",
          type: AlertType.Toast,
          lifetime: 5000
        }));
      }
    }
  }

  private async migrateStash(stash: SerializedItem[]) {
    let appliedMigration = false;

    for(let i = 0; i < stash.length; i++) {
      if(!stash[i].uid) {
        stash[i].uid = crypto.randomUUID();
        appliedMigration = true;
      }

      // noinspection SuspiciousTypeOfGuard
      if(typeof stash[i].rarity !== "string") {
        stash[i] = this.is.export(stash[i] as any, true); // Try to parse an unknown format.
        appliedMigration = true;
      }
    }

    return appliedMigration;
  }

  public async ReloadStash(): Promise<Item[]> {
    await this.loadStash();
    return firstValueFrom(this.Stash);
  }

  public AddToStash(item: Item, autosave = true): Promise<string|undefined> {
    return new Promise(async (resolve, _) => {

      if (this.stashKey != this.getStashKey())
        await this.ReloadStash();

      let stash = this._stash.getValue();
      let i = StashedItem.From(new Item(item));

      let existingIndex = stash.findIndex(x => x.uid == i.uid);
      let existing = stash[existingIndex];

      let showUids = !!JSON.parse(localStorage.getItem("showStashUids") ?? "false");

      if(existing) {
        this.alert.Dispatch(new Alert({
          type: AlertType.ModalConfirm,
          status: AlertStatus.Warning,
          title: "Confirm Overwrite",
          text: `Would you like to overwrite the existing item <strong>${this.sanitizer.sanitize(SecurityContext.HTML, existing.name)} ${this.sanitizer.sanitize(SecurityContext.HTML, existing.base)}</strong>${showUids ? " (" + this.sanitizer.sanitize(SecurityContext.HTML, existing.uid ?? "") + ")" : ""} in your stash, or save into a new slot?`,
          lifetime: 1000,
          buttons: [
            {
              text: "Cancel",
              callback: () => resolve(undefined)
            },
            {
              text: "Overwrite",
              callback: async () => resolve(await this.replaceInStash(stash, i, existingIndex, autosave))
            },
            {
              text: "Save as a Copy",
              callback: async () => resolve(await this.finalizeStashAdd(stash, StashedItem.From(item, true), autosave))
            }
          ],
          html: true
        }));
      }
      else {
        resolve(await this.finalizeStashAdd(stash, i, autosave));
      }
    });
  }

  private async finalizeStashAdd(stash: StashedItem[], item: StashedItem, autosave: boolean) {
    stash.push(item);
    this._stash.next(stash);
    this.is.itemImported.next(true);

    if (autosave)
      await this.saveStash();

    return item.uid!;
  }

  private async replaceInStash(stash: StashedItem[], item: StashedItem, index: number, autosave: boolean) {
    stash[index] = item;
    this._stash.next(stash);

    if (autosave)
      await this.saveStash();

    return item.uid!;
  }

  public async RemoveFromStash(item: number, autosave = true): Promise<Item[] | false> {
    let stash = this._stash.getValue();
    stash.splice(item, 1)
    this._stash.next(stash);

    if (autosave && !(await this.saveStash())) {
      this.alert.Dispatch(new Alert({
        type: AlertType.Toast,
        title: "Could not delete item",
        text: "The stash has been modified externally since this page was loaded. Please reload the page and try again.",
        status: AlertStatus.Error,
        lifetime: 2000
      }));
    }
    else {
      this.alert.Dispatch(new Alert({
        type: AlertType.Toast,
        title: "Success",
        text: "Item removed from stash storage.",
        status: AlertStatus.Success,
        lifetime: 1000
      }));
    }

    return firstValueFrom(this.Stash);
  }

  public FindByUid(uid?: string): Item | false {
      let stash = this._stash.getValue();
      let item = stash.find(x => x.uid === uid);
      console.log(item);

      return item === undefined ? false : item;
  }
}
