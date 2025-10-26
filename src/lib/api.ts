
import { QuestionnaireAnswers } from "@/types/questionnaire";

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
  iconColor: string;
  badges: {
    label: string;
    variant: string;
  }[];
  requirements: string[];
  applicationProcess: string[];
  requiredDocuments: string[];
}

export const allBenefits: Benefit[] = [
  {
    id: "bolsa-permanencia",
    title: "Bolsa Permanência",
    description: "Assistencia financeira para estudantes universitarios.",
    icon: "GraduationCap",
    iconColor: "primary",
    badges: [
      { label: "Educação", variant: "primary" },
      { label: "Ativo", variant: "success" },
    ],
    requirements: [
      "Ser estudante de instituição de ensino superior pública federal.",
      "Não ultrapassar a renda familiar per capita de 1,5 salário mínimo.",
      "Não possuir outra bolsa de estudos.",
    ],
    applicationProcess: [
      "Acessar o site do SISBP e realizar o cadastro.",
      "Anexar a documentação comprobatória.",
      "Aguardar a análise e aprovação do cadastro.",
    ],
    requiredDocuments: ["RG", "CPF", "Comprovante de residência", "Comprovante de matrícula"],
  },
  {
    id: "habitacao-popular",
    title: "Habitação Popular",
    description: "Subsídio para aquisição de casa própria para famílias de baixa renda.",
    icon: "Home",
    iconColor: "secondary",
    badges: [
      { label: "Moradia", variant: "warning" },
      { label: "Encorrando", variant: "info" },
    ],
    requirements: [
      "Renda familiar de até R$ 2.640,00.",
      "Não possuir imóvel em seu nome.",
      "Ser maior de 18 anos ou emancipado.",
    ],
    applicationProcess: [
      "Inscrição no plano de moradias do governo.",
      "Participar do sorteio de unidades.",
      "Financiamento pela Caixa Econômica Federal.",
    ],
    requiredDocuments: ["RG", "CPF", "Comprovante de renda", "Certidão de estado civil"],
  },
  {
    id: "passe-livre",
    title: "Passe Livre Estudantil",
    description: "Transporte gratuito para estudantes de baixa renda.",
    icon: "Bus",
    iconColor: "warning",
    badges: [
      { label: "Transporte", variant: "primary" },
    ],
    requirements: [
      "Ser estudante da rede pública ou bolsista da rede privada.",
      "Renda familiar per capita de até 1,5 salário mínimo.",
      "Morar em cidade que oferece o benefício.",
    ],
    applicationProcess: [
      "Solicitação no site da empresa de transporte público.",
      "Apresentar a documentação na instituição de ensino.",
      "Retirar o cartão de passe livre.",
    ],
    requiredDocuments: ["RG", "CPF", "Comprovante de matrícula", "Comprovante de residência"],
  },
];

export const getAllUniqueTags = (): string[] => {
  const tags = new Set<string>();
  allBenefits.forEach(benefit => {
    benefit.badges.forEach(badge => tags.add(badge.label));
  });
  return Array.from(tags);
};

export const getRecommendedBenefits = async (
  answers: QuestionnaireAnswers
): Promise<Benefit[]> => {
  console.log("Recommending benefits for answers with AI:", answers);

  // IMPORTANT: Make sure you have set your Groq API key in src/lib/groq.ts
  // Without it, this will not work.

  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (Object.keys(answers).length === 0) {
    return allBenefits;
  }

  return getRecommendedBenefitsFromAI(answers);
};

const getRecommendedBenefitsFromAI = async (
  answers: QuestionnaireAnswers
): Promise<Benefit[]> => {
  const prompt = `
    Você é um especialista em programas sociais e benefícios do governo brasileiro.
    Analise o perfil de usuário a seguir e a lista de benefícios disponíveis.
    Retorne um array JSON com os IDs dos benefícios mais recomendados para este usuário.

    Perfil do Usuário:
    ${JSON.stringify(answers, null, 2)}

    Benefícios Disponíveis:
    ${JSON.stringify(allBenefits.map(b => ({ id: b.id, title: b.title, description: b.description, requirements: b.requirements })), null, 2)}

    Retorne SOMENTE o array JSON de IDs. Por exemplo: ["bolsa-permanencia", "passe-livre"]
  `;

  try {
    const response = await getGroqCompletion(prompt);
    const recommendedIds = JSON.parse(response);

    if (Array.isArray(recommendedIds)) {
      const recommended = allBenefits.filter(b => recommendedIds.includes(b.id));
      return recommended.length > 0 ? recommended : allBenefits; // Fallback
    }
    return allBenefits; // Fallback
  } catch (error) {
    console.error("Error parsing AI response:", error);
    return allBenefits; // Fallback to all benefits in case of error
  }
};
