import { Card } from "@/lib/classes/Card";
import { CardEmoji } from "@/lib/enums";
import { Nature } from "@/lib/types";

export const tacticalRetreat = new Card({
    title: "Tactical Retreat",
    cardMetadata: { nature: Nature.Util },
    description: ([trueDef]) =>
        `TrueDEF+${trueDef} for 2 turns. Using an attack aside from "Ehre: Hailstorm - Doragate" will cost an additional 10HP while the effect is active, and will end the effect.`,
    effects: [10],
    emoji: CardEmoji.WIRBEL_CARD,
    cardCategories: ["Utility"],
    effectNames: ["DEF"],
    deck: "wirbel",
});

export const scharfJubelade = new Card({
    title: "Scharf: Barrier of Steel Petals - Jubelade",
    cardMetadata: { nature: Nature.Util },
    description: ([def]) => `Increases DEF by ${def} for 3 turns.`,
    effects: [4],
    emoji: CardEmoji.WIRBEL_CARD,
    priority: 2,
    cardCategories: ["Utility"],
    effectNames: ["DEF"],
    deck: "wirbel",
});

export const emergencyDefensiveBarrier = new Card({
    title: "Emergency Defensive Barrier",
    cardMetadata: { nature: Nature.Defense },
    description: ([def]) => `Increases TrueDEF by ${def} until the end of the turn.`,
    effects: [20],
    emoji: CardEmoji.WIRBEL_CARD,
    priority: 2,
    cardCategories: ["Utility", "Defense", "Block"],
    effectNames: ["DEF"],
    deck: "wirbel",
});

const a_spearRush = new Card({
    title: "Spear Rush",
    cardMetadata: { nature: Nature.Attack },
    description: ([spd, dmg]) => `SPD+${spd}. DMG ${dmg} x 3. Pierces 15% of DEF.`,
    emoji: CardEmoji.WIRBEL_CARD,
    effects: [2, 3],
    hpCost: 7,
    cardCategories: ["Attack"],
    effectNames: ["SPD", "DMG"],
    deck: "wirbel",
});

const captainsOrder = new Card({
    title: "Captain's Order",
    cardMetadata: { nature: Nature.Attack },
    description: ([atk, def, spd, dmg]) =>
        `If the Opp's DEF > your ATK, ATK+${atk}, DEF+${def}, SPD+${spd}. Else, DMG ${dmg}.`,
    emoji: CardEmoji.WIRBEL_CARD,
    effects: [3, 1, 2, 10],
    hpCost: 4,
    cardCategories: ["Attack"],
    effectNames: ["ATK", "DEF", "SPD", "DMG"],
    deck: "wirbel",
});

export const a_ehreDoragate = new Card({
    title: "Ehre: Bulletstorm - Doragate",
    cardMetadata: { nature: Nature.Attack },
    description: ([dmg]) => `DMG ${dmg}. At the end of the next 2 turns, DMG ${dmg}. Pierces 30% of DEF.`,
    emoji: CardEmoji.WIRBEL_CARD,
    effects: [1],
    cardCategories: ["Attack"],
    effectNames: ["DMG"],
    deck: "wirbel",
});

export const perfectSorganeil = new Card({
    title: "Perfect Sorganeil",
    cardMetadata: {
        nature: Nature.Attack,
        signature: true,
    },
    description: ([dmg]) =>
        `DMG ${dmg}. Will fail if the opponent's SPD is higher than your SPD by 50 or more. Set opponent's SPD to 1. Clear opponent's timed effects. Opponent can only perform Default actions next turn.`,
    emoji: CardEmoji.WIRBEL_CARD,
    priority: -1,
    effects: [1],
    cardCategories: ["Attack", "Utility"],
    effectNames: ["DMG"],
    deck: "wirbel",
});

export const a_concentratedZoltraakBolt = new Card({
    title: "Concentrated Zoltraak Bolt",
    cardMetadata: { nature: Nature.Attack },
    description: ([dmg]) => `DMG ${dmg}.`,
    emoji: CardEmoji.WIRBEL_CARD,
    effects: [18],
    hpCost: 12,
    cardCategories: ["Attack"],
    effectNames: ["DMG"],
    deck: "wirbel",
});

export const wirbelDeck = [
    { card: tacticalRetreat, count: 2 },
    { card: emergencyDefensiveBarrier, count: 2 },
    { card: scharfJubelade, count: 2 },
    { card: captainsOrder, count: 3 },
    { card: a_spearRush, count: 2 },
    { card: a_ehreDoragate, count: 2 },
    { card: perfectSorganeil, count: 2 },
    { card: a_concentratedZoltraakBolt, count: 1 },
];
