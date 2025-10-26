import { QuestionnaireStep } from "@/types/questionnaire";

export const questionnaireSteps: QuestionnaireStep[] = [
  {
    id: 1,
    title: "Identificação e Perfil de Usuário",
    description: "Vamos conhecer um pouco sobre você para personalizar sua experiência.",
    questions: [
      {
        id: "age",
        title: "Qual é a sua idade?",
        type: "number",
        placeholder: "Digite sua idade"
      },
      {
        id: "current_education",
        title: "Você está estudando atualmente?",
        type: "radio",
        options: [
          { value: "ensino_medio", label: "Ensino médio" },
          { value: "cursinho", label: "Cursinho popular" },
          { value: "universidade_publica", label: "Universidade pública" },
          { value: "universidade_privada", label: "Universidade privada" },
          { value: "parei", label: "Parei de estudar" }
        ]
      },
      {
        id: "cadunico",
        title: "Você possui cadastro ativo no CadÚnico?",
        type: "radio",
        options: [
          { value: "sim", label: "Sim" },
          { value: "nao", label: "Não" },
          { value: "nao_sei", label: "Não sei / preciso verificar" }
        ]
      },
      {
        id: "social_program",
        title: "Você participa de algum programa social?",
        type: "radio",
        options: [
          { value: "bolsa_familia", label: "Bolsa Família" },
          { value: "bpc_loas", label: "BPC/LOAS" },
          { value: "nenhum", label: "Nenhum" }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Condições Socioeconômicas",
    description: "Essas informações nos ajudam a identificar benefícios disponíveis para você.",
    questions: [
      {
        id: "household_size",
        title: "Quantas pessoas vivem na sua casa?",
        type: "number",
        placeholder: "Número de pessoas"
      },
      {
        id: "family_income",
        title: "Qual é a renda familiar total (soma de todos os moradores)?",
        type: "number",
        placeholder: "Valor em reais (R$)",
        helper: "Considere todos os rendimentos da família"
      },
      {
        id: "formal_employment",
        title: "Você ou alguém da família tem emprego formal?",
        type: "radio",
        options: [
          { value: "sim", label: "Sim" },
          { value: "nao", label: "Não" }
        ]
      },
      {
        id: "main_expense",
        title: "Qual é o principal gasto que afeta seus estudos atualmente?",
        type: "radio",
        options: [
          { value: "transporte", label: "Transporte" },
          { value: "alimentacao", label: "Alimentação" },
          { value: "moradia", label: "Moradia" },
          { value: "internet_materiais", label: "Internet e materiais" }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Situação Educacional",
    description: "Queremos entender melhor sua trajetória e desafios educacionais.",
    questions: [
      {
        id: "institution_type",
        title: "Qual tipo de instituição você frequenta?",
        type: "radio",
        options: [
          { value: "publica", label: "Pública" },
          { value: "privada", label: "Privada" },
          { value: "comunitaria", label: "Comunitária" }
        ]
      },
      {
        id: "internet_access",
        title: "Você tem acesso constante à internet e computador?",
        type: "radio",
        options: [
          { value: "sim", label: "Sim" },
          { value: "nao", label: "Não" },
          { value: "parcial", label: "Às vezes" }
        ]
      },
      {
        id: "enem_plans",
        title: "Você pensa em prestar o ENEM este ano?",
        type: "radio",
        options: [
          { value: "sim", label: "Sim" },
          { value: "nao", label: "Não" },
          { value: "talvez", label: "Talvez" }
        ]
      },
      {
        id: "scholarship_programs",
        title: "Está inscrito em algum programa de bolsas ou financiamento estudantil?",
        type: "radio",
        options: [
          { value: "fies", label: "FIES" },
          { value: "prouni", label: "ProUni" },
          { value: "bolsa_permanencia", label: "Bolsa Permanência" },
          { value: "pe_de_meia", label: "Pé-de-Meia" },
          { value: "outro", label: "Outro" },
          { value: "nenhum", label: "Nenhum" }
        ]
      },
      {
        id: "main_challenge",
        title: "Qual é o principal desafio que você enfrenta na sua trajetória escolar?",
        type: "radio",
        options: [
          { value: "financeiro", label: "Falta de recurso financeiro" },
          { value: "transporte", label: "Dificuldade de transporte" },
          { value: "trabalho", label: "Necessidade de conciliar trabalho" },
          { value: "emocional", label: "Questões emocionais" }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Interesse e Engajamento",
    description: "Por último, conte-nos sobre seus objetivos e motivações.",
    questions: [
      {
        id: "main_goal",
        title: "O que você mais deseja conquistar neste momento?",
        type: "radio",
        options: [
          { value: "terminar_ensino_medio", label: "Terminar o ensino médio" },
          { value: "passar_enem", label: "Passar no ENEM" },
          { value: "universidade_publica", label: "Entrar na universidade pública" },
          { value: "bolsa_estagio", label: "Conseguir bolsa ou estágio" },
          { value: "melhorar_condicao", label: "Melhorar minha condição financeira" }
        ]
      }
    ]
  }
];
