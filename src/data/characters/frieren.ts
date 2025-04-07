import {
  CharacterEmoji,
  CharacterID,
  CharacterName,
  CharacterType,
  StatsEnum,
} from "@/lib/enums";
import type { Character } from "@/lib/types";

const ANALYSIS_BOOST = 0.05;
const ANALYSIS_STACK_CAP = 20;

export const Frieren: Character = {
  id: "frieren",
  name: CharacterName.Frieren,
  description: "The only character that has the Analyst ability.",
  type: CharacterType.Hero,
  cosmetic: {
    emoji: CharacterEmoji.FRIEREN,
    color: 0xc5c3cc,
    imageUrl: "/cards/FrierenCard.png",
    icon: "https://static.wikia.nocookie.net/frieren/images/9/9c/Frieren_anime_portrait.png/revision/latest?cb=20231017083523",
  },
  stats: {
    [StatsEnum.HP]: 100.0,
    [StatsEnum.ATK]: 12.0,
    [StatsEnum.DEF]: 12.0,
    [StatsEnum.SPD]: 12.0,
    [StatsEnum.Ability]: 0.0,
  },
  deck: [],
  ability: {
    abilityName: "Analysis",
    abilityEffectString: `At the end of every turn, gain 1 Analysis stack.
        Whenever an "Analysis" move is used, gain 2 Analysis stacks.
        When an attack is used, its damage is increased by ${(
          ANALYSIS_BOOST * 100
        ).toFixed(2)}% * the number of Analysis stacks.
        After an attack is used, Analysis stacks is reset to 0.
        A maximum of ${ANALYSIS_STACK_CAP} Analysis stacks can be held at any time.`,
  },
  relatedCharacters: [CharacterID.Himmel, CharacterID.Serie],
  additionalMetadata: {
    accessToDefaultCardOptions: true,
    manaSuppressed: true,
  },
};
