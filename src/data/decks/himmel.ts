import { Card } from "@/lib/classes/Card";
import { CardEmoji } from "@/lib/enums";
import { CardCategory } from "@/lib/types";

const a_FrierenStrikeTheirWeakpoint = new Card({
    title: "Frieren! Strike Their Weakpoint!",
    description: ([dmg]) =>
        `Frieren attacks for ${dmg} DMG. At next turn's end, Frieren attacks for an additional ${dmg} DMG.`,
    emoji: CardEmoji.HIMMEL_CARD,
    effects: [7],
    effectNames: ["DMG"],
    cardCategories: [CardCategory.ATTACK],
});

const a_FrierenBackMeUp = new Card({
    title: "Frieren! Back Me Up!",
    description: ([dmg]) =>
        `Frieren attacks for ${dmg} DMG. For the next 3 turn ends, Frieren attacks for an additional ${dmg} DMG.`,
    emoji: CardEmoji.HIMMEL_CARD,
    effects: [3],
    effectNames: ["DMG"],
    cardCategories: [CardCategory.ATTACK],
});

const a_EisenTheEnemysOpen = new Card({
    title: "Eisen! The Enemy's Open!",
    description: ([def, dmg]) => `Eisen winds up. DEF+${def} for 2 turns. At next turn's end, deal ${dmg} DMG.`,
    emoji: CardEmoji.HIMMEL_CARD,
    effects: [2, 10],
    effectNames: ["DEF", "DMG"],
    cardCategories: [CardCategory.ATTACK],
});

const a_EisenCoverMyBack = new Card({
    title: "Eisen! Cover My Back!",
    description: ([def, dmg]) =>
        `Eisen provides cover. DEF+${def} for 3 turns. When an opponent attacks, counter for ${dmg} DMG.`,
    emoji: CardEmoji.HIMMEL_CARD,
    effects: [3, 5],
    cardCategories: [CardCategory.ATTACK],
    effectNames: ["DEF", "DMG"],
});

const eisenHoldTheLine = new Card({
    title: "Eisen! Hold The Line!",
    description: ([def]) => `Eisen holds the line. DEF+${def} for 5 turns.`,
    emoji: CardEmoji.HIMMEL_CARD,
    effects: [4],
    cardCategories: [CardCategory.UTILITY, CardCategory.DEFENSE],
    effectNames: ["DEF"],
});

const heiterEmergency = new Card({
    title: "Heiter! Emergency!",
    description: ([heal]) => `Heiter heals the party for ${heal}HP. At next turn's end, heal an additional ${heal} HP.`,
    emoji: CardEmoji.HIMMEL_CARD,
    effects: [6],
    effectNames: ["HP"],
    cardCategories: [CardCategory.HEALING, CardCategory.UTILITY],
});

const a_heiterThreeSpears = new Card({
    title: "Heiter! Don't give them an opening!",
    description: ([heal]) => `Heiter casts Three Spears of the Goddess! At next 3 turn's end, deal ${heal} DMG.`,
    emoji: CardEmoji.HIMMEL_CARD,
    effects: [5],
    effectNames: ["DMG"],
    cardCategories: [CardCategory.ATTACK],
});

const heiterTrustYou = new Card({
    title: "I trust you, Heiter.",
    description: ([atkSpd]) => `Heiter supports the party. ATK+${atkSpd}, SPD+${atkSpd} for 5 turns.`,
    emoji: CardEmoji.HIMMEL_CARD,
    effects: [4],
    cardCategories: [CardCategory.UTILITY],
    effectNames: ["ATK +", "SPD +"],
});

const quickBlock = new Card({
    title: "Quick Block",
    description: ([def]) => `Priority+3. Increases DEF by ${def} until the end of the turn.`,
    emoji: CardEmoji.HIMMEL_CARD,
    priority: 3,
    effects: [25],
    cardCategories: [CardCategory.UTILITY, CardCategory.DEFENSE, CardCategory.BLOCK],
    effectNames: ["DEF"],
});

const rally = new Card({
    title: "Rally",
    description: ([hp, stat]) =>
        `HP+${hp}. ATK+${stat}. DEF+${stat}. SPD+${stat}. An additional HP+${hp}, ATK+${stat}, DEF+${stat}, SPD+${stat} for each one of your active allies.`,
    emoji: CardEmoji.HIMMEL_CARD,
    effects: [2, 1],
    effectNames: ["+ HP ", "+ STAT"],
    cardCategories: [CardCategory.ATTACK, CardCategory.HEALING, CardCategory.UTILITY],
});

export const a_extremeSpeed = new Card({
    title: "Extreme Speed",
    description: ([dmg]) => `Priority+1. HP-8. DMG ${dmg}`,
    emoji: CardEmoji.HIMMEL_CARD,
    priority: 1,
    effects: [12],
    cardCategories: [CardCategory.ATTACK],
    effectNames: ["DMG"],
});

export const a_realHeroSwing = new Card({
    title: "A Real Hero's Swing",
    description: ([dmg]) => `HP-12. DMG ${dmg}`,
    emoji: CardEmoji.HIMMEL_CARD,
    effects: [20],
    cardCategories: [CardCategory.ATTACK],
    effectNames: ["DMG"],
});

export const himmelDeck = [
    { card: a_FrierenStrikeTheirWeakpoint, count: 1 },
    { card: a_FrierenBackMeUp, count: 1 },
    { card: a_EisenTheEnemysOpen, count: 1 },
    { card: a_EisenCoverMyBack, count: 1 },
    { card: eisenHoldTheLine, count: 1 },
    { card: heiterEmergency, count: 1 },
    { card: a_heiterThreeSpears, count: 1 },
    { card: heiterTrustYou, count: 1 },
    { card: quickBlock, count: 1 },
    { card: rally, count: 2 },
    { card: a_extremeSpeed, count: 2 },
    { card: a_realHeroSwing, count: 2 },
];
