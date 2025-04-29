---
id: "patch-1-2-notes"
title: "May Release - Patch 1.2 Notes: The Big Number Funnies Patch"
excerpt: "See what changed in the SECOND patch of the game"
date: "2025-04-30"
author: "Hexa"
category: "Patch Note"
image: "/assets/patch-1-2-notes-fern-snipe.gif"
tags: ["balance", "nerfs", "buffs", "characters"]
---

The SECOND update of the game has been released. It includes **a lot** of balance changes and two new characters - **Fern** and **Übel**!

---

## New characters

This patch brings two new characters to the game.

-   **Fern**:

    -   Fern's kit is based around her oppressive multi-hit barrage, giving the opponent no window of reprieve.
    -   Fern also has the ability to focus all of her barrage's power into a strong single-hit piercing Concentrated Zoltraak Snipe, to break through characters with high bulk.
    -   Check out her [character page](/characters/fern) for more information!

-   **Übel**:
    -   Übel's a prototypical glass cannon. She is very fail, but her kit is based around her very hard-hitting, DEF-ignoring attacks, which all have a chance to fail.
    -   Übel's slashing attacks are sure to hit if the opponent attacked Übel before her attack however. Be careful engaging in reckless combat with Übel, or she can take you down very quickly!
    -   Check out her [character page](/characters/ubel) for more information!

---

## Balance Notes

### Global Changes

-   **Discard**: Now also gives the user a flat ATK+1, DEF+1 and SPD+1 on usage.
-   All characters now have 16 cards.

### Frieren

-   Deck composition: +1 Ordinary Defensive Magic
-   New sub-ability **Flamme's Teaching**: See past the opponent's Mana Suppression.
-   **Offensive Magic Analysis: Zoltraak**: Base DMG 7 > 8. Now only gives 1 Analysis stack after usage.
-   **Destructive Lightning: Judradjim**: Base DMG 12 > 13.
-   **"The Height of Magic"**: Will now be treated as "Spell to make a Field of Flowers" when used while HP > 25.

### Sense

-   Deck composition: +1 Tea Party
-   Ability changed to **Proctor**:

```
Every turn this character doesn't attack, gain 1 observation. Every turn this character attacks, lose 1 observation. (min 0)
This character wins when the test is over after 15 observations.
```

-   Sub-ability **Tea Time**: Now requires 3 Tea Time Snacks (instead of 2) to perform turn skip.
-   **Hair Whip**: DEF+2 > DEF+3.
-   **Pierce**: DEF+1 > DEF+2.
-   **Harden**: Renamed to Sharpen. Effect: `HP-1. DEF+2. ATK+2.`
-   **Rest**: The DEF-2 effect now only lasts 2 turns.
-   **Tea Time** and **Tea Party**: No longer gives ATK for both characters. Now will Empower both character's hands instead. Tea Time empowers both characters' hands once, while Tea Party empowers both characters' hands twice.

### Stille

-   Deck composition: +1 Deflect
-   Ability: Will now deal DMG equivalent to `(opponent's ATK + opponent's move DMG)` on miss (used to be `1/2 * (opponent's ATK + opponent's move DMG)`).
-   **Geisel**: Geisel will now be active for a set 2 turns instead of randomly between 1 or 3 turns.

### Serie

-   Deck composition: +1 Basic Defensive Magic
-   Base Stat: SPD 14 > 10.
-   New sub-ability **Serie's Intuition**: See past the opponent's Mana Suppression.
-   Removed all 6 of her Living Grimoire: Offense Chapters card and replace them with the below cards:
    -   3 x Living Grimoire: Offense Chapter. 3rd Class Magic Section.
    -   2 x Living Grimoire: Offense Chapter. 1st Class Magic Section.
    -   1 x Living Grimoire: Offense Chapter. Great Mage's Magic Section.
-   Removed all 2 of her Living Grimoire: Utility Chapters card and replace them with the below cards:
    -   1 x Living Grimoire: Utility Chapter. Tactics Section.
    -   1 x Living Grimoire: Utility Chapter. Recovery Section.
