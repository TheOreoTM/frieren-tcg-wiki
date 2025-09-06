import { CharacterEmoji, CharacterID, CharacterName, CharacterType, Stat } from "@/lib/enums";
import type { Character } from "@/lib/types";
import { auraDeck } from "../decks/aura";

const INITIAL_ARMY_STRENGTH = 15;
const INITIAL_SHIELDBEARERS_COUNT = 2;
const SOLDIER_ARMY_STRENGTH = 5;

export const Aura: Character = {
    id: "aura",
    name: CharacterName.Aura,
    description:
        "A frail commander who commands a relentless undead army, using her soldiers as both a shield to absorb damage and a sword to automatically assault her foe.",
    overview: `Aura is a unique summoner-style character whose entire strategy revolves around managing her undead army. With very low personal HP, she relies on her army's ability to absorb 50% of incoming damage to survive. Her core resource is "Army Strength," which functions as the army's health and determines how many platoons she can maintain on the field.

Her playstyle involves summoning different types of soldiers—Swordsmen for damage, Shieldbearers to replenish Army Strength, and Archers for multi-hit attacks—and balancing her resources to prevent her army from crumbling at the end of each turn. A successful Aura player will build an overwhelming and self-sustaining legion that automatically attacks the opponent, turning the tide of battle through sheer numbers and attrition.`,
    title: "The Demon of the Guillotine",
    type: CharacterType.Demon,
    cosmetic: {
        emoji: CharacterEmoji.AURA,
        color: 0xcb83b8,
        imageUrl:
            "https://static.wikia.nocookie.net/frieren/images/a/ac/Aura_anime_portrait.png/revision/latest?cb=20231017083323",
        icon: "https://static.wikia.nocookie.net/frieren/images/a/ac/Aura_anime_portrait.png/revision/latest?cb=20231017083323",
    },
    stats: {
        [Stat.HP]: 60.0,
        [Stat.ATK]: 10.0,
        [Stat.DEF]: 10.0,
        [Stat.TrueDEF]: 0.0,
        [Stat.SPD]: 10.0,
        [Stat.Ability]: 0.0,
    },
    cards: auraDeck,
    ability: {
        abilityName: "Until the End of Time",
        abilityEffectString: `Aura controls an undead army to do her bidding. The army will move at turn end, and 50% of the damage targeted towards her will be transferred to the army instead as long as there is at least 1 soldier in her army.
        Aura starts with ${INITIAL_ARMY_STRENGTH} Army Strength and ${INITIAL_SHIELDBEARERS_COUNT} Shieldbearers platoons.
        At the end of every turn, Aura loses soldiers by the order she summoned them until #Soldier x ${SOLDIER_ARMY_STRENGTH} <= Army Strength (min: 0).`,
    },
    subAbilities: [],
    relatedCharacters: ["frieren"],
    additionalMetadata: {
        accessToDefaultCardOptions: true,
        manaSuppressed: false,
    },
};
