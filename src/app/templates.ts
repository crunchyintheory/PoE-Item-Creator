import { Item, SerializedItem } from "./item";
import { Property, PropertyType } from "./property";
import { FoilType, Influence, Rarity } from "./rarity";

const reducer = (accumulator: Map<string, SerializedItem|Item>, currentValue: SerializedItem|Item) => {
    return accumulator.set(`${currentValue.name}, ${currentValue.base}`, currentValue);
}

export const Templates: Map<string, Item|SerializedItem> = ([
    new Item(
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
    new Item(
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
    new Item(
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
                PropertyType.MemoryStrands,
                'Memory Strands',
                '37'
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
                PropertyType.Separator,
                '',
                ''
            ),
            new Property(
                PropertyType.Corrupted,
                '',
                'Corrupted'
            )
        ],
        Influence.Originator
    ),
    new Item(
        Rarity.Unique,
        'Tabula Rasa',
        'Simple Robe',
        'assets/items/Tabula_Rasa_inventory_icon.png',
        'x2x3',
        []
    ),
    new Item(
        Rarity.Unique,
        "Circle of Fear",
        "Synthesised Sapphire Ring",
        "assets/items/Circle_of_Fear_inventory_icon.png",
        'x1x1',
        [
            new Property(
                PropertyType.StatReq,
                "",
                "Item Level: 83"
            ),
            new Property(
                PropertyType.StatReq,
                "",
                "Requires Level 52"
            ),
            new Property(
                PropertyType.Separator,
                "",
                ""
            ),
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
    new Item(
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
    new Item(
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
    new Item(
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
    new Item(
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
        700
    ),
    {"rarity":"gem","name":"","base":"Cyclone","image":"assets/items/VaalCyclone.png","properties":[{"type":"desc","name":"","value":"Attack, AoE, Duration, Vaal, Melee, Movement, Channelling"},{"type":"quant","name":"Level","value":"1"},{"type":"quant","name":"Cost","value":"2 Mana"},{"type":"quant","name":"Attack Speed","value":"300% of base"},{"type":"quant","name":"Attack Damage","value":"68.2% of base"},{"type":"quant","name":"Effectiveness of Added Damage","value":"69%"},{"type":"sep","name":"","value":""},{"type":"statreq","name":"","value":"Requires Level 28, 29 Str, 42 Dex"},{"type":"sep","name":"","value":""},{"type":"flavor","name":"","value":"Channel this skill to move towards a targeted location while spinning constantly attacking enemies in an area around you. While channelling this skill, you cannot be knocked back."},{"type":"sep","name":"","value":""},{"type":"qual","name":"","value":"15% increased Area of Effect per 0.1 metre additional Melee Strike Range"},{"type":"qual","name":"","value":"30% less Movement Speed"},{"type":"sep","name":"","value":""},{"type":"header gem vaal","name":"","value":"Vaal Cyclone"},{"type":"sep","name":"","value":""},{"type":"quant","name":"Souls Per Use","value":"25"},{"type":"statreq","name":"","value":"Can Store 1 Use"},{"type":"quant","name":"Soul Gain Prevention","value":"5 sec"},{"type":"quant","name":"Attack Speed","value":"300% of base"},{"type":"quant","name":"Attack Damage","value":"108.1% of base"},{"type":"quant","name":"Effectiveness of Added Damage","value":"108%"},{"type":"sep","name":"","value":""},{"type":"flavor","name":"","value":"Spin and attack in place, damaging nearby enemies and pulling others towards you. While using this skill, you cannot be stunned or knocked back. Cannot be supported by Ruthless."},{"type":"sep","name":"","value":""},{"type":"qual","name":"","value":"Base duration is 5.00 seconds"},{"type":"qual","name":"","value":"Modifiers to Skill Effect Duration also apply to this Skill's Soul Gain Prevention"},{"type":"qual","name":"","value":"15% increased Area of Effect per 0.1 metre additional Melee Strike Range"},{"type":"qual","name":"","value":"Can't be Evaded"},{"type":"sep","name":"","value":""},{"type":"vaal","name":"","value":"Corrupted"}],"influences":["None","None"],"foilType":"None","width":1200,"size":"x2x3"},
    {"game":"poe2","rarity":"unique","name":"Uhtred's Chalice","base":"Transcendent Mana Flask","image":"assets/items/Uhtreds_Chalice.png","properties":[{"type":"statreq","name":"","value":"Recovers %%b%%(855-1140)%%b%% Mana over %%b%%11.67%%b%% Seconds"},{"type":"statreq","name":"","value":"Consumes 10 of %%b%%(30-37)%%b%% Charges on use"},{"type":"sep","name":"Quality","value":"Unaffected by Poison"},{"type":"statreq","name":"","value":"Requires Level 50"},{"type":"sep","name":"","value":""},{"type":"qual","name":"","value":"(200-300)% increased Amount Recovered"},{"type":"qual","name":"","value":"70% reduced Recovery rate"},{"type":"qual","name":"","value":"(60-50)% reduced Charges"},{"type":"qual","name":"","value":"Lose 5% Life per second while you have no Runic Ward during Effect"},{"type":"qual","name":"","value":"Mana Recovery from Flasks can Overflow maximum Mana during Effect"},{"type":"sep","name":"","value":""},{"type":"flavor","name":"","value":"Uhtred drank. Verisium burned through his veins. He gazed at death's face. With all his strength, he turned instead to the stars, and witnessed Truth."},{"type":"sep","name":"","value":""},{"type":"gflavor","name":"","value":"Right click to drink. Can only hold charges while in belt. Refill at Wells or by killing monsters."}],"influences":["None","None"],"foilType":"None","width":500,"size":"x1x2"},
    {"game":"poe2","rarity":"unique","name":"Abysswallow Broach","base":"Golden Charm","image":"assets/items/Omen_of_Abyssal_Echoes_inventory_icon.png","properties":[{"type":"statreq","name":"","value":"Lasts 1.00 Seconds"},{"type":"statreq","name":"","value":"Consumes 80 of %%b%%100%%b%% Charges on use"},{"type":"qual","name":"","value":"15% increased Rarity of Items found"},{"type":"sep","name":"Quality","value":"Unaffected by Poison"},{"type":"statreq","name":"","value":"Requires Level 48"},{"type":"sep","name":"","value":""},{"type":"qual","name":"","value":"Used when you kill a Rare or Unique enemy"},{"type":"sep","name":"","value":""},{"type":"qual","name":"","value":"Grants Onslaught during effect"},{"type":"qual","name":"","value":"+20 to Maximum Charges"},{"type":"qual","name":"","value":"Recharges 5 Charges when you Consume an Ignited corpse"},{"type":"qual","name":"","value":"Enemies Ignited by you during Effect take (7-10)% increased Damage"},{"type":"veiled","name":"","value":"prefix-4"},{"type":"sep","name":"","value":""},{"type":"flavor","name":"","value":"A controlled burn is sometimes necessary for new life."},{"type":"sep","name":"","value":""},{"type":"gflavor","name":"","value":"Used automatically when condition is met. Can only hold charges while in belt. Refill at Wells or by killing monsters."}],"influences":["Desecrated (Abyssal)","None"],"foilType":"None","width":500,"size":"x1x1"},
    {"game":"poe2","rarity":"unique","name":"Paradoxica","base":"Commander Sword","image":"assets/items/Vendetta_Paradoxica_inventory_icon.png","properties":[{"type":"desc","name":"","value":"One Hand Sword"},{"type":"quant","name":"Physical Damage","value":"36-60"},{"type":"quant","name":"Critical Strike Chance","value":"5.00%"},{"type":"augquant","name":"Attacks per Second","value":"1.50"},{"type":"quant","name":"Weapon Range","value":"1.1 %%g%%meters%%g%%"},{"type":"sep","name":"","value":""},{"type":"statreq","name":"","value":"Requires Level 66, 106 Str, 106 Dex"},{"type":"sep","name":"","value":""},{"type":"qual","name":"","value":"+25% to Global Critical Strike Multiplier"},{"type":"sep","name":"","value":""},{"type":"qual","name":"","value":"Attacks with this Weapon deal Double Damage"},{"type":"veiled","name":"","value":"prefix-5"},{"type":"veiled","name":"","value":"suffix-2"},{"type":"sep","name":"","value":""},{"type":"flavor","name":"","value":"What has no siblings but is always a twin?"}],"influences":["Desecrated (Abyssal)","None"],"foilType":"None","width":500,"size":"x2x3"},
] as Array<Item|SerializedItem>).reduce(reducer, new Map<string, Item|SerializedItem>());

// noinspection UnnecessaryLocalVariableJS
export const StartingTemplates = Templates;
StartingTemplates.delete("Tabula Rasa");
