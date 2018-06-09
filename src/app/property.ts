export class Property {
    type: PropertyType;
    name: string;
    value: string;

    constructor(type: PropertyType, name: string, value: string) {
        this.type = type;
        this.name = name;
        this.value = value;
    }
}

export class PropertyType {
    readonly name: string;
    readonly class: string;
    readonly nameRenderClass: string | null;
    readonly valueRenderClass: string | null;
    readonly fields: number;

    static readonly ItemType: PropertyType = {
        name: 'Item Type',
        class: 'desc',
        nameRenderClass: null,
        valueRenderClass: 'prop-gray',
        fields: 1
    }

    static readonly Affix: PropertyType = {
        name: 'Affix',
        class: 'qual',
        nameRenderClass: null,
        valueRenderClass: 'prop-blue',
        fields: 1
    }

    static readonly Stat: PropertyType = {
        name: 'Stat',
        class: 'quant',
        nameRenderClass: 'prop-gray',
        valueRenderClass: 'prop-white',
        fields: 2
    }

    static readonly StatAug: PropertyType = {
        name: 'Augmented Stat',
        class: 'augquant',
        nameRenderClass: 'prop-gray',
        valueRenderClass: 'prop-blue',
        fields: 2
    }

    static readonly FlavorU: PropertyType = {
        name: 'Unique Flavor Text',
        class: 'flavor',
        nameRenderClass: null,
        valueRenderClass: 'unique-flavor',
        fields: 1
    }

    static readonly FlavorG: PropertyType = {
        name: 'Gray Flavor Text',
        class: 'gflavor',
        nameRenderClass: null,
        valueRenderClass: 'gray-flavor prop-gray',
        fields: 1
    }

    static readonly Separator: PropertyType = {
        name: 'Separator',
        class: 'sep',
        nameRenderClass: null,
        valueRenderClass: null,
        fields: 0
    }

    static readonly Crafted: PropertyType = {
        name: 'Crafted Mod',
        class: 'master',
        nameRenderClass: null,
        valueRenderClass: 'prop-crafted',
        fields: 1
    }

    static readonly StatReq: PropertyType = {
        name: 'Stat Requirements',
        class: 'statreq',
        nameRenderClass: null,
        valueRenderClass: 'prop-gray',
        fields: 1
    }

    static readonly Corrupted: PropertyType = {
        name: 'Corrupted',
        class: 'vaal',
        nameRenderClass: null,
        valueRenderClass: 'prop-red',
        fields: 1
    }
    
    static readonly types: PropertyType[] = [
        PropertyType.ItemType,
        PropertyType.Affix,
        PropertyType.Stat,
        PropertyType.StatAug,
        PropertyType.FlavorU,
        PropertyType.FlavorG,
        PropertyType.Separator,
        PropertyType.Crafted,
        PropertyType.StatReq,
        PropertyType.Corrupted
    ]
}