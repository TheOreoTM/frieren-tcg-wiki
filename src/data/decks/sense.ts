import { Card } from "@/lib/classes/Card";
import { CardEmoji } from "@/lib/enums";
import { Nature } from "@/lib/types";

export const a_hairWhip = new Card({
    title: "Hair Whip",
    cardMetadata: { nature: Nature.Attack },
    description: ([def, dmg]) => `DEF+${def}. Afterwards, HP-4, DMG ${dmg}+DEF/4.`,
    effects: [3, 7],
    emoji: CardEmoji.PUNCH,
    cardCategories: ["Attack"],
    effectNames: ["DEF", "DMG"],
    deck: "sense",
    hpCost: 4,
});

export const sharpen = new Card({
    title: "Sharpen",
    cardMetadata: { nature: Nature.Util },
    description: ([def, atk]) => `HP-1. DEF+${def}. ATK+${atk}.`,
    effects: [2, 2],
    emoji: CardEmoji.PUNCH,
    cardCategories: ["Utility", "Defense"],
    effectNames: ["DEF"],
    deck: "sense",
    hpCost: 1,
});

export const rest = new Card({
    title: "Rest",
    cardMetadata: { nature: Nature.Util },
    description: ([hp]) => `DEF-2 for 2 turns. Heal ${hp} HP`,
    effects: [10],
    emoji: CardEmoji.HEART,
    cardCategories: ["Utility", "Healing"],
    effectNames: ["Heal HP"],
    deck: "sense",
});

export const a_pierce = new Card({
    title: "Pierce",
    cardMetadata: { nature: Nature.Attack },
    description: ([def, dmg]) =>
        `HP-7. DEF+${def}. Afterwards, DMG ${dmg} + (DEF/4). Pierces through 1/4 of the opponent's defense.`,
    effects: [2, 10],
    emoji: CardEmoji.PUNCH,
    cardCategories: ["Attack"],
    effectNames: ["DEF", "DMG"],
    deck: "sense",
    hpCost: 7,
});

export const hairBarrier = new Card({
    title: "Hair Barrier",
    cardMetadata: { nature: Nature.Defense },
    description: ([def]) => `Priority+2. Increases DEF by ${def} until the end of the turn.`,
    effects: [20],
    emoji: CardEmoji.HOURGLASS,
    priority: 2,
    cardCategories: ["Utility", "Defense", "Block"],
    effectNames: ["DEF"],
    deck: "sense",
});

export const teaTime = new Card({
    title: "Tea Time",
    cardMetadata: { nature: Nature.Util },
    description: ([hp]) => `Empower both characters' hands. Heal ${hp} for both characters. Gain 1 Tea Time snack.`,
    effects: [4],
    tags: { TeaTime: 1 },
    emoji: CardEmoji.HEART,
    cardCategories: ["Utility", "Healing"],
    effectNames: ["ATK", "HP"],
    deck: "sense",
});

export const teaParty = new Card({
    title: "Tea Party",
    cardMetadata: { nature: Nature.Util },
    description: ([hp]) =>
        `Empower both characters' hands twice. Heal ${hp} for both characters. Gain 2 Tea Time snacks.`,
    effects: [7],
    tags: { TeaTime: 2 },
    emoji: CardEmoji.RANDOM,
    cardCategories: ["Utility", "Healing"],
    effectNames: ["ATK", "HP"],
    deck: "sense",
});

export const a_piercingDrill = new Card({
    title: "Piercing Drill",
    description: ([dmg]) => `HP-12. DMG ${dmg} + DEF/3. Pierces through 1/3 of the opponent's defense.`,
    effects: [14],
    emoji: CardEmoji.PUNCH,
    cardMetadata: { nature: Nature.Attack, signature: true },
    cardCategories: ["Attack"],
    effectNames: ["DMG"],
    deck: "sense",
    hpCost: 12,
});

export const senseDeck = [
    { card: a_hairWhip, count: 2 },
    { card: sharpen, count: 2 },
    { card: rest, count: 1 },
    { card: a_pierce, count: 2 },
    { card: hairBarrier, count: 3 },
    { card: teaTime, count: 2 },
    { card: teaParty, count: 2 },
    { card: a_piercingDrill, count: 2 },
];
