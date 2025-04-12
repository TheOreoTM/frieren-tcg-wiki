import { Card } from "@/lib/classes/Card";
import { CardEmoji } from "@/lib/enums";

const imitate = new Card({
    title: "Imitate",
    description: () => `Use the card the opponent used last turn at this card's empower level -2.`,
    emoji: CardEmoji.LINIE_CARD,
    effects: [],
    effectNames: [],
    cardCategories: ["Utility"],
    deck: "linie",
});

export const adapt = new Card({
    title: "Adapt",
    description: ([spd, atkDef, hp]) =>
        `SPD+${spd}. If HP > 50, ATK+${atkDef}, DEF+${atkDef}. If HP <= 50, heal ${hp} HP.`,
    emoji: CardEmoji.LINIE_CARD,
    effects: [2, 2, 10],
    cardCategories: ["Utility"],
    effectNames: ["SPD", "ATK+DEF", "HP"],
    deck: "linie",
});

export const manaDetection = new Card({
    title: "Mana Detection",
    description: ([spd, bigNumber, smallNumber]) =>
        `SPD+${spd}. If Opp's DEF >= Opp's ATK, ATK+${bigNumber}, DEF+${smallNumber}. Otherwise, ATK+${smallNumber}, DEF+${bigNumber}.`,
    emoji: CardEmoji.LINIE_CARD,
    effects: [2, 2, 1],
    cardCategories: ["Utility"],
    effectNames: ["SPD", "STAT INC", "STAT inc"],
    deck: "linie",
});

const parry = new Card({
    title: "Parry",
    description: ([def]) => `Priority+2. Increases DEF by ${def} until the end of the turn.`,
    emoji: CardEmoji.LINIE_CARD,
    effects: [20],
    priority: 2,
    cardCategories: ["Utility", "Defense", "Block"],
    effectNames: ["DEF"],
    deck: "linie",
});

export const a_erfassenAxe = new Card({
    title: "Erfassen: Axe",
    description: ([dmg]) => `HP-3. DMG ${dmg}`,
    emoji: CardEmoji.LINIE_CARD,
    effects: [11],
    cardCategories: ["Attack"],
    effectNames: ["DMG"],
    deck: "linie",
});

export const a_erfassenSword = new Card({
    title: "Erfassen: Sword",
    description: ([dmg]) => `HP-2. DMG ${dmg}`,
    emoji: CardEmoji.LINIE_CARD,
    effects: [9],
    cardCategories: ["Attack"],
    effectNames: ["DMG"],
    deck: "linie",
});

export const a_erfassenSpear = new Card({
    title: "Erfassen: Spear",
    description: ([dmg]) => `HP-1. DMG ${dmg}`,
    emoji: CardEmoji.LINIE_CARD,
    effects: [7],
    cardCategories: ["Attack"],
    effectNames: ["DMG"],
    deck: "linie",
});

export const a_erfassenKnife = new Card({
    title: "Erfassen: Knife",
    description: ([dmg]) => `DMG ${dmg}`,
    emoji: CardEmoji.LINIE_CARD,
    effects: [5],
    cardCategories: ["Attack"],
    effectNames: ["DMG"],
    deck: "linie",
});

export const linieDeck = [
    { card: imitate, count: 2 },
    { card: adapt, count: 2 },
    { card: manaDetection, count: 2 },
    { card: parry, count: 1 },
    { card: a_erfassenAxe, count: 2 },
    { card: a_erfassenSword, count: 2 },
    { card: a_erfassenSpear, count: 2 },
    { card: a_erfassenKnife, count: 2 },
];
