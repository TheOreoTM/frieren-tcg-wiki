import type { CharacterID } from "../enums";

export type CardProps = {
    title: string;
    description: (formattedEffects: string[]) => string;
    effects: number[];
    effectNames: string[];
    priority?: number;
    emoji?: string;
    tags?: Record<string, number>;
    printEmpower?: boolean;
    empowerLevel?: number;
    cosmetic?: CardCosmetic;
    cardCategories: `${CardCategory}`[];
    deck?: `${CharacterID}`;
};

export interface CardCosmetic {
    cardImageUrl?: string;
    cardGif?: string;
}

export enum CardCategory {
    ATTACK = "Attack",
    UTILITY = "Utility",
    DEFENSE = "Defense",
    HEALING = "Healing",
    BLOCK = "Block",
    DEFAULT = "Default",
}
