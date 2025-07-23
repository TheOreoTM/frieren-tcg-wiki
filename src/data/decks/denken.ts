import { Card } from "@/lib/classes/Card";
import { CardEmoji } from "@/lib/enums";
import { CardCategory, Nature } from "@/lib/types";

const a_jab = new Card({
    title: "Jab",
    cardMetadata: { nature: Nature.Attack },
    description: ([def, atk, spd, dmg]) => `HP-1. DEF+${def}. ATK+${atk}. SPD+${spd}. Deal ${dmg} DMG.`,
    emoji: CardEmoji.DENKEN_CARD,
    effects: [1, 1, 1, 2],
    hpCost: 1,
    cardCategories: [CardCategory.ATTACK],
    effectNames: ["DEF", "ATK", "SPD", "DMG"],
    deck: "denken",
});

const a_hook = new Card({
    title: "Hook",
    cardMetadata: { nature: Nature.Attack },
    description: ([spd, atk, dmg]) => `HP-1. SPD+${spd}. ATK+${atk}. Deal ${dmg} DMG.`,
    emoji: CardEmoji.DENKEN_CARD,
    effects: [2, 1, 2],
    hpCost: 1,
    cardCategories: [CardCategory.ATTACK],
    effectNames: ["SPD", "ATK", "DMG"],
    deck: "denken",
});

const a_uppercut = new Card({
    title: "Uppercut",
    cardMetadata: { nature: Nature.Attack },
    description: ([atk, spd, dmg]) => `HP-2. ATK+${atk}. SPD+${spd}. Deal ${dmg} DMG.`,
    emoji: CardEmoji.DENKEN_CARD,
    effects: [2, 1, 3],
    hpCost: 2,
    cardCategories: [CardCategory.ATTACK],
    effectNames: ["ATK", "SPD", "DMG"],
    deck: "denken",
});

const bareHandedBlock = new Card({
    title: "Bare-handed Block",
    cardMetadata: { nature: Nature.Defense },
    description: ([def, tempDef]) => `Priority+2. DEF+${def}. TrueDEF+${tempDef} until the end of the turn.`,
    emoji: CardEmoji.DENKEN_CARD,
    priority: 2,
    effects: [2, 8],
    cardCategories: [CardCategory.DEFENSE],
    effectNames: ["DEF", "TrueDEF"],
    deck: "denken",
});

const a_waldgose = new Card({
    title: "Tornado Winds: Waldgose",
    cardMetadata: { nature: Nature.Attack },
    description: ([dmg, multiDmg]) =>
        `HP-7. DMG ${dmg}. At the next 5 turn ends, deal ${multiDmg} DMG. Treat this card as "Jab" if the user's HP is <= 0.`,
    emoji: CardEmoji.DENKEN_CARD,
    effects: [6, 1],
    cardCategories: [CardCategory.ATTACK, CardCategory.DoT],
    effectNames: ["DMG", "DoT"],
    deck: "denken",
});

const a_daosdorg = new Card({
    title: "Hellfire: Daosdorg",
    cardMetadata: { nature: Nature.Attack },
    description: ([dmg]) =>
        `HP-9. DMG ${dmg}. Afterwards, all your attacks receive 20% Pierce for the duration of any currently active Waldgose. Treat this card as "Hook" if the user's HP is <= 0.`,
    emoji: CardEmoji.DENKEN_CARD,
    effects: [12],
    cardCategories: [CardCategory.ATTACK],
    effectNames: ["DMG", "Pierce"],
    deck: "denken",
});

const a_catastravia = new Card({
    title: "Lights of Judgement: Catastravia",
    cardMetadata: { nature: Nature.Attack },
    description: ([initDmg, turn2DMG, turn3DMG]) =>
        `HP-15. DMG ${initDmg}. At the end of the next 2 turns, deal DMG ${turn2DMG}x2 and DMG ${turn3DMG}x3 respectively. Treat this card as "Uppercut" if the user's HP is <= 0.`,
    emoji: CardEmoji.DENKEN_CARD,
    effects: [9, 3, 3],
    cardCategories: [CardCategory.ATTACK, CardCategory.DoT],
    effectNames: ["DMG", "DoT", "DoT"],
    deck: "denken",
});

const elementaryDefensiveMagic = new Card({
    title: "Elementary Defensive Magic",
    cardMetadata: { nature: Nature.Defense, signature: true },
    description: ([def]) =>
        `Priority+2. Increases TrueDEF by ${def} until the end of the turn. Treat this card as "Bare-handed Block" if the user's HP is <= 0.`,
    emoji: CardEmoji.DENKEN_CARD,
    priority: 2,
    effects: [20],
    cardCategories: [CardCategory.DEFENSE, CardCategory.UTILITY],
    effectNames: ["TrueDEF"],
    deck: "denken",
});

const a_concentratedOffensiveMagicZoltraak = new Card({
    title: "Concentrated Offensive Magic: Zoltraak",
    cardMetadata: { nature: Nature.Attack },
    description: ([dmg]) => `HP-8. DMG ${dmg}.`,
    emoji: CardEmoji.DENKEN_CARD,
    effects: [14],
    hpCost: 8,
    cardCategories: [CardCategory.ATTACK],
    effectNames: ["DMG"],
    deck: "denken",
});

const thisIsNoPlaceToGiveUp = new Card({
    title: "This Is No Place To Give Up",
    cardMetadata: { nature: Nature.Util },
    description: ([hpFirst, hpSecond]) =>
        `Heal ${hpFirst}HP. Heal an additional ${hpSecond}HP and gain 1 Preserverance stack if HP <= 0.`,
    emoji: CardEmoji.DENKEN_CARD,
    effects: [7, 7],
    cardCategories: [CardCategory.HEALING, CardCategory.UTILITY],
    effectNames: ["Heal", "Heal"],
    deck: "denken",
});

export const denkenDeck = [
    { card: a_jab, count: 2 },
    { card: a_hook, count: 2 },
    { card: a_uppercut, count: 2 },
    { card: bareHandedBlock, count: 1 },
    { card: a_waldgose, count: 2 },
    { card: a_daosdorg, count: 2 },
    { card: a_catastravia, count: 1 },
    { card: elementaryDefensiveMagic, count: 1 },
    { card: a_concentratedOffensiveMagicZoltraak, count: 2 },
    { card: thisIsNoPlaceToGiveUp, count: 1 },
];
