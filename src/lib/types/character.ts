import type { Card } from "../classes/Card";
import type { CharacterEmoji, CharacterID, CharacterName, CharacterType, Stat, UbelHit } from "../enums";
import type { Ability } from "./ability";
import type { CardProps } from "./card";

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
    title: string;
    type: CharacterType;
    cosmetic: CharacterCosmetic;
    cards: { card: Card; count: number }[];
    stats: Stats;
    ability: Ability;
    subAbilities?: Ability[];
    relatedCharacters: `${CharacterID}`[];
    additionalMetadata: CharacterAdditionalMetadata;
};

export type CharacterAdditionalMetadata = {
    manaSuppressed: boolean;
    accessToDefaultCardOptions: boolean;
    teaTimeStacks?: number;
    pierceFactor?: number;
    overheal?: boolean;
    sureHit?: UbelHit;
    ignoreManaSuppressed?: boolean;
};
