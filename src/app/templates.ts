import { Item } from "./item";
import { Property, PropertyType } from "./property";
import { Rarity } from "./rarity";

const reducer = (accumulator: Map<string, Item>, currentValue: Item) => {
    return accumulator.set(`${currentValue.name}, ${currentValue.base}`, currentValue);
}

export const Templates = [
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
    ),
    new Item(
        Rarity.Rare,
        'Beast Tread',
        'Titan Greaves',
        'https://d1u5p3l4wpay3k.cloudfront.net/pathofexile_gamepedia/b/b8/Titan_Greaves_inventory_icon.png?version=5b96e63b3c3f375f9c5b97d79a553232',
        [
            new Property(
                PropertyType.StatAug,
                'Quality',
                '+20%'
            ),
            new Property(
                PropertyType.StatAug,
                'Armor',
                '441'
            ),
            new Property(
                PropertyType.Separator,
                '',
                '',
            ),
            new Property(
                PropertyType.StatReq,
                '',
                'Requires Level 68, 120 Str'
            ),
            new Property(
                PropertyType.Separator,
                '',
                ''
            ),
            new Property(
                PropertyType.Crafted,
                '',
                'Adds 45 to 68 Cold Damage if you\'ve been Hit Recently'
            ),
            new Property(
                PropertyType.Separator,
                '',
                ''
            ),
            new Property(
                PropertyType.Affix,
                '',
                '+77 to maximum Life'
            ),
            new Property(
                PropertyType.Affix,
                '',
                '+37% to Cold Resistance'
            ),
            new Property(
                PropertyType.Affix,
                '',
                '+26% to Lightning Resistance'
            ),
            new Property(
                PropertyType.Affix,
                '',
                '20% increased Movement Speed'
            ),
            new Property(
                PropertyType.Affix,
                '',
                '19% increased Stun and Block Recovery'
            ),
            new Property(
                PropertyType.Crafted,
                '',
                '63% increased Armor'
            ),
            new Property(
                PropertyType.Corrupted,
                '',
                'Corrupted'
            )
        ]
    ),
    new Item(
        Rarity.Unique,
        'Tabula Rasa',
        'Simple Robe',
        'https://g00.gamepedia.com/g00/3_c-6ufymtkjcnqj.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fi6z0u8q9bufd8p.hqtzikwtsy.sjyx2fufymtkjcnqj_lfrjujinfx2f3x2f3hx2fYfgzqf_Wfx78f_nsajsytwd_nhts.uslx3fajwx78ntsx3d7727g19830928kih0151030956f3538hx26n65h.rfwpx3dnrflj_$/$/$/$/$',
        []
    )
].reduce(reducer, new Map<string, Item>());