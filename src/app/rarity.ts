import { ISerializable } from "./serializable";

export enum RarityThickness {
    OneLine = 'single',
    TwoLine = 'double',
    ThickOneLine = 'thicksingle'
}

export class Rarity implements ISerializable {
    readonly name: string;
    readonly thickness: RarityThickness;

    private constructor(name: string, thickness: RarityThickness) {
        this.name = name;
        this.thickness = thickness;
    }

    get displayName(): string {
        let n: string[] = this.name.split('-');
        if(n[1]) {
            return n[1].charAt(0).toUpperCase() + n[1].slice(1) + ' ' + n[0].charAt(0).toUpperCase() + n[0].slice(1);
        }
        else {
            return n[0].charAt(0).toUpperCase() + n[0].slice(1);
        }
    }
    
    static readonly Normal: Rarity = new Rarity(
        'normal',
        RarityThickness.OneLine
    )
    
    static readonly Magic: Rarity = new Rarity(
        'magic',
        RarityThickness.OneLine
    )
    
    static readonly Gem: Rarity = new Rarity(
        'gem',
        RarityThickness.OneLine
    )
    
    static readonly Prophecy: Rarity = new Rarity(
        'prophecy',
        RarityThickness.OneLine
    )
    
    static readonly Currency: Rarity = new Rarity(
        'currency',
        RarityThickness.OneLine
    )
    
    static readonly Rare: Rarity = new Rarity(
        'rare',
        RarityThickness.TwoLine
    )
    
    static readonly Unique: Rarity = new Rarity(
        'unique',
        RarityThickness.TwoLine
    )

    static readonly Passive: Rarity = new Rarity(
        'passive',
        RarityThickness.ThickOneLine
    )

    static readonly Notable: Rarity = new Rarity(
        'notable',
        RarityThickness.ThickOneLine
    )

    static readonly Keystone: Rarity = new Rarity(
        'keystone',
        RarityThickness.ThickOneLine
    )

    static readonly JewelSocket: Rarity = new Rarity(
        'socket-jewel',
        RarityThickness.ThickOneLine
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
    ]
}

export class Influence implements ISerializable {
    readonly name: string;
    readonly icon: string;
    private _has_background = false;

    public get has_background() {
        return this._has_background;
    }

    private set has_background(value: boolean) {
        this._has_background = value;
    }

    private constructor(name: string, icon?: string, has_background = false) {
        this.name = name;
        this.icon = icon || `assets/symbol_${name.toLowerCase()}.png`;
        this.has_background = has_background;
    }

    get displayName(): string {
        let n: string[] = this.name.split('-');
        if(n[1]) {
            return n[1].charAt(0).toUpperCase() + n[1].slice(1) + ' ' + n[0].charAt(0).toUpperCase() + n[0].slice(1);
        }
        else {
            return n[0].charAt(0).toUpperCase() + n[0].slice(1);
        }
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
        Influence.Exarch
    ]
}
