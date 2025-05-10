import fs from "fs";
import path from "path";
import matter from "gray-matter";

const combatDirectory = path.join(process.cwd(), "src/content/combat");

export interface CombatStrategy {
    id: string;
    title: string;
    content: string;
    character: string;
    author: string;
    date: string;
    tags: string[];
}

export function getCombatFiles() {
    try {
        return fs.readdirSync(combatDirectory).filter((file) => file.endsWith(".md"));
    } catch (error) {
        console.error("Error reading combat directory:", error);
        return [];
    }
}

export function getCombatStrategyById(id: string): CombatStrategy | undefined {
    try {
        const fullPath = path.join(combatDirectory, `${id}.md`);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        return {
            id,
            title: data.title,
            content,
            character: data.character,
            author: data.author,
            date: data.date,
            tags: data.tags || [],
        };
    } catch (error) {
        console.error(`Error reading combat strategy ${id}:`, error);
        return undefined;
    }
}

export function getAllCombatStrategies(): CombatStrategy[] {
    try {
        const fileNames = getCombatFiles();
        const allStrategies = fileNames.map((fileName) => {
            const id = fileName.replace(/\.md$/, "");
            const fullPath = path.join(combatDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const { data, content } = matter(fileContents);

            return {
                id,
                title: data.title,
                content,
                character: data.character,
                author: data.author,
                date: data.date,
                tags: data.tags || [],
            };
        });

        // Sort by date (newest first)
        return allStrategies.sort((a, b) => {
            if (a.date < b.date) {
                return 1;
            } else {
                return -1;
            }
        });
    } catch (error) {
        console.error("Error getting all combat strategies:", error);
        return [];
    }
}

export function getCombatStrategiesByCharacter(character: string): CombatStrategy[] {
    return getAllCombatStrategies().filter((strategy) => strategy.character === character);
}
