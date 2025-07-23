import { Card } from "@/lib/classes/Card";
import { CardEmoji } from "@/lib/enums";
import { CardCategory, Nature } from "@/lib/types";
import { one_step_ahead } from "./edel"; // Assuming import from edel deck file

export const a_scatterShot = new Card({
    title: "Scatter Shot",
    cardMetadata: { nature: Nature.Attack },
    emoji: CardEmoji.METHODE_CARD,
    description: ([dmg]) => `HP-6. ${dmg} DMG. Deal DMG ${dmg} x2 at the end of next turn`,
    effects: [4],
    hpCost: 6,
    cardCategories: [CardCategory.ATTACK, CardCategory.DoT],
    effectNames: ["DMG", "DoT"],
    deck: "methode",
});

export const a_delayedShot = new Card({
    title: "Delayed Shot",
    cardMetadata: { nature: Nature.Attack },
    emoji: CardEmoji.METHODE_CARD,
    description: ([dmg]) => `HP-8. ${dmg} DMG. Deal DMG ${dmg} x2 at the end of 2 turns from now.`,
    effects: [6],
    hpCost: 8,
    cardCategories: [CardCategory.ATTACK, CardCategory.DoT],
    effectNames: ["DMG", "DoT"],
    deck: "methode",
});

export const a_piercingShot = new Card({
    title: "Piercing Shot",
    cardMetadata: { nature: Nature.Attack },
    emoji: CardEmoji.METHODE_CARD,
    description: ([dmg, bonus]) =>
        `HP-10. DMG ${dmg}. If this character did not use an attacking move last turn, deal an additional ${bonus} DMG with 50% pierce.`,
    effects: [9, 5],
    hpCost: 10,
    cardCategories: [CardCategory.ATTACK, CardCategory.PIERCE],
    effectNames: ["DMG", "DMG"],
    deck: "methode",
});

const polymath = new Card({
    title: "Polymath",
    cardMetadata: { nature: Nature.Util },
    emoji: CardEmoji.METHODE_CARD,
    description: ([buff]) => `ATK+${buff}, DEF+${buff}, SPD+${buff}. Redraw your hand and roll 1 extra die next turn.`,
    effects: [1],
    cardCategories: [CardCategory.UTILITY, CardCategory.BUFF, CardCategory.DISRUPTION],
    effectNames: ["ATK", "DEF", "SPD"],
    deck: "methode",
});

const manaDetection = new Card({
    title: "Mana Detection",
    cardMetadata: { nature: Nature.Defense },
    emoji: CardEmoji.METHODE_CARD,
    description: ([def]) =>
        `Priority+2. TrueDEF+${def} for 1 turn. If the opponent attacks this turn, next turn, all your moves have Priority+1.`,
    effects: [20],
    priority: 2,
    cardCategories: [CardCategory.DEFENSE, CardCategory.BLOCK, CardCategory.BUFF],
    effectNames: ["TrueDEF"],
    deck: "methode",
});

export const reversePolarity = new Card({
    title: "Reverse Polarity",
    cardMetadata: { nature: Nature.Defense, signature: true },
    emoji: CardEmoji.METHODE_CARD,
    description: ([def]) =>
        `Priority+2. TrueDEF+${def} for 1 turn. If the opponent attacks this turn, at this turn's end, attack with base DMG equal to the move's DMG.`,
    effects: [20],
    priority: 2,
    cardCategories: [CardCategory.DEFENSE, CardCategory.BLOCK, CardCategory.COUNTER],
    effectNames: ["TrueDEF"],
    deck: "methode",
});

export const restraintMagic = new Card({
    title: "Restraint Magic",
    cardMetadata: { nature: Nature.Util },
    emoji: CardEmoji.METHODE_CARD,
    description: ([debuff]) =>
        `Priority+1. Set your DEF to 1 until this turn's end. Opp's ATK-${debuff}, DEF-${debuff}, SPD-${debuff} for the next 4 turns.`,
    effects: [4],
    priority: 1,
    cardCategories: [CardCategory.UTILITY, CardCategory.DEBUFF],
    effectNames: ["-Opp ATK", "-Opp DEF", "-Opp SPD"],
    deck: "methode",
});

export const hypnoticCompulsion = new Card({
    title: "Hypnotic Compulsion",
    cardMetadata: { nature: Nature.Util },
    emoji: CardEmoji.METHODE_CARD,
    description: ([atkDebuff]) =>
        `Opponent's ATK-${atkDebuff}. Your opponent can only use the move they used last turn in the next turn at Priority-2.`,
    effects: [2],
    cardCategories: [CardCategory.UTILITY, CardCategory.DEBUFF, CardCategory.DISRUPTION],
    effectNames: ["-Opp ATK"],
    deck: "methode",
});

export const goddessHealingMagic = new Card({
    title: "Goddess' Healing Magic",
    cardMetadata: { nature: Nature.Util },
    emoji: CardEmoji.METHODE_CARD,
    description: ([hp, bonusHp, def]) =>
        `Heal ${hp} HP. Heal an additional ${bonusHp} HP and gain ${def} DEF if the opponent's next move isn't an attack. Will overwrite the effect of Spot Weakness.`,
    effects: [10, 5, 3],
    cardCategories: [CardCategory.UTILITY, CardCategory.HEALING, CardCategory.BUFF],
    effectNames: ["HP", "HP", "DEF"],
    deck: "methode",
});

const spotWeakness = new Card({
    title: "Spot Weakness",
    cardMetadata: { nature: Nature.Util },
    emoji: CardEmoji.METHODE_CARD,
    description: ([spd, atk, bonusAtk]) =>
        `SPD+${spd} ATK+${atk}. ATK+${bonusAtk} if the opponent's next move is an attack. Will overwrite the effect of Goddess' Healing Magic.`,
    effects: [2, 2, 3],
    cardCategories: [CardCategory.UTILITY, CardCategory.BUFF],
    effectNames: ["SPD", "ATK", "ATK"],
    deck: "methode",
});

export const methodeDeck = [
    { card: a_scatterShot, count: 2 },
    { card: a_delayedShot, count: 2 },
    { card: a_piercingShot, count: 2 },
    { card: polymath, count: 2 },
    { card: one_step_ahead, count: 1 },
    { card: manaDetection, count: 1 },
    { card: reversePolarity, count: 1 },
    { card: restraintMagic, count: 2 },
    { card: hypnoticCompulsion, count: 1 },
    { card: goddessHealingMagic, count: 1 },
    { card: spotWeakness, count: 1 },
];
