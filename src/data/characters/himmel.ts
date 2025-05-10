import { CharacterEmoji, CharacterID, CharacterName, CharacterType, Stat } from "@/lib/enums";
import type { Character } from "@/lib/types";
import { himmelDeck } from "../decks/himmel";

const HIMMEL_HERO_PARTY_DAMAGE_BONUS = 0.15;

export const Himmel: Character = {
    id: "himmel",
    name: CharacterName.Himmel,
    description: "A versatile setup character with access to (too) many tools.",
    overview: `Himmel is a support-oriented character who gains strength from the presence of other specific characters ("The Hero Party") as timed effects. His damage output increases based on how many of these characters are active. His playstyle is focused on synergy and timed effects.`,
    type: CharacterType.Hero,
    title: "The Setup Hero",
    cosmetic: {
        emoji: CharacterEmoji.HIMMEL,
        color: 0xb4c9e7,
        imageUrl:
            "https://static.wikia.nocookie.net/frieren/images/9/96/Himmel_anime_portrait.png/revision/latest?cb=20231017083515",
        icon: "https://static.wikia.nocookie.net/frieren/images/9/96/Himmel_anime_portrait.png/revision/latest?cb=20231017083515",
    },
    stats: {
        [Stat.HP]: 100.0,
        [Stat.ATK]: 10.0,
        [Stat.DEF]: 10.0,
        [Stat.SPD]: 16.0,
        [Stat.Ability]: 0.0,
    },
    cards: himmelDeck,
    ability: {
        abilityName: "The Hero Party",
        abilityEffectString: `For each one of Frieren/Heiter/Eisen active as a timed effect,
        all of this character's attacks and timed effect attacks deal an additional ${(
            HIMMEL_HERO_PARTY_DAMAGE_BONUS * 100
        ).toFixed(2)}% damage.`,
    },
    relatedCharacters: [CharacterID.Frieren],
    additionalMetadata: {
        accessToDefaultCardOptions: true,
        manaSuppressed: false,
    },
};
