import React from "react";
import { Heart } from "lucide-react";
import type { CalculatorCharacter } from "@/lib/types/calculator";

interface HealthBarProps {
    character: CalculatorCharacter;
}

const HealthBar: React.FC<HealthBarProps> = ({ character }) => {
    const healthPercentage = (character.health / character.maxHealth) * 100;

    // Determine health bar color based on health percentage
    const getHealthColor = () => {
        if (healthPercentage > 60) return "bg-green-500";
        if (healthPercentage > 30) return "bg-amber-500";
        return "bg-red-500";
    };

    return (
        <div className="bg-frieren-lavender/30 rounded-lg p-4 flex-1">
            <div className="flex items-center mb-2">
                <Heart className={`h-5 w-5 mr-2 ${healthPercentage > 30 ? "text-red-500" : "text-red-600"}`} />
                <h3 className="font-philosopher text-lg font-bold">{character.name}</h3>
            </div>

            <div className="text-xl font-bold mb-2">
                {character.health}/{character.maxHealth} HP
            </div>

            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div
                    className={`${getHealthColor()} h-4 rounded-full transition-all duration-500`}
                    style={{ width: `${healthPercentage}%` }}
                />
            </div>
        </div>
    );
};

export default HealthBar;
