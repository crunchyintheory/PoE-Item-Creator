import { Rarity, Influence, FoilType } from './rarity';
import { Property, PropertyType } from './property';

export type GameType = 'poe1' | 'poe2';

export class Item {
    rarity: Rarity;
    influence: Influence;
    influence2: Influence;
    foilType: FoilType;

    name: string;
    base: string;
    image: string;

    properties: Property[];

    size: string;
    width = 500;

    game: GameType = "poe1";

    constructor(data: Object)
    constructor(rarity:Rarity, name:string, base:string, image:string, size: string, properties:Property[], influence?: Influence, influence2?: Influence, foilType?: FoilType, width?: number)
    constructor(data:Rarity | any, name?:string, base?:string, image?:string, size?: string, properties?:Property[], influence?: Influence, influence2?: Influence, foilType?: FoilType, width: number = 0) {
        this.rarity = data as Rarity;
        this.name = name!;
        this.base = base!;
        this.image = image!;
        this.size = size!;
        this.properties = properties!;
        this.influence = influence || Influence.None;
        this.influence2 = influence2 || Influence.None;
        this.foilType = foilType || FoilType.None;

        if(width) this.width = width;

        if(name === undefined) {
            Object.assign(this as any, data);
            this.rarity = new Rarity(data.rarity);
            this.properties = [];
            if(data.properties) {
                for(let i = 0; i < data.properties?.length; i++) {
                    this.properties.push(new Property(new PropertyType(data.properties[i].type), data.properties[i].name, data.properties[i].value));
                }
            }
            this.influence = data.influence ? new Influence(data.influence) : Influence.None;
            this.influence2 = data.influence2 ? new Influence(data.influence2) : Influence.None;
            this.foilType = data.foilType ? new FoilType(data.foilType.name, data.foilType.colors) : FoilType.None;
            if(data.width) this.width = data.width;
        }
    }

    insertPropertyAfter(property: Property) {
        this.properties.splice(
            this.properties.indexOf(property) + 1,
            0,
            new Property(
                PropertyType.Separator,
                '',
                ''
            )
        )
    }

    appendProperty(property?: Property) {
        if(!property)
            property = new Property(
                PropertyType.Separator,
                '',
                ''
            );
        this.properties.push(property);
    }

    removeProperty(property: Property) {
        this.properties.splice(
            this.properties.indexOf(property),
            1
        )
    }
}

export class StashedItem extends Item {
    public uid?: string;

    public static From(item: Item, forceRegenerate = false): StashedItem {
        let i = item as StashedItem;
        if(!i.uid || forceRegenerate) i.uid = crypto.randomUUID();
        return i;
    }
}

export interface SerializedItem {
  rarity: string;
  name: string;
  base: string;
  image: string;
  size?: string;
  properties: Array<{
    type: string,
    name: string,
    value: string,
  }>,
  influences: string[];
  foilType: string;
  width: number;
  uid?: string;
}
