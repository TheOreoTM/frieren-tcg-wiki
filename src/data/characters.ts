import { CharacterEmoji, CharacterName, StatsEnum } from "@/lib/enums";
import type { Character } from "@/lib/types";
import { Frieren } from "./characters/frieren";
import { Himmel } from "./characters/himmel";

export const Characters: Map<CharacterName, Character> = new Map([
  [CharacterName.Frieren, Frieren],
  [CharacterName.Himmel, Himmel],
]);
