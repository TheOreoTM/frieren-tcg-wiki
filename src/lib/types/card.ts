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
};

export interface CardCosmetic {
    cardImageUrl?: string;
    cardGif?: string;
}
