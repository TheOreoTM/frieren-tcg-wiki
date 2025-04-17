import React from "react";
import { Zap, Shield } from "lucide-react";
import type { Turn } from "@/lib/types/calculator";

interface TurnRecordProps {
    turn: Turn;
    character1Name: string;
    character2Name: string;
}

const TurnRecord: React.FC<TurnRecordProps> = ({ turn, character1Name, character2Name }) => {
    return (
        <div className="bg-frieren-blue/30 rounded-lg p-4">
            <div className="font-philosopher text-frieren-primary text-lg mb-2">Turn {turn.id}</div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                    <div className="font-medium">{character1Name}</div>
                    <div className="flex items-center mt-1">
                        <Shield className="h-4 w-4 mr-2 text-frieren-primary" />
                        <span>Used {turn.character1Move}</span>
                    </div>
                    <div className="flex items-center mt-2 text-red-500">
                        <Zap className="h-4 w-4 mr-2" />
                        <span>Took {turn.character1Damage} damage</span>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="font-medium">{character2Name}</div>
                    <div className="flex items-center mt-1">
                        <Shield className="h-4 w-4 mr-2 text-frieren-primary" />
                        <span>Used {turn.character2Move}</span>
                    </div>
                    <div className="flex items-center mt-2 text-red-500">
                        <Zap className="h-4 w-4 mr-2" />
                        <span>Took {turn.character2Damage} damage</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TurnRecord;
