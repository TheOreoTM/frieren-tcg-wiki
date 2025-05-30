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
    description: ([dmg]) => `Your opponent redraws 2 cards. DMG ${dmg}.`,
    effects: [14],
    hpCost: 8,
    cardCategories: [CardCategory.ATTACK],
    effectNames: ["DMG"],
    deck: CharacterID.Edel,
});

export const one_step_ahead = new Card({
    title: "One Step Ahead",
    cardMetadata: { nature: Nature.Defense },
    emoji: CardEmoji.EDEL_CARD,
    description: ([def, spd, dmg]) =>
        `Priority+3. TrueDEF+${def} for 1 turn. If this card is played the same turn your opponent plays a defensive card, their SPD-${spd}, they redraw 1 card, and attack with DMG ${dmg} ignoring all defense.`,
    effects: [20, 2, 10],
    priority: 3,
    effectNames: ["DEF", "SPD", "DMG"],
    cardCategories: [CardCategory.DEFENSE, CardCategory.BLOCK],
    deck: CharacterID.Edel,
});

const mental_fog = new Card({
    title: "Mental Fog",
    cardMetadata: { nature: Nature.Util },
    emoji: CardEmoji.EDEL_CARD,
    description: ([spd, cost]) =>
        `Eye Contact next turn. Opponent's SPD-${spd} and they redraw a card. Their highest empowered card they draw will cost ${cost} additional HP for the next 5 turns.`,
    effects: [2, 7],
    hpCost: 10,
    cardCategories: [CardCategory.UTILITY],
    effectNames: ["SPD", "Cost"],
    deck: CharacterID.Edel,
});

const clear_mind = new Card({
    title: "Clear Mind",
    cardMetadata: { nature: Nature.Util },
    emoji: CardEmoji.EDEL_CARD,
    description: ([hp, spd]) => `Heal ${hp} HP. SPD+${spd}. Eye Contact next turn. Both players redraw their hand.`,
    effects: [10, 2],
    cardCategories: [CardCategory.UTILITY],
    effectNames: ["HP", "SPD"],
    deck: CharacterID.Edel,
});

const hypnosis_sleep = new Card({
    title: "Hypnosis: *Sleep*",
    cardMetadata: { nature: Nature.Util },
    emoji: CardEmoji.EDEL_CARD,
    description: () => `Eye Contact next 2 turns. Add Sleepy to your opponent's deck, they redraw a card.`,
    effects: [],
    cardCategories: [CardCategory.UTILITY],
    effectNames: [],
    deck: CharacterID.Edel,
});

const hypnosis_mesmerize = new Card({
    title: "Hypnosis: *Mesmerize*",
    cardMetadata: { nature: Nature.Util },
    emoji: CardEmoji.EDEL_CARD,
    description: () => `Eye Contact next 2 turns. Add Mesmerize to your opponent's deck, they redraw a card.`,
    effects: [],
    cardCategories: [CardCategory.UTILITY],
    effectNames: [],
    deck: CharacterID.Edel,
});

const hypnosis_weaken = new Card({
    title: "Hypnosis: *Weaken*",
    cardMetadata: { nature: Nature.Util },
    emoji: CardEmoji.EDEL_CARD,
    description: ([debuff]) =>
        `Eye Contact next 2 turns. Reduce opponent's ATK, DEF, SPD by ${debuff}. Add Weakened at this empower to your opponent's deck.`,
    effects: [2],
    cardCategories: [CardCategory.UTILITY],
    effectNames: ["Debuff"],
    deck: CharacterID.Edel,
});

const kneel = new Card({
    title: "*Kneel!*",
    cardMetadata: { nature: Nature.Attack },
    emoji: CardEmoji.EDEL_CARD,
    description: ([dmg, discardFactor]) =>
        `DMG ${dmg} + ${discardFactor} per each card you've forced your opponent to discard this match. Ignores defense. At the end of the turn, if your opponent has forcibly discarded over 10 cards, and have Sleepy, Mesmerized and Weakened in their deck, they lose.`,
    effects: [10, 3],
    hpCost: 10,
    cardCategories: [CardCategory.ATTACK],
    effectNames: ["DMG", "DMG"],
    deck: CharacterID.Edel,
});

export const edelDeck = [
    { card: telekinesis, count: 2 },
    { card: one_step_ahead, count: 2 },
    { card: mental_fog, count: 2 },
    { card: clear_mind, count: 2 },
    { card: hypnosis_sleep, count: 2 },
    { card: hypnosis_mesmerize, count: 2 },
    { card: hypnosis_weaken, count: 2 },
    { card: kneel, count: 2 },
];
