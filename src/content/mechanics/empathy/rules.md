---
id: "empathy-rules"
name: "Empathy Rules"
description: "Detailed rules and edge cases for the Empathy mechanic."
icon: "handshake"
authorAvatar: "/assets/oreo-pfp.png"
author: "Oreo ™️"
---

### Empathy Rules

1.  **Signature Move Acquisition:**
    * After a predetermined number of full turns have been completed by both players in a match, Ubel gains access to the opponent character's signature move.
    * The signature move is added to Ubel's available actions and can be used according to its original cost and effects.
    * Ubel only copies the signature move of the specific character she is currently facing. This copied move is lost at the end of the match.

2.  **Attack Accuracy:**
    * Some of Ubel's attack cards will have an accuracy rating or a chance to miss. This might be represented as a percentage chance to hit, or conditional text like "This attack hits unless the target has 'Evasion'."
    * The "ubelSureHit" property mentioned in the initial analysis likely indicates an attack that bypasses normal accuracy checks and always hits.

3.  **Conditional Effects (`conditionalTreatAsEffect`):**
    * Some of Ubel's card effects are wrapped in a `conditionalTreatAsEffect` function. This means these effects only apply under specific conditions defined within the function's logic. Players need to carefully read the card text to understand when these conditional effects are active.

4.  **"Rushdown" Effect:**
    * The "Rushdown" effect influences Ubel's attack accuracy. When this effect is active, Ubel's attacks have a 100% chance to hit, but they can still get blocked by defensive cards.

5.  **Interaction with other effects:**
    * Effects that modify attack accuracy (both positively and negatively) will apply to Ubel's attacks with variable accuracy.