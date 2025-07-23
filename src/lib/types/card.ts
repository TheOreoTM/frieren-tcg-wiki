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
    cardCategories: `${CardCategory}`[];
    hpCost?: number;
    deck?: `${CharacterID}`;
};

export interface CardCosmetic {
    cardImageUrl?: string;
    cardGif?: string;
}

export enum CardCategory {
    ATTACK = "Attack",
    DoT = "DoT",
    WIN_CON = "Win Condition",
    DISRUPTION = "Disruption",
    STATUS = "Status",
    UTILITY = "Utility",
    BUFF = "Buff",
    DEBUFF = "Debuff",
    DEFENSE = "Defense",
    UNIQUE = "Unique",
    PIERCE = "Pierce",
    HEALING = "Healing",
    BLOCK = "Block",
    COUNTER = "Counter",
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
    theory?: boolean;
    hideEmpower?: boolean;
};

export enum Nature {
    Attack = "Attack",
    Defense = "Defense",
    Default = "Default",
    Util = "Util",
}
