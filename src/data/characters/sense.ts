import {
  CharacterEmoji,
  CharacterID,
  CharacterName,
  CharacterType,
  Stat,
} from "@/lib/enums";
import type { Character } from "@/lib/types";

const PACIFIST_TURN_COUNT = 15;

export const Sense: Character = {
  id: "sense",
  name: CharacterName.Sense,
  description: "Steampunk Sense",
  type: CharacterType.Hero,
  cosmetic: {
    emoji: CharacterEmoji.SENSE,
    color: 0xb6a493,
    imageUrl: "/cards/Sense.png",
    icon: "/icons/Sense.webp",
  },
  stats: {
    [Stat.HP]: 90.0,
    [Stat.ATK]: 10.0,
    [Stat.DEF]: 12.0,
    [Stat.SPD]: 8.0,
    [Stat.Ability]: 0.0,
  },
  deck: [],
  ability: {
    abilityName: "Pacifist",
    abilityEffectString: `When this character has 2 Tea Time Snacks, skip the turn for both characters.
        This character wins if they don't attack for ${PACIFIST_TURN_COUNT} turns in a row.`,
  },
  relatedCharacters: [CharacterID.Serie],
  additionalMetadata: {
    accessToDefaultCardOptions: true,
    manaSuppressed: false,
    teaTimeStacks: 0,
  },
};
