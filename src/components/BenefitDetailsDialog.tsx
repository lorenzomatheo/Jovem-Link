import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Benefit } from "@/lib/api";

interface BenefitDetailsDialogProps {
  benefit: Benefit | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const BenefitDetailsDialog = ({ benefit, open, onOpenChange }: BenefitDetailsDialogProps) => {
  if (!benefit) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{benefit.title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <p className="text-muted-foreground">{benefit.description}</p>

          <div>
            <h4 className="font-semibold text-foreground">Requisitos</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
              {benefit.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground">Como solicitar</h4>
            <ol className="list-decimal list-inside text-muted-foreground space-y-1 mt-2">
              {benefit.applicationProcess.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>

          <div>
            <h4 className="font-semibold text-foreground">Documentos necessários</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
              {benefit.requiredDocuments.map((doc, index) => (
                <li key={index}>{doc}</li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
