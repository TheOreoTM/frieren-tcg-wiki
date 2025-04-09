import {
  CharacterEmoji,
  CharacterID,
  CharacterName,
  CharacterType,
  Stat,
} from "@/lib/enums";
import type { Character } from "@/lib/types";
import { denkenDeck } from "../decks/denken";

const DENKEN_STEEL_YOURSELF_TURN_COUNT = 3;

export const Denken: Character = {
  id: "denken",
  name: CharacterName.Denken,
  description: "Straight Hands",
  type: CharacterType.Hero,
  cosmetic: {
    emoji: CharacterEmoji.DENKEN,
    color: 0x82574f,
    imageUrl:
      "https://static.wikia.nocookie.net/frieren/images/5/5c/Denken_anime_portrait.png/revision/latest?cb=20240112114340",
    icon: "https://static.wikia.nocookie.net/frieren/images/5/5c/Denken_anime_portrait.png/revision/latest?cb=20240112114340",
  },
  stats: {
    [Stat.HP]: 100.0,
    [Stat.ATK]: 11.0,
    [Stat.DEF]: 11.0,
    [Stat.SPD]: 10.0,
    [Stat.Ability]: 0.0,
  },
  cards: denkenDeck,
  ability: {
    abilityName: "Steel Yourself",
    abilityEffectString: `This character only loses after their HP is <= 0 for ${DENKEN_STEEL_YOURSELF_TURN_COUNT} turns in a row.`,
  },
  relatedCharacters: [CharacterID.Laufen],
  additionalMetadata: {
    accessToDefaultCardOptions: true,
    manaSuppressed: false,
  },
};
