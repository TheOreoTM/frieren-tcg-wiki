import { Card } from "@/lib/classes/Card";
import { CardEmoji } from "@/lib/enums";
import { CardCategory, Nature } from "@/lib/types";

const incantationExperimentalNotes = new Card({
    title: "Incantation: Experimental Notes",
    cardMetadata: { nature: Nature.Util },
    description: ([hp]) =>
        `Heal ${hp} HP. Gain 3 Sigils. If you have less than 2 Flamme's Note cards in your hand, discard a random card, add 1 Flamme's Note from the active or discard pile to your hand.`,
    emoji: CardEmoji.FLAMME_CARD,
    effects: [5],
    cardCategories: [CardCategory.UTILITY],
    effectNames: ["HP"],
    deck: "flamme",
});

export const incantationFieldOfFlowers = new Card({
    title: "Incantation: Field of Flowers",
    cardMetadata: { nature: Nature.Util, signature: true },
    description: ([hp, endHp]) =>
        `Heal ${hp} HP. At the next 3 turns' ends, heal ${endHp} HP. Gain 1 Sigil at the end of every turn.`,
    emoji: CardEmoji.FLAMME_CARD,
    effects: [5, 3],
    cardCategories: [CardCategory.UTILITY],
    effectNames: ["HP", "HP"],
    deck: "flamme",
});

const incantationSeductionTechnique = new Card({
    title: "Incantation: Seduction Technique",
    cardMetadata: { nature: Nature.Util },
    description: ([hp, oppAtkDecrease, oppSpdDecrease]) =>
        `Heal ${hp} HP. Opp's ATK-${oppAtkDecrease}. Opp's SPD-${oppSpdDecrease}. Gain 2 Sigils.`,
    emoji: CardEmoji.FLAMME_CARD,
    effects: [3, 2, 1],
    cardCategories: [CardCategory.UTILITY],
    effectNames: ["HP", "-Opp ATK", "-Opp SPD"],
    deck: "flamme",
});

const milleniumBarrier = new Card({
    title: "Millenium Barrier",
    cardMetadata: { nature: Nature.Util },
    description: ([def, spd]) =>
        `DEF+${def} and SPD+${spd}. If Theory of Irreversibilty is active, all opponent's stat increases are set to 0. At the end of every turn, HP-3, -1 Sigil. This effect lasts until the number of Sigil you have is <= 0.`,
    emoji: CardEmoji.FLAMME_CARD,
    effects: [5, 5],
    cardCategories: [CardCategory.UTILITY],
    effectNames: ["DEF", "SPD"],
    deck: "flamme",
});

const thousandYearSanctuary = new Card({
    title: "Thousand Year Sanctuary",
    cardMetadata: { nature: Nature.Util },
    description: ([oppAtkDecrease, oppSpdDecrease]) =>
        `Opp's ATK-${oppAtkDecrease} and SPD-${oppSpdDecrease}. If Theory of Balance is active, the turn count stops increasing. At the end of every turn, HP-2, -1 Sigil. This effect lasts until the number of Sigil you have is <= 0.`,
    emoji: CardEmoji.FLAMME_CARD,
    effects: [5, 5],
    cardCategories: [CardCategory.UTILITY],
    effectNames: ["-Opp ATK", "-Opp SPD"],
    deck: "flamme",
});

const treeOfLife = new Card({
    title: "Tree of Life",
    cardMetadata: { nature: Nature.Util },
    description: ([hp]) =>
        `Heal ${hp} HP. Roll an additional dice during card activation phase. If Theory of Prescience is active, this roll of dice will always be 5. At the end of every turn, HP-1, -1 Sigil. This effect lasts until the number of Sigil you have is <= 0.`,
    emoji: CardEmoji.FLAMME_CARD,
    effects: [10],
    cardCategories: [CardCategory.UTILITY],
    effectNames: ["HP"],
    deck: "flamme",
});

