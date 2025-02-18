"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ModuleDetailsModal } from "@/components/ui/module-details-modal";
import { ArrowRight, ArrowLeft, BoxIcon, ShoppingCart, LineChart, Truck, TrendingUp, Users, Wallet, BarChart3, Settings, Building2, FileText } from "lucide-react";

const moduleData = {
  inventory: {
    title: "Gestão de Estoque",
    description: "Controle total do seu inventário com rastreabilidade e gestão de lotes. Monitore em tempo real todos os movimentos e mantenha seu estoque otimizado.",
    image: "https://images.unsplash.com/photo-1589792923962-537704632910?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
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
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", //supplier management
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
    image: "/canvas/6.png", // sales team
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
    image: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
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
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070",
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
    image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // accounting
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
    image: "/canvas/4.png", //executive decision making
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
    image: "https://images.unsplash.com/photo-1589793463357-5fb813435467?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", //factory production
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
    image: "https://images.unsplash.com/photo-1721937127582-ed331de95a04?q=80&w=1337&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", //warehouse receiving
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
    image: "https://images.unsplash.com/photo-1733509213080-db2aca1bc244?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", //invoice processing
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

type ModuleKey = keyof typeof moduleData;

export function ModulesSection() {
  const [activeModule, setActiveModule] = useState<ModuleKey>('inventory');
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="modules" className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.8)), url(${moduleData[activeModule]?.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Content */}
      <div className="relative h-full">
        <div className="container mx-auto grid h-full grid-cols-1 md:grid-cols-12 gap-8 px-4 py-20">
          {/* Left Side - Module Info */}
          <div className="col-span-full md:col-span-5 flex flex-col justify-center h-full">
            <div className="space-y-4 md:space-y-6 h-full flex flex-col justify-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                {moduleData[activeModule].title}
              </h2>
              <div className="h-auto">
                <p className="text-lg text-gray-200">
                  {moduleData[activeModule].description}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {moduleData[activeModule].features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="rounded-full bg-white/20 p-1">
                      <ArrowRight className="h-3 w-3 md:h-4 md:w-4 text-white" />
                    </div>
                    <span className="text-sm md:text-base text-gray-200">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                <Button 
                  size="lg"
                  className="w-full md:w-auto bg-white/20 text-white backdrop-blur-sm hover:bg-white/30"
                  onClick={() => setIsModalOpen(true)}
                >
                  Saiba mais
                </Button>

                {/* Navigation Controls */}
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => {
                      const keys = Object.keys(moduleData) as ModuleKey[];
                      const currentIndex = keys.indexOf(activeModule);
                      const prevIndex = currentIndex === 0 ? keys.length - 1 : currentIndex - 1;
                      setActiveModule(keys[prevIndex]);
                    }}
                    className="rounded-full bg-white/20 p-2 backdrop-blur-sm hover:bg-white/30"
                  >
                    <ArrowLeft className="h-4 w-4 md:h-6 md:w-6 text-white" />
                  </button>
                  <div className="flex-1">
                    <div className="relative h-0.5 bg-white/20">
                      <div 
                        className="absolute h-0.5 bg-white transition-all duration-300"
                        style={{ 
                          width: `${(Object.keys(moduleData).indexOf(activeModule) + 1) * (100 / Object.keys(moduleData).length)}%`
                        }}
                      />
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                      const keys = Object.keys(moduleData) as ModuleKey[];
                      const currentIndex = keys.indexOf(activeModule);
                      const nextIndex = currentIndex === keys.length - 1 ? 0 : currentIndex + 1;
                      setActiveModule(keys[nextIndex]);
                    }}
                    className="rounded-full bg-white/20 p-2 backdrop-blur-sm hover:bg-white/30"
                  >
                    <ArrowRight className="h-4 w-4 md:h-6 md:w-6 text-white" />
                  </button>
                  <div className="text-right text-xl md:text-2xl font-bold text-white">
                    {(Object.keys(moduleData).indexOf(activeModule) + 1).toString().padStart(2, '0')}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Module Active Image */}
          <div className="col-span-full md:col-span-7 flex items-center justify-center">
            <div className="relative w-full h-[250px] md:h-[400px] overflow-hidden rounded-xl">
              <Image
                src={moduleData[activeModule].image}
                alt={moduleData[activeModule].title}
                fill
                className="object-cover"/>
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </div>

          {/* Module Cards */}
          <div className="col-span-full">
            {/* Slider Container */}
            <div className="relative">
              {/* Slider Navigation Dots */}
              <div className="absolute -top-6 left-0 right-0 flex justify-center gap-2 md:hidden">
                {Object.keys(moduleData).map((key, index) => (
                  <button
                    key={key}
                    onClick={() => setActiveModule(key as ModuleKey)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeModule === key ? 'w-4 bg-white' : 'w-2 bg-white/40'
                    }`}
                  />
                ))}
              </div>

              {/* Slider Content */}
              <div className="overflow-hidden touch-pan-x">
                <div 
                  className="flex gap-2 transition-transform duration-500 cursor-grab active:cursor-grabbing px-2 md:px-0"
                  style={{
                    transform: `translateX(calc(-${Object.keys(moduleData).indexOf(activeModule)} * (100% / ${isMobile ? 1.2 : 3})))`,
                  }}
                  onTouchStart={(e) => {
                    const touch = e.touches[0];
                    const startX = touch.clientX;
                    const element = e.currentTarget;
                    let startTime = Date.now();
                    
                    const handleTouchMove = (e: TouchEvent) => {
                      const touch = e.touches[0];
                      const deltaX = touch.clientX - startX;
                      const deltaTime = Date.now() - startTime;
                      
                      if (Math.abs(deltaX) > 20 && deltaTime > 100) {
                        const keys = Object.keys(moduleData) as ModuleKey[];
                        const currentIndex = keys.indexOf(activeModule);
                        
                        if (deltaX > 0 && currentIndex > 0) {
                          setActiveModule(keys[currentIndex - 1]);
                        } else if (deltaX < 0 && currentIndex < keys.length - 1) {
                          setActiveModule(keys[currentIndex + 1]);
                        }
                        
                        element.removeEventListener('touchmove', handleTouchMove);
                      }
                    };
                    
                    element.addEventListener('touchmove', handleTouchMove);
                    element.addEventListener('touchend', () => {
                      element.removeEventListener('touchmove', handleTouchMove);
                    }, { once: true });
                  }}
                >
                  {[
                    ...Object.entries(moduleData),
                    ...Object.entries(moduleData),
                    ...Object.entries(moduleData)
                  ].map(([key, module], index) => (
                    <div
                      key={`${key}-${index}`}
                      onClick={() => setActiveModule(key as ModuleKey)}
                      className={`relative flex-shrink-0 w-[calc(100%/1.2)] md:w-[calc(100%/3)] h-[120px] md:h-[250px] overflow-hidden rounded-xl cursor-pointer transition-all duration-300 ${
                        activeModule === key ? 'scale-100 opacity-100' : 'scale-95 opacity-70'
                      }`}
                    >
                      <Image
                        src={module.image}
                        alt={module.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-2 md:p-3 flex flex-col justify-end">
                        <div className="mb-1 md:mb-2 w-min rounded-lg bg-white/20 p-1.5 md:p-3 backdrop-blur-sm">
                          {key === 'inventory' && <BoxIcon className="h-3 w-3 md:h-6 md:w-6 text-white" />}
                          {key === 'purchasing' && <ShoppingCart className="h-3 w-3 md:h-6 md:w-6 text-white" />}
                          {key === 'vendas' && <LineChart className="h-3 w-3 md:h-6 md:w-6 text-white" />}
                          {key === 'logistica' && <Truck className="h-3 w-3 md:h-6 md:w-6 text-white" />}
                          {key === 'analytics' && <TrendingUp className="h-3 w-3 md:h-6 md:w-6 text-white" />}
                        </div>
                        <h3 className="text-sm md:text-2xl font-medium text-white mb-0.5 md:mb-2">
                          {module.title}
                        </h3>
                        <p className="text-[10px] md:text-base text-gray-200 line-clamp-2">
                          {module.description}
                        </p>
                      </div>

                      {/* Swipe Indicator - Only shows on mobile */}
                      {isMobile && index === 0 && (
                        <div className="absolute inset-0 flex items-center justify-end pointer-events-none md:hidden">
                          <div className="animate-pulse-x mr-2 flex items-center text-white/80">
                            <ArrowLeft className="h-4 w-4" />
                            <span className="text-xs ml-1">Deslize</span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow Navigation - Desktop Only */}
              {/* <div className="hidden md:block">
                <button 
                  onClick={() => {
                    const keys = Object.keys(moduleData) as ModuleKey[];
                    const currentIndex = keys.indexOf(activeModule);
                    const prevIndex = currentIndex === 0 ? keys.length - 1 : currentIndex - 1;
                    setActiveModule(keys[prevIndex]);
                  }}
                  className="absolute -left-12 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 backdrop-blur-sm hover:bg-white/30"
                >
                  <ArrowLeft className="h-6 w-6 text-white" />
                </button>
                <button 
                  onClick={() => {
                    const keys = Object.keys(moduleData) as ModuleKey[];
                    const currentIndex = keys.indexOf(activeModule);
                    const nextIndex = currentIndex === keys.length - 1 ? 0 : currentIndex + 1;
                    setActiveModule(keys[nextIndex]);
                  }}
                  className="absolute -right-12 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 backdrop-blur-sm hover:bg-white/30"
                >
                  <ArrowRight className="h-6 w-6 text-white" />
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Module Details Modal */}
      <ModuleDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        module={moduleData[activeModule]}
      />
    </section>
  );
}
