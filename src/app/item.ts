import { Rarity, Influence } from './rarity';
import { Property, PropertyType } from './property';

export class Item {
    rarity: Rarity
    influence: Influence
    influence2: Influence

    name: string
    base: string
    image: string

    properties: Property[]

    size: string

    constructor(rarity:Rarity, name:string, base:string, image:string, size: string, properties:Property[], influence?: Influence, influence2?: Influence) {
        this.rarity = rarity;
        this.name = name;
        this.base = base;
        this.image = image;
        this.size = size;
        this.properties = properties;
        this.influence = influence || Influence.None;
        this.influence2 = influence2 || Influence.None;
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

    appendProperty() {
        this.properties = [
            new Property(
                PropertyType.Separator,
                '',
                ''
            )
        ]
    }

    removeProperty(property: Property) {
        this.properties.splice(
            this.properties.indexOf(property),
            1
        )
    }
}
