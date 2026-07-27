import { ISerializable } from "./serializable";

export class Property {
    type: PropertyType;
    name: string;
    value: string;
    extraClassName?: string;

    constructor(type: PropertyType, name: string, value: string) {
        this.type = type;
        this.name = name;
        this.value = value;
        this.extraClassName = "";
    }
}

export class PropertyType implements ISerializable {
    readonly name: string = "";
    readonly className: string = "";
    readonly nameRenderClass?: string | null;
    readonly valueRenderClass?: string | null;
    readonly fields: number = 0;
    readonly displayImage?: string;

    public constructor(data: Object)
    public constructor(name: string, className: string, nameRenderClass: string | null, valueRenderClass: string | null, fields: number)
    public constructor(data: string | any, className?: string, nameRenderClass?: string | null, valueRenderClass?: string | null, fields?: number) {
        if(typeof data == "object") {
            Object.assign(this, data);
        }
        else {
            this.name = data;
            this.className = className!;
            this.nameRenderClass = nameRenderClass;
            this.valueRenderClass = valueRenderClass;
            this.fields = fields!;
        }
    }

    private static poe2logo = "/assets/poe2.png";

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
        name: 'Flavor Text',
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
        name: 'Stat Requirements / Flask Effect',
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

    static readonly Crucible: PropertyType = {
        name: 'Crucible',
        className: 'crucible',
        nameRenderClass: null,
        valueRenderClass: 'prop-crucible',
        fields: 1
    }

    static readonly Fractured: PropertyType = {
        name: 'Fractured Affix',
        className: 'fractured',
        nameRenderClass: null,
        valueRenderClass: 'prop-fractured',
        fields: 1
    }

    static readonly Sanctified: PropertyType = {
        name: 'Sanctified',
        className: 'sanctified',
        nameRenderClass: null,
        valueRenderClass: 'prop-sanctified',
        fields: 1,
        displayImage: PropertyType.poe2logo
    }

    static readonly MemoryStrands: PropertyType = {
        name: 'Memory Strands',
        className: 'header memory',
        nameRenderClass: 'prop-crafted',
        valueRenderClass: 'prop-white',
        fields: 2
    }

    static readonly GemHeader: PropertyType = {
        name: 'Gem Header',
        className: 'header gem',
        nameRenderClass: 'prop-gem',
        valueRenderClass: 'prop-gem',
        fields: 1
    }

    static readonly VaalGemHeader: PropertyType = {
        name: 'Vaal Gem Header',
        className: 'header gem vaal',
        nameRenderClass: 'prop-gem',
        valueRenderClass: 'prop-gem',
        fields: 1
    }

    static readonly Foulborn: PropertyType = {
        name: 'Foulborn Mod',
        className: 'foulborn',
        valueRenderClass: 'prop-foulborn',
        fields: 1
    }

    static readonly Desecrated: PropertyType = {
        name: 'Desecrated Mod',
        className: 'desecrated',
        valueRenderClass: 'prop-desecrated prop-blue prop-val',
        fields: 1,
        displayImage: PropertyType.poe2logo
    }

    static readonly Veiled: PropertyType = {
        name: 'Veiled',
        className: 'veiled',
        valueRenderClass: 'prop-veiled',
        fields: 1,
        displayImage: PropertyType.poe2logo
    }

    static readonly Vestigial: PropertyType = {
        name: 'Vestigial',
        className: 'vestigial',
        valueRenderClass: 'prop-vestigial',
        fields: 1
    }

    static readonly sortedTypes: { [key: string]: PropertyType[] } = {
        "Base": [
            PropertyType.ItemType,
            PropertyType.Stat,
            PropertyType.StatAug,
            PropertyType.StatReq
        ],
        "Mods": [
            PropertyType.Affix,
            PropertyType.Crafted,
            PropertyType.Fractured,
            PropertyType.Crucible,
            PropertyType.Foulborn,
            PropertyType.Desecrated,
            PropertyType.Vestigial,
            PropertyType.Veiled
        ],
        "Other": [
            PropertyType.Separator,
            PropertyType.FlavorU,
            PropertyType.FlavorG,
            PropertyType.Corrupted,
            PropertyType.MemoryStrands,
            PropertyType.GemHeader,
            PropertyType.VaalGemHeader,
            PropertyType.Sanctified
        ]
    }

    static get types(): PropertyType[] {
        return Object.values(this.sortedTypes).flat();
    }
}
