import { CharacterEmoji, CharacterID, CharacterName, CharacterType, Stat } from "@/lib/enums";
import type { Character } from "@/lib/types";
import { wirbelDeck } from "../decks/wirbel";

const WIRBEL_RESOLVE_DMG_BONUS = 0.2;
const WIRBEL_RESOLVE_DMG_CAP = 0.2;

export const Wirbel: Character = {
    id: "wirbel",
    name: CharacterName.Wirbel,
    description:
        "A tactical character who uses TrueDEF to bolster his attack and control the battlefield with strategic defenses and a powerful signature move.",
    overview: `Wirbel is a tactical defender who converts absorbed damage into increased attack power. His deck features strong defensive options and control elements, culminating in a powerful signature move that can neutralize opponents. His strategy revolves around calculated defense leading to offensive opportunities.`,
    title: "The Unwavering Strategist",
    type: CharacterType.Hero,
    cosmetic: {
        emoji: CharacterEmoji.WIRBEL,
        color: 0xa4a8b9,
        imageUrl:
            "https://static.wikia.nocookie.net/frieren/images/d/da/Wirbel_anime_portrait.png/revision/latest?cb=20240112114401",
        icon: "https://static.wikia.nocookie.net/frieren/images/d/da/Wirbel_anime_portrait.png/revision/latest?cb=20240112114401",
    },
    stats: {
        [Stat.HP]: 100.0,
        [Stat.ATK]: 13.0,
        [Stat.DEF]: 10.0,
        [Stat.TrueDEF]: 0.0,
        [Stat.SPD]: 13.0,
        [Stat.Ability]: 0.0,
    },
    cards: wirbelDeck,
    ability: {
        abilityName: "Resolve to Kill",
        abilityEffectString: `When the opponent attacks you while your TrueDEF is >0, increase your ATK by ${(
            WIRBEL_RESOLVE_DMG_BONUS * 100
        ).toFixed(2)}% of the attack's damage, to a maximum of ${(WIRBEL_RESOLVE_DMG_CAP * 100).toFixed(
            2
        )}% of your TrueDEF`,
    },
    relatedCharacters: [CharacterID.Ubel],
    additionalMetadata: {
        accessToDefaultCardOptions: true,
        manaSuppressed: false,
    },
};
