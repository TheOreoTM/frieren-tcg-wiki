import { Card } from "@/lib/classes/Card";
import { CardEmoji } from "@/lib/enums";

const a_peck = new Card({
    title: "Peck",
    description: ([dmg]) => `SPD-2. Discard a random card in hand and draw 1 card. DMG ${dmg}.`,
    emoji: CardEmoji.STILLE_CARD,
    effects: [5],
    cardCategories: ["Attack"],
    effectNames: ["DMG"],
    deck: "stille",
});

const a_ironFeather = new Card({
    title: "Iron Feather",
    description: ([def, dmg]) => `SPD-3. DEF+${def}. DMG ${dmg}.`,
    emoji: CardEmoji.STILLE_CARD,
    effects: [1, 3],
    cardCategories: ["Attack"],
    effectNames: ["DMG"],
    deck: "stille",
});

const hide = new Card({
    title: "Hide",
    description: ([def]) => `SPD-3. DEF+${def}.`,
    emoji: CardEmoji.STILLE_CARD,
    effects: [2],
    cardCategories: ["Utility", "Defense"],
    effectNames: ["DEF"],
    deck: "stille",
});

const roost = new Card({
    title: "Roost",
    description: ([hp]) => `SPD-5 for 3 turns. DEF-3 for 2 turns. Heal ${hp}HP.`,
    emoji: CardEmoji.STILLE_CARD,
    effects: [5],
    cardCategories: ["Utility", "Healing"],
    effectNames: ["DEF"],
    deck: "stille",
});

const deflect = new Card({
    title: "Deflect",
    description: ([def]) => `Priority+2. Increases DEF by ${def} until the end of the turn.`,
    emoji: CardEmoji.STILLE_CARD,
    effects: [20],
    priority: 2,
    cardCategories: ["Block", "Utility"],
    effectNames: ["DEF"],
    deck: "stille",
});

const flyAway = new Card({
    title: "Fly Away",
    description: ([spd]) => `Priority+2. SPD + ${spd} until the end of the turn.`,
    emoji: CardEmoji.STILLE_CARD,
    priority: 2,
    effects: [25],
    cardCategories: ["Utility"],
    effectNames: ["SPD"],
    deck: "stille",
});

export const a_geisel = new Card({
    title: "Geisel",
    description: ([dmg]) =>
        `SPD-20. Lands on a tree and asks its fellow Geisel for help! Geisel (ATK: 15) will show up to attack for ${dmg}DMG between 1 - 3 turns.`,
    emoji: CardEmoji.STILLE_CARD,
    effects: [15],
    cardCategories: ["Attack"],
    effectNames: ["DMG"],
    deck: "stille",
});

export const stilleDeck = [
    { card: a_peck, count: 2 },
    { card: a_ironFeather, count: 3 },
    { card: hide, count: 2 },
    { card: roost, count: 2 },
    { card: deflect, count: 1 },
    { card: flyAway, count: 3 },
    { card: a_geisel, count: 2 },
];
