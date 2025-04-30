import { Card } from "@/lib/classes/Card";
import { CardEmoji } from "@/lib/enums";
import { fieldOfFlower } from "./frieren";
import { Nature } from "@/lib/types";

export const a_livingGrimoireOffenseCommon = new Card({
    title: "Living Grimoire: Offense Chapter. 3rd Class Magic section.",
    cardMetadata: { nature: Nature.Attack },
    description: () => "Use a random common offensive magic.",
    emoji: CardEmoji.SERIE_CARD,
    effects: [],
    effectNames: [],
    cardCategories: ["Attack"],
    deck: "serie",
});

export const a_livingGrimoireOffenseRare = new Card({
    title: "Living Grimoire: Offense Chapter. 1st Class Magic section.",
    cardMetadata: { nature: Nature.Attack },
    description: () => "Use a random rare offensive magic.",
    emoji: CardEmoji.SERIE_CARD,
    effects: [],
    effectNames: [],
    cardCategories: ["Attack"],
    deck: "serie",
});

export const a_livingGrimoireOffenseUnusual = new Card({
    title: "Living Grimoire: Offense Chapter. Great Mage's Magic section.",
    cardMetadata: { nature: Nature.Attack },
    description: () => "Use a random unusual offensive magic.",
    emoji: CardEmoji.SERIE_CARD,
    effects: [],
    effectNames: [],
    cardCategories: ["Attack", "Utility"],
    deck: "serie",
});

export const a_livingGrimoireUtilityTactics = new Card({
    title: "Living Grimoire: Utility Chapter. Tactics Section.",
    cardMetadata: { nature: Nature.Util },
    description: () => "Use a random stats adjusting utility magic.",
    emoji: CardEmoji.SERIE_CARD,
    effects: [],
    effectNames: [],
    cardCategories: ["Utility"],
    deck: "serie",
});

export const a_livingGrimoireUtilityRecovery = new Card({
    title: "Living Grimoire: Utility Chapter. Recovery Section.",
    cardMetadata: { nature: Nature.Util },
    description: () => "Use a random HP recovery utility magic.",
    emoji: CardEmoji.SERIE_CARD,
    cosmetic: {
        cardImageUrl:
            "https://cdn.discordapp.com/attachments/1351391350398128159/1352873014785740800/Living_Grimoire_1.png?ex=6808772d&is=680725ad&hm=96a1d24a30264ade70debfc8ffe00506330d2b9ed559386e1a69a1c19bc647e9&",
    },
    effects: [],
    effectNames: [],
    cardCategories: ["Utility"],
    deck: "serie",
});

export const basicDefensiveMagic = new Card({
    title: "Basic Defensive Magic",
    cardMetadata: { nature: Nature.Defense },
    description: ([def]) => `Priority+2. Increases DEF by ${def} until the end of the turn.`,
    emoji: CardEmoji.SERIE_CARD,
    effects: [20],
    priority: 2,
    cosmetic: {
        cardImageUrl: "/cards/Basic_Defense_Magic.webp",
    },
    cardCategories: ["Utility", "Defense", "Block"],
    effectNames: ["DEF"],
    deck: "serie",
});

export const unbreakableBarrier = new Card({
    title: "Unbreakable Barrier",
    cardMetadata: { nature: Nature.Util },
    description: ([atk, def, oppSpd]) =>
        `HP-10. ATK+${atk} for 5 turns. DEF+${def} for 5 turns. Opponent's SPD-${oppSpd} for 5 turns.`,
    emoji: CardEmoji.SERIE_CARD,
    effects: [5, 5, 5],
    hpCost: 10,
    cosmetic: {
        cardImageUrl: "/cards/Unbreakable_Barrier.webp",
    },
    cardCategories: ["Utility", "Defense"],
    effectNames: ["ATK", "DEF", "-OpponentSPD"],
    deck: "serie",
});

export const ancientBarrierMagic = new Card({
    title: "Ancient Barrier Magic",
    description: ([atk, def, oppSpd]) =>
        `HP-10. HP-2 at the end of the next 5 turns. ATK+${atk}, Opponent's DEF-${def} and Opponent's SPD -${oppSpd} for 5 turns.`,
    emoji: CardEmoji.SERIE_CARD,
    cosmetic: {
        cardImageUrl: "/cards/Ancient_Barrier_Magic.webp",
    },
    effects: [7, 7, 7],
    cardMetadata: { nature: Nature.Attack, signature: true },
    cardCategories: ["Utility", "Defense"],
    effectNames: ["ATK", "DEF", "-OpponentSPD"],
    deck: "serie",
    hpCost: 10,
});

export const mock = new Card({
    title: "Mock",
    cardMetadata: { nature: Nature.Util },
    description: ([hp, def, spd]) => `HP+${hp}. Opponent's DEF-${def}. Opponent's SPD-${spd}`,
    emoji: CardEmoji.SERIE_CARD,
    effects: [3, 2, 1],
    cosmetic: {
        cardImageUrl: "/cards/Mock.webp",
    },
    cardCategories: ["Utility"],
    effectNames: ["HP", "-OpponentDEF", "-OpponentSPD"],
    deck: "serie",
});

export const serieDeck = [
    { card: a_livingGrimoireOffenseCommon, count: 3 },
    { card: a_livingGrimoireOffenseRare, count: 2 },
    { card: a_livingGrimoireOffenseUnusual, count: 1 },
    { card: a_livingGrimoireUtilityTactics, count: 1 },
    { card: a_livingGrimoireUtilityRecovery, count: 1 },
    { card: fieldOfFlower, count: 1 },
    { card: mock, count: 2 },
    { card: basicDefensiveMagic, count: 2 },
    { card: unbreakableBarrier, count: 2 },
    { card: ancientBarrierMagic, count: 1 },
];
