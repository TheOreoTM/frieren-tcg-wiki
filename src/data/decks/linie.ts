import { Card } from "@/lib/classes/Card";
import { CardEmoji } from "@/lib/enums";
import { CardCategory, Nature } from "@/lib/types";

export const imitate = new Card({
    title: "Imitate",
    cardMetadata: { nature: Nature.Util, signature: true },
    description: () => `Use the card the opponent used last turn at this card's empower level -2.`,
    emoji: CardEmoji.LINIE_CARD,
    effects: [],
    effectNames: [],
    cardCategories: [CardCategory.UTILITY, CardCategory.UNIQUE],
    deck: "linie",
});

export const adapt = new Card({
    title: "Adapt",
    cardMetadata: { nature: Nature.Util },
    description: ([spd, atkDef, hp]) =>
        `SPD+${spd}. If HP > 50, ATK+${atkDef}, DEF+${atkDef}. If HP <= 50, heal ${hp} HP.`,
    emoji: CardEmoji.LINIE_CARD,
    effects: [2, 2, 10],
    cardCategories: [CardCategory.UTILITY, CardCategory.BUFF, CardCategory.HEALING],
    effectNames: ["SPD", "ATK/DEF", "HP"],
    deck: "linie",
});

export const manaDetection = new Card({
    title: "Mana Detection",
    cardMetadata: { nature: Nature.Util },
    description: ([spd, bigNumber, smallNumber]) =>
        `SPD+${spd}. If Opp's DEF >= Opp's ATK, ATK+${bigNumber}, DEF+${smallNumber}. Otherwise, ATK+${smallNumber}, DEF+${bigNumber}. Reveal the opponent's highest empowered card.`,
    emoji: CardEmoji.MANA_CARD,
    effects: [2, 2, 1],
    cardCategories: [CardCategory.UTILITY, CardCategory.BUFF, CardCategory.DISRUPTION],
    effectNames: ["SPD", "ATK/DEF", "ATK/DEF"],
    deck: "linie",
});

const parry = new Card({
    title: "Parry",
    cardMetadata: { nature: Nature.Defense },
    description: ([def]) => `Priority+2. Increases TrueDEF by ${def} until the end of the turn.`,
    emoji: CardEmoji.LINIE_CARD,
    effects: [20],
    priority: 2,
    cardCategories: [CardCategory.DEFENSE, CardCategory.BLOCK],
    effectNames: ["TrueDEF"],
    deck: "linie",
});

export const a_erfassenAxe = new Card({
    title: "Erfassen: Axe",
    description: ([dmg]) => `HP-4. DMG ${dmg}`,
    emoji: CardEmoji.LINIE_CARD,
    cardMetadata: { nature: Nature.Attack },
    effects: [12],
    cardCategories: [CardCategory.ATTACK],
    effectNames: ["DMG"],
    deck: "linie",
    hpCost: 4,
});

export const a_erfassenJavelin = new Card({
    title: "Erfassen: Javelin",
    description: ([dmg]) => `HP-3. DMG ${dmg}. Deal ${dmg} at the end of next turn.`,
    emoji: CardEmoji.LINIE_CARD,
    cardMetadata: { nature: Nature.Attack },
    effects: [5],
    cardCategories: [CardCategory.ATTACK, CardCategory.DoT],
    effectNames: ["DMG", "DoT"],
    deck: "linie",
    hpCost: 3,
});

export const a_erfassenSword = new Card({
    title: "Erfassen: Sword",
    cardMetadata: { nature: Nature.Attack },
    description: ([dmg]) => `HP-2. DMG ${dmg}`,
    emoji: CardEmoji.LINIE_CARD,
    effects: [8],
    cardCategories: [CardCategory.ATTACK],
    effectNames: ["DMG"],
    deck: "linie",
    hpCost: 2,
});

export const a_erfassenKnife = new Card({
    title: "Erfassen: Knife",
    cardMetadata: { nature: Nature.Attack },
    description: ([dmg]) => `HP-1. DMG ${dmg}. At the end of the next 2 turns, deal ${dmg}.`,
    emoji: CardEmoji.LINIE_CARD,
    effects: [2],
    cardCategories: [CardCategory.ATTACK, CardCategory.DoT],
    effectNames: ["DMG", "DoT"],
    deck: "linie",
    hpCost: 1,
});

export const linieDeck = [
    { card: imitate, count: 2 },
    { card: adapt, count: 2 },
    { card: manaDetection, count: 2 },
    { card: parry, count: 2 },
    { card: a_erfassenAxe, count: 2 },
    { card: a_erfassenJavelin, count: 2 },
    { card: a_erfassenSword, count: 2 },
    { card: a_erfassenKnife, count: 2 },
];
