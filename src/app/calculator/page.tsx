"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, Plus, Swords, UserRound } from "lucide-react";
import type { CalculatorCharacter, Turn } from "@/lib/types/calculator";
import TurnRecord from "@/components/calculator/turn-record";
import HealthBar from "@/components/calculator/health-bar";
import { Characters } from "@/data/characters";
import { Stat, type CharacterID, type CharacterName } from "@/lib/enums";
import type { Card } from "@/lib/classes/Card";
import { CardMap } from "@/data/cards";
import type { Character } from "@/lib/types";

const DamageCalculatorPage = () => {
    const characterOptions: CalculatorCharacter[] = Array.from(Characters.values()).map((character) => ({
        id: character.id,
        name: character.name,
        maxHealth: character.stats[Stat.HP],
        description: character.description,
        defense: character.stats[Stat.DEF],
        health: character.stats[Stat.HP],
    }));

    const [character1, setCharacter1] = useState<CalculatorCharacter>({
        name: characterOptions[0].name,
        health: characterOptions[0].maxHealth,
        maxHealth: characterOptions[0].maxHealth,
        defense: characterOptions[0].defense,
        id: characterOptions[0].id,
    });

    const [character2, setCharacter2] = useState<CalculatorCharacter>({
        name: characterOptions[1].name,
        health: characterOptions[1].maxHealth,
        maxHealth: characterOptions[1].maxHealth,
        defense: characterOptions[1].defense,
        id: characterOptions[1].id,
    });

    const [turns, setTurns] = useState<Turn[]>([]);
    const [currentMove1, setCurrentMove1] = useState<string>("");
    const [currentMove2, setCurrentMove2] = useState<string>("");
    const [selectedCharacter1, setSelectedCharacter1] = useState<`${CharacterID}`>(characterOptions[0].id);
    const [selectedCharacter2, setSelectedCharacter2] = useState<`${CharacterID}`>(characterOptions[1].id);

    const moveset1: Card[] = Array.from(CardMap.values()).filter((card) => card.deck === selectedCharacter1);
    const moveset2: Card[] = Array.from(CardMap.values()).filter((card) => card.deck === selectedCharacter2);

    function calculateDamage(moveDamage: number, attackerAttack: number, defenderDefense: number): number {
        return Math.max(1, moveDamage + attackerAttack - defenderDefense);
    }
    const handleCharacterChange = (characterId: CharacterID, isCharacter1: boolean) => {
        const selectedCharacter = characterOptions.find((c) => c.id === characterId);

        if (selectedCharacter) {
            if (isCharacter1) {
                setSelectedCharacter1(characterId);
                setCharacter1(selectedCharacter);
            } else {
                setSelectedCharacter2(characterId);
                setCharacter2(selectedCharacter);
            }

            setTurns([]);
            setCurrentMove1("");
            setCurrentMove2("");
        }
    };

    const addTurn = () => {
        if (!currentMove1 || !currentMove2) return;

        const move1 = moveset1.find((m) => m.getId() === currentMove1) as Card;
        const move2 = moveset2.find((m) => m.getId() === currentMove2) as Card;

        const char1 = Characters.get(character1.name as CharacterName) as Character;
        const char2 = Characters.get(character2.name as CharacterName) as Character;

        const damage1 = calculateDamage(
            move1?.calculateEffectValue(move1.effects[0]),
            char1?.stats.ATK,
            char2?.stats.DEF
        );
        const damage2 = calculateDamage(
            move2?.calculateEffectValue(move2.effects[0]),
            char2?.stats.ATK,
            char1?.stats.DEF
        );

        const newTurn: Turn = {
            id: turns.length + 1,
            character1Move: moveset1.find((m) => m.getId() === currentMove1)?.title || "",
            character2Move: moveset2.find((m) => m.getId() === currentMove2)?.title || "",
            character1Damage: damage2,
            character2Damage: damage1,
        };

        const newHealth1 = Math.max(0, character1.health - damage2);
        const newHealth2 = Math.max(0, character2.health - damage1);

        setCharacter1({ ...character1, health: newHealth1 });
        setCharacter2({ ...character2, health: newHealth2 });
        setTurns([...turns, newTurn]);

        setCurrentMove1("");
        setCurrentMove2("");
    };

    const resetCalculator = () => {
        setCharacter1({ ...character1, health: character1.maxHealth });
        setCharacter2({ ...character2, health: character2.maxHealth });
        setTurns([]);
        setCurrentMove1("");
        setCurrentMove2("");
    };

    return (
        <div className="min-h-screen bg-frieren-bg">
            <main className="container mx-auto px-4 sm:px-6 py-8">
                <div className="flex items-center mb-8">
                    <Swords className="text-frieren-primary mr-3 h-6 w-6" />
                    <h2 className="section-title">Damage Calculator</h2>
                </div>

                <div className="card-container p-6">
                    {/* Character Selection */}
                    <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
                        {/* Character 1 */}
                        <div className="flex-1">
                            <h3 className="font-philosopher text-lg text-frieren-primary mb-2">Select Character 1</h3>
                            <Select
                                value={selectedCharacter1}
                                onValueChange={(value) => handleCharacterChange(value as CharacterID, true)}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a character" />
                                </SelectTrigger>
                                <SelectContent>
                                    {characterOptions.map((character) => (
                                        <SelectItem key={character.id} value={character.id}>
                                            <div className="flex items-center">
                                                <UserRound className="h-4 w-4 mr-2 text-frieren-primary" />
                                                <span>
                                                    {character.name} ({character.maxHealth} HP)
                                                </span>
                                            </div>
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Character 2 */}
                        <div className="flex-1">
                            <h3 className="font-philosopher text-lg text-frieren-primary mb-2">Select Character 2</h3>
                            <Select
                                value={selectedCharacter2}
                                onValueChange={(value) => handleCharacterChange(value as CharacterID, false)}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a character" />
                                </SelectTrigger>
                                <SelectContent>
                                    {characterOptions.map((character) => (
                                        <SelectItem key={character.id} value={character.id}>
                                            <div className="flex items-center">
                                                <UserRound className="h-4 w-4 mr-2 text-frieren-primary" />
                                                <span>
                                                    {character.name} ({character.maxHealth} HP)
                                                </span>
                                            </div>
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Health Bars */}
                    <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
                        <HealthBar character={character1} />
                        <div className="hidden md:block">
                            <Swords className="h-10 w-10 text-frieren-primary" />
                        </div>
                        <HealthBar character={character2} />
                    </div>

                    {/* Move Selection */}
                    <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
                        <div className="flex-1">
                            <h3 className="font-philosopher text-lg text-frieren-primary mb-2">
                                {character1.name}'s Move
                            </h3>
                            <Select value={currentMove1} onValueChange={setCurrentMove1}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a move" />
                                </SelectTrigger>
                                <SelectContent>
                                    {moveset1.map((move) => (
                                        <SelectItem key={move.getId()} value={move.getId()}>
                                            {move.title} ({move.calculateEffectValue(move.effects[0]).toFixed(2)}{" "}
                                            damage)
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="flex-1">
                            <h3 className="font-philosopher text-lg text-frieren-primary mb-2">
                                {character2.name}'s Move
                            </h3>
                            <Select value={currentMove2} onValueChange={setCurrentMove2}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a move" />
                                </SelectTrigger>
                                <SelectContent>
                                    {moveset2.map((move) => (
                                        <SelectItem key={move.getId()} value={move.getId()}>
                                            {move.title} ({move.calculateEffectValue(move.effects[0]).toFixed(2)}{" "}
                                            damage)
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        <Button
                            onClick={addTurn}
                            disabled={!currentMove1 || !currentMove2}
                            className="button-primary flex items-center"
                        >
                            <Plus className="h-4 w-4 mr-2" /> Add Turn
                        </Button>
                        <Button
                            onClick={resetCalculator}
                            variant="outline"
                            className="border-frieren-primary text-frieren-primary"
                        >
                            Reset
                        </Button>
                    </div>

                    {/* Turn History */}
                    <div className="mt-8">
                        <h3 className="font-philosopher text-xl text-frieren-primary mb-4">Battle History</h3>
                        {turns.length > 0 ? (
                            <div className="space-y-4">
                                {turns.map((turn) => (
                                    <TurnRecord
                                        key={turn.id}
                                        turn={turn}
                                        character1Name={character1.name}
                                        character2Name={character2.name}
                                    />
                                ))}
                            </div>
                        ) : (
                            <p className="text-center text-frieren-text/70">
                                No turns recorded yet. Add a turn to begin the battle!
                            </p>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default DamageCalculatorPage;
