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

    static readonly templates: Item[] = [
        new Item(
            Rarity.UniqueShaper,
            'Starforge',
            'Infernal Sword',
            'https://g00.gamepedia.com/g00/3_c-6ufymtkjcnqj.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fi6z0u8q9bufd8p.hqtzikwtsy.sjyx2fufymtkjcnqj_lfrjujinfx2f5x2f58x2fXyfwktwlj_nsajsytwd_nhts.uslx3fajwx78ntsx3d28g614igfkf891i6k5f24i049jhi1211x26n65h.rfwpx3dnrflj_$/$/$/$/$',
            [
                new Property(
                    PropertyType.ItemType,
                    '',
                    'Two Hand Swords'
                ),
                new Property(
                    PropertyType.StatAug,
                    'Quality',
                    '+20%'
                ),
                new Property(
                    PropertyType.StatReq,
                    '',
                    'Physical Damage:  <b>322</b> to <b>669</b>'
                ),
                new Property(
                    PropertyType.Stat,
                    'Critical Strike Chance',
                    '5.00%'
                ),
                new Property(
                    PropertyType.StatAug,
                    'Attacks per Second',
                    '1.46'
                ),
                new Property(
                    PropertyType.Stat,
                    'Weapon Range',
                    '11'
                ), 
                new Property(
                    PropertyType.Separator,
                    '',
                    ''
                ), 
                new Property(
                    PropertyType.StatReq,
                    '',
                    'Requires Level 67,  113 Str,  113 Dex'
                ), 
                new Property(
                    PropertyType.Separator,
                    '',
                    ''
                ), 
                new Property(
                    PropertyType.Affix,
                    '',
                    '30% increased Global Accuracy Rating'
                ), 
                new Property(
                    PropertyType.Affix,
                    '',
                    '500% increased Physical Damage'
                ), 
                new Property(
                    PropertyType.Affix,
                    '',
                    '8% increased Attack Speed'
                ), 
                new Property(
                    PropertyType.Affix,
                    '',
                    '+100 to maximum Life'
                ), 
                new Property(
                    PropertyType.Affix,
                    '',
                    '20% increased Area of Effect for Attacks'
                ), 
                new Property(
                    PropertyType.Affix,
                    '',
                    'Deal no Elemental Damage'
                ), 
                new Property(
                    PropertyType.Affix,
                    '',
                    'Your Physical Damage can Shock'
                ), 
                new Property(
                    PropertyType.Separator,
                    '',
                    ''
                ), 
                new Property(
                    PropertyType.FlavorU,
                    '',
                    'The end is written into the beginning.'
                )
            ]
        )
    ]
}