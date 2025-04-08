import {
  CharacterEmoji,
  CharacterID,
  CharacterName,
  CharacterType,
  Stat,
} from "@/lib/enums";
import type { Character } from "@/lib/types";

const SERIE_TOYING_DAMAGE_BONUS = 0.3;

export const Serie: Character = {
  id: "serie",
  name: CharacterName.Serie,
  description: "Great Mage from the Mythical Era",
  type: CharacterType.Hero,
  cosmetic: {
    emoji: CharacterEmoji.SERIE,
    color: 0xe8b961,
    imageUrl: "/cards/Serie.png",
    icon: "/icons/Serie.webp",
  },
  stats: {
    [Stat.HP]: 100.0,
    [Stat.ATK]: 14.0,
    [Stat.DEF]: 10.0,
    [Stat.SPD]: 14.0,
    [Stat.Ability]: 0.0,
  },
  deck: [],
  ability: {
    abilityName: "Toying Around",
    abilityEffectString: `Any attack used by this character has its DMG+${(
      SERIE_TOYING_DAMAGE_BONUS * 100
    ).toFixed(2)}%. 
      The turn after this character performs any attack, DMG-${(
        SERIE_TOYING_DAMAGE_BONUS * 100
      ).toFixed(2)}%.`,
  },
  relatedCharacters: [CharacterID.Frieren, CharacterID.Sense],
  additionalMetadata: {
    accessToDefaultCardOptions: true,
    manaSuppressed: true,
  },
};
