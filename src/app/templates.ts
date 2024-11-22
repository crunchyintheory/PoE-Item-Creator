import { Item } from "./item";
import { Property, PropertyType } from "./property";
import { FoilType, Influence, Rarity } from "./rarity";

export class TemplateItem extends Item {
    public width = 440;

    constructor(rarity:Rarity, name:string, base:string, image:string, size: string, properties:Property[], influence?: Influence, influence2?: Influence, foilType?: FoilType, width?: number) {
        super(rarity, name, base, image, size, properties, influence, influence2, foilType);

        if(width) this.width = width;
    }
}

const reducer = (accumulator: Map<string, TemplateItem>, currentValue: TemplateItem) => {
    return accumulator.set(`${currentValue.name}, ${currentValue.base}`, currentValue);
}

export const Templates = [
    new TemplateItem(
        Rarity.Unique,
        'Starforge',
        'Infernal Sword',
        'assets/items/Starforge_inventory_icon.png',
        'x2x3',
        [
            new Property(
                PropertyType.ItemType,
                '',
                'Two Hand Sword'
            ),
            new Property(
                PropertyType.StatAug,
                'Quality',
                '+20%'
            ),
            new Property(
                PropertyType.StatAug,
                'Physical Damage',
                '322-669'
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
                PropertyType.Separator,
                '',
                ''
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
        ],
        Influence.Shaper
    ),
    new TemplateItem(
        Rarity.Unique,
        'Echoforge',
        'Infernal Sword',
        'assets/items/Echoforge_inventory_icon.png',
        'x2x3',
        [
            new Property(
                PropertyType.ItemType,
                '',
                'Two Hand Sword'
            ),
            new Property(
                PropertyType.Stat,
                'Physical Damage',
                '62-129'
            ),
            new Property(
                PropertyType.Stat,
                'Chaos Damage',
                '<chaos>650-800</chaos>'
            ),
            new Property(
                PropertyType.Stat,
                'Critical Strike Chance',
                '5.00%'
            ),
            new Property(
                PropertyType.StatAug,
                'Attacks per Second',
                '1.57'
            ),
            new Property(
                PropertyType.Stat,
                'Weapon Range',
                '13'
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
                '30% increased Chaos Damage'
            ),
            new Property(
                PropertyType.Separator,
                '',
                ''
            ),
            new Property(
                PropertyType.Affix,
                '',
                'Adds 640 to 800 Chaos Damage'
            ),
            new Property(
                PropertyType.Affix,
                '',
                '16% increased Attack Speed'
            ),
            new Property(
                PropertyType.Affix,
                '',
                '+200 to maximum Life'
            ),
            new Property(
                PropertyType.Affix,
                '',
                'Your Chaos Damage can Shock'
            ),
            new Property(
                PropertyType.Affix,
                '',
                '40% increased Area of Effect for Attacks'
            ),
            new Property(
                PropertyType.Affix,
                '',
                'Deal no Physical or Elemental Damage'
            ),
            new Property(
                PropertyType.Separator,
                '',
                ''
            ),
            new Property(
                PropertyType.FlavorU,
                '',
                'Witness the emergence of a new cosmic power.'
            )
        ],
        Influence.None,
        Influence.None,
        FoilType.Sunset
    ),
    new TemplateItem(
        Rarity.Rare,
        'Beast Tread',
        'Titan Greaves',
        'assets/items/Titan_Greaves_inventory_icon.png',
        'x2x2',
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
    new TemplateItem(
        Rarity.Unique,
        'Tabula Rasa',
        'Simple Robe',
        'assets/items/Tabula_Rasa_inventory_icon.png',
        'x2x3',
        []
    ),
    new TemplateItem(
        Rarity.Unique,
        "Circle of Fear",
        "Synthesised Sapphire Ring",
        "assets/items/Circle_of_Fear_inventory_icon.png",
        'x1x1',
        [
            new Property(
                PropertyType.Affix,
                "",
                "10% increased Global Physical Damage",
            ),
            new Property(
                PropertyType.Affix,
                "",
                "10% increased maximum Mana",
            ),
            new Property(
                PropertyType.Affix,
                "",
                "-16 Chaos Damage taken",
            ),
            new Property(
                PropertyType.Separator,
                "",
                "",
            ),
            new Property(
                PropertyType.Affix,
                "",
                "+22 to Dexterity",
            ),
            new Property(
                PropertyType.Affix,
                "",
                "Adds 21 to 26 Cold Damage",
            ),
            new Property(
                PropertyType.Affix,
                "",
                "+23% to Cold Resistance",
            ),
            new Property(
                PropertyType.Affix,
                "",
                "+53% to Cold Resistance while affected by Herald of Ice",
            ),
            new Property(
                PropertyType.Affix,
                "",
                "+1% to maximum Cold Resistance while affected by Herald of Ice",
            ),
            new Property(
                PropertyType.Separator,
                "",
                ""
            ),
            new Property(
                PropertyType.FlavorU,
                "",
                "My subordinates circled me eternally, attuned to the slightest weakness, ready to tear me apart for their own gains."
            )
        ],
        Influence.Synthesised,
        undefined,
        undefined,
        500
    ),
    new TemplateItem(
        Rarity.Unique,
        "Replica Tabula Rasa",
        "Simple Robe",
        "assets/items/Tabula_Rasa_inventory_icon.png",
        'x2x3',
        [
            new Property(
                PropertyType.Affix,
                "",
                "<i>Has 4 White Sockets</i>"
            ),
            new Property(
                PropertyType.Affix,
                "",
                "<i>Sockets are Fully Linked</i>"
            ),
            new Property(
                PropertyType.Separator,
                "",
                ""
            ),
            new Property(
                PropertyType.Affix,
                "",
                "+1 to Level of All Socketed Gems"
            )
        ],
        Influence.Replica
    ),
    new TemplateItem(
        Rarity.Keystone,
        "",
        "Chaos Innoculation",
        "",
        'x1x1',
        [
            new Property(
                PropertyType.Affix,
                "",
                "Maximum Life becomes 1, Immune to Chaos Damage"
            ),
            new Property(
                PropertyType.FlavorU,
                "",
                "Give up everything in pursuit of greatness - even life itself."
            )
        ]
    ),
    new TemplateItem(
        Rarity.Unique,
        "Arakaali's Fang",
        "Fiend Dagger",
        "assets/items/Arakaali's_Fang_inventory_icon.png",
        "x1x2",
        [
            new Property(
                PropertyType.ItemType,
                "",
                "Rune Dagger"
            ),
            new Property(
                PropertyType.StatAug,
                "Quality",
                "+20%"
            ),
            new Property(
                PropertyType.StatAug,
                "Physical Damage",
                "92-329"
            ),
            new Property(
                PropertyType.StatAug,
                "Chaos Damage",
                "<chaos>1-59</chaos>"
            ),
            new Property(
                PropertyType.Stat,
                "Critical Strike Chance",
                "6.50%"
            ),
            new Property(
                PropertyType.Stat,
                "Attacks per Second",
                "1.20"
            ),
            new Property(
                PropertyType.Stat,
                "Weapon Range",
                "10"
            ),
            new Property(
                PropertyType.Separator,
                "",
                ""
            ),
            new Property(
                PropertyType.StatReq,
                "",
                "Requires Level 53, 58 Dex, 123 Int"
            ),
            new Property(
                PropertyType.Separator,
                "",
                ""
            ),
            new Property(
                PropertyType.Affix,
                "",
                "40% increased Global Critical Strike Chance"
            ),
            new Property(
                PropertyType.Separator,
                "",
                ""
            ),
            new Property(
                PropertyType.Affix,
                "",
                "100% chance to Trigger Level 1 Raise Spiders on Kill"
            ),
            new Property(
                PropertyType.Affix,
                "",
                "185% increased Physical Damage"
            ),
            new Property(
                PropertyType.Affix,
                "",
                "Adds 8 to 21 Physical Damage"
            ),
            new Property(
                PropertyType.Affix,
                "",
                "Adds 1 to 59 Chaos Damage"
            ),
            new Property(
                PropertyType.Affix,
                "",
                "15% chance to Poison on Hit"
            ),
            new Property(
                PropertyType.Separator,
                "",
                ""
            ),
            new Property(
                PropertyType.FlavorU,
                "",
                "All children must eat."
            )
        ]
    ),
    new TemplateItem(
        Rarity.Magic,
        "",
        "Traveler's Imperial Dyadic Resonator",
        "assets/items/Prime_Chaotic_Resonator_inventory_icon.png",
        'x2x2',
        [
            new Property(
                PropertyType.ItemType,
                "",
                "Dyadic Synthesis Catalyst"
            ),
            new Property(
                PropertyType.FlavorG,
                '',
                '(Properties Inserted into the Quandrixium are Contingent or corrupted by the Spectre of Tarkleigh)'
            ),
            new Property(
                PropertyType.Separator,
                "",
                ""
            ),
            new Property(
                PropertyType.StatAug,
                'Quality',
                '+20%'
            ),
            new Property(
                PropertyType.Stat,
                'Item Level',
                '14951'
            ),
            new Property(
                PropertyType.Separator,
                '',
                '',
            ),
            new Property(
                PropertyType.Crafted,
                '',
                'Has 12 Dyadic Pentacle Sockets'
            ),
            new Property(
                PropertyType.Crafted,
                '',
                '7 Sockets contain passive dynamic: Tectonic in Nature'
            ),
            new Property(
                PropertyType.Separator,
                '',
                ''
            ),
            new Property(
                PropertyType.StatReq,
                '',
                'Requires 382 Sacramental Oil'
            ),
            new Property(
                PropertyType.Affix,
                '',
                'Hidden Environmental Property is always Fierceness'
            ),
            new Property(
                PropertyType.FlavorG,
                '',
                'Red enemies deal 90% extra Damage as Fire when Fractured during Fierceness (Hidden)'
            ),
            new Property(
                PropertyType.Affix,
                '',
                'Destroyed Area or Area will contain(can be destroyed) 7% More Ancient Cursed Envirosuit Pieces'
            ),
            new Property(
                PropertyType.FlavorG,
                '',
                'Envirosuit Pieces have Unique Elemental Identifier Icons'
            ),
            new Property(
                PropertyType.Affix,
                '',
                'Areas affected by bigass thundercubes Disregard the weakness cap in short era of demonic spirits, causing nearby enemies to Target nearby Metanodes'
            ),
            new Property(
                PropertyType.FlavorG,
                '',
                'Thundercubes add 100% Damage to You'
            ),
            new Property(
                PropertyType.Separator,
                '',
                ''
            ),
            new Property(
                PropertyType.Affix,
                '',
                'Mutated Horrors Unresist Poison Ailments'
            ),
            new Property(
                PropertyType.Affix,
                '',
                'Area may contain Quadratic Shrine of Steadfast or Stalwart Head of Dagk'
            ),
            new Property(
                PropertyType.Separator,
                '',
                ''
            ),
            new Property(
                PropertyType.Affix,
                '',
                'Sector 2 Map Events last 40% Longer and require 2 reputation'
            ),
            new Property(
                PropertyType.Affix,
                '',
                '0% Holy Resistance Within 38% of Encountered Dimensional Strangles'
            ),
            new Property(
                PropertyType.Crafted,
                '',
                'Teleport duration increased by 0.5 seconds for each Shaped Chest socketed (Level 18 Kalandra Craft)'
            ),
            new Property(
                PropertyType.Crafted,
                '',
                'Map may contain Crossbows which set enemies on fire during Miasma'
            ),
            new Property(
                PropertyType.Corrupted,
                '',
                'Krangled'
            ),
            new Property(
                PropertyType.FlavorG,
                '',
                'Item Credit u/iz__zy'
            )
        ],
        undefined,
        undefined,
        undefined,
        600
    )
].reduce(reducer, new Map<string, TemplateItem>());

export const StartingTemplates = Templates;
StartingTemplates.delete("Tabula Rasa");
