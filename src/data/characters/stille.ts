import { CharacterEmoji, CharacterID, CharacterName, CharacterType, Stat } from "@/lib/enums";
import type { Character } from "@/lib/types";
import { stilleDeck } from "../decks/stille";

export const Stille: Character = {
    id: "stille",
    name: CharacterName.Stille,
    description: "A fragile but untouchable trickster who punishes attackers for trying.",
    type: CharacterType.Other,
    title: "Just play laufen",
    cosmetic: {
        emoji: CharacterEmoji.STILLE,
        color: 0xe74c3c,
        imageUrl: "/cards/Stille.webp",
        icon: "/icons/Stille.webp",
    },
    stats: {
        [Stat.HP]: 20.0,
        [Stat.ATK]: 1.0,
        [Stat.DEF]: 20.0,
        [Stat.SPD]: 99.0,
        [Stat.Ability]: 0.0,
    },
    cards: stilleDeck,
    ability: {
        abilityName: "High-speed Escape",
        abilityEffectString: `When the opponent attacks, roll a D100. 
        If the result is less than the character's SPD minus the opponent's SPD, ignore the attack.
        Afterwards, attack the opponent with DMG equivalent to 1/2 * (opponent's ATK + opponent's move DMG).`,
    },
    subAbility: {
        abilityName: "Birdwatching",
        abilityEffectString: "Both characters don't have access to default card options (Discard/Wait).",
    },
    relatedCharacters: [CharacterID.Frieren],
    additionalMetadata: {
        accessToDefaultCardOptions: true,
        manaSuppressed: false,
    },
};
