---
id: "graze-rules"
name: "Graze Rules"
description: "Detailed rules and edge cases for the Graze mechanic."
icon: "zap"
authorAvatar: "/assets/oreo-pfp.png"
author: "Oreo ™️"
---

### Graze Rules

1.  **Trigger Condition:**
    * The Graze mechanic activates whenever Laufen is the target of an attack. It does not apply to area-of-effect damage or other forms of non-targeted damage.

2.  **Speed Comparison:**
    * The current SPD values of both Laufen and the attacking character are compared at the moment the attack resolves and damage is calculated. Temporary SPD modifications (buffs or debuffs) are taken into account.

3.  **Random Roll:**
    * A single random number between 0 and 100 (inclusive) is generated for each attack targeting Laufen. The method of generation is consistent (e.g., virtual dice roll).

4.  **Damage Reduction Calculation:**
    * The damage reduction is determined by a predefined formula takes two inputs:
        * The result of the D100 roll.
        * The difference between Laufen's SPD and the attacker's SPD (Laufen's SPD - Attacker's SPD).
    * The formula or table will specify how these values translate to a percentage or flat damage reduction. Higher SPD difference and lower roll should generally lead to more reduction.
    * The damage reduction is applied *after* any damage bonuses or penalties from other effects are calculated.

5.  **Minimum Damage:**
    * Despite a successful Graze, there might be a minimum amount of damage Laufen can still take from an attack (e.g., 1 damage), regardless of the reduction calculation. This prevents complete nullification of all attacks.
    * However, if the opponent rolls a 0 on the D100, then the opponent's attack deals no damage at all.

6.  **Interaction with other effects:**
    * Damage reduction from Graze is typically applied before other forms of damage reduction or damage prevention unless specified otherwise.
    * Effects that bypass or ignore damage reduction might be effective against Graze.

7.  **Edge Cases:**
    * If Laufen is attacked by multiple enemies simultaneously, a separate Graze roll and calculation are performed for each individual attack.
    * If an attack has multiple hits, Graze is evaluated for each hit separately.
    * If either Laufen's or the attacker's SPD changes during the resolution of an attack (due to triggered effects), the SPD difference is recalculated at the point of damage calculation.