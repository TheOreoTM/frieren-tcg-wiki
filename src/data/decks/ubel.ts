import { Card } from "@/lib/classes/Card";
import { CardEmoji } from "@/lib/enums";
import { CardCategory, Nature } from "@/lib/types";

export const empathyFailureName = "Stalking";

const a_shallowSlash = new Card({
    title: "Shallow Slash",
    description: ([dmg, atkSpd]) =>
        `HP-4. DMG ${dmg}. If used by Übel, has a 20% of missing if the opponent didn't use an Attack card before this move is used. If the attack misses, ATK+${atkSpd}, SPD+${atkSpd}.`,
    emoji: CardEmoji.UBEL_CARD,
    effects: [8, 2],
    cardMetadata: { nature: Nature.Attack, ubelFailureRate: 20 },
    tags: { FailureRate: 20 },
    cardCategories: [CardCategory.ATTACK],
    effectNames: ["DMG", "ATK+SPD"],
    deck: "ubel",
    hpCost: 4,
});

const a_cleave = new Card({
    title: "Cleave",
    description: ([dmg, atkSpd]) =>
        `HP-6. DMG ${dmg}. If used by Übel,has a 40% of missing if the opponent didn't use an Attack card before this move is used. If the attack misses, ATK+${atkSpd}, SPD+${atkSpd}.`,
    emoji: CardEmoji.UBEL_CARD,
    effects: [12, 3],
    cardMetadata: { nature: Nature.Attack, ubelFailureRate: 40 },
    tags: { FailureRate: 40 },
    cardCategories: [CardCategory.ATTACK],
    effectNames: ["DMG", "ATK+SPD"],
    hpCost: 6,
    deck: "ubel",
});

const a_dismantle = new Card({
    title: "Dismantle",
    description: ([dmg, atkSpd]) =>
        `HP-8. DMG ${dmg}. If used by Übel, has a 60% of missing if the opponent didn't use an Attack card before this move is used. If the attack misses, ATK+${atkSpd}, SPD+${atkSpd}.`,
    emoji: CardEmoji.UBEL_CARD,
    effects: [16, 4],
    cardMetadata: { nature: Nature.Attack, ubelFailureRate: 60 },
    tags: { FailureRate: 60 },
    cardCategories: [CardCategory.ATTACK],
    effectNames: ["DMG", "ATK+SPD"],
    hpCost: 8,
    deck: "ubel",
});

export const rushdown = new Card({
    title: "Rushdown",
    cardMetadata: { nature: Nature.Util },
    description: ([spd]) =>
        `Increases SPD by ${spd} for 4 turns. Attacks will not miss during this period. At the end of every turn, HP-2.`,
    emoji: CardEmoji.UBEL_CARD,
    cardCategories: [CardCategory.UTILITY, CardCategory.BUFF],
    effects: [10],
    effectNames: ["SPD"],
    deck: "ubel",
});

const slowdown = new Card({
    title: "Slow Down",
    cardMetadata: { nature: Nature.Util },
    description: ([def, hp, endOfTurnHp]) =>
        `SPD-10 and DEF+${def} for 2 turns. Heal ${hp}HP, then ${endOfTurnHp} HP at the end of each turn. Attacks will not hit while this effect is active.`,
    emoji: CardEmoji.UBEL_CARD,
    effects: [5, 10, 5],
    effectNames: ["DEF", "HP", "HP"],
    cardCategories: [CardCategory.UTILITY, CardCategory.HEALING, CardCategory.BUFF, CardCategory.DEBUFF],
    deck: "ubel",
});

const defend = new Card({
    title: "Defend",
    cardMetadata: { nature: Nature.Defense },
    description: ([def]) => `Priority+2. Increases TrueDEF by ${def} until the end of the turn.`,
    emoji: CardEmoji.UBEL_CARD,
    effects: [20],
    priority: 2,
    cardCategories: [CardCategory.DEFENSE, CardCategory.BLOCK],
    effectNames: ["TrueDEF"],
    deck: "ubel",
});

export const sorganeil = new Card({
    title: "Sorganeil",
    cardMetadata: { nature: Nature.Util },
    description: () =>
        `Priority-2. Will fail if the opponent's SPD is higher than your SPD by 35 or more. Set opponent's SPD to 1. Clear opponent's timed effects. Opponent can only use default actions next turn. Attacks will hit with 100% certainty.`,
    emoji: CardEmoji.UBEL_CARD,
    priority: -2,
    effects: [],
    cardCategories: [CardCategory.UTILITY, CardCategory.DEBUFF, CardCategory.DISRUPTION],
    effectNames: [],
    deck: "ubel",
});

export const empathy = new Card({
    title: "Empathy",
    cardMetadata: { nature: Nature.Util },
    description: () =>
        `Will fail if used before turn 5. Use the opponent's signature move at this card's empower level -2.`,
    emoji: CardEmoji.UBEL_CARD,
    cardCategories: [CardCategory.UTILITY, CardCategory.UNIQUE],
    effects: [],
    effectNames: [],
    deck: "ubel",
});

const a_malevolentShrine = new Card({
    title: "Malevolent Shrine",
    description: ([dmg, atkSpd]) =>
        `HP-11. DMG ${dmg}. If used by Übel, has a 80% of missing if the opponent didn't use an Attack card before this move is used. If the attack misses, ATK+${atkSpd}, SPD+${atkSpd}.`,
    cosmetic: {
        cardGif: "/cards/Malevolent_Shrine_Ubel.gif",
    },
    emoji: CardEmoji.UBEL_CARD,
    cardMetadata: { nature: Nature.Attack, signature: true, ubelFailureRate: 80 },
    tags: { FailureRate: 80 },
    effects: [22, 5],
    effectNames: ["DMG", "ATK+SPD"],
    cardCategories: [CardCategory.ATTACK],
    hpCost: 11,
    deck: "ubel",
});

export const ubelDeck = [
    { card: a_shallowSlash, count: 3 },
    { card: a_cleave, count: 2 },
    { card: a_dismantle, count: 2 },
    { card: a_malevolentShrine, count: 1 },
    { card: rushdown, count: 2 },
    { card: defend, count: 2 },
    { card: slowdown, count: 2 },
    { card: sorganeil, count: 1 },
    { card: empathy, count: 1 },
];
