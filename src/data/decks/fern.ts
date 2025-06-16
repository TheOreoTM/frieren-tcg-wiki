import { Card } from "@/lib/classes/Card";
import { CardEmoji } from "@/lib/enums";
import { Nature } from "@/lib/types";
import { manaDetection } from "./linie";

export const a_fernZoltraak = new Card({
    title: "Zoltraak",
    cardMetadata: { nature: Nature.Attack },
    description: ([dmg]) => `HP-4. DMG ${dmg}. Gain 1 Barrage count.`,
    emoji: CardEmoji.FERN_CARD,
    effects: [7],
    effectNames: ["DMG"],
    cardCategories: ["Attack"],
    deck: "fern",
});

const a_fernConcentratedZoltraakSnipe = new Card({
    title: "Concentrated Zoltraak Snipe",
    cardMetadata: { nature: Nature.Attack },
    description: ([baseDmg, dmg]) =>
        `HP-12. Deal ${baseDmg} + ${dmg} DMG x Barrage count, with 50% Pierce. Reset Barrage count to 0.`,
    emoji: CardEmoji.FERN_CARD,
    effects: [6, 2],
    hpCost: 12,
    effectNames: ["DMG", "DMG"],
    cardCategories: ["Attack"],
    deck: "fern",
});

const disapprovingPout = new Card({
    title: "Disapproving Pout",
    cardMetadata: { nature: Nature.Util },
    description: ([hp, spd, oppAtkDecrease]) => `HP+${hp}. Opp's ATK-${oppAtkDecrease}.`,
    emoji: CardEmoji.FERN_CARD,
    effects: [3, 2],
    effectNames: ["HP", "-Opp ATK"],
    cardCategories: ["Utility"],
    deck: "fern",
});

export const manaConcealment = new Card({
    title: "Mana Concealment",
    cardMetadata: { nature: Nature.Util },
    description: ([atk, def, spd]) =>
        `ATK+${atk}. DEF+${def}. SPD+${spd} Receive Priority+1 and additional 50% Pierce on attacks for next turn.`,
    emoji: CardEmoji.FERN_CARD,
    effects: [1, 2, 2],
    effectNames: ["ATK", "DEF", "SPD"],
    cardCategories: ["Utility"],
    deck: "fern",
});

export const spellToCreateManaButterflies = new Card({
    title: "Spell to Create Mana Butterflies",
    cardMetadata: { nature: Nature.Util, signature: true },
    description: ([hp, endHp]) => `Heal ${hp} HP. At the next 4 turn ends, heal ${endHp} and gain 0.5 Barrage count.`,
    cosmetic: {
        cardGif: "https://c.tenor.com/B93aR7oWJ4IAAAAC/tenor.gif",
    },
    emoji: CardEmoji.FERN_CARD,
    effects: [6, 2],
    effectNames: ["HP", "HP"],
    cardCategories: ["Utility", "Healing"],
    deck: "fern",
});

export const commonDefensiveMagic = new Card({
    title: "Common Defensive Magic",
    cardMetadata: { nature: Nature.Defense },
    description: ([def]) =>
        `Priority+2. Increases TrueDEF by ${def} until the end of the turn. Reduce 1 Barrage count.`,
    emoji: CardEmoji.FERN_CARD,
    effects: [20],
    priority: 2,
    effectNames: ["DEF"],
    cardCategories: ["Utility", "Defense", "Block"],
    deck: "fern",
});

export const a_fernBarrage = new Card({
    title: "Barrage",
    cardMetadata: { nature: Nature.Attack },
    description: ([dmg]) =>
        `HP-4. DMG ${dmg} with 25% Pierce. Gain 1 Barrage count. At the end of each turn, -1 Barrage count, HP-4, deal ${dmg} DMG with 25% Pierce, until Barrage count reaches 0.`,
    emoji: CardEmoji.FERN_CARD,
    effects: [5],
    effectNames: ["DMG"],
    cardCategories: ["Attack"],
    deck: "fern",
});

export const fernDeck = [
    { card: a_fernZoltraak, count: 3 },
    { card: a_fernBarrage, count: 2 },
    { card: a_fernConcentratedZoltraakSnipe, count: 2 },
    { card: disapprovingPout, count: 2 },
    { card: manaConcealment, count: 2 },
    { card: manaDetection, count: 1 },
    { card: commonDefensiveMagic, count: 2 },
    { card: spellToCreateManaButterflies, count: 2 },
];
