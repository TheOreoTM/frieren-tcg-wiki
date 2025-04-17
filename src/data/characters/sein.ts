import { CharacterEmoji, CharacterID, CharacterName, CharacterType, Stat } from "@/lib/enums";
import type { Character } from "@/lib/types";
import { seinDeck } from "../decks/sein";

const SEIN_BASE_HEALING = 3;
const SEIN_HEALING_RAMP = 0.1;

export const Sein: Character = {
    id: "sein",
    name: CharacterName.Sein,
    description: "A passive support who steadily heals and can overheal to outlast opponents.",
    type: CharacterType.Hero,
    title: "The Corrupt Priest",
    cosmetic: {
        emoji: CharacterEmoji.SEIN,
        color: 0xa3caca,
        imageUrl: "/cards/Sein.webp",
        icon: "https://static.wikia.nocookie.net/frieren/images/3/3c/Sein_anime_portrait.png/revision/latest?cb=20231128092945",
    },
    stats: {
        [Stat.HP]: 100.0,
        [Stat.ATK]: 11.0,
        [Stat.DEF]: 11.0,
        [Stat.SPD]: 10.0,
        [Stat.Ability]: 0.0,
    },
    cards: seinDeck,
    ability: {
        abilityName: "Goddess' Blessing",
        abilityEffectString: `Heal for ${SEIN_BASE_HEALING}HP + ${SEIN_BASE_HEALING} * (Turn Count * ${(
            SEIN_HEALING_RAMP * 100
        ).toFixed(2)}%) at the end of every turn.
        This character can be healed past their maxHP.`,
    },
    relatedCharacters: [CharacterID.Frieren],
    additionalMetadata: {
        accessToDefaultCardOptions: true,
        manaSuppressed: false,
        overheal: true,
    },
};
