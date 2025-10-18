import {
    Component,
    EventEmitter,
    OnDestroy,
    OnInit,
    Output
} from "@angular/core";
import { Router } from '@angular/router';
import { Item, StashedItem } from "../item";
import { ItemService } from '../item-service.service';
import { PropertyType } from '../property';
import { Rarity, RarityThickness, Influence, FoilType } from '../rarity';
import { StashService } from '../stash.service';
import { map, Observable, Subscription } from "rxjs";

@Component({
  selector: 'poe-item-editor',
  templateUrl: './item-editor.component.html',
  styleUrls: ['./item-editor.component.scss']
})
export class ItemEditorComponent implements OnInit, OnDestroy {

  @Output() maxWidth = new EventEmitter<number>();
  @Output() capture = new EventEmitter<void>();

  get types(): PropertyType[] { return PropertyType.types }
  get Rarity(): any { return Rarity }
  get RarityThickness(): any { return RarityThickness }
  get Influence(): any { return Influence }
  get FoilType(): any { return FoilType }

  public get item(): Item {
    return this.is.item;
  }

  public editingItemObs: Observable<Item|false>;
  public editingItem: Item|false = false;
  public eISub: Subscription;

  public maxWidthInput = 500;

  public showImporter = false;

  constructor(public is: ItemService, public stash: StashService, private router: Router) {
    this.maxWidthInput = is.defaultMaxWidth;
    this.editingItemObs = this.is.itemImported.asObservable().pipe(
        map(() => {
            let uid = (this.is.item as StashedItem).uid;
            return this.stash.FindByUid(uid);
        })
    );
    this.eISub = this.editingItemObs.subscribe((val) => {
      this.editingItem = val;
      if(this.is.item.width > 0) {
        this.maxWidthInput = this.is.item.width;
        this.updateMaxWidth();
      }
    });
  }

  ngOnInit(): void {
    this.maxWidthInput = this.is.item.width > 0 ? this.is.item.width : this.is.defaultMaxWidth;
    this.updateMaxWidth();
  }

  ngOnDestroy(): void {
      this.eISub.unsubscribe();
  }

  async reset() {
    await this.is.reset();
    await this.router.navigateByUrl('/');
  }

  async save() {
    let uid = await this.stash.AddToStash(this.item);
    let stashed = this.stash.FindByUid(uid);
    if(stashed !== false) this.editingItem = stashed;
  }

  removeImage() {
    this.item.image = "";
  }

  updateMaxWidth() {
    this.maxWidth.emit(this.maxWidthInput);
  }

}
