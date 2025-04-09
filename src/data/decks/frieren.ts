import { Card } from "@/lib/classes/Card";
import { CardEmoji } from "@/lib/enums";

export const a_zoltraak = new Card({
    title: "Offensive Magic Analysis: Zoltraak",
    description: ([dmg]) => `HP-5. DMG ${dmg}. 2 Analysis stacks will be gained after attack.`,
    emoji: CardEmoji.FRIEREN_CARD,
    cosmetic: {
        cardImageUrl: "/cards/Offensive_Magic_Analysis_Zoltraak.webp",
    },
    tags: { PostAnalysis: 2 },
    effects: [7],
    effectNames: ["DMG"],
});

export const fieldOfFlower = new Card({
    title: "Spell to make a Field of Flowers",
    description: ([hp, endHp]) => `Heal ${hp} HP. At the next 3 turn ends, heal ${endHp}.`,
    cosmetic: {
        cardGif: "/cards/FieldOfFlowers_Animated.webp",
        cardImageUrl:
            // "https://cdn.discordapp.com/attachments/1351391350398128159/1352873016660590653/Spell_to_make_a_field_of_flowers_4.png?ex=67df98ae&is=67de472e&hm=e5080e39c9818eee5f9a3d559a829b6f3ecab15be85b9897fb6c28ea27c6e674&",
            "/cards/FieldOfFlowers.webp",
    },
    emoji: CardEmoji.FLOWER_FIELD,
    effects: [5, 3],
    effectNames: ["HP", "HP"],
});

export const a_judradjim = new Card({
    title: "Destructive Lightning Analysis: Judradjim",
    description: ([dmg]) => `HP-7. DMG ${dmg}. 1 Analysis stack will be gained after attack.`,
    emoji: CardEmoji.FRIEREN_CARD,
    cosmetic: {
        cardImageUrl: "/cards/Destructive_Lightning_Analysis_Judradjim.webp",
    },
    tags: { PostAnalysis: 1 },
    effects: [12],
    effectNames: ["DMG"],
});

export const a_vollzanbel = new Card({
    title: "Hellfire Summoning: Vollzanbel",
    description: ([dmg]) => `HP-10. DMG ${dmg}`,
    emoji: CardEmoji.FRIEREN_CARD,
    cosmetic: {
        cardImageUrl: "/cards/Hellfire_Summoning_Vollzanbel.webp",
    },
    effects: [18],
    effectNames: ["DMG"],
});

export const barrierMagicAnalysis = new Card({
    title: "Barrier Magic Analysis",
    description: ([atk, spd, def]) => `ATK+${atk}. SPD+${spd}. Opponent's DEF-${def}`,
    emoji: CardEmoji.FRIEREN_CARD,
    cosmetic: {
        cardImageUrl: "/cards/Barrier_Magic_Analysis.webp",
    },
    effects: [2, 1, 1],
    tags: { Analysis: 2 },
    effectNames: ["ATK", "SPD", "DEF"],
});

export const demonMagicAnalysis = new Card({
    title: "Demon Magic Analysis",
    description: ([atk, spd, def]) => `ATK+${atk}. SPD+${spd}. DEF+${def}.`,
    emoji: CardEmoji.FRIEREN_CARD,
    cosmetic: {
        cardImageUrl: "/cards/Demon_Magic_Analysis.webp",
    },
    effects: [2, 2, 1],
    tags: { Analysis: 2 },
    effectNames: ["ATK", "SPD", "DEF"],
});

const ordinaryDefensiveMagic = new Card({
    title: "Ordinary Defensive Magic",
    description: ([def]) => `Priority+2. Increases DEF by ${def} until the end of the turn.`,
    emoji: CardEmoji.FRIEREN_CARD,
    cosmetic: {
        cardImageUrl: "/cards/Ordinary_Defensive_Magic.webp",
    },
    effects: [20],
    effectNames: ["DEF"],
    priority: 2,
});

export const a_theHeightOfMagic = new Card({
    title: `"The Height of Magic"`,
    description: ([dmg]) =>
        `Priority+1. Will fail if used while HP > 25. Strike for DMG ${dmg}. Afterward, decreases DEF and SPD by 20, and set HP to 1.`,
    emoji: CardEmoji.FRIEREN_CARD,
    cosmetic: {
        cardImageUrl: "/cards/The_Height_of_Magic.webp",
    },
    priority: 1,
    effects: [30],
    effectNames: ["DMG"],
});

export const frierenDeck = [
    { card: a_zoltraak, count: 2 },
    { card: a_judradjim, count: 2 },
    { card: a_vollzanbel, count: 2 },
    { card: barrierMagicAnalysis, count: 3 },
    { card: demonMagicAnalysis, count: 2 },
    { card: ordinaryDefensiveMagic, count: 1 },
    { card: fieldOfFlower, count: 2 },
    { card: a_theHeightOfMagic, count: 1 },
];
