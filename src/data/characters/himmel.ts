import {
  CharacterEmoji,
  CharacterID,
  CharacterName,
  StatsEnum,
} from "@/lib/enums";
import type { Character } from "@/lib/types";

const HIMMEL_HERO_PARTY_DAMAGE_BONUS = 0.2;

export const Himmel: Character = {
  id: "himmel",
  name: CharacterName.Himmel,
  description: "Only character that has the Rally ability.",
  cosmetic: {
    emoji: CharacterEmoji.HIMMEL,
    color: 0xb4c9e7,
    imageUrl:
      "https://static.wikia.nocookie.net/frieren/images/9/96/Himmel_anime_portrait.png/revision/latest?cb=20231017083515",
  },
  stats: {
    [StatsEnum.HP]: 100.0,
    [StatsEnum.ATK]: 10.0,
    [StatsEnum.DEF]: 10.0,
    [StatsEnum.SPD]: 16.0,
    [StatsEnum.Ability]: 0.0,
  },
  deck: [],
  ability: {
    abilityName: "The Hero Party",
    abilityEffectString: `For each one of Frieren/Heiter/Eisen active as a timed effect,
        all of this character's attacks and timed effect attacks deal an additional ${(
          HIMMEL_HERO_PARTY_DAMAGE_BONUS * 100
        ).toFixed(2)}% damage.`,
  },
  relatedCards: [CharacterID.Frieren],
  additionalMetadata: {
    accessToDefaultCardOptions: true,
    manaSuppressed: false,
  },
};
