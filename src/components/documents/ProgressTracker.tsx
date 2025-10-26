
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const ProgressTracker = () => {
  const completed = 3;
  const total = 5;
  const percentage = (completed / total) * 100;

  return (
    <Card className="p-6 border-border">
      <h3 className="font-semibold text-foreground mb-4">Progresso geral</h3>
      <Progress value={percentage} className="h-2 mb-3" />
      <p className="text-sm text-foreground mb-2">
        <span className="font-semibold">{completed} de {total} documentos completos</span>
      </p>
      <p className="text-sm text-muted-foreground">
        Quanto mais completo seu perfil, mais benefícios disponíveis.
      </p>
    </Card>
  );
};

export default ProgressTracker;
