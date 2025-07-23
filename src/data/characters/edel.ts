import { CharacterEmoji, CharacterID, CharacterName, CharacterType, Stat } from "@/lib/enums";
import type { Character } from "@/lib/types";
import { edelDeck } from "../decks/edel";

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
        [Stat.HP]: 80.0,
        [Stat.ATK]: 8.0,
        [Stat.DEF]: 8.0,
        [Stat.TrueDEF]: 0.0,
        [Stat.SPD]: 10.0,
        [Stat.Ability]: 0,
    },
    cards: edelDeck,
    ability: {
        abilityName: "A Superior Opponent",
        abilityEffectString: `While you make Eye Contact with the opponent, all your moves have Priority+1.
      \n*Sub-Ability (Memory Transference Specialist):* Your opponent's discards are visible.`,
    },
    relatedCharacters: [CharacterID.Fern],
    additionalMetadata: {
        accessToDefaultCardOptions: true,
        manaSuppressed: false,
    },
};
