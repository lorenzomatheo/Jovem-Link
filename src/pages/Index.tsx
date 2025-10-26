import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { QuestionnaireHeader } from "@/components/QuestionnaireHeader";
import { QuestionnaireFooter } from "@/components/QuestionnaireFooter";
import { QuestionnaireCard } from "@/components/QuestionnaireCard";
import { QuestionRenderer } from "@/components/QuestionRenderer";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users } from "lucide-react";
import { questionnaireSteps } from "@/data/questionnaireData";
import { QuestionnaireAnswers } from "@/types/questionnaire";

const Index = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userType, setUserType] = useState<"student" | "responsible" | null>(null);
  const [answers, setAnswers] = useState<QuestionnaireAnswers>({});

  const isInitialScreen = currentStep === 0 && currentQuestionIndex === 0 && userType === null;
  
  const activeStep = questionnaireSteps[currentStep];
  const activeQuestion = activeStep?.questions[currentQuestionIndex];
  
  const totalSteps = questionnaireSteps.length;
  const totalQuestionsInStep = activeStep?.questions.length || 0;
  const overallQuestionNumber = questionnaireSteps
    .slice(0, currentStep)
    .reduce((acc, step) => acc + step.questions.length, 0) + currentQuestionIndex + 1;
  const totalQuestions = questionnaireSteps.reduce((acc, step) => acc + step.questions.length, 0) + 1; // +1 for initial screen

  const handleAnswer = (value: string) => {
    if (activeQuestion) {
      setAnswers({ ...answers, [activeQuestion.id]: value });
    }
  };

  const handleNext = () => {
    if (isInitialScreen && userType) {
      setAnswers({ ...answers, userType });
      setCurrentStep(0);
      setCurrentQuestionIndex(0);
      return;
    }

    if (currentQuestionIndex < totalQuestionsInStep - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
      setCurrentQuestionIndex(0);
    } else {
      // Questionnaire completed - navigate to dashboard
      console.log("Respostas completas:", answers);
      navigate("/dashboard", { state: { answers } });
    }
  };

  const handleBack = () => {
    if (isInitialScreen) return;

    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setCurrentQuestionIndex(questionnaireSteps[currentStep - 1].questions.length - 1);
    } else {
      // Back to initial screen
      setUserType(null);
    }
  };

  const currentAnswer = activeQuestion ? (answers[activeQuestion.id] as string) || "" : "";
  const canProceed = isInitialScreen ? userType !== null : currentAnswer !== "";

  const displayQuestionNumber = isInitialScreen ? 1 : overallQuestionNumber + 1;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top gradient decoration */}
      <div className="h-20 bg-gradient-to-b from-gradient-top to-transparent" />

      {/* Header */}
      <QuestionnaireHeader currentQuestion={displayQuestionNumber} totalQuestions={totalQuestions} />

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="max-w-3xl w-full space-y-8">
          {isInitialScreen ? (
            <>
              {/* Initial screen - User type selection */}
              <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  Vamos entender seu perfil!
                </h1>
                <p className="text-lg text-muted-foreground">
                  Responda algumas perguntas rápidas para encontrar benefícios que combinam com você.
                </p>
              </div>

              <div className="bg-card rounded-3xl shadow-xl p-8 md:p-12 space-y-8">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                  Você é estudante ou responsável por um estudante?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <QuestionnaireCard
                    icon={<GraduationCap className="w-16 h-16" strokeWidth={1.5} />}
                    label="Sou estudante"
                    selected={userType === "student"}
                    onClick={() => setUserType("student")}
                  />
                  <QuestionnaireCard
                    icon={<Users className="w-16 h-16" strokeWidth={1.5} />}
                    label="Sou responsável"
                    selected={userType === "responsible"}
                    onClick={() => setUserType("responsible")}
                  />
                </div>

                <div className="flex justify-end items-center pt-4">
                  <Button
                    size="lg"
                    className="px-8"
                    disabled={!userType}
                    onClick={handleNext}
                  >
                    Próximo
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Questionnaire steps */}
              <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  {activeStep?.title}
                </h1>
                <p className="text-lg text-muted-foreground">
                  {activeStep?.description}
                </p>
              </div>

              <div className="bg-card rounded-3xl shadow-xl p-8 md:p-12 space-y-8">
                {activeQuestion && (
                  <QuestionRenderer
                    question={activeQuestion}
                    value={currentAnswer}
                    onChange={handleAnswer}
                  />
                )}

                <div className="flex justify-between items-center pt-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-8"
                    onClick={handleBack}
                  >
                    Voltar
                  </Button>
                  <Button
                    size="lg"
                    className="px-8"
                    disabled={!canProceed}
                    onClick={handleNext}
                  >
                    {currentStep === totalSteps - 1 && currentQuestionIndex === totalQuestionsInStep - 1
                      ? "Finalizar"
                      : "Próximo"}
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </main>

      {/* Bottom gradient decoration */}
      <div className="h-20 bg-gradient-to-t from-gradient-bottom to-transparent" />

      {/* Footer */}
      <QuestionnaireFooter />
    </div>
  );
};

export default Index;
