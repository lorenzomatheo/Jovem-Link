export type QuestionType = "radio" | "text" | "number" | "multiple";

export interface QuestionOption {
  value: string;
  label: string;
}

export interface Question {
  id: string;
  title: string;
  type: QuestionType;
  options?: QuestionOption[];
  placeholder?: string;
  helper?: string;
}

export interface QuestionnaireStep {
  id: number;
  title: string;
  description: string;
  questions: Question[];
}

export interface QuestionnaireAnswers {
  [questionId: string]: string | string[];
}
