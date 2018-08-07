import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Rarity, RarityThickness } from './rarity';
import { Item } from './item';
import { PropertyType, Property } from './property';
import { Templates } from './templates';
import { HttpClient } from '../../node_modules/@angular/common/http';

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

  gisturl = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) {
  }
  
  ngOnInit() {
    this.item = Array.from(Templates.values())[Math.floor(Math.random() * Templates.size)];
    this.route.params.subscribe(params => {
      if(params['username'] && params['gistid'] && params['fileid'] && params['filename']) {
        console.log(params);
        this.importgist(`https://gist.githubusercontent.com/${params['username']}/${params['gistid']}/raw/${params['fileid']}/${params['filename']}`)
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

  importgist(url: string = this.gisturl) {
    if(url) {
      console.log(url);
      this.http.get(url).subscribe((data: string) => {
        console.log(data);
        this.import(JSON.stringify(data));
      })
    }
  }
}
