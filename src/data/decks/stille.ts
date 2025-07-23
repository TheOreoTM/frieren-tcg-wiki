import { Card } from "@/lib/classes/Card";
import { CardEmoji } from "@/lib/enums";
import { CardCategory, Nature } from "@/lib/types";

const a_peck = new Card({
    title: "Peck",
    cardMetadata: { nature: Nature.Attack },
    description: ([dmg]) => `SPD-2. Discard a random card in hand and draw 1 card. DMG ${dmg}.`,
    emoji: CardEmoji.STILLE_CARD,
    effects: [5],
    cardCategories: [CardCategory.ATTACK, CardCategory.DEBUFF, CardCategory.DISRUPTION],
    effectNames: ["DMG"],
    deck: "stille",
});

const a_ironFeather = new Card({
    title: "Iron Feather",
    cardMetadata: { nature: Nature.Attack },
    description: ([def, dmg]) => `SPD-3. DEF+${def}. DMG ${dmg}.`,
    emoji: CardEmoji.STILLE_CARD,
    effects: [1, 3],
    cardCategories: [CardCategory.ATTACK, CardCategory.DEBUFF, CardCategory.BUFF],
    effectNames: ["DEF", "DMG"],
    deck: "stille",
});

const hide = new Card({
    title: "Hide",
    cardMetadata: { nature: Nature.Util },
    description: ([def]) => `SPD-3. DEF+${def}.`,
    emoji: CardEmoji.STILLE_CARD,
    effects: [2],
    cardCategories: [CardCategory.UTILITY, CardCategory.DEFENSE, CardCategory.DEBUFF],
    effectNames: ["DEF"],
    deck: "stille",
});

const roost = new Card({
    title: "Roost",
    cardMetadata: { nature: Nature.Util },
    description: ([hp]) => `SPD-5 for 3 turns. DEF-3 for 2 turns. Heal ${hp}HP.`,
    emoji: CardEmoji.ROOST_CARD,
    effects: [5],
    cardCategories: [CardCategory.UTILITY, CardCategory.HEALING, CardCategory.DEBUFF],
    effectNames: ["HP"],
    deck: "stille",
});

const deflect = new Card({
    title: "Deflect",
    cardMetadata: { nature: Nature.Defense },
    description: ([def]) => `Priority+2. Increases TrueDEF by ${def} until the end of the turn.`,
    emoji: CardEmoji.STILLE_CARD,
    effects: [20],
    priority: 2,
    cardCategories: [CardCategory.DEFENSE, CardCategory.BLOCK],
    effectNames: ["TrueDEF"],
    deck: "stille",
});

const flyAway = new Card({
    title: "Fly Away",
    cardMetadata: { nature: Nature.Util },
    description: ([spd]) => `Priority+2. SPD + ${spd} until the end of the turn.`,
    emoji: CardEmoji.STILLE_CARD,
    priority: 2,
    effects: [25],
    cardCategories: [CardCategory.UTILITY, CardCategory.BUFF],
    effectNames: ["SPD"],
    deck: "stille",
});

export const a_geisel = new Card({
    title: "Geisel",
    description: ([dmg]) =>
        `SPD-20. Lands on a tree and asks its fellow Geisel for help! Geisel (ATK: 15) will show up to attack for ${dmg}DMG for 2 turns.`,
    emoji: CardEmoji.STILLE_CARD,
    cardMetadata: { nature: Nature.Attack, signature: true },
    effects: [15],
    cardCategories: [CardCategory.ATTACK, CardCategory.DoT, CardCategory.DEBUFF],
    effectNames: ["DMG"],
    deck: "stille",
});

export const stilleDeck = [
    { card: a_peck, count: 2 },
    { card: a_ironFeather, count: 3 },
    { card: hide, count: 2 },
    { card: roost, count: 2 },
    { card: deflect, count: 2 },
    { card: flyAway, count: 3 },
    { card: a_geisel, count: 2 },
];
