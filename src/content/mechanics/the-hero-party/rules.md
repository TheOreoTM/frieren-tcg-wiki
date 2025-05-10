---
id: "the-hero-party-rules"
name: "The Hero Party Rules"
description: "Detailed rules and edge cases for The Hero Party mechanic."
icon: "users"
authorAvatar: "/assets/oreo-pfp.png"
author: "Oreo ™️"
---

### The Hero Party Rules

1.  **Trigger Condition:**
    * The damage bonus from The Hero Party is active as long as there is at least one active timed effect on the board that originated from a card specifically representing Frieren, Heiter, or Eisen.

2.  **Counting Active Effects:**
    * The damage bonus is calculated based on the *number* of distinct active timed effects originating from Frieren, Heiter, or Eisen cards. Multiple instances of the same character's timed effect only count once for the bonus.
    * The timed effect must be currently active on the board. Once the duration of the effect expires, it no longer contributes to the damage bonus.

3.  **Damage Bonus Application:**
    * The percentage increase in attack damage per active Hero Party member is a fixed value defined by game balance.
    * The bonus is applied to the base damage of Himmel's attacks.

4.  **Timing of Calculation:**
    * The damage bonus is calculated just before the damage of Himmel's attack is applied. The game checks for active Hero Party timed effects at this moment.

5.  **Interaction with other effects:**
    * The damage bonus from The Hero Party is typically multiplicative with other damage modifiers unless specified otherwise.
    * Effects that prevent damage or reduce damage are applied after The Hero Party damage bonus is calculated.

6.  **Edge Cases:**
    * If a card creates a timed effect that represents multiple Hero Party members simultaneously, it still only counts as one effect for the damage bonus. The bonus is per *unique character representation*, not per individual effect instance if they represent the same character.
    * If Himmel attacks multiple times in a turn, the damage bonus is recalculated for each individual attack based on the active Hero Party timed effects at that moment.
    * If a Hero Party member is present on the board as a persistent unit (not a timed effect), they do not contribute to The Hero Party damage bonus for Himmel. The bonus is specifically tied to *timed effects*.