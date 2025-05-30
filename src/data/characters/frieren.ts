import { CharacterEmoji, CharacterID, CharacterName, CharacterType, Stat } from "@/lib/enums";
import type { Character } from "@/lib/types";
import { frierenDeck } from "../decks/frieren";

const ANALYSIS_BOOST = 0.05;
const ANALYSIS_STACK_CAP = 20;

export const Frieren: Character = {
    id: "frieren",
    name: CharacterName.Frieren,
    description:
        "A setup character who can dish out ridiculous damage that requires careful planning and calculations.",
    overview: `Frieren is a strategic character who accumulates "Analysis" stacks to boost her attack damage. She excels at both sustained damage output and burst potential. Her playstyle involves building up stacks and then unleashing powerful attacks. She also has the sub-abilities "Mana Suppression" and "Flamme's Teachings" which hide her HP and allow her to see past the opponent's "Mana Suppression".`,
    type: CharacterType.Hero,
    title: "The Calculated Cataclysm",
    cosmetic: {
        emoji: CharacterEmoji.FRIEREN,
        color: 0xc5c3cc,
        imageUrl: "/cards/Frieren.webp",
        icon: "https://static.wikia.nocookie.net/frieren/images/9/9c/Frieren_anime_portrait.png/revision/latest?cb=20231017083523",
    },
    stats: {
        [Stat.HP]: 100.0,
        [Stat.ATK]: 12.0,
        [Stat.DEF]: 12.0,
        [Stat.TrueDEF]: 0.0,
        [Stat.SPD]: 12.0,
        [Stat.Ability]: 0.0,
    },
    cards: frierenDeck,
    ability: {
        abilityName: "Analysis",
        abilityEffectString: `At the end of every turn, gain 1 Analysis stack.
        Whenever an "Analysis" move is used, gain 2 Analysis stacks.
        When an attack is used, its damage is increased by ${(ANALYSIS_BOOST * 100).toFixed(
            2
        )}% * the number of Analysis stacks.
        After an attack is used, Analysis stacks is reset to 0.
        A maximum of ${ANALYSIS_STACK_CAP} Analysis stacks can be held at any time.`,
    },
    subAbilities: [
        { abilityName: "Mana Suppresion", abilityEffectString: "Hide the amount of HP this character has." },
        { abilityName: "Flamme's Teachings", abilityEffectString: "See past the opponent's Mana Suppression." },
    ],
    relatedCharacters: [CharacterID.Himmel, CharacterID.Serie, CharacterID.Sein],
    additionalMetadata: {
        accessToDefaultCardOptions: true,
        manaSuppressed: true,
        ignoreManaSuppressed: false,
    },
};
