import { CharacterEmoji, CharacterID, CharacterName, CharacterType, Stat } from "@/lib/enums";
import type { Character } from "@/lib/types";
import { laufenDeck } from "../decks/laufen";

export const Laufen: Character = {
    id: "laufen",
    name: CharacterName.Laufen,
    description: "A glass cannon unique for her ability to dodge incoming attacks and high speed.",
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
        [Stat.DEF]: 7.0,
        [Stat.SPD]: 30.0,
        [Stat.Ability]: 0.0,
    },
    cards: laufenDeck,
    ability: {
        abilityName: "Graze",
        abilityEffectString: `DMG to this character is reduced by (this character's SPD - the opponent's SPD)%.
        The minimum damage reduction is 0%, and the maximum is 100%.`,
    },
    relatedCharacters: [CharacterID.Denken],
    additionalMetadata: {
        accessToDefaultCardOptions: true,
        manaSuppressed: false,
    },
};
