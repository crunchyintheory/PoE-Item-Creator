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
    
    static readonly RareShaper: Rarity = new Rarity(
        'rare-shaper',
        RarityThickness.TwoLine
    )
    
    static readonly RareElder: Rarity = new Rarity(
        'rare-elder',
        RarityThickness.TwoLine
    )
    
    static readonly Unique: Rarity = new Rarity(
        'unique',
        RarityThickness.TwoLine
    )
    
    static readonly UniqueShaper: Rarity = new Rarity(
        'unique-shaper',
        RarityThickness.TwoLine
    )
    
    static readonly UniqueElder: Rarity = new Rarity(
        'unique-elder',
        RarityThickness.TwoLine
    )
    
    static readonly rarities: Rarity[] = [
        Rarity.Normal,
        Rarity.Magic,
        Rarity.Gem,
        Rarity.Prophecy,
        Rarity.Currency,
        Rarity.Rare,
        Rarity.RareShaper,
        Rarity.RareElder,
        Rarity.Unique,
        Rarity.UniqueShaper,
        Rarity.UniqueElder
    ]
}
