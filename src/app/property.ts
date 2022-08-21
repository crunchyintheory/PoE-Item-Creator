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
    readonly className: string;
    readonly nameRenderClass: string | null;
    readonly valueRenderClass: string | null;
    readonly fields: number;

    constructor(name: string, className: string, nameRenderClass: string | null, valueRenderClass: string | null, fields: number) {
        this.name = name;
        this.className = className;
        this.nameRenderClass = nameRenderClass;
        this.valueRenderClass = valueRenderClass;
        this.fields = fields;
    }

    static readonly ItemType: PropertyType = {
        name: 'Item Type',
        className: 'desc',
        nameRenderClass: null,
        valueRenderClass: 'prop-gray',
        fields: 1
    }

    static readonly Affix: PropertyType = {
        name: 'Affix',
        className: 'qual',
        nameRenderClass: null,
        valueRenderClass: 'prop-blue',
        fields: 1
    }

    static readonly Stat: PropertyType = {
        name: 'Stat',
        className: 'quant',
        nameRenderClass: 'prop-gray',
        valueRenderClass: 'prop-white',
        fields: 2
    }

    static readonly StatAug: PropertyType = {
        name: 'Augmented Stat',
        className: 'augquant',
        nameRenderClass: 'prop-gray',
        valueRenderClass: 'prop-blue',
        fields: 2
    }

    static readonly FlavorU: PropertyType = {
        name: 'Unique Flavor Text',
        className: 'flavor',
        nameRenderClass: null,
        valueRenderClass: 'unique-flavor',
        fields: 1
    }

    static readonly FlavorG: PropertyType = {
        name: 'Gray Flavor Text',
        className: 'gflavor',
        nameRenderClass: null,
        valueRenderClass: 'gray-flavor prop-gray',
        fields: 1
    }

    static readonly Separator: PropertyType = {
        name: 'Separator',
        className: 'sep',
        nameRenderClass: null,
        valueRenderClass: null,
        fields: 0
    }

    static readonly Crafted: PropertyType = {
        name: 'Crafted Mod',
        className: 'master',
        nameRenderClass: null,
        valueRenderClass: 'prop-crafted',
        fields: 1
    }

    static readonly StatReq: PropertyType = {
        name: 'Stat Requirements',
        className: 'statreq',
        nameRenderClass: null,
        valueRenderClass: 'prop-gray',
        fields: 1
    }

    static readonly Corrupted: PropertyType = {
        name: 'Corrupted',
        className: 'vaal',
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