-   You can use `/tcg-info advanced-rules` to see which cards can be pulled from these new Grimoire sections!
-   Added `Zoltraak` and `Shallow Slash` to the available 3rd Class Magic Section pool.
-   Added `Barrage`, `Cleave` and `Dismantle` to the available 1st Class Magic Section pool.
-   Added `Reelseiden: Malevolent Shrine` to the available Great Mage's Magic Section pool.
-   Added `Mana Concealment` and `Sorganeil` to the available Tactics Section pool.
-   Added `Spell to Create Mana Butterflies` to the available Recovery Section pool.
-   **Basic Defensive Magic**: DEF+30 > DEF+20.
-   **Unbreakable Barrier**: HP-10 > HP-5. HP-2 at the end of the next 5 turns.
-   **Ancient Barrier Magic**:
    -   Before: HP-20 ATK+7, Opp's DEF-7, Opp's SPD-7 for 7 turns
    -   After: HP-5. HP-2 at the end of the next 7 turns. ATK+5, Opp's DEF-5, Opp's SPD-5 for 7 turns.

### Linie

-   Deck composition: +1 Parry
-   Ability **Chain Attack**: Damage increase per Chain count 8% > 7%
-   **Mana Detection**: Now also reveals the opponent's highest empowered card.
-   **Erfassen: Axe**: HP-3. DMG 11. > HP-4. DMG 12.
-   **Erfassen: Spear** is reworked to **Erfassen: Javelin**: HP-3. DMG 5. Deal 5 DMG at the end of next turn.
-   **Erfassen: Sword**: HP-2. DMG 9. > HP-2. DMG 8.
-   **Erfassen: Knife**: DMG 5. > HP-1. DMG 2. At the end of the next 2 turns, deal 2 DMG.

### Sein

-   Deck composition: +1 Brace Yourself
-   Ability **Goddess' Blessing**: Heal for 3HP + 3 \* (Turn Count \* 10%) > Heal for 2HP + 2 \* (Turn Count \* 10%)
-   **Trust in Your Ally: Frieren's Zoltraak**: DMG 5 + HP/10 > DMG 5 + HP/9.
-   **Three Spears of the Goddess**: DMG 5 + HP/10 > DMG 7 + HP/10.

### Stark

-   Deck composition: +1 Block. +1 Offensive Stance. +1 Defensive Stance. -1 Concentration. -1 Eisen's Axe Cleave.
-   Base Stat:
    -   HP: 110 > 120
    -   ATK: 11 > 10
-   Ability **Bravest Coward**: Your attack now do not receive any buff or debuff when used while Resolve is 0.
-   **Offensive Stance**: The DEF-2 effect now only lasts for 2 turns.
-   **Defensive Stance**: The ATK-2 effect now only lasts for 2 turns.
-   **Concentration**: SPD+2 > SPD+3.
-   **Jumbo Berry Special Break**: Heal 10HP > Heal 7HP. Gain 1 Resolve at the end of next turn.
-   **Fear Brought Me This Far**: Increases ATK and DEF by 3 > Increases ATK and DEF by 2. Increases ATK and DEF by an additional 1 if HP <= 60.
-   **Axe Swipe**: Now uses 0 Resolve.
-   **Orden's Slash Technique**: DMG12 > DMG14
-   **Eisen's Axe Cleave**: HP-12 DMG17 > HP-11 DMG19.
-   **Lightning Strike**:
    -   Before: Priority+1. HP-15. DEF-5 for this turn. At this turn's end, strike for 22.00 DMG. Uses up 2 Resolve stack.
    -   After: ~~Prority+1~~ HP-14. DEF-5 and SPD-5 for 2 turns. At this turn's end, strike for 20.00 DMG. Uses up 2 Resolve stack. **Stark's HP cannot drop below 1 until the end of the turn after this move is used.**

### Laufen

-   Deck composition: +1 Parry.
-   Base Stat: DEF 7 > 8.
-   Ability reworked to **Graze**:

