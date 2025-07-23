import { CharacterEmoji, CharacterID, CharacterName, CharacterType, Stat } from "@/lib/enums";
import type { Character } from "@/lib/types";
import { flammeDeck } from "../decks/flamme";

export const Flamme: Character = {
    id: "flamme",
    name: CharacterName.Flamme,
    description:
        "Flamme manipulates magical theories and sigils, disrupting opponents while building towards a hidden, powerful pinnacle.",
    overview: `Flamme utilizes "Sigils" to power her abilities and researches "Theories" that alter game mechanics. Her playstyle involves strategic resource management and disruption, culminating in the devastating "Pinnacle of Humanity's Magic" after enough theories are discovered. Her deceptive nature keeps opponents guessing her true power.`,
    title: "The Enigmatic Founder",
    type: CharacterType.Hero,
    cosmetic: {
        emoji: CharacterEmoji.FLAMME,
        color: 0xde8a54,
        imageUrl:
            "https://static.wikia.nocookie.net/frieren/images/0/09/Flamme_anime_portrait.png/revision/latest?cb=20231017083418",
        icon: "https://static.wikia.nocookie.net/frieren/images/0/09/Flamme_anime_portrait.png/revision/latest?cb=20231017083418",
    },
    stats: {
        [Stat.HP]: 100.0,
        [Stat.ATK]: 12.0,
        [Stat.DEF]: 12.0,
        [Stat.TrueDEF]: 0.0,
        [Stat.SPD]: 12.0,
        [Stat.Ability]: 0.0,
    },
    cards: flammeDeck,
    ability: {
        abilityName: "Founder of Humanity's Magic",
        abilityEffectString: `The Foundation of Humanity's Magic gets more developed for each Theory card you play.
        After playing 4 Theory cards, add 1 "Pinnacle of Humanity's Magic" to your Discard pile.
        \n*Pinnacle of Humanity's Magic*: Priority+100. ATK+**100** DEF+**100** SPD+**100**. Deal **100** DMG.`,
    },
    subAbilities: [
        {
            abilityName: "All-Knowing",
            abilityEffectString: "This character can see past the opponent's Mana Suppression.",
        },
    ],
    relatedCharacters: [CharacterID.Frieren, CharacterID.Serie],
    additionalMetadata: {
        accessToDefaultCardOptions: true,
        manaSuppressed: false,
        deceitful: false,
        ignoreManaSuppressed: true,
    },
};
