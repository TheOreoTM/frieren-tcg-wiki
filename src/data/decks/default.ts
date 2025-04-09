import { Card } from "@/lib/classes/Card";
import { CardEmoji } from "@/lib/enums";

export const discardCard = new Card({
  title: "Discard",
  description: () =>
    "Discards all of your current active cards. Draw the same number of cards you discarded. Empower all cards in your hand afterwards.",
  effects: [],
  emoji: CardEmoji.RECYCLE,
  printEmpower: false,
});

export const waitCard = new Card({
  title: "Wait",
  description: () => "Heals 10 HP.",
  effects: [],
  emoji: CardEmoji.WAIT,
  printEmpower: false,
});

export const forfeitCard = new Card({
  title: "Forfeit",
  description: () => "Forfeits the game.",
  effects: [],
  emoji: CardEmoji.RANDOM,
  printEmpower: false,
});
