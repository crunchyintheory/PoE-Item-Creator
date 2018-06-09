import { Component } from '@angular/core';

import { Rarity, RarityThickness } from './rarity';
import { Item } from './item';
import { Property, PropertyType } from './property';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  item: Item;
  get types(): PropertyType[] { return PropertyType.types }
  get Rarity(): any { return Rarity }
  get RarityThickness(): any { return RarityThickness }

  constructor() {
    this.item = Item.templates[Math.floor(Math.random() * Item.templates.length)];
  }

  reset() {
    this.item = new Item(
      Rarity.Unique,
      'Tabula Rasa',
      'Simple Robe',
      'https://g00.gamepedia.com/g00/3_c-6ufymtkjcnqj.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fi6z0u8q9bufd8p.hqtzikwtsy.sjyx2fufymtkjcnqj_lfrjujinfx2f3x2f3hx2fYfgzqf_Wfx78f_nsajsytwd_nhts.uslx3fajwx78ntsx3d7727g19830928kih0151030956f3538hx26n65h.rfwpx3dnrflj_$/$/$/$/$',
      []
    )
  }
}
