import { Card } from "@/lib/classes/Card";
import { CardEmoji } from "@/lib/enums";
import { CardCategory, Nature } from "@/lib/types";

const milleniumBarrier = new Card({
    title: "Millenium Barrier",
    cardMetadata: { nature: Nature.Util },
    description: ([def, spd, hp]) =>
        `HP-15. DEF+${def} and SPD+${spd} for 5 turns. If Theory of Irreversibilty is active, all opponent's stat increases are set to 0. While active, heal ${hp}HP at each turn's end.`,
    emoji: CardEmoji.FLAMME_CARD,
    effects: [5, 5, 3],
    hpCost: 15,
    cardCategories: [CardCategory.UTILITY, CardCategory.BUFF, CardCategory.HEALING],
    effectNames: ["DEF", "SPD", "HP"],
    deck: "flamme",
});

const thousandYearSanctuary = new Card({
    title: "Thousand Year Sanctuary",
    cardMetadata: { nature: Nature.Util },
    description: ([oppAtkDecrease, oppSpdDecrease, hp]) =>
        `HP-15. Opp's ATK-${oppAtkDecrease} and SPD-${oppSpdDecrease}. If Theory of Balance is active, the turn count stops increasing. While active, heal ${hp}HP at each turn's end.`,
    emoji: CardEmoji.FLAMME_CARD,
    effects: [5, 5, 3],
    hpCost: 15,
    cardCategories: [CardCategory.UTILITY, CardCategory.DEBUFF, CardCategory.HEALING],
    effectNames: ["-Opp ATK", "-Opp SPD", "HP"],
    deck: "flamme",
});

const treeOfLife = new Card({
    title: "Tree of Life",
    cardMetadata: { nature: Nature.Util },
    description: ([hp]) =>
        `Heal ${hp} HP. For the next 7 turns, roll an additional dice during card activation phase. If Theory of Prescience is active, this roll of dice will always be 5.`,
    emoji: CardEmoji.FLAMME_CARD,
    effects: [10],
    cardCategories: [CardCategory.UTILITY, CardCategory.HEALING],
    effectNames: ["HP"],
    deck: "flamme",
});

const flammesNote = new Card({
    title: "Flamme's Note",
    cardMetadata: { nature: Nature.Util },
    description: ([hp, hpSoul]) =>
        `HP+${hp}. Heal an additional ${hpSoul}HP if Theory of Soul is active. Discard a random card. If there is no Theory card in your deck, draw 1 card. Otherwise, add a random Theory card to your hand.`,
    emoji: CardEmoji.FLAMME_CARD,
    effects: [6, 4],
    cardCategories: [CardCategory.UTILITY, CardCategory.HEALING],
    effectNames: ["HP", "HP"],
    deck: "flamme",
});

const primitiveDefensiveTechnique = new Card({
    title: "Primitive Defensive Technique",
    cardMetadata: { nature: Nature.Defense },
    description: ([def]) => `Priority+2. TrueDEF+${def} for 1 turn.`,
    emoji: CardEmoji.FLAMME_CARD,
    priority: 2,
    effects: [20],
    cardCategories: [CardCategory.DEFENSE, CardCategory.BLOCK],
    effectNames: ["TrueDEF"],
    deck: "flamme",
});

const theoryOfIrreversibility = new Card({
    title: "Theory of Irreversibility",
    cardMetadata: {
        nature: Nature.Util,
        theory: true,
        hideEmpower: true,
    },
    description: () =>
        `All ATK/DEF/SPD changes for both players are halved. Remove this card from the deck once it is used.`,
    emoji: CardEmoji.FLAMME_CARD,
    effects: [],
    cardCategories: [CardCategory.UTILITY, CardCategory.UNIQUE],
    effectNames: [],
    deck: "flamme",
});

const theoryOfBalance = new Card({
    title: "Theory of Balance",
    cardMetadata: {
        nature: Nature.Util,
        theory: true,
        hideEmpower: true,
    },
    description: () =>
        `The Empower level for all card is now equal to the Turn Count. Remove this card from the deck once it is used.`,
    emoji: CardEmoji.FLAMME_CARD,
    effects: [],
    cardCategories: [CardCategory.UTILITY, CardCategory.UNIQUE],
    effectNames: [],
    deck: "flamme",
});

const theoryOfPrescience = new Card({
    title: "Theory of Prescience",
    cardMetadata: {
        nature: Nature.Util,
        theory: true,
        hideEmpower: true,
    },
    description: () =>
        `The roll of the first 4 dices for both players for which cards are active for any given turn will always be 0, 1, 2, 3. Remove this card from the deck once it is used.`,
    emoji: CardEmoji.FLAMME_CARD,
    effects: [],
    cardCategories: [CardCategory.UTILITY, CardCategory.UNIQUE],
    effectNames: [],
    deck: "flamme",
});

const theoryOfSoul = new Card({
    title: "Theory of Soul",
    cardMetadata: {
        nature: Nature.Util,
        theory: true,
        hideEmpower: true,
    },
    description: () =>
        `Both players swap their own active and discard piles. Remove this card from the deck once it is used.`,
    emoji: CardEmoji.FLAMME_CARD,
    effects: [],
    cardCategories: [CardCategory.UTILITY, CardCategory.UNIQUE],
    effectNames: [],
    deck: "flamme",
});

export const a_foundationOfHumanitysMagic = new Card({
    title: "Foundation of Humanity's Magic",
    cardMetadata: { nature: Nature.Attack },
    description: () => "This card's effect changes based on how many Theory cards you have played.",
    emoji: CardEmoji.FLAMME_CARD,
    effects: [],
    cardCategories: [CardCategory.ATTACK, CardCategory.UNIQUE],
    effectNames: [],
    deck: "flamme",
});

// NOTE: Definition for this card is based on the wiki code provided, as it was imported in the game code.
export const incantationFieldOfFlowers = new Card({
    title: "Incantation: Field of Flowers",
    cardMetadata: { nature: Nature.Util, signature: true },
    description: ([hp, endHp]) => `Heal ${hp} HP. At the next 3 turns' ends, heal ${endHp} HP.`,
    emoji: CardEmoji.FLAMME_CARD,
    effects: [5, 3], // Assuming values from wiki code example
    cardCategories: [CardCategory.UTILITY, CardCategory.HEALING, CardCategory.DoT],
    effectNames: ["HP", "HP"],
    deck: "flamme",
});

export const flammeDeck = [
    { card: a_foundationOfHumanitysMagic, count: 6 },
    { card: incantationFieldOfFlowers, count: 2 },
    { card: milleniumBarrier, count: 1 },
    { card: thousandYearSanctuary, count: 1 },
    { card: treeOfLife, count: 1 },
    { card: flammesNote, count: 3 },
    { card: primitiveDefensiveTechnique, count: 2 },
    { card: theoryOfIrreversibility, count: 1 },
    { card: theoryOfBalance, count: 1 },
    { card: theoryOfPrescience, count: 1 },
    { card: theoryOfSoul, count: 1 },
];
