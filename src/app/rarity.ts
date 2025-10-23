import { ISerializable } from "./serializable";

export enum RarityThickness {
    OneLine = 'single',
    TwoLine = 'double',
    ThickOneLine = 'thicksingle'
}

export class Rarity implements ISerializable {
    readonly name: string;
    readonly thickness: RarityThickness;
    readonly displayColor?: string;

    public constructor(object: Object)
    public constructor(name: string, thickness?: RarityThickness, displayColor?: string)
    public constructor(data: string | Object, thickness?: RarityThickness, displayColor?: string) {
        this.name = data as string;
        this.thickness = thickness!;
        this.displayColor = displayColor;
        if(typeof data == "object") {
            Object.assign(this as any, data);
        }
    }

    // noinspection DuplicatedCode
    get displayName(): string {
        let n: string[] = this.name.split('-');
        if(n[1]) {
            return n[1].charAt(0).toUpperCase() + n[1].slice(1) + ' ' + n[0].charAt(0).toUpperCase() + n[0].slice(1);
        }
        else {
            return n[0].charAt(0).toUpperCase() + n[0].slice(1);
        }
    }

    static readonly Normal = new Rarity(
        'normal',
        RarityThickness.OneLine
    )

    static readonly Magic = new Rarity(
        'magic',
        RarityThickness.OneLine,
        "#8888ff"
    )

    static readonly Gem = new Rarity(
        'gem',
        RarityThickness.OneLine,
        "#1aa29b"
    )

    static readonly Prophecy = new Rarity(
        'prophecy',
        RarityThickness.OneLine,
        "#b54bff"
    )

    static readonly Currency = new Rarity(
        'currency',
        RarityThickness.OneLine,
        "#aa9e82"
    )

    static readonly Rare = new Rarity(
        'rare',
        RarityThickness.TwoLine,
        "#ffff77"
    )

    static readonly Unique = new Rarity(
        'unique',
        RarityThickness.TwoLine,
        "#af6025"
    )

    static readonly Passive = new Rarity(
        'passive',
        RarityThickness.ThickOneLine,
        "#f7e6ca"
    )

    static readonly Notable = new Rarity(
        'notable',
        RarityThickness.ThickOneLine,
        "#f7e6ca"
    )

    static readonly Keystone = new Rarity(
        'keystone',
        RarityThickness.ThickOneLine,
        "#f7e6ca"
    )

    static readonly JewelSocket = new Rarity(
        'socket-jewel',
        RarityThickness.ThickOneLine,
        "#f7e6ca"
    )

    static readonly rarities: Rarity[] = [
        Rarity.Normal,
        Rarity.Magic,
        Rarity.Rare,
        Rarity.Unique,
        Rarity.Currency,
        Rarity.Gem,
        Rarity.Prophecy,
        Rarity.Passive,
        Rarity.Notable,
        Rarity.Keystone,
        Rarity.JewelSocket
    ];
}

export class Influence implements ISerializable {
    readonly name: string = "";
    readonly icon: string = "";
    private _has_background = false;

    public get has_background() {
        return this._has_background;
    }

    public set has_background(value: boolean) {
        this._has_background = value;
    }

    public constructor(data: Object)
    public constructor(name: string, icon?: string, has_background?: boolean)
    public constructor(data: string | any, icon?: string, has_background = false) {
        if(typeof(data) == 'object') {
            Object.assign(this as any, data);
        }
        else {
            this.name = data;
            this.icon = icon || `assets/symbol_${data.toLowerCase()}.png`;
            this.has_background = has_background;
        }
    }

    // noinspection DuplicatedCode
    get displayName(): string {
        let n: string[] = this.name.split('-');
        if(n[1]) {
            return n[1].charAt(0).toUpperCase() + n[1].slice(1) + ' ' + n[0].charAt(0).toUpperCase() + n[0].slice(1);
        }
        else {
            return n[0].charAt(0).toUpperCase() + n[0].slice(1);
        }
    }

    get displayImage(): string {
        return this.icon;
    }

    private setHasBackground(has_background: boolean): Influence {
        this.has_background = has_background;
        return this;
    }

    static readonly None = new Influence("None", "none");

    static readonly Shaper = new Influence("Shaper").setHasBackground(true);

    static readonly Elder = new Influence("Elder").setHasBackground(true);

    static readonly Fractured = new Influence("Fractured");

    static readonly Synthesised = new Influence("Synthesised");

    static readonly Crusader = new Influence("Crusader");

    static readonly Warlord = new Influence("Warlord");

    static readonly Hunter = new Influence("Hunter");

    static readonly Redeemer = new Influence("Redeemer");

    static readonly Replica = new Influence("Replica");

    static readonly Eater = new Influence("Eater of Worlds", "assets/symbol_eater.png");

    static readonly Exarch = new Influence("Searing Exarch", "assets/symbol_searing.png");

    static readonly Originator = new Influence("Originator");

    static readonly influences: Influence[] = [
        Influence.None,
        Influence.Shaper,
        Influence.Elder,
        Influence.Fractured,
        Influence.Synthesised,
        Influence.Crusader,
        Influence.Hunter,
        Influence.Redeemer,
        Influence.Warlord,
        Influence.Replica,
        Influence.Eater,
        Influence.Exarch,
        Influence.Originator
    ];

    static readonly sortedInfluences: { [key: string]: Influence[] } = {
        "": [
            Influence.None,
        ],
        "Atlas": [
            Influence.Shaper,
            Influence.Elder,
        ],
        "Conquerors": [
            Influence.Crusader,
            Influence.Hunter,
            Influence.Redeemer,
            Influence.Warlord,
        ],
        "Eldritch": [
            Influence.Eater,
            Influence.Exarch,
        ],
        "Other": [
            Influence.Fractured,
            Influence.Synthesised,
            Influence.Replica,
            Influence.Originator
        ]
    }
}

export class FoilType {

    name: string;
    colors?: string[];

    get displayColor(): string | null {
        return this.colors ? this.colors[0] : null;
    }

    constructor(name: string, colors?: string[]) {
        this.name = name;
        this.colors = colors ?? undefined;
    }

    static readonly None = new FoilType("None");
    static readonly Amethyst = new FoilType("Amethyst", ["#b15afc"]);
    static readonly Verdant = new FoilType("Verdant", ["#5dfc5a"]);
    static readonly Ruby = new FoilType("Ruby", ["#fc5a5d"]);
    static readonly Cobalt = new FoilType("Cobalt", ["#5a83fc"]);
    static readonly Sunset = new FoilType("Sunset", ["#fcb93c"]);
    static readonly Aureate = new FoilType("Aureate", ["#f6fc3c"]);

    static readonly types: FoilType[] = [
        FoilType.None,
        FoilType.Amethyst,
        FoilType.Verdant,
        FoilType.Ruby,
        FoilType.Cobalt,
        FoilType.Sunset,
        FoilType.Aureate
    ];
}
