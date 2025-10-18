import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { Item } from '../item';
import { Rarity, RarityThickness, Influence, FoilType } from '../rarity';
import { Templates } from '../templates';

@Component({
  selector: 'poe-item-renderer',
  templateUrl: './item-renderer.component.html',
  styleUrls: ['./item-renderer.component.scss']
})
export class ItemRendererComponent implements OnInit {
  get RarityThickness(): any { return RarityThickness }
  get FoilType(): any { return FoilType }

  @Input() item: Item = Templates.get("Tabula Rasa")!;
  @Input() showBody: boolean = true;
  @Input() border: boolean = false;
  @Input() maxWidth: number = 500;
  @Input() maxWidthUnit: "px" | "%" = "px";
  @Input() showUid: boolean = false;

  @ViewChild("container", { static: false }) public container?: ElementRef;

  protected gameType : 'poe1' | 'poe2' = 'poe1';

  ngOnInit(): void {
  }

  getMaxWidth(): Object {
    return Object.fromEntries([["maxWidth." + this.maxWidthUnit, this.maxWidth]])
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
      this.item.foilType.name != FoilType.None.name ? 'foil' : '',
      ((this.item.rarity == Rarity.Rare|| this.item.rarity == Rarity.Unique) && (this.item.base == "" || this.item.name == "")) ? "single-line" : "",
      this.item.game
    ]
    return classes.join(' ');
  }

}
