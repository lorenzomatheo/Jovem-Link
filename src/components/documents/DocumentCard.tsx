
import { Badge } from "@/components/ui/badge";
import { AlertCircle } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type DocumentStatus = "validated" | "pending" | "missing";

interface DocumentCardProps {
  icon: LucideIcon;
  iconBgColor: string;
  title: string;
  description: string;
  status: DocumentStatus;
  aiNote?: string;
  showInstructions?: boolean;
}

const DocumentCard = ({
  icon: Icon,
  iconBgColor,
  title,
  description,
  status,
  aiNote,
  showInstructions,
}: DocumentCardProps) => {
  const getStatusBadge = () => {
    switch (status) {
      case "validated":
        return (
          <Badge className="bg-success-light text-success border-0">
            ✓ Validado
          </Badge>
        );
      case "pending":
        return (
          <Badge className="bg-warning-light text-warning border-0">
            Pendente de envio
          </Badge>
        );
      case "missing":
        return (
          <Badge className="bg-alert-light text-alert border-0">
            Faltando
          </Badge>
        );
    }
  };

  return (
    <div className="bg-card rounded-xl p-6 border border-border hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-4">
        <div className="flex gap-4 flex-1">
          <div className={`${iconBgColor} rounded-xl p-3 flex-shrink-0`}>
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-foreground mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
            {aiNote && (
              <div className="flex items-start gap-2 mt-3 text-sm text-muted-foreground">
                <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <p>{aiNote}</p>
              </div>
            )}
          </div>
        </div>
        <div className="flex-shrink-0">{getStatusBadge()}</div>
      </div>
      {showInstructions && (
        <div className="mt-4 pt-4 border-t border-border">
          <a href="#" className="text-sm text-primary hover:underline">
            Ver instruções →
          </a>
        </div>
      )}
    </div>
  );
};

export default DocumentCard;
