import type { Card } from "@/lib/classes/Card";
import { denkenDeck } from "./decks/denken";
import { frierenDeck } from "./decks/frieren";
import { defaultCards } from "./decks/default";
import { himmelDeck } from "./decks/himmel";
import { seinDeck } from "./decks/sein";
import { laufenDeck } from "./decks/laufen";
import { linieDeck } from "./decks/linie";
import { senseDeck } from "./decks/sense";
import { serieDeck } from "./decks/serie";
import { starkDeck } from "./decks/stark";
import { stilleDeck } from "./decks/stille";
import { ubelDeck } from "./decks/ubel";

export const allCards: { card: Card; count: number }[] = [
    ...defaultCards,
    ...denkenDeck,
    ...frierenDeck,
    ...himmelDeck,
    ...laufenDeck,
    ...linieDeck,
    ...seinDeck,
    ...senseDeck,
    ...serieDeck,
    ...starkDeck,
    ...stilleDeck,
    ...ubelDeck,
];

const cards: Map<string, Card> = new Map([]);

allCards.forEach((card) => {
    cards.set(card.card.getId(), card.card);
});

export const CardMap = cards;
