import { CharacterEmoji, CharacterID, CharacterName, CharacterType, Stat } from "@/lib/enums";
import type { Character } from "@/lib/types";
import { edelDeck } from "../decks/edel";

export const DENKEN_DEATH_HP = -50;

export const Edel: Character = {
    id: "edel",
    name: CharacterName.Edel,
    description:
        "A master of mental manipulation, Edel disrupts opponents' hands and punishes predictable defenses, aiming for a psychological victory.",
    overview: `Edel controls the opponent's strategy by peeking at their hand and weakening key cards. She forces redraws, applies debilitating statuses, and capitalizes on defensive plays, with a unique win condition tied to overwhelming their mind.`,
    title: "The Mind Weaver",
    type: CharacterType.Hero,
    cosmetic: {
        emoji: CharacterEmoji.EDEL,
        color: 0xae9292,
        imageUrl:
            "https://static.wikia.nocookie.net/frieren/images/a/ab/Edel_anime_portrait.png/revision/latest?cb=20240119235404",
        icon: "https://static.wikia.nocookie.net/frieren/images/a/ab/Edel_anime_portrait.png/revision/latest?cb=20240119235404",
    },
    stats: {
        [Stat.HP]: 70.0,
        [Stat.ATK]: 7.0,
        [Stat.TrueDEF]: 0.0,
        [Stat.DEF]: 7.0,
        [Stat.SPD]: 10.0,
        [Stat.Ability]: 0,
    },
    cards: edelDeck,
    ability: {
        abilityName: "Memory Transference Specialist",
        abilityEffectString: `At the start of each turn, see a random card from your opponent's hand, and lower its empowerment by 1`,
    },
    relatedCharacters: [CharacterID.Fern],
    additionalMetadata: {
        accessToDefaultCardOptions: true,
        manaSuppressed: false,
    },
};
