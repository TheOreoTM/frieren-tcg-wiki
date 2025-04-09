import type { Card } from "@/lib/classes/Card";
import { denkenDeck } from "./decks/denken";
import { frierenDeck } from "./decks/frieren";

export const allCards: { card: Card; count: number }[] = [
  ...denkenDeck,
  ...frierenDeck,
];

const cards: Map<string, Card> = new Map([]);

allCards.forEach((card) => {
  cards.set(card.card.getId(), card.card);
});

export const CardMap = cards;
