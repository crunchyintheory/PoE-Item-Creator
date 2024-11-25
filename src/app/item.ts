import { Rarity, Influence, FoilType } from './rarity';
import { Property, PropertyType } from './property';

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

    constructor(data: Object)
    constructor(rarity:Rarity, name:string, base:string, image:string, size: string, properties:Property[], influence?: Influence, influence2?: Influence, foilType?: FoilType)
    constructor(data:Rarity | any, name?:string, base?:string, image?:string, size?: string, properties?:Property[], influence?: Influence, influence2?: Influence, foilType?: FoilType) {  
        this.rarity = data as Rarity;
        this.name = name!;
        this.base = base!;
        this.image = image!;
        this.size = size!;
        this.properties = properties!;
        this.influence = influence || Influence.None;
        this.influence2 = influence2 || Influence.None;
        this.foilType = foilType || FoilType.None;
        
        if(name === undefined) {
            Object.assign(this, data);
            this.rarity = new Rarity(data.rarity);
            this.properties = [];
            if(data.properties) {
                for(let i = 0; i < data.properties?.length; i++) {
                    this.properties.push(new Property(new PropertyType(data.properties[i].type), data.properties[i].name, data.properties[i].value));
                }
            }
            this.influence = new Influence(data.influence);
            this.influence2 = new Influence(data.influence2);
            this.foilType = new FoilType(data.foilType.name, data.foilType.colors);
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

    public static From(item: Item): StashedItem {
        let i = item as StashedItem;
        if(!i.uid) i.uid = crypto.randomUUID();
        return i;
    }
}
