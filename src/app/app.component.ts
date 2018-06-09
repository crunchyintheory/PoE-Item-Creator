import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Rarity, RarityThickness } from './rarity';
import { Item } from './item';
import { PropertyType, Property } from './property';
import { Templates } from './templates';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  item: Item;
  get types(): PropertyType[] { return PropertyType.types }
  get Rarity(): any { return Rarity }
  get RarityThickness(): any { return RarityThickness }

  showImportModal: boolean = false;
  itemDataTextarea: string = '';

  constructor(private route: ActivatedRoute) {
  }
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params['item']);
      if(params['item']) {
        this.import(atob(params['item']));
      }
      else {
        this.item = Array.from(Templates.values())[Math.floor(Math.random() * Templates.size)];
      }
    })
  }

  reset() {
    this.item = Templates.get('Tabula Rasa, Simple Robe');
  }

  export() {
    const mapper = (currentValue: Property) => {
      return {
        type: currentValue.type.class,
        name: currentValue.name,
        value: currentValue.value
      };
    }
    const properties: Array<{type: string, name: string, value: string}> = this.item.properties.map(mapper);
    let i = {
      rarity: this.item.rarity.name,
      name: this.item.name,
      base: this.item.base,
      image: this.item.image,
      properties: properties
    }
    this.itemDataTextarea = JSON.stringify(i);
  }

  import(data: string = this.itemDataTextarea) {
    let i: {
      rarity: string,
      name: string,
      base: string,
      image: string,
      properties: Array<{
        type: string,
        name: string,
        value: string
      }>
    } = JSON.parse(data);

    let mapper = (currentValue: {type: string, name: string, value: string}) => {
      return new Property(
        PropertyType.types.find((x) => { return x.class == currentValue.type }),
        currentValue.name,
        currentValue.value
      )
    }
    this.item = new Item(
      Rarity.rarities.find((x) => { return x.name === i.rarity }),
      i.name,
      i.base,
      i.image,
      i.properties.map(mapper)
    );
    this.showImportModal = false;
  }
}