```
  When the opponent attacks, roll a D100. The lower the roll, the less damage the move deals.
  The move deals maximum damage if the roll is higher than the difference between the 2 character’s SPD.
  The opponent’s attack deals at minimum 0% damage, and at maximum only (100 - This character’s SPD + Opponent’s SPD)% damage.
```

-   **Staff Strike**:
    -   Before: SPD+2.00. Afterwards, HP-4, attack for DMG 10.00+SPD/6
    -   After: SPD+3.00. Afterwards, HP-2, attack for DMG 7.00+SPD/7
-   **Staff Bash**: HP-4, DMG 8.00+SPD/5 > HP-3, DMG 8.00+SPD/6
-   **Whip**: HP-5, DMG 6.00+SPD/4 > HP-4, DMG 9.00+SPD/5
-   **Supersonic Strike**:
    -   Before: SPD+3.00. Afterwards, HP-7, DMG 10.00+SPD/3
    -   After: HP-5, DMG 10.00+SPD/4
-   **Hide**:
    -   Before: SPD+3.00. Increases SPD by an additional 7.00 until the end of the turn. Heal 12.00 HP.
    -   After: SPD+2.00. Heal 7.00 HP.
-   **Quick Dodge**: SPD+5 with SPD+25 until end of turn > SPD+3 with SPD+27 until end of turn.

### Denken

-   Deck composition: +1 This Is No Place To Give Up.
-   Ability reworked to **Preserverance**:

```
  This character starts with 3 Preserverance stacks.
  1 Stack is taken away when the character's HP is <= 0 at the end of the turn.
  An additional stack is taken away when the character's HP is <= -25.
  The character loses when the number of Preserverance stack is 0, or if the character's HP is <= -50.
```

-   New card - **This Is No Place To Give Up**:

```
Heal 7.00HP. Heal an additional 11.00HP and gain 1 Preserverance stack if HP <= 0.
```

-   Denken's fist attacks (Jab, Hook, Uppercut) no longer heals him.
-   **Jab**: DEF+1 SPD+1 > DEF+2 SPD+1
-   **Hook**: ATK+2 > SPD+2 ATK+1
-   **Uppercut**: ATK+1 SPD+1 > ATK+2 SPD+1
-   **Tornado Winds: Waldgose**: DMG 3. Deal 3 DMG at next 3 turn ends > DMG 6. Deal 2 DMG at next 3 turn ends.
-   **Hellfire: Daosdorg**: If Waldgose is active, now also reduces opponent's DEF by 1.
-   **Lights of Judgment: Catastravia**: DMG4. Deal 4 DMG at next 5 turn ends > DMG 9. Deal 3 DMG at next 5 turn ends.

### Himmel

-   Deck composition: +1 Quick Block. +1 Frieren! Now!. -1 A Real Hero's Swing.
-   Ability **The Hero Party**: Per ally damage bonus reduced from 20% > 15%.
-   New card - **Frieren! Now!**: DMG 12.
-   **Frieren! Strike Their Weakpoint!**: Now also reduces Opponent's DEF by 1 for the duration of the move.
-   **Frieren! Back Me Up!**: Now also reduces Opponent's DEF by 2 for the duration of the move. Now also lasts 4 turns.
-   **Eisen! Cover My Back!**: Now only counters for once per turn.
-   **Eisen! Hold The Line!**: DEF+4 > DEF+3. Now only lasts 4 turns.
-   **Heiter! Emergency!**: HP+6 twice > HP+5 twice.
-   **I trust you, Heiter.**: ATK+4 SPD+4 > ATK+3 SPD+3. Now only lasts 4 turns.
-   **Quick Block**: DEF + 25 > DEF + 20.
-   **A Real Hero's Swing**: DMG 20 > DMG 18.

### Effective Date

These changes will take effect on May 1st, 2025. And next balance changes are expected to release early June. Be sure to vote for the next 2 characters you see want added to the game on the **#tcg-announcements** channel on the server!
