import { Injectable } from '@angular/core';
import { ItemService } from './item-service.service';
import { Item } from './item';
import { BehaviorSubject, Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StashService {

  private stashKey?: string;

  private readonly _stash: BehaviorSubject<Item[]>;
  public get Stash() {
    return this._stash.asObservable();
  }

  constructor(private is: ItemService) {
    this._stash = new BehaviorSubject(this.loadStash());
  }

  private async saveStash(checkKey = true): Promise<boolean> {
    let key = this.getStashKey();

    if(checkKey && key !== this.stashKey) {
      return false;
    }

    try {
      let stash = await firstValueFrom(this.Stash);
      localStorage.setItem("stash", JSON.stringify(stash));
      this.setStashKey();
      return true;
    }
    catch(e) {
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
    return JSON.parse(localStorage.getItem("stash") ?? "[]") as Item[];
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
    if(this.stashKey != this.getStashKey())
      this.ReloadStash();

    let stash = this._stash.getValue();
    stash.push(item);
    this._stash.next(stash);

    if(autosave)
      await this.saveStash();

    return firstValueFrom(this.Stash);
  }

  public async RemoveFromStash(item: number, autosave = true): Promise<Item[] | false> {
    let stash = this._stash.getValue();
    stash.splice(item, 1)
    this._stash.next(stash);

    if(autosave && !(await this.saveStash())) {
      alert("Could not delete item; the stash has been modified externally since this page was loaded. Please reload the page and try again.");
    }

    return firstValueFrom(this.Stash);
  }
}
