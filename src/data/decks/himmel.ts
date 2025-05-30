import { Card } from "@/lib/classes/Card";
import { CardEmoji } from "@/lib/enums";
import { CardCategory, Nature } from "@/lib/types";
const a_FrierenStrikeTheirWeakpoint = new Card({
    title: "Frieren! Strike Their Weakpoints!",
    cardMetadata: { nature: Nature.Attack },
    description: ([dmg]) =>
        `Frieren attacks for ${dmg} DMG. At next turn's end, Frieren attacks for an additional ${dmg} DMG.`,
    emoji: CardEmoji.HIMMEL_CARD,
    effects: [7],
    effectNames: ["DMG"],
    cardCategories: [CardCategory.ATTACK],
    deck: "himmel",
});

const a_FrierenBackMeUp = new Card({
    title: "Frieren! Back Me Up!",
    cardMetadata: { nature: Nature.Attack },
    description: ([dmg]) =>
        `Frieren attacks for ${dmg} DMG. For the next 4 turn ends, Frieren attacks for an additional ${dmg} DMG.`,
    emoji: CardEmoji.HIMMEL_CARD,
    effects: [3],
    effectNames: ["DMG"],
    cardCategories: [CardCategory.ATTACK],
    deck: "himmel",
});

export const a_FrierenNow = new Card({
    title: "Frieren! Now!",
    cardMetadata: { nature: Nature.Attack },
    description: ([dmg]) => `DMG ${dmg}`,
    emoji: CardEmoji.FRIEREN_CARD,
    effects: [10],
    effectNames: ["DMG"],
    cardCategories: [CardCategory.ATTACK],
    deck: "himmel",
});

const a_EisenTheEnemysOpen = new Card({
    title: "Eisen! The Enemy's Open!",
    cardMetadata: { nature: Nature.Util },
    description: ([def, dmg]) => `Eisen winds up. DEF+${def} for 2 turns. At next turn's end, deal ${dmg} DMG.`,
    emoji: CardEmoji.HIMMEL_CARD,
    effects: [2, 10],
    effectNames: ["DEF", "DMG"],
    cardCategories: [CardCategory.ATTACK],
    deck: "himmel",
});

const a_EisenCoverMyBack = new Card({
    title: "Eisen! Cover My Back!",
    cardMetadata: { nature: Nature.Util },
    description: ([def, dmg]) =>
        `Eisen provides cover. DEF+${def} for 3 turns. Once per turn, when an opponent attacks, counter for ${dmg} DMG.`,
    emoji: CardEmoji.HIMMEL_CARD,
    effects: [3, 5],
    cardCategories: [CardCategory.ATTACK],
    effectNames: ["DEF", "DMG"],
    deck: "himmel",
});

const eisenHoldTheLine = new Card({
    title: "Eisen! Hold The Line!",
    cardMetadata: { nature: Nature.Util },
    description: ([def]) => `Eisen holds the line. DEF+${def} for 4 turns.`,
    emoji: CardEmoji.HIMMEL_CARD,
    effects: [3],
    cardCategories: [CardCategory.UTILITY, CardCategory.DEFENSE],
    effectNames: ["DEF"],
    deck: "himmel",
});

const heiterEmergency = new Card({
    title: "Heiter! Emergency!",
    cardMetadata: { nature: Nature.Util },
    description: ([heal]) => `Heiter heals the party for ${heal}HP. At next turn's end, heal an additional ${heal} HP.`,
    emoji: CardEmoji.HIMMEL_CARD,
    effects: [5],
    effectNames: ["HP"],
    cardCategories: [CardCategory.HEALING, CardCategory.UTILITY],
    deck: "himmel",
});

const a_heiterThreeSpears = new Card({
    title: "Heiter! Don't give them an opening!",
    cardMetadata: { nature: Nature.Attack },
    description: ([heal]) => `Heiter casts Three Spears of the Goddess! At next 3 turn's end, deal ${heal} DMG.`,
    emoji: CardEmoji.HIMMEL_CARD,
    effects: [5],
    effectNames: ["DMG"],
    cardCategories: [CardCategory.ATTACK],
    deck: "himmel",
});

const heiterTrustYou = new Card({
    title: "I trust you, Heiter.",
    cardMetadata: { nature: Nature.Util },
    description: ([atkSpd]) => `Heiter supports the party. ATK+${atkSpd}, SPD+${atkSpd} for 4 turns.`,
    emoji: CardEmoji.HIMMEL_CARD,
    effects: [3],
    cardCategories: [CardCategory.UTILITY],
    effectNames: ["ATK +", "SPD +"],
    deck: "himmel",
});

export const quickBlock = new Card({
    title: "Quick Block",
    cardMetadata: { nature: Nature.Defense },
    description: ([def]) => `Priority+3. Increases TrueDEF by ${def} until the end of the turn.`,
    emoji: CardEmoji.HIMMEL_CARD,
    priority: 3,
    effects: [20],
    cardCategories: [CardCategory.UTILITY, CardCategory.DEFENSE, CardCategory.BLOCK],
    effectNames: ["DEF"],
    deck: "himmel",
});

const rally = new Card({
    title: "Rally",
    cardMetadata: { nature: Nature.Util },
    description: ([stat, lessStat]) =>
        `ATK+${stat}. DEF+${stat}. SPD+${stat}. An additional ATK+${lessStat}, DEF+${lessStat}, SPD+${lessStat} per ally active, or per active Timed Effect if not used by Himmel.`,
    emoji: CardEmoji.HIMMEL_CARD,
    effects: [1, 0.5],
    effectNames: ["+ STAT ", "+ stat"],
    cardCategories: [CardCategory.ATTACK, CardCategory.HEALING, CardCategory.UTILITY],
    deck: "himmel",
});

export const a_extremeSpeed = new Card({
    title: "Extreme Speed",
    cardMetadata: { nature: Nature.Attack },
    description: ([dmg]) => `Priority+1. HP-8. DMG ${dmg}`,
    emoji: CardEmoji.HIMMEL_CARD,
    priority: 1,
    effects: [12],
    cardCategories: [CardCategory.ATTACK],
    effectNames: ["DMG"],
    hpCost: 8,
    deck: "himmel",
});

export const a_realHeroSwing = new Card({
    title: "A Real Hero's Swing",
    description: ([dmg]) => `HP-12. DMG ${dmg}`,
    emoji: CardEmoji.HIMMEL_CARD,
    cardMetadata: { nature: Nature.Attack, signature: true },
    effects: [18],
    cardCategories: [CardCategory.ATTACK],
    effectNames: ["DMG"],
    deck: "himmel",
});

export const himmelDeck = [
    { card: a_FrierenNow, count: 1 },
    { card: a_FrierenStrikeTheirWeakpoint, count: 1 },
    { card: a_FrierenBackMeUp, count: 1 },
    { card: a_EisenTheEnemysOpen, count: 1 },
    { card: a_EisenCoverMyBack, count: 1 },
    { card: eisenHoldTheLine, count: 1 },
    { card: heiterEmergency, count: 1 },
    { card: a_heiterThreeSpears, count: 1 },
    { card: heiterTrustYou, count: 1 },
    { card: quickBlock, count: 2 },
    { card: rally, count: 2 },
    { card: a_extremeSpeed, count: 2 },
    { card: a_realHeroSwing, count: 1 },
];
