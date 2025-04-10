import { Card } from "@/lib/classes/Card";
import { CardEmoji } from "@/lib/enums";
import { CardCategory } from "@/lib/types";

export const discardCard = new Card({
    title: "Discard",
    description: () =>
        "Discards all of your current active cards. Draw the same number of cards you discarded. Empower all cards in your hand afterwards.",
    effects: [],
    effectNames: [],
    emoji: CardEmoji.RECYCLE,
    cardCategories: [CardCategory.DEFAULT],
    printEmpower: false,
});

export const waitCard = new Card({
    title: "Wait",
    description: () => "Heals 10 HP.",
    effects: [],
    effectNames: [],
    emoji: CardEmoji.WAIT,
    cardCategories: [CardCategory.DEFAULT],
    printEmpower: false,
});

export const forfeitCard = new Card({
    title: "Forfeit",
    description: () => "Forfeits the game.",
    effects: [],
    effectNames: [],
    emoji: CardEmoji.RANDOM,
    cardCategories: [CardCategory.DEFAULT],
    printEmpower: false,
});
