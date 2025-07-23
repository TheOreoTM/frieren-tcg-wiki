import { CharacterEmoji, CharacterID, CharacterName, CharacterType, Stat, UbelHit } from "@/lib/enums";
import type { Character } from "@/lib/types";
import { ubelDeck } from "../decks/ubel";

const PIERCE_FACTOR = 1.0;

export const Ubel: Character = {
    id: "ubel",
    name: CharacterName.Ubel,
    description: "A reckless slasher who trades consistency for overwhelming offense and risky plays.",
    overview: `Ubel is a complex and versatile character with a unique "Empathy" mechanic. She can copy the opponent's signature moves and has attacks with varying levels of accuracy. Her playstyle is adaptable and unpredictable.`,
    title: "Reckless Blade",
    type: CharacterType.Hero,
    cosmetic: {
        emoji: CharacterEmoji.UBEL,
        color: 0x3c5502,
        imageUrl: "/cards/Ubel.webp",
        icon: "/icons/Ubel.webp",
    },
    stats: {
        [Stat.HP]: 90.0,
        [Stat.ATK]: 12.0,
        [Stat.DEF]: 8.0,
        [Stat.TrueDEF]: 0.0,
        [Stat.SPD]: 14.0,
        [Stat.Ability]: 0.0,
    },
    cards: ubelDeck,
    ability: {
        abilityName: "Reckless",
        abilityEffectString: `Übel's slashing attacks ignore ${
            PIERCE_FACTOR * 100
        }% the opponent's defense stats, but are blocked by defensive moves.`,
    },
    relatedCharacters: [],
    additionalMetadata: {
        accessToDefaultCardOptions: true,
        manaSuppressed: false,
    },
};
