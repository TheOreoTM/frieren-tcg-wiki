import { Card } from "@/lib/classes/Card";
import { CardEmoji } from "@/lib/enums";
import { CardCategory, Nature } from "@/lib/types";

export const a_trustInYourAllyFrierensZoltraak = new Card({
    title: "Trust in Your Ally: Frieren's Zoltraak",
    cardMetadata: { nature: Nature.Attack },
    description: ([dmg]) => `HP-6. DMG ${dmg} + HP/9`,
    emoji: CardEmoji.SEIN_CARD,
    cosmetic: {
        cardImageUrl: "/cards/Trust_in_your_Ally_Frierens_Zoltraak.webp",
    },
    effects: [5],
    effectNames: ["DMG"],
    cardCategories: [CardCategory.ATTACK],
    deck: "sein",
    hpCost: 6,
});

export const a_trustInYourAllyFernsBarrage = new Card({
    title: "Trust in Your Ally: Fern's Barrage",
    cardMetadata: { nature: Nature.Attack },
    description: ([dmg]) => `HP-8. DMG ${dmg}+HP/10 DMG. Next turn, deal ${dmg}+HP/10 DMG at turn end.`,
    emoji: CardEmoji.SEIN_CARD,
    cosmetic: {
        cardImageUrl: "/cards/Trust_in_your_Ally_Ferns_Barrage.webp",
    },
    effects: [3],
    cardCategories: [CardCategory.ATTACK, CardCategory.DoT],
    effectNames: ["DMG", "DoT"],
    deck: "sein",
    hpCost: 8,
});

const a_trustInYourAllyStarksLightningStrike = new Card({
    title: "Trust in Your Ally: Stark's Lightning Strike",
    cardMetadata: { nature: Nature.Attack },
    description: ([dmg]) => `HP-10. DMG ${dmg}+HP/8.`,
    emoji: CardEmoji.SEIN_CARD,
    cosmetic: {
        cardImageUrl: "/cards/Trust_in_your_Ally_Starks_Lightning_Strike.webp",
    },
    effects: [10],
    cardCategories: [CardCategory.ATTACK],
    effectNames: ["DMG"],
    deck: "sein",
    hpCost: 10,
});

export const mugOfBeer = new Card({
    title: "Mug of Beer",
    cardMetadata: { nature: Nature.Util },
    description: ([hp, atk]) => `HP+${hp}. ATK+${atk}. DEF-2 and SPD-2 for 3 turns.`,
    emoji: CardEmoji.SEIN_CARD,
    cosmetic: {
        cardImageUrl: "/cards/Mug_of_Beer.webp",
    },
    effects: [7, 2],
    effectNames: ["HP", "ATK"],
    cardCategories: [CardCategory.UTILITY, CardCategory.HEALING, CardCategory.BUFF, CardCategory.DEBUFF],
    deck: "sein",
});

export const smokeBreak = new Card({
    title: "Smoke Break",
    cardMetadata: { nature: Nature.Util },
    description: ([atk, def, spd]) => `HP-5. ATK+${atk}. DEF+${def}. SPD+${spd}.`,
    emoji: CardEmoji.SEIN_CARD,
    cosmetic: {
        cardImageUrl: "/cards/Smoke_Break.webp",
    },
    effects: [3, 2, 2],
    effectNames: ["ATK", "DEF", "SPD"],
    cardCategories: [CardCategory.UTILITY, CardCategory.BUFF],
    deck: "sein",
    hpCost: 5,
});

export const awakening = new Card({
    title: "Awakening",
    cardMetadata: { nature: Nature.Util },
    description: ([atk, def, spd]) => `ATK+${atk}. DEF+${def}. SPD+${spd}.`,
    emoji: CardEmoji.SEIN_CARD,
    cosmetic: {
        cardImageUrl: "/cards/Awakening.webp",
    },
    effects: [2, 1, 2],
    effectNames: ["ATK", "DEF", "SPD"],
    cardCategories: [CardCategory.UTILITY, CardCategory.BUFF],
    deck: "sein",
});

export const poisonCure = new Card({
    title: "Poison Cure",
    cardMetadata: { nature: Nature.Util },
    description: ([hp]) => `HP+${hp}.`,
    emoji: CardEmoji.SEIN_CARD,
    cosmetic: {
        cardImageUrl: "/cards/Poison_Cure.webp",
    },
    effects: [10],
    cardCategories: [CardCategory.UTILITY, CardCategory.HEALING],
    effectNames: ["HP"],
    deck: "sein",
});

export const braceYourself = new Card({
    title: "Brace Yourself",
    cardMetadata: { nature: Nature.Defense },
    description: ([def]) => `Priority+2. Increases TrueDEF by ${def} until the end of the turn.`,
    emoji: CardEmoji.SEIN_CARD,
    cosmetic: {
        cardImageUrl: "/cards/Brace_Yourself.webp",
    },
    priority: 2,
    effects: [20],
    cardCategories: [CardCategory.DEFENSE, CardCategory.BLOCK],
    effectNames: ["TrueDEF"],
    deck: "sein",
});

export const a_threeSpearsOfTheGoddess = new Card({
    title: "Three Spears of the Goddess",
    description: ([dmg]) => `HP-10. At the next 3 turn ends, deal ${dmg}+HP/11 DMG.`,
    emoji: CardEmoji.SEIN_CARD,
    cosmetic: {
        cardImageUrl: "/cards/Three_Spears_of_the_Godess.webp",
    },
    effects: [5],
    cardMetadata: { nature: Nature.Attack, signature: true },
    cardCategories: [CardCategory.ATTACK, CardCategory.DoT],
    effectNames: ["DMG"],
    deck: "sein",
    hpCost: 10,
});

export const seinDeck = [
    { card: a_trustInYourAllyFrierensZoltraak, count: 2 },
    { card: a_trustInYourAllyStarksLightningStrike, count: 2 },
    { card: a_trustInYourAllyFernsBarrage, count: 2 },
    { card: mugOfBeer, count: 2 },
    { card: smokeBreak, count: 1 },
    { card: awakening, count: 2 },
    { card: poisonCure, count: 2 },
    { card: braceYourself, count: 2 },
    { card: a_threeSpearsOfTheGoddess, count: 1 },
];
