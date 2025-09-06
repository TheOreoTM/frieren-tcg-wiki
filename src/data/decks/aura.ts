import { Card } from "@/lib/classes/Card";
import { CardEmoji } from "@/lib/enums";
import { CardCategory, Nature } from "@/lib/types";

const rusted_blades = new Card({
    title: "Rusted Blades",
    cardMetadata: { nature: Nature.Attack },
    description: ([atk]) => `HP-5. ATK+${atk}. Army Strength+10. Summon 2 Swordsmen platoons.`,
    emoji: CardEmoji.AURA_CARD,
    effects: [4],
    hpCost: 5,
    cardCategories: [CardCategory.ATTACK, CardCategory.SUMMON, CardCategory.BUFF],
    effectNames: ["ATK"],
    deck: "aura",
});

const weathered_shields = new Card({
    title: "Weathered Shields",
    cardMetadata: { nature: Nature.Util },
    description: ([def]) => `HP-5. DEF+${def}. Army Strength+10. Summon 2 Shieldbearers platoons.`,
    emoji: CardEmoji.AURA_CARD,
    effects: [4],
    hpCost: 5,
    cardCategories: [CardCategory.UTILITY, CardCategory.SUMMON, CardCategory.BUFF],
    effectNames: ["DEF"],
    deck: "aura",
});

const broken_arrows = new Card({
    title: "Broken Arrows",
    cardMetadata: { nature: Nature.Attack },
    description: ([spd]) => `HP-5. SPD+${spd}. Army Strength+10. Summon 2 Archers platoons.`,
    emoji: CardEmoji.AURA_CARD,
    effects: [4],
    hpCost: 5,
    cardCategories: [CardCategory.ATTACK, CardCategory.SUMMON, CardCategory.BUFF],
    effectNames: ["SPD"],
    deck: "aura",
});

const fallen_empire = new Card({
    title: "Fallen Empire",
    cardMetadata: { nature: Nature.Attack },
    description: ([stat]) =>
        `HP-10. ATK+${stat} DEF+${stat} SPD+${stat}. Army Strength+15. Summons 1 Swordsmen, 1 Shieldbearer and 1 Archer platoon.`,
    emoji: CardEmoji.AURA_CARD,
    effects: [2],
    hpCost: 10,
    cardCategories: [CardCategory.ATTACK, CardCategory.SUMMON, CardCategory.BUFF],
    effectNames: ["Stat"],
    deck: "aura",
});

const retreat = new Card({
    title: "Retreat",
    cardMetadata: { nature: Nature.Util },
    description: () =>
        `Priority+2. Until the end of the turn, halve ATK. All damage taken that turn will be taken by the Army instead. This move fails if you have no army.`,
    emoji: CardEmoji.AURA_CARD,
    effects: [],
    priority: 2,
    cardCategories: [CardCategory.UTILITY, CardCategory.DEFENSE],
    effectNames: [],
    deck: "aura",
});

const rot = new Card({
    title: "Rot",
    cardMetadata: { nature: Nature.Util },
    description: ([stat, dmg]) =>
        `For the next 3 turns, ATK+${stat} and SPD+${stat}. Each hit by Swordsmen and Archers platoons deal an additional ${dmg} flat damage. At each turn end, HP-3.`,
    emoji: CardEmoji.AURA_CARD,
    effects: [2, 1],
    cardCategories: [CardCategory.UTILITY, CardCategory.BUFF, CardCategory.DoT],
    effectNames: ["Stat", "DMG"],
    deck: "aura",
});

const immortalWall = new Card({
    title: "Immortal Wall",
    cardMetadata: { nature: Nature.Util },
    description: ([def, dmg, shieldDmg]) =>
        `For the next 3 turns, DEF+${def}. Once per turn, if hit, counter attack for ${dmg} + ${shieldDmg}x #Shieldbearers. At each turn end, HP-3.`,
    emoji: CardEmoji.AURA_CARD,
    effects: [3, 4, 1],
    cardCategories: [CardCategory.UTILITY, CardCategory.COUNTER, CardCategory.BUFF, CardCategory.DoT],
    effectNames: ["DEF", "DMG", "DMG"],
    deck: "aura",
});

const guillotine = new Card({
    title: "Guillotine",
    cardMetadata: { nature: Nature.Attack },
    description: ([dmg, swrdDmg]) =>
        `HP-8. Army Strength -20. DMG ${dmg} + ${swrdDmg}x #Swordsmen. Remove all Swordsmen afterwards.`,
    emoji: CardEmoji.AURA_CARD,
    effects: [14, 2],
    hpCost: 8,
    cardCategories: [CardCategory.ATTACK],
    effectNames: ["DMG", "DMG"],
    deck: "aura",
});

const stolen_valor = new Card({
    title: "Stolen Valor",
    cardMetadata: { nature: Nature.Util },
    description: ([hp, shieldsHeal]) =>
        `Army Strength -20. Heal ${hp}HP + ${shieldsHeal}x #Shieldsbearer. Remove all Shieldsbearer afterwards.`,
    emoji: CardEmoji.AURA_CARD,
    effects: [10, 2],
    cardCategories: [CardCategory.UTILITY, CardCategory.HEALING],
    effectNames: ["HP", "HP"],
    deck: "aura",
});

const heartpiercer = new Card({
    title: "Heartpiercer",
    cardMetadata: { nature: Nature.Attack },
    description: ([dmg, archersDmg]) =>
        `HP-8. Army Strength -20. DMG ${dmg} + ${archersDmg}x #Archers with 50% Pierce. Remove all Archers afterwards.`,
    emoji: CardEmoji.AURA_CARD,
    effects: [7, 2],
    hpCost: 8,
    cardCategories: [CardCategory.ATTACK, CardCategory.PIERCE],
    effectNames: ["DMG", "DMG"],
    deck: "aura",
});

export const auserlese = new Card({
    title: "Scales of Obedience - Auserlese",
    cardMetadata: { nature: Nature.Util, signature: true },
    description: () =>
        `Priority+13. HP-15. Roll a D100. If the result of the roll > Opp's HP - Your HP, use your opponent's move as if it's your own. At this turn's end, if Your HP - Opp's HP >= 50, you win, and if Opp's HP - Your HP >= 50, you lose.`,
    priority: 13,
    hpCost: 15,
    emoji: CardEmoji.AURA_CARD,
    effects: [],
    cardCategories: [CardCategory.UTILITY, CardCategory.WIN_CON, CardCategory.UNIQUE],
    effectNames: [],
    deck: "aura",
});

export const auraDeck = [
    { card: rusted_blades, count: 2 },
    { card: weathered_shields, count: 2 },
    { card: broken_arrows, count: 2 },
    { card: fallen_empire, count: 1 },
    { card: retreat, count: 2 },
    { card: rot, count: 2 },
    { card: immortalWall, count: 1 },
    { card: guillotine, count: 1 },
    { card: stolen_valor, count: 1 },
    { card: heartpiercer, count: 1 },
    { card: auserlese, count: 1 },
];
