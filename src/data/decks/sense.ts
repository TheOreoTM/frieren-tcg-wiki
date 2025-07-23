import { Card } from "@/lib/classes/Card";
import { CardEmoji } from "@/lib/enums";
import { CardCategory, Nature } from "@/lib/types";
import { manaConcealment } from "./fern";

export const a_hairWhip = new Card({
    title: "Hair Whip",
    cardMetadata: { nature: Nature.Attack },
    description: ([def, dmg]) => `HP-4. DEF+${def}. Afterwards, DMG ${dmg}+DEF/4.`,
    effects: [3, 7],
    hpCost: 4,
    emoji: CardEmoji.PUNCH,
    cardCategories: [CardCategory.ATTACK, CardCategory.BUFF],
    effectNames: ["DEF", "DMG"],
    deck: "sense",
});

export const sharpen = new Card({
    title: "Sharpen",
    cardMetadata: { nature: Nature.Util },
    description: ([def, atk, spd]) => `HP-3. DEF+${def}. ATK+${atk}. SPD+${spd}`,
    effects: [1, 2, 2],
    hpCost: 3,
    emoji: CardEmoji.PUNCH,
    cardCategories: [CardCategory.UTILITY, CardCategory.BUFF],
    effectNames: ["DEF", "ATK", "SPD"],
    deck: "sense",
});

export const a_pierce = new Card({
    title: "Pierce",
    cardMetadata: { nature: Nature.Attack },
    description: ([def, dmg]) =>
        `HP-7. DEF+${def}. Afterwards, DMG ${dmg} + (DEF/4). Pierces through 1/4 of the opponent's defense.`,
    effects: [1, 10],
    hpCost: 7,
    emoji: CardEmoji.PUNCH,
    cardCategories: [CardCategory.ATTACK, CardCategory.PIERCE, CardCategory.BUFF],
    effectNames: ["DEF", "DMG"],
    deck: "sense",
});

export const hairBarrier = new Card({
    title: "Hair Barrier",
    cardMetadata: { nature: Nature.Defense },
    description: ([def]) => `Priority+2. Increases TrueDEF by ${def} until the end of the turn.`,
    effects: [20],
    emoji: CardEmoji.HOURGLASS,
    priority: 2,
    cardCategories: [CardCategory.DEFENSE, CardCategory.BLOCK],
    effectNames: ["TrueDEF"],
    deck: "sense",
});

export const teaTime = new Card({
    title: "Tea Time",
    cardMetadata: { nature: Nature.Util },
    description: ([hp]) => `Heal ${hp}. Gain 1 Tea Time snack.`,
    effects: [7],
    tags: { TeaTime: 1 },
    emoji: CardEmoji.HEART,
    cardCategories: [CardCategory.UTILITY, CardCategory.HEALING],
    effectNames: ["HP"],
    deck: "sense",
});

export const teaParty = new Card({
    title: "Tea Party",
    cardMetadata: { nature: Nature.Util },
    description: ([hp]) => `Heal ${hp}. Gain 2 Tea Time snacks.`,
    effects: [10],
    tags: { TeaTime: 2 },
    emoji: CardEmoji.HEART,
    cardCategories: [CardCategory.UTILITY, CardCategory.HEALING],
    effectNames: ["HP"],
    deck: "sense",
});

export const a_piercingDrill = new Card({
    title: "Piercing Drill",
    description: ([dmg]) => `HP-12. DMG ${dmg} + DEF/3. Pierces through 1/3 of the opponent's defense.`,
    effects: [14],
    hpCost: 12,
    emoji: CardEmoji.PUNCH,
    cardMetadata: { nature: Nature.Attack, signature: true },
    cardCategories: [CardCategory.ATTACK, CardCategory.PIERCE],
    effectNames: ["DMG"],
    deck: "sense",
});

export const senseDeck = [
    { card: a_hairWhip, count: 2 },
    { card: sharpen, count: 1 },
    { card: manaConcealment, count: 2 },
    { card: a_pierce, count: 2 },
    { card: hairBarrier, count: 3 },
    { card: teaTime, count: 2 },
    { card: teaParty, count: 2 },
    { card: a_piercingDrill, count: 2 },
];
