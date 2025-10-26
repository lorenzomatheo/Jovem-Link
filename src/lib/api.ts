import { QuestionnaireAnswers } from "@/types/questionnaire";
import { getGroqCompletion } from "./groq";

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
  // New benefits for "Jovens Pré-Universitários de Baixa Renda"
  {
    id: "programa-pe-de-meia",
    title: "Programa Pé-de-Meia",
    description: "Voltado a alunos do ensino médio público cadastrados no CadÚnico. Paga até R$ 9.200,00 ao longo dos estudos em parcelas por matrícula, frequência e conclusão de etapas escolares.",
    icon: "GraduationCap",
    iconColor: "success",
    badges: [
      { label: "Educação", variant: "primary" },
      { label: "Jovens", variant: "info" },
    ],
    requirements: [
      "Ser aluno do ensino médio público.",
      "Estar cadastrado no CadÚnico.",
    ],
    applicationProcess: [
      "Matrícula em escola pública de ensino médio.",
      "Acompanhamento da frequência escolar.",
      "Conclusão das etapas escolares.",
    ],
    requiredDocuments: ["RG", "CPF", "Comprovante de matrícula", "Comprovante de CadÚnico"],
  },
  {
    id: "bolsa-cursinhos-populares",
    title: "Bolsa para Cursinhos Populares",
    description: "Desde junho de 2025, estudantes de cursinhos sociais recebem R$ 200 por mês como incentivo financeiro para custear transporte, alimentação e internet, ajudando na preparação para o vestibular e o ENEM.",
    icon: "GraduationCap",
    iconColor: "info",
    badges: [
      { label: "Educação", variant: "primary" },
      { label: "Jovens", variant: "info" },
    ],
    requirements: [
      "Ser estudante de cursinhos sociais.",
      "Comprovar baixa renda.",
    ],
    applicationProcess: [
      "Inscrição no programa de bolsas do cursinho.",
      "Apresentação de documentos comprobatórios de renda e matrícula.",
    ],
    requiredDocuments: ["RG", "CPF", "Comprovante de matrícula no cursinho", "Comprovante de renda"],
  },
  {
    id: "isencao-enem-vestibulares",
    title: "Isenção de Taxas no ENEM e Vestibulares Públicos",
    description: "Para todos os inscritos no CadÚnico e para egressos de escolas públicas.",
    icon: "GraduationCap",
    iconColor: "warning",
    badges: [
      { label: "Educação", variant: "primary" },
      { label: "Jovens", variant: "info" },
    ],
    requirements: [
      "Estar inscrito no CadÚnico.",
      "Ou ser egresso de escola pública.",
    ],
    applicationProcess: [
      "Solicitação de isenção no período de inscrição do ENEM/vestibular.",
      "Apresentação do número do NIS (CadÚnico) ou histórico escolar.",
    ],
    requiredDocuments: ["RG", "CPF", "Número do NIS", "Histórico escolar"],
  },
  {
    id: "integracao-bolsa-familia-cras",
    title: "Integração com Bolsa Família e CRAS",
    description: "Garantindo acompanhamento social e prioridade na inclusão digital.",
    icon: "Home",
    iconColor: "primary",
    badges: [
      { label: "Social", variant: "success" },
      { label: "Jovens", variant: "info" },
    ],
    requirements: [
      "Ser participante do Bolsa Família.",
      "Estar em acompanhamento pelo CRAS.",
    ],
    applicationProcess: [
      "Acompanhamento regular no CRAS.",
      "Participação em programas de inclusão digital oferecidos.",
    ],
    requiredDocuments: ["Cartão do Bolsa Família", "Comprovante de acompanhamento CRAS"],
  },
  // New benefits for "Universitários de Baixa Renda"
  {
    id: "pe-de-meia-universitario",
    title: "Pé-de-Meia Universitário",
    description: "Auxílio financeiro voltado a alunos de universidades federais, especialmente cotistas e participantes do CadÚnico, para evitar abandono dos estudos por falta de recursos.",
    icon: "GraduationCap",
    iconColor: "success",
    badges: [
      { label: "Educação", variant: "primary" },
      { label: "Universitários", variant: "info" },
    ],
    requirements: [
      "Ser aluno de universidade federal.",
      "Ser cotista ou participante do CadÚnico.",
      "Comprovar baixa renda.",
    ],
    applicationProcess: [
      "Inscrição no programa da universidade.",
      "Apresentação de documentos comprobatórios.",
    ],
    requiredDocuments: ["RG", "CPF", "Comprovante de matrícula", "Comprovante de CadÚnico/Cotas"],
  },
  {
    id: "pnaes",
    title: "Política Nacional de Assistência Estudantil (PNAES)",
    description: "Agora financiada também com recursos do Fundo Social do Petróleo, cobre despesas com moradia, alimentação, transporte, saúde e cultura para universitários das redes públicas.",
    icon: "Home",
    iconColor: "secondary",
    badges: [
      { label: "Educação", variant: "primary" },
      { label: "Universitários", variant: "info" },
      { label: "Assistência", variant: "warning" },
    ],
    requirements: [
      "Ser universitário de rede pública.",
      "Comprovar situação de vulnerabilidade socioeconômica.",
    ],
    applicationProcess: [
      "Solicitação junto à assistência estudantil da universidade.",
      "Apresentação de documentos comprobatórios de renda e despesas.",
    ],
    requiredDocuments: ["RG", "CPF", "Comprovante de matrícula", "Comprovante de renda"],
  },
  {
    id: "prouni",
    title: "ProUni",
    description: "Concede bolsas de estudo integrais e parciais.",
    icon: "GraduationCap",
    iconColor: "primary",
    badges: [
      { label: "Educação", variant: "primary" },
      { label: "Universitários", variant: "info" },
      { label: "Bolsa", variant: "success" },
    ],
    requirements: [
      "Ter participado do ENEM e obtido nota mínima.",
      "Não possuir diploma de curso superior.",
      "Comprovar renda familiar bruta mensal per capita de até 1,5 salário mínimo (integral) ou 3 salários mínimos (parcial).",
    ],
    applicationProcess: [
      "Inscrição no site do ProUni no período indicado.",
      "Seleção baseada na nota do ENEM e critérios socioeconômicos.",
    ],
    requiredDocuments: ["RG", "CPF", "Comprovante de ENEM", "Comprovante de renda"],
  },
  {
    id: "fies-social",
    title: "FIES Social",
    description: "Oferece financiamento 100% gratuito das mensalidades para estudantes do CadÚnico com renda familiar per capita de até meio salário mínimo.",
    icon: "GraduationCap",
    iconColor: "warning",
    badges: [
      { label: "Educação", variant: "primary" },
      { label: "Universitários", variant: "info" },
      { label: "Financiamento", variant: "danger" },
    ],
    requirements: [
      "Estar inscrito no CadÚnico.",
      "Comprovar renda familiar per capita de até meio salário mínimo.",
      "Ter participado do ENEM a partir de 2010 e obtido nota mínima.",
    ],
    applicationProcess: [
      "Inscrição no site do FIES no período indicado.",
      "Validação das informações na CPSA da instituição de ensino.",
    ],
    requiredDocuments: ["RG", "CPF", "Comprovante de CadÚnico", "Comprovante de renda", "Comprovante de ENEM"],
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