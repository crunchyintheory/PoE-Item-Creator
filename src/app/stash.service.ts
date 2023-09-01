import { Injectable } from '@angular/core';
import { ItemService } from './item-service.service';
import { Item } from './item';
import { BehaviorSubject, Observable, firstValueFrom } from 'rxjs';
import { Alert, AlertService, AlertStatus, AlertType } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class StashService {

  private stashKey?: string;

  private readonly _stash: BehaviorSubject<Item[]>;
  public get Stash() {
    return this._stash.asObservable();
  }

  constructor(private is: ItemService, private alert: AlertService) {
    this._stash = new BehaviorSubject(this.loadStash());
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

  private loadStash(forceReload = true): Item[] {
    this.stashKey = this.getStashKey();
    let loadedItems = JSON.parse(localStorage.getItem("stash") ?? "[]") as Item[];
    for (let i = 0; i < loadedItems.length; i++) {
      loadedItems[i] = new Item(loadedItems[i]);
    }
    return loadedItems;
  }

  public async GetStash(): Promise<Item[]> {
    return firstValueFrom(this.Stash);
  }

  public async ReloadStash(): Promise<Item[]> {
    let stash = this.loadStash(true);
    this._stash.next(stash);
    return firstValueFrom(this.Stash);
  }

  public async AddToStash(item: Item, autosave = true): Promise<Item[]> {
    if (this.stashKey != this.getStashKey())
      this.ReloadStash();

    let stash = this._stash.getValue();
    stash.push(new Item(item));
    this._stash.next(stash);

    if (autosave)
      await this.saveStash();

    return firstValueFrom(this.Stash);
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
}
