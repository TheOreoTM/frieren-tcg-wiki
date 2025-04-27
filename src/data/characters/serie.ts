import { CharacterEmoji, CharacterID, CharacterName, CharacterType, Stat } from "@/lib/enums";
import type { Character } from "@/lib/types";
import { serieDeck } from "../decks/serie";

const SERIE_TOYING_DAMAGE_BONUS = 0.3;

export const Serie: Character = {
    id: "serie",
    name: CharacterName.Serie,
    description: "An offensive powerhouse who comes with many risks.",
    type: CharacterType.Hero,
    title: "The Reckless Force",
    cosmetic: {
        emoji: CharacterEmoji.SERIE,
        color: 0xe8b961,
        imageUrl: "/cards/Serie.webp",
        icon: "/icons/Serie.webp",
    },
    stats: {
        [Stat.HP]: 100.0,
        [Stat.ATK]: 14.0,
        [Stat.DEF]: 10.0,
        [Stat.SPD]: 14.0,
        [Stat.Ability]: 0.0,
    },
    cards: serieDeck,
    ability: {
        abilityName: "Toying Around",
        abilityEffectString: `Any attack used by this character has its DMG+${(SERIE_TOYING_DAMAGE_BONUS * 100).toFixed(
            2
        )}%. 
      The turn after this character performs any attack, DMG-${(SERIE_TOYING_DAMAGE_BONUS * 100).toFixed(2)}%.`,
    },
    subAbilities: [
        { abilityName: "Mana Suppresion", abilityEffectString: "Hide the amount of HP this character has." },
        { abilityName: "Keen Eye", abilityEffectString: "See past the opponent's Mana Suppression." },
    ],
    relatedCharacters: [CharacterID.Frieren, CharacterID.Sense],
    additionalMetadata: {
        accessToDefaultCardOptions: true,
        manaSuppressed: true,
        ignoreManaSuppressed: false,
    },
};
