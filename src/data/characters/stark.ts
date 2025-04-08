import {
  CharacterEmoji,
  CharacterID,
  CharacterName,
  CharacterType,
  Stat,
} from "@/lib/enums";
import type { Character } from "@/lib/types";

export const Stark: Character = {
  id: "stark",
  name: CharacterName.Stark,
  description: "Stark the warrior",
  type: CharacterType.Hero,
  cosmetic: {
    emoji: CharacterEmoji.STARK,
    color: 0xb30c0c,
    imageUrl: "/cards/Stark.webp",
    icon: "/icons/Stark.webp",
  },
  stats: {
    [Stat.HP]: 110.0,
    [Stat.ATK]: 11.0,
    [Stat.DEF]: 10.0,
    [Stat.SPD]: 8.0,
    [Stat.Ability]: 0.0,
  },
  deck: [],
  ability: {
    abilityName: "Bravest Coward",
    abilityEffectString: `Using attacks without (Resolve) reduces its DMG by 20%.
        Using attacks with (Resolve) increases its DMG by 20%.`,
  },
  relatedCharacters: [CharacterID.Frieren],
  additionalMetadata: {
    accessToDefaultCardOptions: true,
    manaSuppressed: false,
  },
};