const flammesNote = new Card({
    title: "Flamme's Note",
    cardMetadata: { nature: Nature.Util },
    description: ([hp]) =>
        `HP+${hp}. Discard a random card. If there is no Theory card in your deck, draw 1 card. Otherwise, add a random Theory card to your hand, and if Theory of Souls is not active, -1 Sigil.`,
    emoji: CardEmoji.FLAMME_CARD,
    effects: [8],
    cardCategories: [CardCategory.UTILITY],
    effectNames: ["HP"],
    deck: "flamme",
});

const primitiveDefensiveTechnique = new Card({
    title: "Primitive Defensive Technique",
    cardMetadata: { nature: Nature.Defense },
    description: ([def]) =>
        `TrueDEF+${def} for 1 turn. -1 Sigil. If "Pinnacle of Humanity's Magic" is in your hand, discard it, then draw 1 card.`,
    emoji: CardEmoji.FLAMME_CARD,
    priority: 2,
    effects: [20],
    cardCategories: [CardCategory.UTILITY, CardCategory.DEFENSE],
    effectNames: ["DEF"],
    deck: "flamme",
});

const theoryOfIrreversibility = new Card({
    title: "Theory of Irreversibility",
    cardMetadata: { nature: Nature.Util },
    description: () => `All stat changes for both players are halved. Remove this card from the deck once it is used.`,
    emoji: CardEmoji.FLAMME_CARD,
    effects: [],
    cardCategories: [CardCategory.UTILITY],
    effectNames: [],
    deck: "flamme",
});

const theoryOfBalance = new Card({
    title: "Theory of Balance",
    cardMetadata: { nature: Nature.Util },
    description: () =>
        `The Empower level for all card is now equal to the Turn Count. Remove this card from the deck once it is used.`,
    emoji: CardEmoji.FLAMME_CARD,
    effects: [],
    cardCategories: [CardCategory.UTILITY],
    effectNames: [],
    deck: "flamme",
});

const theoryOfPrescience = new Card({
    title: "Theory of Prescience",
    cardMetadata: { nature: Nature.Util },
    description: () =>
        `The roll of the first 4 dices for both players for which cards are active for any given turn will always be 0, 1, 2, 3. Remove this card from the deck once it is used.`,
    emoji: CardEmoji.FLAMME_CARD,
    effects: [],
    cardCategories: [CardCategory.UTILITY],
    effectNames: [],
    deck: "flamme",
});

const theoryOfSoul = new Card({
    title: "Theory of Soul",
    cardMetadata: { nature: Nature.Util },
    description: () =>
        `Both players swap their own active and discard piles. Remove this card from the deck once it is used.`,
    emoji: CardEmoji.FLAMME_CARD,
    effects: [],
    cardCategories: [CardCategory.UTILITY],
    effectNames: [],
    deck: "flamme",
});

export const a_pinnacleOfHumanitysMagic = new Card({
    title: "Pinnacle of Humanity's Magic",
    cardMetadata: { nature: Nature.Attack },
    description: ([stat]) => `ATK+${stat} DEF+${stat} SPD+${stat}. Deal ${stat} DMG.`,
    emoji: CardEmoji.FLAMME_CARD,
    effects: [100],
    cardCategories: [CardCategory.ATTACK],
    effectNames: ["Stat"],
    deck: "flamme",
});

export const flammeDeck = [
    { card: incantationExperimentalNotes, count: 3 },
    { card: incantationFieldOfFlowers, count: 2 },
    { card: incantationSeductionTechnique, count: 2 },
    { card: milleniumBarrier, count: 1 },
    { card: thousandYearSanctuary, count: 2 },
    { card: treeOfLife, count: 2 },
    { card: flammesNote, count: 2 },
    { card: primitiveDefensiveTechnique, count: 2 },
    { card: theoryOfIrreversibility, count: 1 },
    { card: theoryOfBalance, count: 1 },
    { card: theoryOfPrescience, count: 1 },
    { card: theoryOfSoul, count: 1 },
    { card: a_pinnacleOfHumanitysMagic, count: 1 },
];
