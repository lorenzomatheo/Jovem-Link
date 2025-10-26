import { Question } from "@/types/questionnaire";
import { RadioQuestion } from "./questions/RadioQuestion";
import { TextQuestion } from "./questions/TextQuestion";

interface QuestionRendererProps {
  question: Question;
  value: string;
  onChange: (value: string) => void;
}

export const QuestionRenderer = ({ question, value, onChange }: QuestionRendererProps) => {
  switch (question.type) {
    case "radio":
      return <RadioQuestion question={question} value={value} onChange={onChange} />;
    case "text":
    case "number":
      return <TextQuestion question={question} value={value} onChange={onChange} />;
    default:
      return null;
  }
};
