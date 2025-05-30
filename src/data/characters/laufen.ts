import { CharacterEmoji, CharacterID, CharacterName, CharacterType, Stat } from "@/lib/enums";
import type { Character } from "@/lib/types";
import { laufenDeck } from "../decks/laufen";

export const Laufen: Character = {
    id: "laufen",
    name: CharacterName.Laufen,
    description: "A glass cannon unique for her ability to dodge incoming attacks and high speed.",
    overview: `Laufen is a fast and evasive character who utilizes a unique "Graze" mechanic to reduce incoming damage. Her playstyle revolves around speed and damage mitigation.`,
    type: CharacterType.Hero,
    title: "The Elusive Striker",
    cosmetic: {
        emoji: CharacterEmoji.LAUFEN,
        color: 0xcf7457,
        imageUrl: "/cards/Laufen.png",
        icon: "/icons/Laufen.webp",
    },
    stats: {
        [Stat.HP]: 90.0,
        [Stat.ATK]: 10.0,
        [Stat.DEF]: 8.0,
        [Stat.TrueDEF]: 0.0,
        [Stat.SPD]: 30.0,
        [Stat.Ability]: 0.0,
    },
    cards: laufenDeck,
    ability: {
        abilityName: "Graze",
        abilityEffectString: `
        When the opponent attacks, roll a D100. The lower the roll, the less damage the move deals. 
        The move deals maximum damage if the roll is higher than the difference between the 2 character’s SPD. 
        The opponent’s attack deals at minimum 0% damage, and at maximum only (100 - This character’s SPD + Opponent’s SPD)% damage.`,
    },
    relatedCharacters: [CharacterID.Denken],
    additionalMetadata: {
        accessToDefaultCardOptions: true,
        manaSuppressed: false,
    },
};
