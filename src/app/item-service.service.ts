import { Injectable } from '@angular/core';
import { Item, SerializedItem, StashedItem } from "./item";
import { HttpClient } from '@angular/common/http';
import { Templates } from './templates';
import { Property, PropertyType } from './property';
import { FoilType, Influence, Rarity } from "./rarity";
import { BehaviorSubject, catchError } from "rxjs";

@Injectable()
export class ItemService {

  public item!: Item;
  public itemImported: BehaviorSubject<true>;
  public defaultMaxWidth = 440;

  constructor(private http: HttpClient) {
    let item = Array.from(Templates.values())[Math.floor(Math.random() * Templates.size)];
    this.item = StashedItem.From(item);
    this.itemImported = new BehaviorSubject<true>(true);
    this.itemImported.next(true);
  }

  async reset(): Promise<Item> {
    // My desperate plea for a proper deep copy method in this accursed language.
    let template = Templates.get('Tabula Rasa, Simple Robe')!;
    let item = this.parse(this.export(template));
    this.item = StashedItem.From(item, true);

    if (this.item.properties.length == 0 && Math.random() > 0.9) {
      this.item.properties = [{
        type: PropertyType.Corrupted,
        name: "",
        value: "Corrupted"
      }];
      let corruptInfluences = [Influence.Shaper, Influence.Elder, Influence.Crusader, Influence.Hunter, Influence.Redeemer, Influence.Warlord];
      if (Math.random() > 0.8) {
        this.item.rarity = Rarity.Rare;
        this.item.name = "Ruined Shelter";
        this.item.influence = corruptInfluences[Math.floor(Math.random() * (corruptInfluences.length - 1))];
      }
      else {
        this.item.influence = corruptInfluences[Math.floor(Math.random() * (corruptInfluences.length - 1))];
        this.item.influence2 = Influence.influences[Math.floor(Math.random() * (Influence.influences.length - 2)) + 1];
      }
      Templates.set("Tabula Rasa, Simple Robe", this.parse(this.export(item)));
    }
    this.itemImported.next(true);
    return this.item;
  }

  public export(item?: Item, forStash = false): SerializedItem {
    if(!(typeof item === "object")) {
      item = this.item;
    }
    const mapper = (currentValue: Property) => {
      return {
        type: currentValue.type.className,
        name: currentValue.name,
        value: currentValue.value
      };
    }
    const properties: Array<{ type: string, name: string, value: string }> = item.properties.map(mapper);
    let ret: SerializedItem = {
      rarity: item.rarity.name,
      name: item.name,
      base: item.base,
      image: item.image,
      properties: properties,
      influences: [item.influence.name, item.influence2.name],
      foilType: item.foilType.name,
      width: item.width,
      size: item.size
    };
    if(forStash) ret.uid = (item as StashedItem).uid;
    return ret;
  }

  public parse(item: SerializedItem): Item
  public parse(data: string): Item
  public parse(data: string|SerializedItem): Item {
    let i: SerializedItem;
    if(typeof data === "string") {
      i = JSON.parse(data) as SerializedItem;
    }
    else {
      i = data;
    }

    let mapper = (currentValue: { type: string, name: string, value: string }) => {
      return new Property(
        PropertyType.types.find((x) => { return x.className == currentValue.type }) || PropertyType.Stat,
        currentValue.name,
        currentValue.value
      )
    }

    return new Item(
      Rarity.rarities.find((x) => { return x.name === i.rarity }) || Rarity.Rare,
      i.name,
      i.base,
      i.image,
      i.size || "",
      i.properties.map(mapper),
      i.influences && i.influences.length >= 1 ? Influence.influences.find(x => x.name === i.influences[0]) || Influence.None : Influence.None,
      i.influences && i.influences.length >= 2 ? Influence.influences.find(x => x.name === i.influences[1]) || Influence.None : Influence.None,
      FoilType.types.find(x => x.name === i.foilType) || FoilType.None,
      i.width > 0 ? i.width : this.defaultMaxWidth,
    );
  }

  async import(data: string): Promise<Item> {
    this.item = this.parse(data);
    this.itemImported.next(true);

    return this.item;
  }

  importgist(url: string): Promise<Item> {
    return new Promise(async (resolve, reject) => {
      this.http.get(url, {
        responseType: "text"
      }).pipe(
        catchError(async (x) => reject(x))
      ).subscribe(data => {
        resolve(this.parse(data || ""));
      });
    });
  }
}
