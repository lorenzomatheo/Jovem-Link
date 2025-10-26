import { Question } from "@/types/questionnaire";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface TextQuestionProps {
  question: Question;
  value: string;
  onChange: (value: string) => void;
}

export const TextQuestion = ({ question, value, onChange }: TextQuestionProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor={question.id} className="text-xl md:text-2xl font-semibold text-foreground">
          {question.title}
        </Label>
        {question.helper && (
          <p className="text-sm text-muted-foreground">{question.helper}</p>
        )}
      </div>
      <Input
        id={question.id}
        type={question.type === "number" ? "number" : "text"}
        placeholder={question.placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="text-base h-12"
      />
    </div>
  );
};
