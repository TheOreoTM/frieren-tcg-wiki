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
import { fernDeck } from "./decks/fern";
import { wirbelDeck } from "./decks/wirbel";
import { edelDeck } from "./decks/edel";
import { flammeDeck } from "./decks/flamme";
import { methodeDeck } from "./decks/methode";

type CardListItem = { card: Card; count: number };

export const rawCards: CardListItem[] = [
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
    ...fernDeck,
    ...edelDeck,
    ...wirbelDeck,
    ...flammeDeck,
    ...methodeDeck,
];

/**
 * Creates an array containing only unique cards from the rawCards list.
 * Uniqueness is determined by the card's `id` property.
 * If `id` is not present, it falls back to using the card's `title`.
 * The `count` property for each unique card is set to 1, as it represents
 * a unique instance in this context, not the total count from rawCards.
 */
export const allCards: CardListItem[] = (() => {
    // Use a Map to efficiently track unique cards encountered.
    // The key will be the unique identifier (id or title),
    // and the value will be the CardListItem object.
    const uniqueCardMap = new Map<string | number, CardListItem>();

    // Iterate through the raw list of cards
    for (const item of rawCards) {
        // Determine the unique key for the card. Prioritize 'id'.
        const uniqueKey = item.card.getId() ?? item.card.title;

        // If this card key hasn't been added to the map yet, add it.
        if (!uniqueCardMap.has(uniqueKey)) {
            // We store the item, but ensure the count is 1 for the unique list.
            // If you need the original count, you'd store item directly:
            // uniqueCardMap.set(uniqueKey, item);
            // However, the request implies a list of unique *cards*,
            // so count=1 seems more appropriate for the resulting structure.
            uniqueCardMap.set(uniqueKey, { card: item.card, count: 1 });
        }
        // If the card is already in the map, we simply skip it,
        // ensuring only the first encounter of each unique card is kept.
    }

    // Convert the values of the map (which are the unique CardListItems)
    // back into an array.
    return Array.from(uniqueCardMap.values());
})();

// Thanks gemini :3

const cards: Map<string, Card> = new Map([]);

allCards.forEach((card) => {
    cards.set(card.card.getId(), card.card);
});

export const CardMap = cards;
