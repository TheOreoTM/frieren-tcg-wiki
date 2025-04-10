import { Card } from "@/lib/classes/Card";
import { CardEmoji } from "@/lib/enums";
import { CardCategory } from "@/lib/types";

const a_staffStrike = new Card({
    title: "Staff Strike",
    description: ([spd, dmg]) => `SPD+${spd}. Afterwards, HP-4, attack for DMG ${dmg}+SPD/6`,
    emoji: CardEmoji.LAUFEN_CARD,
    effects: [2, 10],
    cardCategories: ["Attack"],
    effectNames: ["SPD", "DMG"],
});

const a_staffBash = new Card({
    title: "Staff Bash",
    description: ([spd, dmg]) => `SPD+${spd}. Afterwards, HP-4, DMG ${dmg}+SPD/5`,
    emoji: CardEmoji.LAUFEN_CARD,
    effects: [2, 8],
    cardCategories: ["Attack"],
    effectNames: ["SPD", "DMG"],
});

export const a_whip = new Card({
    title: "Whip",
    description: ([spd, dmg]) => `SPD+${spd}. Afterwards, HP-5, DMG ${dmg}+SPD/4`,
    emoji: CardEmoji.LAUFEN_CARD,
    effects: [1, 6],
    cardCategories: [CardCategory.ATTACK],
    effectNames: ["SPD", "DMG"],
});

export const hide = new Card({
    title: "Hide",
    description: ([spd, spdBuff, hp]) =>
        `SPD+${spd}. Increases SPD by an additional ${spdBuff} until the end of the turn. Heal ${hp} HP.`,
    emoji: CardEmoji.LAUFEN_CARD,
    effects: [3, 7, 12],
    cardCategories: [CardCategory.UTILITY],
    effectNames: ["SPD", "SPD Buff", "HP"],
});

export const a_supersonicStrike = new Card({
    title: "Supersonic Strike",
    description: ([spd, dmg]) => `SPD+${spd}. Afterwards, HP-7, DMG ${dmg}+SPD/3`,
    emoji: CardEmoji.LAUFEN_CARD,
    effects: [3, 10],
    cardCategories: [CardCategory.ATTACK],
    effectNames: ["SPD", "DMG"],
});

const quickDodge = new Card({
    title: "Quick Dodge",
    description: ([spd, spdBuff]) =>
        `Priority+2. SPD+${spd}. Increases SPD by an additional ${spdBuff} until the end of the turn.`,
    emoji: CardEmoji.LAUFEN_CARD,
    effects: [5, 25],
    priority: 2,
    cardCategories: [CardCategory.UTILITY],
    effectNames: ["SPD", "SPD Buff"],
});

const parry = new Card({
    title: "Parry",
    description: ([def]) => `Priority+2. Increases DEF by ${def} until the end of the turn.`,
    emoji: CardEmoji.LAUFEN_CARD,
    effects: [20],
    priority: 2,
    cardCategories: [CardCategory.UTILITY, CardCategory.DEFENSE, "Block"],
    effectNames: ["DEF"],
});

export const jilwer = new Card({
    title: "Jilwer",
    description: ([spd]) => `Increases SPD by ${spd} for 2 turns. At the end of every turn, HP-10.`,
    emoji: CardEmoji.LAUFEN_CARD,
    effects: [50],
    cardCategories: [CardCategory.UTILITY],
    effectNames: ["SPD"],
});

export const laufenDeck = [
    { card: a_staffStrike, count: 2 },
    { card: a_staffBash, count: 2 },
    { card: a_whip, count: 2 },
    { card: hide, count: 2 },
    { card: a_supersonicStrike, count: 2 },
    { card: quickDodge, count: 2 },
    { card: parry, count: 1 },
    { card: jilwer, count: 2 },
];
