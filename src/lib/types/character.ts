import type {
  CharacterEmoji,
  CharacterID,
  CharacterName,
  CharacterType,
  StatsEnum,
} from "../enums";
import type { Ability } from "./ability";
import type { Card } from "./card";

export type Stats = {
  [key in StatsEnum]: number;
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
  deck: Card[];
  stats: Stats;
  ability: Ability;
  relatedCharacters: `${CharacterID}`[];
  additionalMetadata: CharacterAdditionalMetadata;
};

export type CharacterAdditionalMetadata = {
  manaSuppressed: boolean;
  accessToDefaultCardOptions: boolean;
  teaTimeStacks?: number;
  overheal?: boolean;
};
