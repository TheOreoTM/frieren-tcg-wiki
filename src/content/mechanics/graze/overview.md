---
id: "graze"
name: "Graze"
description: "Reduce incoming damage based on speed difference and a random roll."
icon: "zap"
authorAvatar: "/assets/oreo-pfp.png"
author: "Oreo ™️"
---

### Graze

Graze is Laufen's unique defensive mechanic, allowing her to mitigate incoming damage through her exceptional speed and a bit of luck. When Laufen is attacked, the amount of damage she takes can be reduced based on how much faster she is than her attacker and a random element.

The core mechanics of Graze are:

- When Laufen is targeted by an attack, a random number (a D100 roll) is generated.
- The difference in Speed (SPD) between Laufen and the attacking character is calculated.
- The damage reduction is determined based on a combination of the D100 roll and the SPD difference, following a defined formula (details available [here](https://github.com/HxHexa/frieren-tcg/blob/bdf85e2d054d086bce65b1d6e75b65211e44b509/src/tcg/characters/characterData/characters/Laufen.ts#L80)). Generally, a lower roll and a higher SPD difference result in greater damage reduction.

This mechanic makes Laufen a slippery and unpredictable defender, rewarding players who invest in her speed.