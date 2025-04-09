"use client";
import { useState, useEffect } from "react";

type Props = {
    empowerLevel: number;
    effects: number[];
    effectNames: string[];
    EMPOWER_BOOST: number;
    onLevelChange?: (level: number) => void;
};

export function CardEmpowerCalculator({
    empowerLevel: initialLevel,
    effects,
    effectNames,
    EMPOWER_BOOST,
    onLevelChange,
}: Props) {
    const [empowerLevel, setEmpowerLevel] = useState(initialLevel);

    useEffect(() => {
        onLevelChange?.(empowerLevel);
    }, [empowerLevel, onLevelChange]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value) || 0;
        setEmpowerLevel(value);
    };

    return (
        <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-md">
            <div className="text-sm text-muted-foreground mb-2 flex justify-between items-center">
                Empower Level Calculator
                <input
                    type="number"
                    min={0}
                    value={empowerLevel}
                    onChange={handleChange}
                    className="ml-2 px-2 py-1 w-20 text-sm rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-800"
                />
            </div>
            <div className="font-mono text-sm">
                {effects.map((effect, index) => {
                    const empowered = effect * (1 + empowerLevel * EMPOWER_BOOST);
                    return (
                        <div key={index}>
                            {effect.toFixed(2)} → {empowered.toFixed(2)} {effectNames[index]}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
