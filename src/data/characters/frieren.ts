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
    type: CharacterType.Hero,
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
    relatedCharacters: [CharacterID.Himmel, CharacterID.Serie, CharacterID.Sein],
    additionalMetadata: {
        accessToDefaultCardOptions: true,
        manaSuppressed: true,
    },
};
