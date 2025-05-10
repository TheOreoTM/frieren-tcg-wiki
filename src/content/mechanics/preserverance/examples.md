---
id: "preserverance"
name: "Preserverance - Examples"
description: "Examples of the Preserverance mechanic in action."
icon: "shield-plus"
author: "Oreo ™️"
authorAvatar: "/assets/oreo-pfp.png"
---

### Preserverance Examples

**Character:** Denken (Starts with 3 Preserverance Stacks, Death HP: -50)

**Example 1: Basic Stack Loss**

* Denken has 2 Preserverance stacks and 10 HP.
* An opponent attacks Denken, dealing 15 damage. Denken's HP becomes -5.
* Denken takes his turn.
* At the end of Denken's turn, because his HP is -5 (which is $\leq 0$), he loses 1 Preserverance stack.
* Denken now has 1 Preserverance stack and -5 HP. He is not defeated yet.

**Example 2: Additional Stack Loss due to Very Low HP**

* Denken has 3 Preserverance stacks and -20 HP.
* Denken takes his turn.
* At the end of Denken's turn:
    * His HP is -20 ($\leq 0$), so he loses 1 Preserverance stack.
    * His HP is also -20 ($\leq -25$, which is `DENKEN_DEATH_HP / 2`), so he loses an *additional* Preserverance stack.
* Denken loses a total of 2 stacks. He now has 1 Preserverance stack and -20 HP.

**Example 3: Defeat by Losing All Stacks**

* Denken has 1 Preserverance stack and -5 HP.
* Denken takes his turn.
* At the end of Denken's turn, because his HP is -5 ($\leq 0$), he loses 1 Preserverance stack.
* Denken now has 0 Preserverance stacks. He is defeated.
    *Alternatively, if a message "Denken's strength fades" appears and `game.additionalMetadata.forfeited[characterIndex] = true` is set, this indicates defeat.*

**Example 4: Defeat by Critical HP Threshold**

* Denken has 2 Preserverance stacks and 1 HP.
* An opponent attacks Denken, dealing 51 damage. Denken's HP becomes -50.
* Even though Denken has 2 Preserverance stacks remaining, he is immediately defeated because his HP reached the `DENKEN_DEATH_HP` threshold.

**Example 5: Surviving and Recovering a Stack**

* Denken has 1 Preserverance stack and -10 HP.
* On his turn, Denken plays "This Is No Place To Give Up."
    * The card's effect states: "Heal 7HP. Heal an additional 11HP and gain 1 Preserverance stack if HP $\leq 0$."
* Denken heals 7 HP (HP becomes -3). Then, because his HP was $\leq 0$, he heals an additional 11 HP (HP becomes 8) and gains 1 Preserverance stack.
* Denken now has 2 Preserverance stacks and 8 HP. He is no longer at 0 or negative HP.