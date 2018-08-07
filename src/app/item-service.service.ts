import { Injectable } from '@angular/core';
import { Item } from './item';
import { BehaviorSubject, Observable, Subscription } from '../../node_modules/rxjs';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { Templates } from './templates';
import { Property, PropertyType } from './property';
import { Rarity } from './rarity';
import { resolve } from 'url';
import { reject } from '../../node_modules/@types/q';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  public item: Item;

  constructor(private http: HttpClient) { }

  reset(): Promise<Item> {
    return new Promise((resolve, reject) => {
      resolve(this.item = Templates.get('Tabula Rasa, Simple Robe'));
    })
  }

  export(): Promise<{}> {
    return new Promise((resolve, reject) => {
      const mapper = (currentValue: Property) => {
        return {
          type: currentValue.type.class,
          name: currentValue.name,
          value: currentValue.value
        };
      }
      const properties: Array<{type: string, name: string, value: string}> = this.item.properties.map(mapper);
      resolve({
        rarity: this.item.rarity.name,
        name: this.item.name,
        base: this.item.base,
        image: this.item.image,
        properties: properties
      });
    });
  }

  import(data: string): Promise<Item> {
    return new Promise((resolve, reject) => {
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
      resolve(this.item);
    });
  }

  importgist(url: string): Subscription {
    if(url) {
      console.log(url);
      return this.http.get(url).subscribe((data: string) => {
        console.log(data);
        this.import(JSON.stringify(data));
      })
    }
    else {
      return null;
    }
  }
}
