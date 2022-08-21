export enum RarityThickness {
    OneLine = 'single',
    TwoLine = 'double'
}

export class Rarity {
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
    
    static readonly rarities: Rarity[] = [
        Rarity.Normal,
        Rarity.Magic,
        Rarity.Gem,
        Rarity.Prophecy,
        Rarity.Currency,
        Rarity.Rare,
        Rarity.Unique
    ]
}

export class Influence {
    readonly name: string;
    readonly icon: string;

    private constructor(name: string, icon?: string) {
        this.name = name;
        this.icon = icon || `assets/symbol_${name.toLowerCase()}.png`;
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

    static readonly None = new Influence("None", "none");

    static readonly Shaper = new Influence("Shaper");

    static readonly Elder = new Influence("Elder");

    static readonly Fractured = new Influence("Fractured");

    static readonly Synthesised = new Influence("Synthesised");

    static readonly Crusader = new Influence("Crusader");

    static readonly Warlord = new Influence("Warlord");

    static readonly Hunter = new Influence("Hunter");

    static readonly Redeemer = new Influence("Redeemer");

    static readonly influences: Influence[] = [
        Influence.None,
        Influence.Shaper,
        Influence.Elder,
        Influence.Synthesised,
        Influence.Fractured,
        Influence.Crusader,
        Influence.Hunter,
        Influence.Redeemer,
        Influence.Warlord,
    ]
}
