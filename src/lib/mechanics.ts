import fs from "fs";
import path from "path";
import matter from "gray-matter";

const mechanicsDirectory = path.join(process.cwd(), "src/content/mechanics");

export interface Mechanic {
    id: string;
    name: string;
    description: string;
    author: string;
    content: string;
    authorAvatar: string;
}

export function getAllMechanics() {
    try {
        const mechanics = fs.readdirSync(mechanicsDirectory);
        const allMechanics = mechanics.map((mechanic) => {
            const data = getMechanicData(mechanic);
            if (data) {
                return data;
            }
        });

        return allMechanics.filter((mechanic) => mechanic !== undefined);
    } catch (error) {
        console.error("Error reading mechanics directory:", error);
        return [];
    }
}

export function getMechanicFiles(mechanic: string) {
    try {
        return fs.readdirSync(`${mechanicsDirectory}/${mechanic}`);
    } catch (error) {
        console.error("Error reading mechanics directory:", error);
        return [];
    }
}

export function getMechanicOverview(mechanic: string): Mechanic | undefined {
    try {
        const fullPath = path.join(mechanicsDirectory, `${mechanic}/overview.md`);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        return {
            id: data.id,
            name: data.name,
            description: data.description,
            author: data.author,
            content,
            authorAvatar: data.authorAvatar,
        };
    } catch (error) {
        console.error(`Error reading mechanic ${mechanic}:`, error);
        return undefined;
    }
}

export function getMechanicRules(mechanic: string): Mechanic | undefined {
    try {
        const fullPath = path.join(mechanicsDirectory, `${mechanic}/rules.md`);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        return {
            id: data.id,
            name: data.name,
            description: data.description,
            author: data.author,
            content,
            authorAvatar: data.authorAvatar,
        };
    } catch (error) {
        return undefined;
    }
}

export function getMechanicExamples(mechanic: string): Mechanic | undefined {
    try {
        const fullPath = path.join(mechanicsDirectory, `${mechanic}/examples.md`);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        return {
            id: data.id,
            name: data.name,
            description: data.description,
            author: data.author,
            content,
            authorAvatar: data.authorAvatar,
        };
    } catch (error) {
        return undefined;
    }
}

export function getMechanicData(mechanic: string) {
    try {
        const overview = getMechanicOverview(mechanic);
        const rules = getMechanicRules(mechanic);
        const examples = getMechanicExamples(mechanic);

        return {
            overview,
            rules,
            examples,
        };
    } catch (error) {
        return undefined;
    }
}
