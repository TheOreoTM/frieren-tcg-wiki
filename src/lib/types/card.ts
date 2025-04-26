import type { CharacterID } from "../enums";

export type CardProps = {
    title: string;
    description: (formattedEffects: string[]) => string;
    effects: number[];
    effectNames: string[];
    priority?: number;
    emoji?: string;
    /**
     * @deprecated Use {@link CardMetadata} instead or dont
     */
    tags?: Record<string, number>;
    cardMetadata?: CardMetadata;
    printEmpower?: boolean;
    empowerLevel?: number;
    cosmetic?: CardCosmetic;
    /**
     * @deprecated Use {@link CardMetadata} instead or dont
     */
    cardCategories?: `${CardCategory}`[];
    hpCost?: number;
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

export type CardMetadata = {
    nature: Nature;
    seriePool?: "Common" | "Rare" | "Ultra-rare";
    signature?: boolean;
    analysis?: boolean;
    postAnalysis?: boolean;
    waldgoseDamage?: number;
    himmelPartyMember?: "Heiter" | "Eisen" | "Frieren";
    teaTime?: number;
    resolve?: number;
    signatureMoveOf?: CharacterID;
    ubelFailureRate?: number;
};

export enum Nature {
    Attack = "Attack",
    Defense = "Defense",
    Default = "Default",
    Util = "Util",
}
