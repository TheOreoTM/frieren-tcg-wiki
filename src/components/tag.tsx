import { Badge } from "./ui/badge";

interface TagProps {
    children: React.ReactNode;
    className?: string;
    tag: string;
}

function getTagColor(tag: string) {
    switch (tag) {
        case "PostAnalysis":
            return "bg-violet-100 text-violet-800 hover:bg-violet-200";
        case "Analysis":
            return "bg-red-100 text-red-800 hover:bg-red-200";
        case "Priority":
            return "bg-purple-100 text-purple-800 hover:bg-purple-200";
        default:
            return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    }
}

export function Tag({ children, className, tag }: TagProps) {
    if (!className) {
        className = `${getTagColor(tag)} hover:cursor-default`;
    }
    return <Badge className={className}>{children}</Badge>;
}
