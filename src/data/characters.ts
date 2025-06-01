import { CharacterEmoji, CharacterName, Stat } from "@/lib/enums";
import type { Character } from "@/lib/types";
import { Frieren } from "./characters/frieren";
import { Himmel } from "./characters/himmel";
import { Denken } from "./characters/denken";
import { Laufen } from "./characters/laufen";
import { Linie } from "./characters/linie";
import { Sein } from "./characters/sein";
import { Sense } from "./characters/sense";
import { Serie } from "./characters/serie";
import { Stark } from "./characters/stark";
import { Stille } from "./characters/stille";
import { Ubel } from "./characters/ubel";
import { Fern } from "./characters/fern";
import { Edel } from "./characters/edel";
import { Wirbel } from "./characters/wirbel";
import { Flamme } from "./characters/flamme";

export const Characters: Map<CharacterName, Character> = new Map([
    [CharacterName.Frieren, Frieren],
    [CharacterName.Himmel, Himmel],
    [CharacterName.Denken, Denken],
    [CharacterName.Laufen, Laufen],
    [CharacterName.Linie, Linie],
    [CharacterName.Sein, Sein],
    [CharacterName.Sense, Sense],
    [CharacterName.Serie, Serie],
    [CharacterName.Stark, Stark],
    [CharacterName.Stille, Stille],
    [CharacterName.Ubel, Ubel],
    [CharacterName.Fern, Fern],
    [CharacterName.Edel, Edel],
    [CharacterName.Wirbel, Wirbel],
    [CharacterName.Flamme, Flamme],
]);
