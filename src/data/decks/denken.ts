import { Card } from "@/lib/classes/Card";
import { CardEmoji } from "@/lib/enums";

const a_jab = new Card({
  title: "Jab",
  description: ([hp, def, spd, dmg]) =>
    `HP+${hp}. DEF+${def}. SPD+${spd}. DMG ${dmg}.`,
  emoji: CardEmoji.DENKEN_CARD,
  effects: [2, 1, 1, 2],
});

const a_hook = new Card({
  title: "Hook",
  description: ([hp, atk, dmg]) => `HP+${hp}. ATK+${atk}. DMG ${dmg}.`,
  emoji: CardEmoji.DENKEN_CARD,
  effects: [2, 2, 2],
});

const a_uppercut = new Card({
  title: "Uppercut",
  description: ([hp, atk, spd, dmg]) =>
    `HP+${hp}. ATK+${atk}. SPD+${spd}. DMG ${dmg}.`,
  emoji: CardEmoji.DENKEN_CARD,
  effects: [2, 1, 1, 3],
});

const bareHandedBlock = new Card({
  title: "Bare-handed Block",
  description: ([def, tempDef]) =>
    `Priority+2. DEF+${def}. Increases DEF by an additional ${tempDef} until the end of the turn.`,
  emoji: CardEmoji.DENKEN_CARD,
  priority: 2,
  effects: [2, 8],
});

export const a_waldgose = new Card({
  title: "Tornado Winds: Waldgose",
  description: ([dmg]) =>
    `HP-7. DMG ${dmg}. At the next 3 turn ends, deal ${dmg} DMG. Treat this card as "Jab" if the user's HP is <= 0.`,
  emoji: CardEmoji.DENKEN_CARD,
  effects: [3],
});

export const a_daosdorg = new Card({
  title: "Hellfire: Daosdorg",
  description: ([dmg, waldgoseDmgBonus]) =>
    `HP-9. DMG ${dmg}. If Waldgose is active, increase its turn end damage by ${waldgoseDmgBonus}. Treat this card as "Hook" if the user's HP is <= 0.`,
  emoji: CardEmoji.DENKEN_CARD,
  effects: [12, 3],
});

export const a_catastravia = new Card({
  title: "Lights of Judgment: Catastravia",
  description: ([dmg]) =>
    `HP-15. DMG ${dmg}. At the next 5 turn ends, deal ${dmg} DMG. Treat this card as "Uppercut" if the user's HP is <= 0.`,
  emoji: CardEmoji.DENKEN_CARD,
  effects: [4],
});

const elementaryDefensiveMagic = new Card({
  title: "Elementary Defensive Magic",
  description: ([def]) =>
    `Priority+2. Increases DEF by ${def} until the end of the turn. Treat this card as "Bare-handed Block" if the user's HP is <= 0.`,
  emoji: CardEmoji.DENKEN_CARD,
  priority: 2,
  effects: [20],
});

export const a_concentratedOffensiveMagicZoltraak = new Card({
  title: "Concentrated Offensive Magic: Zoltraak",
  description: ([dmg]) => `HP-8. DMG ${dmg}.`,
  emoji: CardEmoji.DENKEN_CARD,
  effects: [14],
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
];
