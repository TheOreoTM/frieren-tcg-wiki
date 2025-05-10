---
id: "preserverance"
name: "Preserverance - Rules"
description: "Detailed rules for the Preserverance mechanic."
icon: "shield-plus"
author: "Oreo ™️"
authorAvatar: "/assets/oreo-pfp.png"
---

### Preserverance Rules

1.  **Starting Stacks:** A character with the Preserverance ability starts the game with a predetermined number of Preserverance stacks (e.g., Denken starts with 3). These are typically tracked as the character's "Ability" stat.

2.  **Losing Stacks:**
    * If the character's HP is less than or equal to 0 at the end of their turn, they lose 1 Preserverance stack.
    * An additional Preserverance stack is lost if the character's HP is significantly low (e.g., for Denken, if HP is $\leq -25$, which is `DENKEN_DEATH_HP / 2`). This means a character could lose 2 stacks in a single turn end if their HP is very low and also $\leq 0$.

3.  **Defeat Conditions:** A character with Preserverance is defeated if:
    * Their number of Preserverance stacks becomes 0, and their HP is $\leq 0$ at the end of the turn (or if a check for stacks = 0 is made after stack loss).
    * Their HP drops to or below a specific critical threshold (e.g., for Denken, `DENKEN_DEATH_HP` which is -50 HP), regardless of remaining Preserverance stacks.

4.  **Interaction with Healing/HP Recovery:**
    * If a character with 0 HP but remaining Preserverance stacks is healed above 0 HP, they are no longer in immediate danger of losing stacks at turn end due to the 0 HP condition.
    * Some abilities or cards might allow a character to regain Preserverance stacks (e.g., Denken's "This Is No Place To Give Up" card).

5.  **Visual Indicators:** The number of Preserverance stacks is typically visible to all players.

**Edge Cases:**

* **Simultaneous Defeat Conditions:** If a character's HP drops to the critical death threshold (e.g., -50 HP for Denken) *and* they run out of Preserverance stacks simultaneously (e.g., due to taking massive damage that also triggers multiple stack loss conditions at turn end), they are defeated. The HP threshold defeat usually takes precedence if it's an immediate effect.
* **Turn End Sequence:** The loss of Preserverance stacks due to HP $\leq 0$ typically occurs during the end-of-turn phase, after other end-of-turn effects might resolve.
