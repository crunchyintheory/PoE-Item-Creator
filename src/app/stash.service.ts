import { Injectable, SecurityContext } from "@angular/core";
import { ItemService } from "./item-service.service";
import { Item, StashedItem } from "./item";
import { BehaviorSubject, firstValueFrom } from "rxjs";
import { Alert, AlertService, AlertStatus, AlertType } from "./alert.service";
import { DomSanitizer } from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class StashService {

  private stashKey?: string;
  public showUids = false;

  private readonly _stash: BehaviorSubject<StashedItem[]>;
  public get Stash() {
    return this._stash.asObservable();
  }

  constructor(private is: ItemService, private alert: AlertService, private sanitizer: DomSanitizer) {
    this._stash = new BehaviorSubject(this.loadStash());
    this.showUids = !!JSON.parse(localStorage.getItem("showStashUids") ?? "false");
  }

  private async saveStash(checkKey = true): Promise<boolean> {
    let key = this.getStashKey();

    if (checkKey && key !== this.stashKey) {
      return false;
    }

    try {
      let stash = await firstValueFrom(this.Stash);
      localStorage.setItem("stash", JSON.stringify(stash));
      this.setStashKey();
      return true;
    }
    catch (e) {
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

  private loadStash(): StashedItem[] {
    this.stashKey = this.getStashKey();
    let loadedItems = JSON.parse(localStorage.getItem("stash") ?? "[]") as StashedItem[];
    for (let i = 0; i < loadedItems.length; i++) {
      loadedItems[i] = new StashedItem(loadedItems[i]);
    }
    return loadedItems;
  }

  public async ReloadStash(): Promise<Item[]> {
    let stash = this.loadStash();
    this._stash.next(stash);
    return firstValueFrom(this.Stash);
  }

  public async AddToStash(item: Item, autosave = true) {
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
                    text: "Cancel"
                },
                {
                    text: "Overwrite",
                    callback: () => this.replaceInStash(stash, i, existingIndex, autosave)
                },
                {
                    text: "Save as a Copy",
                    callback: () => this.finalizeStashAdd(stash, StashedItem.From(item, true), autosave)
                }
            ],
            html: true
        }));
    }
    else {
        await this.finalizeStashAdd(stash, i, autosave);
    }
  }

  private async finalizeStashAdd(stash: StashedItem[], item: StashedItem, autosave: boolean) {
    stash.push(item);
    this._stash.next(stash);
    this.is.itemImported.next(true);

    if (autosave)
      await this.saveStash();
  }

  private async replaceInStash(stash: StashedItem[], item: StashedItem, index: number, autosave: boolean) {
    stash[index] = item;
    this._stash.next(stash);

    if (autosave)
      await this.saveStash();
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
