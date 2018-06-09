import { Rarity } from './rarity';
import { Property, PropertyType } from './property';

export class Item {
    rarity: Rarity

    name: string
    base: string
    image: string

    properties: Property[]

    constructor(rarity:Rarity, name:string, base:string, image:string, properties:Property[]) {
        this.rarity = rarity;
        this.name = name;
        this.base = base;
        this.image = image;
        this.properties = properties;
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