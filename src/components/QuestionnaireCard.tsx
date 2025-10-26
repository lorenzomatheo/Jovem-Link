import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface QuestionnaireCardProps {
  icon: ReactNode;
  label: string;
  selected: boolean;
  onClick: () => void;
}

export const QuestionnaireCard = ({ icon, label, selected, onClick }: QuestionnaireCardProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col items-center justify-center gap-4 p-8 rounded-2xl border-2 transition-all duration-200 hover:scale-105 min-h-[180px] w-full",
        selected
          ? "bg-selected border-secondary shadow-lg"
          : "bg-card border-border hover:border-secondary/50"
      )}
    >
      <div className={cn(
        "text-5xl transition-colors",
        selected ? "text-secondary" : "text-secondary/70"
      )}>
        {icon}
      </div>
      <span className={cn(
        "text-lg font-medium",
        selected ? "text-selected-foreground" : "text-foreground"
      )}>
        {label}
      </span>
    </button>
  );
};
