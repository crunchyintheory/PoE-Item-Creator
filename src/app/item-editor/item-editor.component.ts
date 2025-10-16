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

  constructor(public is: ItemService, public stash: StashService, private router: Router) {
    this.maxWidthInput = is.defaultMaxWidth;
    this.editingItemObs = this.is.itemImported.asObservable().pipe(
        map(() => {
            let uid = (this.is.item as StashedItem).uid;
            return this.stash.FindByUid(uid);
        })
    );
    this.eISub = this.editingItemObs.subscribe((val) => this.editingItem = val);
      /*this.is.itemImported.subscribe(() => {
          if (item instanceof Item) {
              this.isEditingStashItem = true; // have to do this for eslint
              this.editingItem = { name: item.name + " " + item.base, uid };
              console.log(this.editingItem);
          }
          else {
              this.isEditingStashItem = false;
          }
      });*/
  }

  ngOnInit(): void {
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
    await this.stash.AddToStash(this.item);
  }

  removeImage() {
    this.item.image = "";
  }

  updateMaxWidth() {
    this.maxWidth.emit(this.maxWidthInput);
  }

}
