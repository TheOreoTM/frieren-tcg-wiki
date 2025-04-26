import { CardEmoji, type CharacterID } from "../enums";
import type { CardCategory, CardCosmetic, CardMetadata, CardProps } from "../types";

export class Card implements CardProps {
    readonly EMPOWER_BOOST = 0.1;

    title: string;
    description: (formattedEffects: string[]) => string;
    effects: number[];
    effectNames: string[];
    emoji: string;
    empowerLevel: number;
    printEmpower: boolean;
    priority: number;
    tags: Record<string, number>;
    cardCategories: `${CardCategory}`[];
    hpCost?: number;
    cosmetic?: CardCosmetic | undefined;
    cardMetadata?: CardMetadata;
    deck?: `${CharacterID}`;

    constructor(props: CardProps) {
        this.title = props.title;
        this.description = props.description;
        this.effects = props.effects;
        this.effectNames = props.effectNames;
        this.emoji = props.emoji ?? CardEmoji.GENERIC;
        this.empowerLevel = props.empowerLevel ?? 0;
        this.printEmpower = props.printEmpower ?? true;
        this.priority = props.priority ?? 0;
        this.tags = props.tags ?? {};
        this.cardCategories = props.cardCategories;
        this.cosmetic = props.cosmetic;
        this.hpCost = props.hpCost;
        this.cardMetadata = props.cardMetadata;
        this.deck = props.deck ?? "default";
    }

    /**
     * Generates a url friendly ID for the card
     * @returns The ID of the card, in the format of "title-with-dashes"
     */
    getId(): string {
        return this.title
            .replaceAll('"', "")
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-");
    }

    getImageSource(): string {
        return (
            this.cosmetic?.cardImageUrl ||
            this.cosmetic?.cardGif ||
            this.emoji ||
            "/placeholder.svg?height=600&width=400"
        );
    }

    getDescription(customEmpowerLevel?: number): string {
        const level = customEmpowerLevel ?? this.empowerLevel;

        const empoweredEffects: string[] = this.effects.map((effect) =>
            (effect * (1 + level * this.EMPOWER_BOOST)).toFixed(2)
        );

        return this.description(empoweredEffects);
    }

    getTitle(): string {
        return `${this.title} + ${this.empowerLevel}`;
    }

    calculateEffectValue(effect: number) {
        return Number((effect * (1 + this.empowerLevel * this.EMPOWER_BOOST)).toFixed(2));
    }

    printCard(startingString: string = "") {
        const empowerString = this.printEmpower ? ` + ${this.empowerLevel}` : "";
        return `${startingString}${this.emoji} **${this.title}${empowerString}**\n` + `  - ${this.getDescription()}`;
    }
}
