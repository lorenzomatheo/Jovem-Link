import { Button } from "@/components/ui/button";

interface QuestionnaireHeaderProps {
  currentQuestion?: number;
  totalQuestions?: number;
}

export const QuestionnaireHeader = ({ currentQuestion, totalQuestions }: QuestionnaireHeaderProps) => {
  const progress = currentQuestion && totalQuestions ? (currentQuestion / totalQuestions) * 100 : 0;

  return (
    <header className="w-full px-6 py-6 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          {currentQuestion && totalQuestions && (
            <span className="text-sm font-medium text-muted-foreground">
              {currentQuestion} / {totalQuestions}
            </span>
          )}
        </div>
        <Button variant="outline" className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background">
          Acessar conta
        </Button>
      </div>
      
      {currentQuestion && totalQuestions && (
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-secondary rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </header>
  );
};
