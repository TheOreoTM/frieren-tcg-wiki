import {
  CharacterEmoji,
  CharacterID,
  CharacterName,
  CharacterType,
  Stat,
} from "@/lib/enums";
import type { Character } from "@/lib/types";

export const Laufen: Character = {
  id: "laufen",
  name: CharacterName.Laufen,
  description: "Best girl?",
  type: CharacterType.Hero,
  cosmetic: {
    emoji: CharacterEmoji.LAUFEN,
    color: 0xcf7457,
    imageUrl: "/cards/Laufen.png",
    icon: "/icons/Laufen.webp",
  },
  stats: {
    [Stat.HP]: 90.0,
    [Stat.ATK]: 10.0,
    [Stat.DEF]: 7.0,
    [Stat.SPD]: 30.0,
    [Stat.Ability]: 0.0,
  },
  cards: [],
  ability: {
    abilityName: "Evasive",
    abilityEffectString: `When the opponent attacks, roll a D100.
        If the result is less than the character's speed minus the opponent's speed, the attack deals 0 damage.`,
  },
  relatedCharacters: [CharacterID.Denken],
  additionalMetadata: {
    accessToDefaultCardOptions: true,
    manaSuppressed: false,
  },
};
