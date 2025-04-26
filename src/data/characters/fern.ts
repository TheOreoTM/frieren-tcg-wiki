import { CharacterEmoji, CharacterID, CharacterName, CharacterType, Stat, UbelHit } from "@/lib/enums";
import type { Character } from "@/lib/types";
import { ubelDeck } from "../decks/ubel";
import { fernDeck } from "../decks/fern";

const PIERCE_FACTOR = 0.5;

export const Fern: Character = {
    id: "fern",
    name: CharacterName.Fern,
    description: "A relentless force that empowers her cards with each turn.",
    title: "The Prodigy",
    type: CharacterType.Hero,
    cosmetic: {
        emoji: CharacterEmoji.FERN,
        color: 0x8e528e,
        imageUrl: "/cards/Fern.webp",
        icon: "/icons/Fern.webp",
    },
    stats: {
        [Stat.HP]: 100.0,
        [Stat.ATK]: 12.0,
        [Stat.DEF]: 10.0,
        [Stat.SPD]: 14.0,
        [Stat.Ability]: 0.0,
    },
    cards: fernDeck,
    ability: {
        abilityName: "Prodigy",
        abilityEffectString: `One random card in your hand gets empowered every turn.`,
    },
    subAbilities: [
        { abilityName: "Mana Suppresion", abilityEffectString: "Hide the amount of HP this character has." },
        { abilityName: "Keen Eye", abilityEffectString: "See past the opponent's Mana Suppression." },
    ],
    relatedCharacters: [],
    additionalMetadata: {
        accessToDefaultCardOptions: true,
        manaSuppressed: true,
        ignoreManaSuppressed: true,
    },
};
