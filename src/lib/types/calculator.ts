import type { CharacterID } from "../enums";

export interface Turn {
    id: number;
    character1Move: string;
    character2Move: string;
    character1Damage: number;
    character2Damage: number;
}

export interface CharacterOption {
    id: `${CharacterID}`;
    name: string;
    maxHealth: number;
    description: string;
    defense: number;
}

export interface Move {
    id: string;
    name: string;
    damage: number;
    type: string;
}

export interface CalculatorCharacter {
    id: `${CharacterID}`;
    name: string;
    health: number;
    maxHealth: number;
    defense: number;
}
