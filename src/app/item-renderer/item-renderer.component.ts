import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../item';
import { PropertyType } from '../property';
import { Rarity, RarityThickness, Influence } from '../rarity';
import { Templates } from '../templates';

@Component({
  selector: 'poe-item-renderer',
  templateUrl: './item-renderer.component.html',
  styleUrls: ['./item-renderer.component.scss']
})
export class ItemRendererComponent implements OnInit {

  get types(): PropertyType[] { return PropertyType.types }
  get Rarity(): any { return Rarity }
  get RarityThickness(): any { return RarityThickness }
  get Influence(): any { return Influence }

  @Input() item: Item = Templates.get("Tabula Rasa")!;

  @Input() showBody: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  getInfluenceBackground(influence: Influence): string {
    if(influence.has_background) {
      return `url("assets/backgrounds/${influence.name}${this.item.size.replaceAll("x", "_")}.png")`.toLowerCase();
    }
    return "";
  }

}
