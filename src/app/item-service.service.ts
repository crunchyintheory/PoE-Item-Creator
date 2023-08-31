import { Injectable } from '@angular/core';
import { Item } from './item';
import { HttpClient } from '@angular/common/http';
import { Templates } from './templates';
import { Property, PropertyType } from './property';
import { Influence, Rarity } from './rarity';

@Injectable()
export class ItemService {

  public item!: Item;

  private corruptedTabula?: Item;

  constructor(private http: HttpClient) { }

  private static DeepCopy<T extends Object>(object: T): T {
    return Object.assign(Object.create(Object.getPrototypeOf(object)), structuredClone(object));
  }

  reset(): Promise<Item> {
    return new Promise((resolve, reject) => {
      // My desperate plea for a proper deep copy method in this accursed language.
      let template = Templates.get('Tabula Rasa, Simple Robe') as Item;
      this.item = ItemService.DeepCopy(template);
  
      if(this.item.properties.length == 0 && Math.random() > 0.9) {
        this.item.properties = [{
          type: PropertyType.Corrupted,
          name: "",
          value: "Corrupted"
        }];
        let corruptInfluences = [Influence.Shaper, Influence.Elder, Influence.Crusader, Influence.Hunter, Influence.Redeemer, Influence.Warlord];
        if(Math.random() > 0.8) {
          this.item.rarity = Rarity.Rare;
          this.item.name = "Ruined Shelter";
          this.item.influence = corruptInfluences[Math.floor(Math.random() * (corruptInfluences.length - 1))];
        }
        else {
          this.item.influence = corruptInfluences[Math.floor(Math.random() * (corruptInfluences.length - 1))];
          this.item.influence2 = Influence.influences[Math.floor(Math.random() * (Influence.influences.length - 2)) + 1];
        }
        Templates.set("Tabula Rasa, Simple Robe", ItemService.DeepCopy(this.item));
      }
      resolve(this.item);
    })
  }

  export(): Promise<{}> {
    return new Promise((resolve, reject) => {
      const mapper = (currentValue: Property) => {
        return {
          type: currentValue.type.className,
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
        size: string,
        properties: Array<{
          type: string,
          name: string,
          value: string
        }>
      } = JSON.parse(data);
  
      let mapper = (currentValue: {type: string, name: string, value: string}) => {
        return new Property(
          PropertyType.types.find((x) => { return x.className == currentValue.type }) || PropertyType.Stat,
          currentValue.name,
          currentValue.value
        )
      }
      this.item = new Item(
        Rarity.rarities.find((x) => { return x.name === i.rarity }) || Rarity.Rare,
        i.name,
        i.base,
        i.image,
        i.size,
        i.properties.map(mapper)
      );
      resolve(this.item);
    });
  }

  importgist(url: string) {
    console.log(url);
    return this.http.get(url).subscribe((data: Object) => {
      console.log(data);
      this.import(JSON.stringify(data));
    });
  }
}
