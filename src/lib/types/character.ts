import type {
  CharacterEmoji,
  CharacterID,
  CharacterName,
  CharacterType,
  Stat,
} from "../enums";
import type { Ability } from "./ability";
import type { DeckCardProps } from "./card";

export type Stats = {
  [key in Stat]: number;
};

export type CharacterCosmetic = {
  emoji: CharacterEmoji;
  color: number;
  imageUrl: string;
  icon: string;
};

export type Character = {
  id: `${CharacterID}`;
  name: CharacterName;
  description: string;
  type: CharacterType;
  cosmetic: CharacterCosmetic;
  deck: DeckCardProps[];
  stats: Stats;
  ability: Ability;
  subAbility?: Ability;
  relatedCharacters: `${CharacterID}`[];
  additionalMetadata: CharacterAdditionalMetadata;
};

export type CharacterAdditionalMetadata = {
  manaSuppressed: boolean;
  accessToDefaultCardOptions: boolean;
  teaTimeStacks?: number;
  overheal?: boolean;
};
