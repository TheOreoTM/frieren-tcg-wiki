import { CharacterEmoji, CharacterID, CharacterName, CharacterType, Stat } from "@/lib/enums";
import type { Character } from "@/lib/types";
import { linieDeck } from "../decks/linie";

const LINIE_CHAIN_BONUS = 0.07;

export const Linie: Character = {
    id: "linie",
    name: CharacterName.Linie,
    description: "A damage-scaling characters who grows stronger with every consecutive strike.",
    overview: `Linie is an aggressive character who builds up "Chain" stacks by attacking. Her damage output increases with each stack, encouraging consecutive attacks. Her playstyle is high-risk, high-reward, focusing on maintaining momentum.`,
    title: "The Chain Weaver",
    type: CharacterType.Demon,
    cosmetic: {
        emoji: CharacterEmoji.LINIE,
        color: 0xf7c1b1,
        imageUrl: "/cards/Linie.png",
        icon: "/icons/Linie.webp",
    },
    stats: {
        [Stat.HP]: 95.0,
        [Stat.ATK]: 13.0,
        [Stat.DEF]: 10.0,
        [Stat.SPD]: 12.0,
        [Stat.Ability]: 0.0,
    },
    cards: linieDeck,
    ability: {
        abilityName: "Chain Attack",
        abilityEffectString: `After this character uses an attack, gain 1 Chain stack.
        All attacks this character does has its damage increased by <#Chain> * ${LINIE_CHAIN_BONUS * 100}%.
        When this character does not attack in a turn, reset the count to 0.`,
    },
    relatedCharacters: [CharacterID.Stark],
    additionalMetadata: {
        accessToDefaultCardOptions: true,
        manaSuppressed: false,
    },
};
