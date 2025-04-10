import { Card } from "@/lib/classes/Card";
import { CardEmoji } from "@/lib/enums";

const a_axeSwipe = new Card({
    title: "Axe Swipe",
    description: ([dmg]) => `HP-5. DMG ${dmg}.`,
    emoji: CardEmoji.STARK_CARD,
    tags: { Resolve: -1 },
    effects: [9],
    cardCategories: ["Attack"],
    effectNames: ["DMG"],
});

const offensiveStance = new Card({
    title: "Offensive Stance",
    description: ([atk, spd]) => `ATK+${atk}. DEF-2. SPD+${spd}. Gain <Resolve> for next 1 Attack.`,
    emoji: CardEmoji.STARK_CARD,
    effects: [2, 1],
    tags: { Resolve: 1 },
    cardCategories: ["Utility"],
    effectNames: ["ATK", "SPD"],
});

const defensiveStance = new Card({
    title: "Defensive Stance",
    description: ([def, spd]) => `ATK-2. DEF+${def}. SPD+${spd}. Gain <Resolve> for next 1 Attack.`,
    emoji: CardEmoji.STARK_CARD,
    effects: [2, 1],
    tags: { Resolve: 1 },
    cardCategories: ["Utility"],
    effectNames: ["DEF", "SPD"],
});

const jumboBerrySpecialBreak = new Card({
    title: "Jumbo Berry Special Break",
    description: ([def, hp]) => `SPD-2 for 2 turns. DEF+${def} for 2 turns. Heal ${hp} HP`,
    emoji: CardEmoji.STARK_CARD,
    effects: [2, 10],
    cardCategories: ["Utility", "Healing"],
    effectNames: ["DEF", "HP"],
});

const block = new Card({
    title: "Block",
    description: ([def]) => `Priority+2. Increases DEF by ${def} until the end of the turn.`,
    emoji: CardEmoji.STARK_CARD,
    effects: [20],
    priority: 2,
    cardCategories: ["Utility", "Defense", "Block"],
    effectNames: ["DEF"],
});

const concentration = new Card({
    title: "Concentration",
    description: ([spd]) => `Increases SPD by ${spd}. Gain <Resolve> for next 2 attacks`,
    emoji: CardEmoji.STARK_CARD,
    effects: [2],
    tags: { Resolve: 2 },
    cardCategories: ["Utility"],
    effectNames: ["SPD"],
});

const a_ordensSlashTechnique = new Card({
    title: "Orden's Slash Technique",
    description: ([dmg]) => `HP-8. DMG ${dmg}`,
    emoji: CardEmoji.STARK_CARD,
    tags: { Resolve: -1 },
    effects: [12],
    cardCategories: ["Attack"],
    effectNames: ["DMG"],
});

const fearBroughtMeThisFar = new Card({
    title: "Fear Brought Me This Far",
    description: ([atkDef]) => `Increases ATK and DEF by ${atkDef}. Gain <Resolve> for next 2 attacks.`,
    emoji: CardEmoji.STARK_CARD,
    effects: [3],
    tags: { Resolve: 2 },
    cardCategories: ["Utility"],
    effectNames: ["ATK+DEF"],
});

const a_eisensAxeCleave = new Card({
    title: "Eisen's Axe Cleave",
    description: ([dmg]) => `HP-12. DMG ${dmg}. Uses up 2 Resolve stack.`,
    emoji: CardEmoji.STARK_CARD,
    tags: { Resolve: -2 },
    effects: [17],
    cardCategories: ["Attack"],
    effectNames: ["DMG"],
});

const a_lightningStrike = new Card({
    title: "Lightning Strike",
    description: ([dmg]) =>
        `Priority+1. HP-15. DEF-5 for this turn. At this turn's end, strike for ${dmg} DMG. Uses up 2 Resolve stack.`,
    emoji: CardEmoji.STARK_CARD,
    tags: { Resolve: -2 },
    priority: 1,
    effects: [22],
    cardCategories: ["Attack"],
    effectNames: ["DMG"],
});

export const starkDeck = [
    { card: a_axeSwipe, count: 2 },
    { card: offensiveStance, count: 1 },
    { card: defensiveStance, count: 1 },
    { card: jumboBerrySpecialBreak, count: 2 },
    { card: block, count: 1 },
    { card: concentration, count: 2 },
    { card: a_ordensSlashTechnique, count: 2 },
    { card: fearBroughtMeThisFar, count: 1 },
    { card: a_eisensAxeCleave, count: 2 },
    { card: a_lightningStrike, count: 1 },
];
