import { CharacterEmoji, CharacterID, CharacterName, CharacterType, Stat } from "@/lib/enums";
import type { Character } from "@/lib/types";
import { methodeDeck } from "../decks/methode";

export const Methode: Character = {
    id: "methode",
    name: CharacterName.Methode,
    description:
        "A versatile and cunning mage who excels at controlling the flow of battle through prediction and a vast arsenal of spells.",
    overview:
        "Methode's playstyle is defined by her \"Jack-of-all-trades\" ability, granting her an extra die roll each turn for unparalleled flexibility. Her deck is a toolbox of tactical spells, featuring everything from damage reflection and predictive defenses to powerful control magic that can lock down an opponent's choices. Success with Methode relies on carefully reading the opponent's strategy and selecting the perfect counter for any situation, making her a highly adaptable and unpredictable threat.",
    title: "The Erudite Tactician",
    type: CharacterType.Hero,
    cosmetic: {
        emoji: CharacterEmoji.METHODE,
        color: 0x7f78ac,
        imageUrl:
            "https://static.wikia.nocookie.net/frieren/images/f/f5/Methode_anime_portrait.png/revision/latest?cb=20240213200512",
        icon: "https://static.wikia.nocookie.net/frieren/images/f/f5/Methode_anime_portrait.png/revision/latest?cb=20240213200512",
    },
    stats: {
        [Stat.HP]: 100.0,
        [Stat.ATK]: 12.0,
        [Stat.DEF]: 12.0,
        [Stat.TrueDEF]: 0.0,
        [Stat.SPD]: 10.0,
        [Stat.Ability]: 0.0,
    },
    cards: methodeDeck,
    ability: {
        abilityName: "Jack-of-all-trades",
        abilityEffectString: "Roll an extra die",
    },
    subAbilities: [
        {
            abilityName: '"I think you\'re cute"',
            abilityEffectString: "ATK+1 and DEF-1 against cute opponents on the first turn.",
        },
    ],
    relatedCharacters: [
        /* [[TODO: Add related CharacterIDs]] */
    ],
    additionalMetadata: {
        accessToDefaultCardOptions: true,
        manaSuppressed: false,
    },
};
