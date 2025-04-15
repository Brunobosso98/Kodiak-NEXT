// Definição centralizada dos dados dos módulos
const moduleData = {
  inventory: {
    title: "Gestão de Estoque",
    description: "Controle total do seu inventário com rastreabilidade e gestão de lotes. Monitore em tempo real todos os movimentos e mantenha seu estoque otimizado.",
    image: "/modules/gestao_estoque.avif",
    features: [
      "Controle de Lotes",
      "Rastreabilidade",
      "Gestão de Armazém",
      "Inventário Cíclico",
      "Códigos de Barras",
      "Relatórios Avançados"
    ]
  },
  purchasing: {
    title: "Compras",
    description: "Automatize seu processo de compras e gerencie fornecedores de forma eficiente. Tome decisões baseadas em dados e histórico de compras.",
    image: "/modules/compras.avif",
    features: [
      "Cotações Automáticas",
      "Gestão de Fornecedores",
      "Aprovações Digitais",
      "Histórico de Preços",
      "Contratos Digitais",
      "Análise de Custos"
    ]
  },
  vendas: {
    title: "Vendas",
    description: "Automatize seu processo de vendas e aumente os resultados da sua equipe. Seus pedidos de vendas integrados facilmente.",
    image: "/canvas/6.avif",
    features: [
      "Gestão de pedidos de vendas",
      "Automação comercial",
      "Regras de negócio",
      "Elaboração de preços de vendas",
      "Contratos Digitais",
      "Análise de Custos"
    ]
  },
  logistica: {
    title: "Logística",
    description: "Acompanhe o fluxo de entrega das suas vendas. Monitore as entregas dos seus produtos.",
    image: "/modules/logistica.avif",
    features: [
      "Endereçamento de armazenagem",
      "Separação de produtos",
      "Carregamento",
      "Entrega de pedidos",
      "Manutenção Preventiva",
      "Indicadores de OEE"
    ]
  },
  analytics: {
    title: "BI & Analytics",
    description: "Dashboards personalizados e relatórios detalhados para tomada de decisão. Visualize dados em tempo real e identifique tendências.",
    image: "/modules/bi.avif",
    features: [
      "Dashboards Interativos",
      "KPIs Personalizados",
      "Análise Preditiva",
      "Relatórios Automáticos",
      "Business Intelligence",
      "Exportação de Dados"
    ]
  },
  hr: {
    title: "Recursos Humanos",
    description: "Gestão completa do seu capital humano. Automatize processos e mantenha sua equipe engajada e produtiva.",
    image: "/modules/rh.avif",
    features: [
      "Folha de Ponto",
      "Gestão de Benefícios",
      "Avaliações de Desempenho",
      "Recrutamento e Seleção",
      "Treinamentos Online",
      "Portal do Colaborador"
    ]
  },
  financial: {
    title: "Financeiro",
    description: "Controle financeiro integrado com todas as operações. Mantenha suas finanças organizadas e tome decisões estratégicas.",
    image: "/modules/financeiro.avif",
    features: [
      "Contas a Pagar",
      "Contas a Receber",
      "Fluxo de Caixa",
      "Conciliação Bancária",
      "DRE em Tempo Real",
      "Gestão de Custos"
    ]
  },
  gerencial: {
    title: "Gerencial",
    description: "Acompanhe os resultados de seu negócio e tome decisões mais assertivas.",
    image: "/canvas/4.avif",
    features: [
      "Rentabilidade por cliente e produto",
      "Lucros ou prejuízos",
      "Análise de despesas",
      "Análise de variação de preço",
      "DRE em Tempo Real",
      "Gestão de Custos"
    ]
  },
  industrial: {
    title: "Industrial",
    description: "Acompanhe sua linha de produção de perto. Faça previsões, defina o plano mestre da produção e muito mais.",
    image: "/modules/industrial.avif",
    features: [
      "Plano mestre da produção (MPS)",
      "Elaboração de MRP",
      "Ordem de fabricação",
      "Elaboração de custo de produtos para precificação",
      "Controle de processos de produção",
      "Gestão de Custos"
    ]
  },
  recebimento: {
    title: "Recebimento",
    description: "Receba suas compras com segurança e agilidade. Valide os dados dos seus pedidos com integração direta com o seu estoque e financeiro.",
    image: "/modules/recebimento.avif",
    features: [
      "Integração automática com financeiro e estoque",
      "Importação de XML",
      "Ordem de fabricação",
      "Validação com dados dos pedidos de compras",
      "Controle de processos de produção",
      "Gestão de Custos"
    ]
  },
  faturamento: {
    title: "Faturamento",
    description: "Simplifique a emissão de notas fiscais. Faça a emissão de notas fiscais de forma simples sem a necessidade de dominar as regras tributárias.",
    image: "/modules/faturamento.avif",
    features: [
      "Emissão",
      "Cancelamento",
      "Inutilização de notas fiscais",
      "Envio de danfe",
      "Boleto automático",
      "Gestão de Custos"
    ]
  },
};

// Exportar o tipo ModuleKey
export type ModuleKey = keyof typeof moduleData;

// Exportar os dados dos módulos
export default moduleData;
