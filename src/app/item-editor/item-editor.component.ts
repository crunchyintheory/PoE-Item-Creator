import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../item';
import { ItemService } from '../item-service.service';
import { PropertyType } from '../property';
import { Rarity, RarityThickness, Influence, FoilType } from '../rarity';
import { StashService } from '../stash.service';

@Component({
  selector: 'poe-item-editor',
  templateUrl: './item-editor.component.html',
  styleUrls: ['./item-editor.component.scss']
})
export class ItemEditorComponent implements OnInit {

  @Output() maxWidth = new EventEmitter<number>();

  get types(): PropertyType[] { return PropertyType.types }
  get Rarity(): any { return Rarity }
  get RarityThickness(): any { return RarityThickness }
  get Influence(): any { return Influence }
  get FoilType(): any { return FoilType }

  public get item(): Item {
    return this.is.item;
  }

  public maxWidthInput = 440;

  constructor(public is: ItemService, public stash: StashService, private router: Router) {
    this.maxWidthInput = is.defaultMaxWidth;
  }

  ngOnInit(): void {
    this.updateMaxWidth();
  }

  reset() {
    this.is.reset().then(() => {
      this.router.navigateByUrl('/');
    })
  }

  save() {
    this.stash.AddToStash(this.item);
  }

  removeImage() {
    this.item.image = "";
  }

  updateMaxWidth() {
    this.maxWidth.emit(this.maxWidthInput);
  }

}
