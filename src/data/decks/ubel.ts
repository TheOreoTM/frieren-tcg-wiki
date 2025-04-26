import { Card } from "@/lib/classes/Card";
import { CardEmoji } from "@/lib/enums";
import { Nature } from "@/lib/types";

export const empathyFailureName = "Stalking";

const a_reelseiden = new Card({
    title: "Reelseiden",
    description: ([dmg]) => `HP-4 Has a 20% of missing if the opponent didn't attack last turn. DMG ${dmg}.`,
    emoji: CardEmoji.UBEL_CARD,
    effects: [8],
    tags: {
        FailureRate: 20,
    },
    cardCategories: ["Attack"],
    effectNames: ["DMG"],
    deck: "ubel",
});

const a_cleave = new Card({
    title: "Cleave",
    description: ([dmg]) => `HP-6. Has a 40% of missing if the opponent didn't attack last turn. DMG ${dmg}.`,
    emoji: CardEmoji.UBEL_CARD,
    effects: [12],
    effectNames: ["DMG"],
    cardMetadata: { nature: Nature.Attack, ubelFailureRate: 40 },
    hpCost: 6,
    deck: "ubel",
});

const a_dismantle = new Card({
    title: "Dismantle",
    description: ([dmg]) => `HP-8. Has a 60% of missing if the opponent didn't attack last turn. DMG ${dmg}.`,
    emoji: CardEmoji.UBEL_CARD,
    effects: [16],
    effectNames: ["DMG"],
    cardMetadata: { nature: Nature.Attack, ubelFailureRate: 60 },
    hpCost: 8,
    deck: "ubel",
});

export const rushdown = new Card({
    title: "Rushdown",
    cardMetadata: { nature: Nature.Util },
    description: ([spd]) =>
        `Increases SPD by ${spd} for 3 turns. Attacks will not miss during this period. At the end of every turn, HP-5.`,
    emoji: CardEmoji.UBEL_CARD,
    effects: [10],
    effectNames: ["SPD"],
    deck: "ubel",
});

const recompose = new Card({
    title: "Recompose",
    cardMetadata: { nature: Nature.Util },
    description: ([hp]) => `SPD-10 for 2 turns. Heal ${hp}HP, then ${0.5 * Number(hp)}HP at the end of each turn.`,
    emoji: CardEmoji.UBEL_CARD,
    effects: [10],
    effectNames: ["HP"],
    deck: "ubel",
});

const defend = new Card({
    title: "Defend",
    cardMetadata: { nature: Nature.Defense },
    description: ([def]) => `Priority+2. Increases DEF by ${def} until the end of the turn.`,
    emoji: CardEmoji.UBEL_CARD,
    effects: [20],
    priority: 2,
    effectNames: ["DEF"],
    deck: "ubel",
});

export const sorganeil = new Card({
    title: "Sorganeil",
    cardMetadata: { nature: Nature.Util },
    description: () => `Priority-1. Opponent can only wait next turn. Attacks will hit with 100% certainty.`,
    emoji: CardEmoji.UBEL_CARD,
    priority: -2,
    effects: [],
    effectNames: [],
    deck: "ubel",
});

export const empathy = new Card({
    title: "Empathy",
    cardMetadata: { nature: Nature.Util },
    description: () =>
        `Will fail if used before turn 5. Use the opponent's signature move at this card's empower level -2.`,
    emoji: CardEmoji.UBEL_CARD,
    effects: [],
    effectNames: [],
    deck: "ubel",
});

const a_malevolentShrine = new Card({
    title: "Malevolent Shrine",
    description: ([dmg]) => `HP-11. Has a 80% of missing if the opponent didn't attack last turn. DMG ${dmg}.`,
    cosmetic: {
        cardGif: "/cards/Malevolent_Shrine_Ubel.gif",
    },
    emoji: CardEmoji.UBEL_CARD,
    cardMetadata: { nature: Nature.Attack, signature: true, ubelFailureRate: 80 },
    effects: [22],
    effectNames: ["DMG"],
    hpCost: 11,
    deck: "ubel",
});

export const ubelDeck = [
    { card: a_reelseiden, count: 3 },
    { card: a_cleave, count: 2 },
    { card: a_dismantle, count: 2 },
    { card: a_malevolentShrine, count: 1 },
    { card: rushdown, count: 2 },
    { card: defend, count: 1 },
    { card: recompose, count: 2 },
    { card: sorganeil, count: 1 },
    { card: empathy, count: 1 },
];
