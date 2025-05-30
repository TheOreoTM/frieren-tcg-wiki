import { Card } from "@/lib/classes/Card";
import { CardEmoji } from "@/lib/enums";
import { Nature } from "@/lib/types";

const a_axeSwipe = new Card({
    title: "Axe Swipe",
    cardMetadata: { nature: Nature.Attack },
    description: ([dmg]) => `HP-5. DMG ${dmg}. Uses 0 Resolve.`,
    emoji: CardEmoji.STARK_CARD,
    tags: { Resolve: 0 },
    effects: [9],
    cardCategories: ["Attack"],
    effectNames: ["DMG"],
    deck: "stark",
    hpCost: 5,
});

const offensiveStance = new Card({
    title: "Offensive Stance",
    cardMetadata: { nature: Nature.Util },
    description: ([atk, spd]) => `ATK+${atk}. DEF-2 for 2 turns. SPD+${spd}. Gain 1 <Resolve>.`,
    emoji: CardEmoji.STARK_CARD,
    effects: [2, 2],
    tags: { Resolve: 1 },
    cardCategories: ["Utility"],
    effectNames: ["ATK", "SPD"],
    deck: "stark",
});

const defensiveStance = new Card({
    title: "Defensive Stance",
    cardMetadata: { nature: Nature.Util },
    description: ([def, spd]) => `DEF+${def}. ATK-2 for 2 turns. SPD+${spd}. Gain 1 <Resolve>.`,
    emoji: CardEmoji.STARK_CARD,
    effects: [2, 2],
    tags: { Resolve: 1 },
    cardCategories: ["Utility"],
    effectNames: ["DEF", "SPD"],
    deck: "stark",
});

const jumboBerrySpecialBreak = new Card({
    title: "Jumbo Berry Special Break",
    cardMetadata: { nature: Nature.Util },
    description: ([def, hp]) =>
        `SPD-2 for 2 turns. DEF+${def} for 2 turns. Heal ${hp} HP. Gain 1 <Resolve> at the end of next turn.`,
    emoji: CardEmoji.JUMBO_BERRY_CARD,
    effects: [2, 10],
    cardCategories: ["Utility", "Healing"],
    effectNames: ["DEF", "HP"],
    deck: "stark",
});

export const block = new Card({
    title: "Block",
    cardMetadata: { nature: Nature.Defense },
    description: ([def]) => `Priority+2. Increases TrueDEF by ${def} until the end of the turn.`,
    emoji: CardEmoji.STARK_CARD,
    effects: [20],
    priority: 2,
    cardCategories: ["Utility", "Defense", "Block"],
    effectNames: ["DEF"],
    deck: "stark",
});

const concentration = new Card({
    title: "Concentration",
    cardMetadata: { nature: Nature.Util },
    description: ([spd]) => `Increases SPD by ${spd}. Gain 2 <Resolve>.`,
    emoji: CardEmoji.STARK_CARD,
    effects: [3],
    tags: { Resolve: 2 },
    cardCategories: ["Utility"],
    effectNames: ["SPD"],
    deck: "stark",
});

const a_ordensSlashTechnique = new Card({
    title: "Orden's Slash Technique",
    cardMetadata: { nature: Nature.Attack },
    description: ([dmg]) => `HP-8. DMG ${dmg}`,
    emoji: CardEmoji.STARK_CARD,
    tags: { Resolve: -1 },
    effects: [14],
    hpCost: 8,
    cardCategories: ["Attack"],
    effectNames: ["DMG"],
    deck: "stark",
});

const fearBroughtMeThisFar = new Card({
    title: "Fear Brought Me This Far",
    cardMetadata: { nature: Nature.Util },
    description: ([atkDef]) => `Increases ATK and DEF by ${atkDef}. Gain 2 <Resolve>.`,
    emoji: CardEmoji.STARK_CARD,
    effects: [3],
    tags: { Resolve: 2 },
    cardCategories: ["Utility"],
    effectNames: ["ATK+DEF", "ATK+DEF"],
    deck: "stark",
});
const a_eisensAxeCleave = new Card({
    title: "Eisen's Axe Cleave",
    cardMetadata: { nature: Nature.Attack },
    description: ([dmg]) => `HP-11. DMG ${dmg}. Uses up 2 Resolve stack.`,
    emoji: CardEmoji.STARK_CARD,
    tags: { Resolve: -2 },
    effects: [19],
    hpCost: 11,
    cardCategories: ["Attack"],
    effectNames: ["DMG"],
    deck: "stark",
});

export const a_lastStand = new Card({
    title: "Last Stand",
    description: ([dmg]) =>
        `Priority+1. DEF-5 for 2 turns. This character's HP cannot drop below 1 for 2 turns. At the end of next turn, HP-20, use 2 Resolves, strike for DMG ${dmg}.`,
    emoji: CardEmoji.STARK_CARD,
    cardMetadata: { nature: Nature.Attack, signature: true },
    tags: { Resolve: -2 },
    priority: 1,
    effects: [25],
    hpCost: 14,
    cardCategories: ["Attack"],
    effectNames: ["DMG"],
    deck: "stark",
});

export const starkDeck = [
    { card: a_axeSwipe, count: 2 },
    { card: offensiveStance, count: 2 },
    { card: defensiveStance, count: 2 },
    { card: jumboBerrySpecialBreak, count: 2 },
    { card: block, count: 2 },
    { card: concentration, count: 1 },
    { card: a_ordensSlashTechnique, count: 2 },
    { card: fearBroughtMeThisFar, count: 1 },
    { card: a_eisensAxeCleave, count: 1 },
    { card: a_lastStand, count: 1 },
];
