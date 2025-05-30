import { Card } from "@/lib/classes/Card";
import { CardEmoji } from "@/lib/enums";
import { CardCategory, Nature } from "@/lib/types";

const a_staffStrike = new Card({
    title: "Staff Strike",
    description: ([spd, dmg]) => `SPD+${spd}. Afterwards, HP-1, attack for DMG ${dmg}+SPD/7`,
    emoji: CardEmoji.LAUFEN_CARD,
    effects: [3, 7],
    cardMetadata: { nature: Nature.Attack },
    cardCategories: ["Attack"],
    effectNames: ["SPD", "DMG"],
    hpCost: 1,
    deck: "laufen",
});

const a_staffBash = new Card({
    title: "Staff Bash",
    cardMetadata: { nature: Nature.Attack },
    description: ([spd, dmg]) => `SPD+${spd}. Afterwards, HP-2, DMG ${dmg}+SPD/6`,
    emoji: CardEmoji.LAUFEN_CARD,
    effects: [2, 8],
    hpCost: 2,
    cardCategories: ["Attack"],
    effectNames: ["SPD", "DMG"],
    deck: "laufen",
});

export const a_whip = new Card({
    title: "Whip",
    cardMetadata: { nature: Nature.Attack },
    description: ([spd, dmg]) => `SPD+${spd}. Afterwards, HP-3, DMG ${dmg}+SPD/5`,
    emoji: CardEmoji.LAUFEN_CARD,
    effects: [1, 9],
    hpCost: 3,
    cardCategories: [CardCategory.ATTACK],
    effectNames: ["SPD", "DMG"],
    deck: "laufen",
});

export const hide = new Card({
    title: "Hide",
    cardMetadata: { nature: Nature.Util },
    description: ([def, hp]) => `DEF+${def} for 2 turns. Heal ${hp} HP.`,
    emoji: CardEmoji.DONUT_CARD,
    effects: [3, 10],
    cardCategories: [CardCategory.UTILITY],
    effectNames: ["SPD", "SPD Buff", "HP"],
    deck: "laufen",
});

export const a_supersonicStrike = new Card({
    title: "Supersonic Strike",
    description: ([dmg]) => `HP-4, DMG ${dmg}+SPD/4`,
    emoji: CardEmoji.LAUFEN_CARD,
    cardMetadata: { nature: Nature.Attack, signature: true },
    effects: [10],
    hpCost: 4,
    cardCategories: [CardCategory.ATTACK],
    effectNames: ["SPD", "DMG"],
    deck: "laufen",
});

const quickDodge = new Card({
    title: "Quick Dodge",
    cardMetadata: { nature: Nature.Util },
    description: ([spd, spdBuff]) =>
        `Priority+2. SPD+${spd}. Increases SPD by an additional ${spdBuff} until the end of the turn.`,
    emoji: CardEmoji.LAUFEN_CARD,
    effects: [3, 27],
    priority: 2,
    cardCategories: [CardCategory.UTILITY],
    effectNames: ["SPD", "SPD Buff"],
    deck: "laufen",
});

const parry = new Card({
    title: "Parry",
    cardMetadata: { nature: Nature.Defense },
    description: ([def]) => `Priority+2. Increases TrueDEF by ${def} until the end of the turn.`,
    emoji: CardEmoji.LAUFEN_CARD,
    effects: [20],
    priority: 2,
    cardCategories: [CardCategory.UTILITY, CardCategory.DEFENSE, "Block"],
    effectNames: ["DEF"],
    deck: "laufen",
});

export const jilwer = new Card({
    title: "Jilwer",
    cardMetadata: { nature: Nature.Util },
    description: ([spd]) => `Increases SPD by ${spd} for 2 turns. At the end of every turn, HP-10.`,
    emoji: CardEmoji.LAUFEN_CARD,
    effects: [50],
    hpCost: 10,
    cardCategories: [CardCategory.UTILITY],
    effectNames: ["SPD"],
    deck: "laufen",
});

export const laufenDeck = [
    { card: a_staffStrike, count: 2 },
    { card: a_staffBash, count: 2 },
    { card: a_whip, count: 2 },
    { card: hide, count: 2 },
    { card: a_supersonicStrike, count: 2 },
    { card: quickDodge, count: 2 },
    { card: parry, count: 2 },
    { card: jilwer, count: 2 },
];
