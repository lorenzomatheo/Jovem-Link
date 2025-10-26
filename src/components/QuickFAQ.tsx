
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const QuickFAQ = () => {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
      <h3 className="text-lg font-bold text-foreground mb-4">FAQ rápido</h3>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Como localizar o CRAS mais próximo?</AccordionTrigger>
          <AccordionContent>
            Você pode encontrar o CRAS mais próximo clicando no Mapa CRAS.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Como me inscrevo nos programas?</AccordionTrigger>
          <AccordionContent>
            Cada programa tem um processo de inscrição diferente. Verifique os detalhes de cada benefício para saber mais.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Quais documentos são necessários?</AccordionTrigger>
          <AccordionContent>
            Os documentos variam para cada programa, mas geralmente incluem RG, CPF, comprovante de residência e comprovante de renda.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
