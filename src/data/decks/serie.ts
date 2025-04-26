import { Card } from "@/lib/classes/Card";
import { CardEmoji } from "@/lib/enums";
import { fieldOfFlower } from "./frieren";
import { Nature } from "@/lib/types";

export const a_livingGrimoireOffensive = new Card({
    title: "Living Grimoire: Offense Chapter",
    description: () => "Use a random offensive magic.",
    emoji: CardEmoji.SERIE_CARD,
    cosmetic: {
        cardImageUrl: "/cards/Living_Grimoire.webp",
    },
    effects: [],
    cardCategories: ["Attack"],
    effectNames: [],
    deck: "serie",
});

export const a_livingGrimoireUtility = new Card({
    title: "Living Grimoire: Utility Chapter",
    description: () => "Use a random utility magic.",
    emoji: CardEmoji.SERIE_CARD,
    cosmetic: {
        cardImageUrl: "/cards/Living_Grimoire.webp",
    },
    effects: [],
    cardCategories: ["Utility"],
    effectNames: [],
    deck: "serie",
});

export const a_livingGrimoireOffensive1 = new Card({
    ...a_livingGrimoireOffensive,
    cosmetic: {
        cardImageUrl: "/cards/Living_Grimoire1.webp",
    },
    empowerLevel: 1,
    deck: "serie",
});

const a_livingGrimoireOffensive2 = new Card({
    ...a_livingGrimoireOffensive,
    empowerLevel: 2,
    cosmetic: {
        cardImageUrl: "/cards/Living_Grimoire2.webp",
    },
    deck: "serie",
});

export const basicDefensiveMagic = new Card({
    title: "Basic Defensive Magic",
    description: ([def]) => `Priority+2. Increases DEF by ${def} until the end of the turn.`,
    emoji: CardEmoji.SERIE_CARD,
    cosmetic: {
        cardImageUrl: "/cards/Basic_Defense_Magic.webp",
    },
    effects: [30],
    priority: 2,
    cardCategories: ["Utility", "Defense", "Block"],
    effectNames: ["DEF"],
    deck: "serie",
});

export const unbreakableBarrier = new Card({
    title: "Unbreakable Barrier",
    description: ([atk, def, oppSpd]) =>
        `HP-10. ATK+${atk} for 5 turns. DEF+${def} for 5 turns. Opponent's SPD-${oppSpd} for 5 turns.`,
    emoji: CardEmoji.SERIE_CARD,
    cosmetic: {
        cardImageUrl: "/cards/Unbreakable_Barrier.webp",
    },
    effects: [5, 5, 5],
    cardCategories: ["Utility", "Defense"],
    effectNames: ["ATK", "DEF", "-OpponentSPD"],
    deck: "serie",
});

export const ancientBarrierMagic = new Card({
    title: "Ancient Barrier Magic",
    description: ([atk, def, oppSpd]) =>
        `HP-20. ATK+${atk} for 7 turns. Opponent's DEF-${def} for 7 turns. Opponent's SPD -${oppSpd} for 7 turns.`,
    emoji: CardEmoji.SERIE_CARD,
    cosmetic: {
        cardImageUrl: "/cards/Ancient_Barrier_Magic.webp",
    },
    effects: [7, 7, 7],
    cardMetadata: { nature: Nature.Attack, signature: true },
    cardCategories: ["Utility", "Defense"],
    effectNames: ["ATK", "DEF", "-OpponentSPD"],
    deck: "serie",
});

export const mock = new Card({
    title: "Mock",
    description: ([hp, def, spd]) => `HP+${hp}. Opponent's DEF-${def}. Opponent's SPD-${spd}`,
    emoji: CardEmoji.SERIE_CARD,
    cosmetic: {
        cardImageUrl: "/cards/Mock.webp",
    },
    effects: [3, 2, 1],
    cardCategories: ["Utility"],
    effectNames: ["HP", "-OpponentDEF", "-OpponentSPD"],
    deck: "serie",
});

export const serieDeck = [
    { card: a_livingGrimoireOffensive, count: 2 },
    { card: a_livingGrimoireOffensive1, count: 2 },
    { card: a_livingGrimoireOffensive2, count: 2 },
    { card: a_livingGrimoireUtility, count: 2 },
    { card: fieldOfFlower, count: 1 },
    { card: mock, count: 2 },
    { card: basicDefensiveMagic, count: 1 },
    { card: unbreakableBarrier, count: 2 },
    { card: ancientBarrierMagic, count: 1 },
];
