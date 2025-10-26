import { Question } from "@/types/questionnaire";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface RadioQuestionProps {
  question: Question;
  value: string;
  onChange: (value: string) => void;
}

export const RadioQuestion = ({ question, value, onChange }: RadioQuestionProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl md:text-2xl font-semibold text-foreground">
        {question.title}
      </h2>
      {question.helper && (
        <p className="text-sm text-muted-foreground">{question.helper}</p>
      )}
      <RadioGroup value={value} onValueChange={onChange} className="space-y-3">
        {question.options?.map((option) => (
          <div key={option.value} className="flex items-center space-x-3 p-4 rounded-xl border-2 border-border hover:border-secondary/50 transition-colors cursor-pointer">
            <RadioGroupItem value={option.value} id={`${question.id}-${option.value}`} />
            <Label 
              htmlFor={`${question.id}-${option.value}`} 
              className="flex-1 cursor-pointer text-base font-medium"
            >
              {option.label}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};
