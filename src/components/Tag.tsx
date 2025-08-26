import { Badge } from "./ui/badge";

interface TagProps {
    text: string;
    color?: string;
}

export default function Tag({ text, color }: TagProps) {
    return (
        <Badge className={`${color ? color : "bg-purple-600"}`}>
            <span className="text-gray-100 text-xs font-medium font-['Inter'] leading-tight">#{text}</span>
        </Badge>
    );
}
