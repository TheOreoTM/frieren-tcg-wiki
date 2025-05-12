import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
    Sparkles,
    Swords,
    Zap,
    Flame,
    Shield,
    BookOpen,
    ShieldPlus,
    BookA,
    Users,
    LinkIcon,
    HandHeart,
    Bird,
    HelpCircle,
} from "lucide-react";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
}

export function getMechanicIcon(iconName: string) {
    const iconMap: Record<string, any> = {
        sparkles: Sparkles,
        swords: Swords,
        zap: Zap,
        flame: Flame,
        shield: Shield,
        bookopen: BookOpen,
        "shield-plus": ShieldPlus,
        "book-a": BookA,
        users: Users,
        chain: LinkIcon,
        "heart-plus": HandHeart,
        bird: Bird,
        mana: Sparkles,
        combat: Swords,
        spell: Zap,
        element: Flame,
        hero: Users,
        analysis: BookOpen,
        resolve: ShieldPlus,
        nature: Bird,
        custom: HelpCircle,
    };

    return iconMap[iconName] || HelpCircle;
}
