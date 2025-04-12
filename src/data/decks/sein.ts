import { Card } from "@/lib/classes/Card";
import { CardEmoji } from "@/lib/enums";
import { CardCategory } from "@/lib/types";

export const a_trustInYourAllyFrierensZoltraak = new Card({
    title: "Trust in Your Ally: Frieren's Zoltraak",
    description: ([dmg]) => `HP-5. DMG ${dmg} + HP/10`,
    emoji: CardEmoji.SEIN_CARD,
    cosmetic: {
        cardImageUrl: "/cards/Trust_in_your_Ally_Frierens_Zoltraak.webp",
    },
    effects: [5],
    effectNames: ["DMG"],
    cardCategories: [CardCategory.ATTACK],
    deck: "sein",
});

export const a_trustInYourAllyFernsBarrage = new Card({
    title: "Trust in Your Ally: Fern's Barrage",
    description: ([dmg]) => `HP-7. DMG ${dmg}+HP/10 DMG. Next turn, deal ${dmg}+HP/10 DMG at turn end.`,
    emoji: CardEmoji.SEIN_CARD,
    cosmetic: {
        cardImageUrl: "/cards/Trust_in_your_Ally_Ferns_Barrage.webp",
    },
    effects: [3],
    cardCategories: ["Attack"],
    effectNames: ["DMG"],
    deck: "sein",
});

const a_trustInYourAllyStarksLightningStrike = new Card({
    title: "Trust in Your Ally: Stark's Lightning Strike",
    description: ([dmg]) => `Priority-1. HP-9. DMG ${dmg}+HP/7.`,
    emoji: CardEmoji.SEIN_CARD,
    cosmetic: {
        cardImageUrl: "/cards/Trust_in_your_Ally_Starks_Lightning_Strike.webp",
    },
    effects: [7],
    priority: -1,
    cardCategories: ["Attack"],
    effectNames: ["DMG"],
    deck: "sein",
});

export const mugOfBeer = new Card({
    title: "Mug of Beer",
    description: ([hp, atk]) => `HP+${hp}. ATK+${atk}. DEF-2. SPD-1.`,
    emoji: CardEmoji.SEIN_CARD,
    cosmetic: {
        cardImageUrl: "/cards/Mug_of_Beer.webp",
    },
    effects: [6, 2],
    effectNames: ["HP", "ATK"],
    cardCategories: ["Utility", "Healing"],
    deck: "sein",
});

export const smokeBreak = new Card({
    title: "Smoke Break",
    description: ([atk, def, spd]) => `HP-5. ATK+${atk}. DEF+${def}. SPD+${spd}.`,
    emoji: CardEmoji.SEIN_CARD,
    cosmetic: {
        cardImageUrl: "/cards/Smoke_Break.webp",
    },
    effects: [3, 2, 2],
    effectNames: ["ATK", "DEF", "SPD"],
    cardCategories: ["Utility"],
    deck: "sein",
});

export const awakening = new Card({
    title: "Awakening",
    description: ([atk, def, spd]) => `ATK+${atk}. DEF+${def}. SPD+${spd}.`,
    emoji: CardEmoji.SEIN_CARD,
    cosmetic: {
        cardImageUrl: "/cards/Awakening.webp",
    },
    effects: [2, 1, 2],
    effectNames: ["ATK", "DEF", "SPD"],
    cardCategories: ["Utility"],
    deck: "sein",
});

export const poisonCure = new Card({
    title: "Poison Cure",
    description: ([hp]) => `HP+${hp}.`,
    emoji: CardEmoji.SEIN_CARD,
    cosmetic: {
        cardImageUrl: "/cards/Poison_Cure.webp",
    },
    effects: [10],
    cardCategories: ["Utility", "Healing"],
    effectNames: ["HP"],
    deck: "sein",
});

export const braceYourself = new Card({
    title: "Brace Yourself",
    description: ([def]) => `Priority+2. Increases DEF by ${def} until the end of the turn.`,
    emoji: CardEmoji.SEIN_CARD,
    cosmetic: {
        cardImageUrl: "/cards/Brace_Yourself.webp",
    },
    priority: 2,
    effects: [20],
    cardCategories: [CardCategory.UTILITY, CardCategory.DEFENSE, CardCategory.BLOCK],
    effectNames: ["DEF"],
    deck: "sein",
});

export const a_threeSpearsOfTheGoddess = new Card({
    title: "Three Spears of the Goddess",
    description: ([dmg]) => `HP-15. At the next 3 turn ends, deal ${dmg}+HP/10 DMG.`,
    emoji: CardEmoji.SEIN_CARD,
    cosmetic: {
        cardImageUrl: "/cards/Three_Spears_of_the_Godess.webp",
    },
    effects: [5],
    cardCategories: [CardCategory.ATTACK],
    effectNames: ["DMG"],
    deck: "sein",
});

export const seinDeck = [
    { card: a_trustInYourAllyFrierensZoltraak, count: 2 },
    { card: a_trustInYourAllyStarksLightningStrike, count: 2 },
    { card: a_trustInYourAllyFernsBarrage, count: 2 },
    { card: mugOfBeer, count: 2 },
    { card: smokeBreak, count: 1 },
    { card: awakening, count: 2 },
    { card: poisonCure, count: 2 },
    { card: braceYourself, count: 1 },
    { card: a_threeSpearsOfTheGoddess, count: 1 },
];
