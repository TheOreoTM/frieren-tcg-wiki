import { Card } from "@/lib/classes/Card";
import { CardEmoji } from "@/lib/enums";
import { CardCategory } from "@/lib/types";

const a_jab = new Card({
    title: "Jab",
    description: ([hp, def, spd, dmg]) => `HP+${hp}. DEF+${def}. SPD+${spd}. DMG ${dmg}.`,
    emoji: CardEmoji.DENKEN_CARD,
    effectNames: ["HP", "DEF", "SPD", "DMG"],
    cardCategories: [CardCategory.ATTACK],
    effects: [2, 1, 1, 2],
    deck: "denken",
});

const a_hook = new Card({
    title: "Hook",
    description: ([hp, atk, dmg]) => `HP+${hp}. ATK+${atk}. DMG ${dmg}.`,
    emoji: CardEmoji.DENKEN_CARD,
    effects: [2, 2, 2],
    cardCategories: [CardCategory.ATTACK],
    effectNames: ["HP", "ATK", "DMG"],
    deck: "denken",
});

const a_uppercut = new Card({
    title: "Uppercut",
    description: ([hp, atk, spd, dmg]) => `HP+${hp}. ATK+${atk}. SPD+${spd}. DMG ${dmg}.`,
    emoji: CardEmoji.DENKEN_CARD,
    effects: [2, 1, 1, 3],
    cardCategories: [CardCategory.ATTACK],
    effectNames: ["HP", "ATK", "SPD", "DMG"],
    deck: "denken",
});

const bareHandedBlock = new Card({
    title: "Bare-handed Block",
    description: ([def, tempDef]) =>
        `Priority+2. DEF+${def}. Increases DEF by an additional ${tempDef} until the end of the turn.`,
    emoji: CardEmoji.DENKEN_CARD,
    priority: 2,
    effects: [2, 8],
    cardCategories: [CardCategory.DEFENSE, CardCategory.UTILITY, "Block"],
    effectNames: ["DEF", "DEF"],
    deck: "denken",
});

export const a_waldgose = new Card({
    title: "Tornado Winds: Waldgose",
    description: ([dmg]) =>
        `HP-7. DMG ${dmg}. At the next 3 turn ends, deal ${dmg} DMG. Treat this card as "Jab" if the user's HP is <= 0.`,
    emoji: CardEmoji.DENKEN_CARD,
    effects: [3],
    cardCategories: [CardCategory.ATTACK],
    effectNames: ["DMG"],
    deck: "denken",
});

export const a_daosdorg = new Card({
    title: "Hellfire: Daosdorg",
    description: ([dmg, waldgoseDmgBonus]) =>
        `HP-9. DMG ${dmg}. If Waldgose is active, increase its turn end damage by ${waldgoseDmgBonus}. Treat this card as "Hook" if the user's HP is <= 0.`,
    emoji: CardEmoji.DENKEN_CARD,
    effects: [12, 3],
    cardCategories: [CardCategory.ATTACK],
    effectNames: ["DMG", "DMG"],
    deck: "denken",
});

export const a_catastravia = new Card({
    title: "Lights of Judgment: Catastravia",
    description: ([dmg]) =>
        `HP-15. DMG ${dmg}. At the next 5 turn ends, deal ${dmg} DMG. Treat this card as "Uppercut" if the user's HP is <= 0.`,
    emoji: CardEmoji.DENKEN_CARD,
    effects: [4],
    cardCategories: [CardCategory.ATTACK],
    effectNames: ["DMG"],
    deck: "denken",
});

const elementaryDefensiveMagic = new Card({
    title: "Elementary Defensive Magic",
    description: ([def]) =>
        `Priority+2. Increases DEF by ${def} until the end of the turn. Treat this card as "Bare-handed Block" if the user's HP is <= 0.`,
    emoji: CardEmoji.DENKEN_CARD,
    priority: 2,
    effects: [20],
    cardCategories: [CardCategory.UTILITY, CardCategory.DEFENSE],
    effectNames: ["DEF"],
    deck: "denken",
});

export const a_concentratedOffensiveMagicZoltraak = new Card({
    title: "Concentrated Offensive Magic: Zoltraak",
    description: ([dmg]) => `HP-8. DMG ${dmg}.`,
    emoji: CardEmoji.DENKEN_CARD,
    effects: [14],
    cardCategories: [CardCategory.ATTACK],
    effectNames: ["DMG"],
    deck: "denken",
});

export const denkenDeck = [
    { card: a_jab, count: 2 },
    { card: a_hook, count: 2 },
    { card: a_uppercut, count: 2 },
    { card: bareHandedBlock, count: 1 },
    { card: a_waldgose, count: 2 },
    { card: a_daosdorg, count: 2 },
    { card: a_catastravia, count: 1 },
    { card: elementaryDefensiveMagic, count: 1 },
    { card: a_concentratedOffensiveMagicZoltraak, count: 2 },
];
