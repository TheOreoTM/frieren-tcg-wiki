import { Card } from "@/lib/classes/Card";
import { CardEmoji } from "@/lib/enums";
import { fieldOfFlower } from "./frieren";
import { CardCategory, Nature } from "@/lib/types";

export const a_livingGrimoireOffenseCommon = new Card({
    title: "Living Grimoire: Offense Chapter. 3rd Class Magic Section.",
    cardMetadata: { nature: Nature.Attack },
    description: () => "Use a random common offensive magic.",
    emoji: CardEmoji.SERIE_CARD,
    cosmetic: {
        cardImageUrl: "/cards/Living_Grimoire_1.webp",
    },
    effects: [],
    effectNames: [],
    cardCategories: [CardCategory.ATTACK, CardCategory.UNIQUE],
    deck: "serie",
});

export const a_livingGrimoireOffenseRare = new Card({
    title: "Living Grimoire: Offense Chapter. 1st Class Magic Section.",
    cardMetadata: { nature: Nature.Attack },
    description: () => "Use a random rare offensive magic.",
    emoji: CardEmoji.SERIE_CARD,
    cosmetic: {
        cardImageUrl: "/cards/Living_Grimoire1_1.webp",
    },
    effects: [],
    effectNames: [],
    cardCategories: [CardCategory.ATTACK, CardCategory.UNIQUE],
    deck: "serie",
});

export const a_livingGrimoireOffenseUnusual = new Card({
    title: "Living Grimoire: Offense Chapter. Great Mage's Magic Section.",
    cardMetadata: { nature: Nature.Attack },
    description: () => "Use a random unusual offensive magic.",
    emoji: CardEmoji.SERIE_CARD,
    cosmetic: {
        cardImageUrl: "/cards/Living_Grimoire2_1.webp",
    },
    effects: [],
    effectNames: [],
    cardCategories: [CardCategory.ATTACK, CardCategory.UNIQUE],
    deck: "serie",
});

export const a_livingGrimoireUtilityTactics = new Card({
    title: "Living Grimoire: Utility Chapter. Tactics Section.",
    cardMetadata: { nature: Nature.Util },
    description: () => "Use a random stats adjusting utility magic.",
    emoji: CardEmoji.SERIE_CARD,
    cosmetic: {
        cardImageUrl: "/cards/Living_Grimoire_1.webp",
    },
    effects: [],
    effectNames: [],
    cardCategories: [CardCategory.UTILITY, CardCategory.UNIQUE],
    deck: "serie",
});

export const a_livingGrimoireUtilityRecovery = new Card({
    title: "Living Grimoire: Utility Chapter. Recovery Section.",
    cardMetadata: { nature: Nature.Util },
    description: () => "Use a random HP recovery utility magic.",
    emoji: CardEmoji.SERIE_CARD,
    cosmetic: {
        cardImageUrl: "/cards/Living_Grimoire_1.webp",
    },
    effects: [],
    effectNames: [],
    cardCategories: [CardCategory.UTILITY, CardCategory.HEALING, CardCategory.UNIQUE],
    deck: "serie",
});

export const mock = new Card({
    title: "Mock",
    cardMetadata: { nature: Nature.Util },
    description: ([hp, spd, def]) => `HP+${hp}. SPD+${spd}. Opponent's DEF-${def}.`,
    emoji: CardEmoji.SERIE_CARD,
    cosmetic: {
        cardImageUrl: "/cards/Mock.webp",
    },
    effects: [3, 2, 1],
    cardCategories: [CardCategory.UTILITY, CardCategory.HEALING, CardCategory.BUFF, CardCategory.DEBUFF],
    effectNames: ["HP", "SPD", "-Opp DEF"],
    deck: "serie",
});

export const basicDefensiveMagic = new Card({
    title: "Basic Defensive Magic",
    cardMetadata: { nature: Nature.Defense },
    description: ([def]) => `Priority+2. Increases TrueDEF by ${def} until the end of the turn.`,
    emoji: CardEmoji.SERIE_CARD,
    cosmetic: {
        cardImageUrl: "/cards/Basic_Defense_Magic.webp",
    },
    effects: [20],
    priority: 2,
    cardCategories: [CardCategory.DEFENSE, CardCategory.BLOCK],
    effectNames: ["TrueDEF"],
    deck: "serie",
});

export const unbreakableBarrier = new Card({
    title: "Unbreakable Barrier",
    cardMetadata: { nature: Nature.Util },
    description: ([atk, def, oppSpd]) =>
        `HP-5. HP-2 at the end of the next 5 turns. ATK+${atk}, DEF+${def} and Opponent's SPD-${oppSpd} for 5 turns.`,
    emoji: CardEmoji.SERIE_CARD,
    cosmetic: {
        cardImageUrl: "/cards/Unbreakable_Barrier.webp",
    },
    effects: [5, 5, 5],
    hpCost: 5,
    cardCategories: [CardCategory.UTILITY, CardCategory.BUFF, CardCategory.DEBUFF, CardCategory.DoT],
    effectNames: ["ATK", "DEF", "-Opp SPD"],
    deck: "serie",
});

// This card's definition is based on the wiki code example provided.
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
    cardCategories: [CardCategory.UTILITY, CardCategory.DEFENSE, CardCategory.BUFF, CardCategory.DEBUFF],
    effectNames: ["ATK", "-Opp DEF", "-Opp SPD"],
    deck: "serie",
    hpCost: 10,
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
