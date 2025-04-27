import { CharacterEmoji, CharacterID, CharacterName, CharacterType, Stat } from "@/lib/enums";
import type { Character } from "@/lib/types";
import { senseDeck } from "../decks/sense";

const PROCTOR_STACK_COUNT = 15;
const PROCTOR_STACK_ATTACK_DEDUCTION = 1;
const TEA_TIME_STACK_TURN_SKIP = 3;

export const Sense: Character = {
    id: "sense",
    name: CharacterName.Sense,
    description: " A defensive character with a passive win condition, but still fully capable of fighting back.",
    type: CharacterType.Hero,
    title: "The Peaceful Victor",
    cosmetic: {
        emoji: CharacterEmoji.SENSE,
        color: 0xb6a493,
        imageUrl: "/cards/Sense.png",
        icon: "/icons/Sense.webp",
    },
    stats: {
        [Stat.HP]: 90.0,
        [Stat.ATK]: 10.0,
        [Stat.DEF]: 12.0,
        [Stat.SPD]: 8.0,
        [Stat.Ability]: 0.0,
    },
    cards: senseDeck,
    ability: {
        abilityName: "Proctor",
        abilityEffectString: `Every turn this character doesn't attack, gain 1 observation. Every turn this character attacks, lose ${PROCTOR_STACK_ATTACK_DEDUCTION} observation. (min 0)
	This character wins when the test is over after ${PROCTOR_STACK_COUNT} observations.`,
    },
    subAbilities: [
        {
            abilityName: "Tea Time",
            abilityEffectString: `When this character has ${TEA_TIME_STACK_TURN_SKIP} Tea Time Snacks, skip the turn for both characters and eat ${TEA_TIME_STACK_TURN_SKIP} Tea Time Snacks.`,
        },
    ],
    relatedCharacters: [CharacterID.Serie],
    additionalMetadata: {
        accessToDefaultCardOptions: true,
        manaSuppressed: false,
        teaTimeStacks: 0,
    },
};
