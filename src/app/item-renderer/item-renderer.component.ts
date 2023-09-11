import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../item';
import { PropertyType } from '../property';
import { Rarity, RarityThickness, Influence, FoilType } from '../rarity';
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
  get FoilType(): any { return FoilType }

  @Input() item: Item = Templates.get("Tabula Rasa")!;
  @Input() showBody: boolean = true;
  @Input() border: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  getInfluenceBackground(influence: Influence): string {
    if(influence.has_background) {
      return `url("assets/backgrounds/${influence.name}${this.item.size.replaceAll("x", "_")}.png")`.toLowerCase();
    }
    return "";
  }

  getClass(): string {
    const classes = [
      'item',
      this.item.rarity.name,
      this.item.size,
      this.item.influence.name,
      this.item.influence2.name,
      this.border ? 'border border-' + this.item.rarity.name : '',
      'foil-' + this.item.foilType.name,
      this.item.foilType != FoilType.None ? 'foil' : '',
      ((this.item.rarity == Rarity.Rare|| this.item.rarity == Rarity.Unique) && (this.item.base == "" || this.item.name == "")) ? "single-line" : ""
    ]
    return classes.join(' ');
  }

}
