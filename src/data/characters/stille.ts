import { CharacterEmoji, CharacterID, CharacterName, CharacterType, Stat } from "@/lib/enums";
import type { Character } from "@/lib/types";
import { stilleDeck } from "../decks/stille";

const STILLE_REFLECT_SCALE = 0.8;

export const Stille: Character = {
    id: "stille",
    name: CharacterName.Stille,
    description: "A fragile but untouchable trickster who punishes attackers for trying.",
    overview: `Stille is a fast and elusive character who excels at hit-and-run tactics. She gains speed and evasion, making it difficult to hit and allowing it to strike quickly. Its playstyle is agile and aggressive.`,
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
        [Stat.TrueDEF]: 0.0,
        [StatsEnum.SPD]: 80.0,
        [Stat.Ability]: 0.0,
    },
    cards: stilleDeck,
    ability: {
        abilityName: "High-speed Escape",
        abilityEffectString: `When the opponent attacks, roll a D100. 
        If the result is less than the character's SPD minus the opponent's SPD, ignore the attack.
        Afterwards, attack the opponent with DMG equivalent to ${(
            STILLE_REFLECT_SCALE * 100
        ).toFixed()}% of (opponent's ATK + opponent's move DMG).`,
    },
    subAbilities: [
        {
            abilityName: "Birdwatching",
            abilityEffectString: "Both characters don't have access to default card options (Discard/Wait).",
        },
    ],
    relatedCharacters: [CharacterID.Frieren],
    additionalMetadata: {
        accessToDefaultCardOptions: true,
        manaSuppressed: false,
    },
};
