import { Card } from "@/lib/classes/Card";
import { CardEmoji } from "@/lib/enums";

export const a_hairWhip = new Card({
    title: "Hair Whip",
    description: ([def, dmg]) => `DEF+${def}. Afterwards, HP-4, DMG ${dmg}+DEF/4.`,
    effects: [2, 7],
    emoji: CardEmoji.PUNCH,
    cardCategories: ["Attack"],
    effectNames: ["DEF", "DMG"],
    deck: "sense",
});

export const harden = new Card({
    title: "Harden",
    description: ([def]) => `HP-2. DEF+${def}`,
    effects: [2],
    emoji: CardEmoji.SHIELD,
    cardCategories: ["Utility", "Defense"],
    effectNames: ["DEF"],
    deck: "sense",
});

export const rest = new Card({
    title: "Rest",
    description: ([hp]) => `DEF-2. Heal ${hp} HP`,
    effects: [10],
    emoji: CardEmoji.HEART,
    cardCategories: ["Utility", "Healing"],
    effectNames: ["Heal HP"],
    deck: "sense",
});

export const a_pierce = new Card({
    title: "Pierce",
    description: ([def, dmg]) =>
        `HP-7. DEF+${def}. Afterwards, DMG ${dmg} + (DEF/4). Pierces through 1/4 of the opponent's defense.`,
    effects: [1, 10],
    emoji: CardEmoji.PUNCH,
    cardCategories: ["Attack"],
    effectNames: ["DEF", "DMG"],
    deck: "sense",
});

const hairBarrier = new Card({
    title: "Hair Barrier",
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
    description: ([atk, hp]) =>
        `ATK+${atk} for both characters. Heal ${hp} for both characters. Gain 1 Tea Time snack.`,
    effects: [2, 5],
    tags: { TeaTime: 1 },
    emoji: CardEmoji.HEART,
    cardCategories: ["Utility", "Healing"],
    effectNames: ["ATK", "HP"],
    deck: "sense",
});

export const teaParty = new Card({
    title: "Tea Party",
    description: ([atk, hp]) =>
        `ATK+${atk} for both characters. Heal ${hp} for both characters. Gain 2 Tea Time snacks.`,
    effects: [3, 7],
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
    cardCategories: ["Attack"],
    effectNames: ["DMG"],
    deck: "sense",
});

export const senseDeck = [
    { card: a_hairWhip, count: 2 },
    { card: harden, count: 2 },
    { card: rest, count: 1 },
    { card: a_pierce, count: 2 },
    { card: hairBarrier, count: 3 },
    { card: teaTime, count: 2 },
    { card: teaParty, count: 1 },
    { card: a_piercingDrill, count: 2 },
];
