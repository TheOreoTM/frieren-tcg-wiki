import { Card } from "@/lib/classes/Card";
import { CardEmoji, CharacterID } from "@/lib/enums";
import { CardCategory, Nature } from "@/lib/types";

export const telekinesis = new Card({
    title: "Telekinesis",
    cardMetadata: { nature: Nature.Attack, signature: true },
    emoji: CardEmoji.EDEL_CARD,
    cosmetic: {
        cardGif: "/cards/Telekinesis.gif",
    },
    description: ([dmg]) => `HP-5. Your opponent redraws 3 cards. DMG ${dmg}.`,
    effects: [14],
    hpCost: 5,
    cardCategories: [CardCategory.ATTACK, CardCategory.DISRUPTION],
    effectNames: ["DMG"],
    deck: CharacterID.Edel,
});

export const one_step_ahead = new Card({
    title: "One Step Ahead",
    cardMetadata: { nature: Nature.Defense },
    emoji: CardEmoji.EDEL_CARD,
    description: ([def, spd, dmg]) =>
        `Priority+3. TrueDEF+${def} for 1 turn. If this card is played the same turn your opponent plays a defensive card, their SPD-${spd}, they redraw 2 cards. Attack with DMG ${dmg}, ignoring defense.`,
    effects: [20, 2, 10],
    priority: 3,
    effectNames: ["TrueDEF", "SPD", "DMG"],
    cardCategories: [CardCategory.DEFENSE, CardCategory.BLOCK],
    deck: CharacterID.Edel,
});

const mental_fog = new Card({
    title: "Mental Fog",
    cardMetadata: { nature: Nature.Util },
    emoji: CardEmoji.EDEL_CARD,
    description: ([spd, cost]) =>
        `HP-5. Eye Contact+1. Opponent's SPD-${spd}. Their highest empowered playable card costs an additional ${cost} HP for the next 5 turns, and if it's not a status card and is not played, the opponent redraws 1 card.`,
    effects: [2, 5],
    hpCost: 5,
    cardCategories: [CardCategory.UTILITY, CardCategory.DISRUPTION],
    effectNames: ["SPD", "Cost"],
    deck: CharacterID.Edel,
});

const clear_mind = new Card({
    title: "Clear Mind",
    cardMetadata: { nature: Nature.Util },
    emoji: CardEmoji.EDEL_CARD,
    description: ([hp, spd]) => `Eye Contact+1. Heal ${hp} + Forced Discard x 2 HP. SPD+${spd}.`,
    effects: [10, 2],
    cardCategories: [CardCategory.UTILITY, CardCategory.HEALING],
    effectNames: ["HP", "SPD"],
    deck: CharacterID.Edel,
});

const hypnosis_sleep = new Card({
    title: "Hypnosis: *Sleep*",
    cardMetadata: { nature: Nature.Util },
    emoji: CardEmoji.EDEL_CARD,
    description: () => `Eye Contact+2. Your opponent discards two cards, draws Sleepy and one other card.`,
    effects: [],
    cardCategories: [CardCategory.UTILITY, CardCategory.STATUS],
    effectNames: [],
    deck: CharacterID.Edel,
});

const hypnosis_mesmerize = new Card({
    title: "Hypnosis: *Mesmerize*",
    cardMetadata: { nature: Nature.Util },
    emoji: CardEmoji.EDEL_CARD,
    description: () => `Eye Contact+2. Your opponent discards two cards, draws Mesmerized and one other card.`,
    effects: [],
    cardCategories: [CardCategory.UTILITY, CardCategory.STATUS],
    effectNames: [],
    deck: CharacterID.Edel,
});

const hypnosis_weaken = new Card({
    title: "Hypnosis: *Weaken*",
    cardMetadata: { nature: Nature.Util },
    emoji: CardEmoji.EDEL_CARD,
    description: () =>
        `Eye Contact+2. Your opponent discards two cards, draws Weakened at this empower and one other card.`,
    effects: [],
    cardCategories: [CardCategory.UTILITY, CardCategory.STATUS],
    effectNames: [],
    deck: CharacterID.Edel,
});

const kneel = new Card({
    title: "*Kneel!*",
    cardMetadata: { nature: Nature.Attack },
    emoji: CardEmoji.EDEL_CARD,
    description: ([dmg]) =>
        `HP-10. DMG ${dmg} + Forced Discards x 2. Ignores defense. At the end of the turn, if your opponent has forcibly discarded over 15 cards, and have Sleepy, Mesmerized and Weakened in their deck, they lose.`,
    effects: [10],
    hpCost: 10,
    cardCategories: [CardCategory.ATTACK, CardCategory.WIN_CON],
    effectNames: ["DMG"],
    deck: CharacterID.Edel,
});

export const edelDeck = [
    { card: telekinesis, count: 3 },
    { card: one_step_ahead, count: 2 },
    { card: mental_fog, count: 2 },
    { card: clear_mind, count: 2 },
    { card: hypnosis_sleep, count: 2 },
    { card: hypnosis_mesmerize, count: 2 },
    { card: hypnosis_weaken, count: 2 },
    { card: kneel, count: 1 },
];
