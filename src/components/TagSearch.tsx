import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface TagSearchProps {
  tags: string[];
  selectedTags: string[];
  onTagClick: (tag: string) => void;
}

export const TagSearch = ({ tags, selectedTags, onTagClick }: TagSearchProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Badge
          key={tag}
          variant={selectedTags.includes(tag) ? "default" : "outline"}
          className={cn(
            "cursor-pointer hover:bg-primary hover:text-primary-foreground",
            selectedTags.includes(tag) && "bg-primary text-primary-foreground"
          )}
          onClick={() => onTagClick(tag)}
        >
          {tag}
        </Badge>
      ))}
    </div>
  );
};
