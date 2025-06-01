import { CharacterEmoji, CharacterID, CharacterName, CharacterType, Stat } from "@/lib/enums";
import type { Character } from "@/lib/types";
import { denkenDeck } from "../decks/denken";

const DENKEN_PRESERVERANCE_COUNT = 3;
export const DENKEN_DEATH_HP = -50;

export const Denken: Character = {
    id: "denken",
    name: CharacterName.Denken,
    description: "A character who specialize in multi-hit and extreme aggression.",
    overview: `Denken is a resilient brawler who excels in drawn-out fights. His core mechanic revolves around "Preserverance" stacks, allowing him to survive potentially lethal situations and continue fighting. His deck features a mix of direct attacks, multi-turn damage effects, and defensive options that change entirely when his HP is low, reflecting his enduring nature`,
    title: "The Relentless",
    type: CharacterType.Hero,
    cosmetic: {
        emoji: CharacterEmoji.DENKEN,
        color: 0x82574f,
        imageUrl:
            "https://static.wikia.nocookie.net/frieren/images/5/5c/Denken_anime_portrait.png/revision/latest?cb=20240112114340",
        icon: "https://static.wikia.nocookie.net/frieren/images/5/5c/Denken_anime_portrait.png/revision/latest?cb=20240112114340",
    },
    stats: {
        [Stat.HP]: 100.0,
        [Stat.ATK]: 11.0,
        [Stat.DEF]: 11.0,
        [Stat.TrueDEF]: 0.0,
        [Stat.SPD]: 10.0,
        [Stat.Ability]: DENKEN_PRESERVERANCE_COUNT,
    },
    cards: denkenDeck,
    ability: {
        abilityName: "Preserverance",
        abilityEffectString: `
        This character starts with ${DENKEN_PRESERVERANCE_COUNT} Preserverance stacks.
        1 Stack is taken away when the character's HP is <= 0 at the end of the turn. 
        An additional stack is taken away when the character's HP is <= ${DENKEN_DEATH_HP / 2}. 
        The character loses when the number of Preserverance stack is 0, or if the character's HP is <= ${DENKEN_DEATH_HP}.`,
    },
    relatedCharacters: [CharacterID.Laufen],
    additionalMetadata: {
        accessToDefaultCardOptions: true,
        manaSuppressed: false,
    },
};
