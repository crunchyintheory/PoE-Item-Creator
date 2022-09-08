import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../item';
import { ItemService } from '../item-service.service';
import { PropertyType } from '../property';
import { Rarity, RarityThickness, Influence } from '../rarity';

@Component({
  selector: 'poe-item-editor',
  templateUrl: './item-editor.component.html',
  styleUrls: ['./item-editor.component.scss']
})
export class ItemEditorComponent implements OnInit {

  get types(): PropertyType[] { return PropertyType.types }
  get Rarity(): any { return Rarity }
  get RarityThickness(): any { return RarityThickness }
  get Influence(): any { return Influence }

  public get item(): Item {
    return this.is.item;
  }

  constructor(public is: ItemService, private router: Router) { }

  ngOnInit(): void {
  }

  reset() {
    this.is.reset().then(() => {
      this.router.navigateByUrl('/');
    })
  }

  removeImage() {
    this.item.image = "";
  }

}
