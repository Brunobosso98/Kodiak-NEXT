"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Header } from "@/components/ui/header";
import { ControleSection } from "@/components/ui/controle"
import { ArrowRight, BarChart3, Box, Building2, FileText, GraduationCap, LineChart, Settings, Target, Truck, Users, Wallet, ClipboardCheck, Eye, Rocket, BoxIcon, ShoppingCart, Factory, TrendingUp, DollarSign, Check, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { ClientCarousel } from "@/components/ui/client-carousel";
import { Footer } from "@/components/ui/footer";
import { useGSAPAnimations } from "@/hooks/use-gsap-animations";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { AIChat } from "@/components/ui/ai-chat";
import { motion } from "framer-motion";

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
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // sales team
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
    image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", //executive decision making
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

const benefitDetails = [
  {
    title: "Monitoramento Integral",
    description: "Controle total da operação em tempo real",
    videoUrl: "https://www.youtube.com/embed/your-monitoring-video-id",
    details: [
      "Dashboards em tempo real",
      "Alertas automáticos",
      "Indicadores personalizáveis",
      "Relatórios detalhados"
    ]
  },
  {
    title: "Gestão Financeira Inteligente",
    description: "Otimize fluxo de caixa e decisões financeiras",
    videoUrl: "https://www.youtube.com/embed/your-financial-video-id",
    details: [
      "Análise de fluxo de caixa",
      "Previsões financeiras",
      "Controle de custos",
      "Gestão de investimentos"
    ]
  },
  {
    title: "Administração de Estoque",
    description: "Evite desperdícios e melhore o abastecimento",
    videoUrl: "https://www.youtube.com/embed/your-inventory-video-id",
    details: [
      "Controle de lotes",
      "Gestão de validade",
      "Otimização de compras",
      "Rastreabilidade completa"
    ]
  },
  {
    title: "Notas Fiscais e Compliance",
    description: "Emissão ágil e dentro das normas fiscais",
    videoUrl: "https://www.youtube.com/embed/your-fiscal-video-id",
    details: [
      "Emissão automática",
      "Validação fiscal",
      "Arquivamento digital",
      "Relatórios fiscais"
    ]
  },
  {
    title: "Foco Industrial",
    description: "Desenvolvido para atender operações fabris",
    videoUrl: "https://www.youtube.com/embed/your-industrial-video-id",
    details: [
      "Controle de produção",
      "Gestão de qualidade",
      "Manutenção preventiva",
      "Planejamento industrial"
    ]
  },
  {
    title: "Análise de Dados",
    description: "Insights poderosos para tomada de decisão",
    videoUrl: "https://www.youtube.com/embed/your-analytics-video-id",
    details: [
      "Business Intelligence",
      "Análise preditiva",
      "Relatórios customizados",
      "Exportação de dados"
    ]
  }
];

export default function Home() {
  type ModuleKey = keyof typeof moduleData;
  const [activeModule, setActiveModule] = useState<ModuleKey>('inventory');
  const [isMobile, setIsMobile] = useState(false);
  const moduleContentRef = useRef(null);
  const moduleImageRef = useRef(null);
  const moduleFeaturesRef = useRef(null);

  const [activeCard, setActiveCard] = useState<'mission' | 'vision' | null>(null);

  const cardContent = {
    mission: {
      title: "Nossa Missão",
      description: "Simplificar e otimizar a gestão industrial através de tecnologia inovadora.",
      videoUrl: "https://www.youtube.com/embed/your-mission-video-id",
      details: [
        "Desenvolvimento de soluções intuitivas",
        "Foco em resultados mensuráveis",
        "Suporte técnico especializado",
        "Inovação constante"
      ]
    },
    vision: {
      title: "Nossa Visão",
      description: "Ser referência em soluções ERP para o setor industrial.",
      videoUrl: "https://www.youtube.com/embed/your-vision-video-id",
      details: [
        "Expansão global",
        "Liderança em inovação",
        "Excelência em atendimento",
        "Impacto positivo no setor"
      ]
    }
  };

  const [activeBenefit, setActiveBenefit] = useState<number | null>(null);

  useGSAPAnimations();

  const animateModuleContent = () => {
    if (moduleContentRef.current && moduleImageRef.current && moduleFeaturesRef.current) {
      gsap.timeline()
        .fromTo(moduleImageRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
        )
        .fromTo(moduleContentRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.4"
        )
        .fromTo(moduleFeaturesRef.current.children,
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.4, stagger: 0.1, ease: "power2.out" },
          "-=0.2"
        );
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    animateModuleContent();

    // Content section animations
    gsap.fromTo(".content-item",
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".content-section",
          start: "top center+=100",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(".content-image",
      { scale: 0.8, opacity: 0 },
      { 
        scale: 1,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".content-section",
          start: "top center+=100",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Icon animations
    gsap.to(".animate-icon", {
      rotate: 360,
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true
    });

    // Hover animations for cards
    const cards = document.querySelectorAll('.content-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out"
        });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener('mouseenter', () => {});
        card.removeEventListener('mouseleave', () => {});
      });
    };
  }, [activeModule]);

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Header />

      {/* Hero Section */}
{ /*
      <section id="home" className="hero-section relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 py-20 text-white md:py-32">
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <h1 className="hero-title text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Transforme sua
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  {" "}
                  Gestão Industrial
                </span>
              </h1>
              <p className="hero-description text-lg text-blue-200 md:text-xl">
                Simplifique processos, aumente a produtividade e tome decisões mais inteligentes com nossa solução completa de ERP.
              </p>
              <div className="hero-cta flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-400 text-blue-950 hover:bg-blue-300 hover:scale-105 transition-all duration-300"
                >
                  Agende uma Demo
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-blue-400 text-blue-400 hover:bg-blue-400/10 hover:scale-105 transition-all duration-300 mb-4 mb-hero"
                >
                  Saiba Mais
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="gsap-float absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-400/20 blur-3xl" />
              <div className="gsap-float absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-indigo-400/20 blur-3xl" />
              <div className="relative h-[300px] md:h-[400px]">
                <Image
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Dashboard"
                  fill
                  className="gsap-parallax rounded-lg shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </section>
*/ }

      <section className="relative h-[90vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
          alt="Industrial Background"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container text-center text-white">
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
              Gestão Inteligente para sua
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  {" "}
                  Indústria Evoluir!
                </span> 
            </h1>
            <p className="hero-description text-lg text-blue-200 md:text-xl mb-4">
              Automação, controle e eficiência em um só sistema ERP.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-blue-400 text-blue-950 hover:bg-blue-300 hover:scale-105 transition-all duration-300">
              Solicitar uma Demonstração            
              </Button>
              <Button size="lg" variant="outline" className="bg-primary text-white hover:bg-white/40">
              Conheça os Módulos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50" />
        <div className="container relative mx-auto px-4">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="relative h-[600px] overflow-hidden rounded-2xl">
                <div className="absolute -left-4 -top-4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
                <div className="absolute -bottom-4 -right-4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
                <Image
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984"
                  alt="Equipe Kodiak"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8 text-white">
                  <p className="text-2xl font-bold">+10 anos</p>
                  <p className="text-sm">de experiência em gestão industrial</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center md:col-span-7">
              <div className="space-y-8">
                <div className="gsap-fade-in">
                  <h2 className="mb-6 text-4xl font-bold text-blue-900">
                    Sobre a <span className="text-blue-600">Kodiak ERP</span>
                  </h2>
                  <p className="text-lg text-gray-600">
                    Desde 2020, a Kodiak ERP tem revolucionado a gestão industrial com soluções tecnológicas 
                    inovadoras. Nossa missão é transformar a complexidade em simplicidade, oferecendo um 
                    sistema ERP intuitivo e poderoso.
                  </p>
                </div>
                <div className="grid gap-8 sm:grid-cols-2">
                  <div className="gsap-scale group">
                    <div 
                      onClick={() => setActiveCard('mission')}
                      className="content-card group rounded-xl bg-white p-6 shadow-lg transition-all duration-300 cursor-pointer hover:shadow-xl"
                    >
                      <div className="mb-4 inline-block rounded-lg bg-blue-100 p-3 group-hover:bg-blue-200 transition-colors">
                        <Target className="animate-icon h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="mb-2 text-xl font-semibold text-blue-900 group-hover:text-blue-700">Missão</h3>
                      <p className="text-gray-600">
                        Simplificar e otimizar a gestão industrial através de tecnologia inovadora.
                      </p>
                      <div className="mt-4 flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-sm">Saiba mais</span>
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                  <div className="gsap-scale group">
                    <div 
                      onClick={() => setActiveCard('vision')}
                      className="content-card group rounded-xl bg-white p-6 shadow-lg transition-all duration-300 cursor-pointer hover:shadow-xl"
                    >
                      <div className="mb-4 inline-block rounded-lg bg-blue-100 p-3 group-hover:bg-blue-200 transition-colors">
                        <Eye className="animate-icon h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="mb-2 text-xl font-semibold text-blue-900 group-hover:text-blue-700">Visão</h3>
                      <p className="text-gray-600">
                        Ser referência em soluções ERP para o setor industrial.
                      </p>
                      <div className="mt-4 flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-sm">Saiba mais</span>
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Dialog */}
      <Dialog open={activeCard !== null} onOpenChange={() => setActiveCard(null)}>
        <DialogContent className="sm:max-w-[600px]">
          {activeCard && (
            <>
              <DialogHeader>
                <DialogTitle>{cardContent[activeCard].title}</DialogTitle>
                <DialogDescription>
                  {cardContent[activeCard].description}
                </DialogDescription>
              </DialogHeader>
              <div className="relative aspect-video w-full rounded-lg overflow-hidden mb-4">
                <iframe
                  src={cardContent[activeCard].videoUrl}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Principais Pontos:</h4>
                <ul className="grid gap-2">
                  {cardContent[activeCard].details.map((detail, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Implementation Process Section */}
      <section id="implementation" className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        <div className="container relative mx-auto px-4">
          <div className="mb-1 text-center">
            <h2 className="bg-gradient-to-r from-blue-200 via-blue-400 to-purple-200 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              Processo de Implementação
            </h2>
            <p className="mt-4 text-lg text-blue-200">
              Transforme sua gestão industrial em 4 etapas simples
            </p>
          </div>

          <div className="relative mt-16">
            <div className="absolute left-[20px] top-0 h-full w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-transparent md:left-1/2 md:-translate-x-1/2" />
            
            {[
              {
                icon: <ClipboardCheck className="h-8 w-8" />,
                title: "Diagnóstico Inicial",
                description: "Análise detalhada das necessidades e processos atuais da sua empresa",
                duration: "2-3 semanas",
                image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070"
              },
              {
                icon: <Settings className="h-8 w-8 " />,
                title: "Configuração e Customização",
                description: "Parametrização do sistema de acordo com suas necessidades específicas",
                duration: "3-4 semanas",
                image: "https://images.unsplash.com/photo-1600880292203-bd139210db18?q=80&w=2070"
              },
              {
                icon: <GraduationCap className="h-8 w-8" />,
                title: "Treinamento da Equipe",
                description: "Capacitação completa dos usuários para utilização eficiente do sistema",
                duration: "2-3 semanas",
                image: "https://images.unsplash.com/photo-1603201667230-bd139210db18?q=80&w=2070"
              },
              {
                icon: <Rocket className="h-8 w-8" />,
                title: "Go Live e Acompanhamento",
                description: "Lançamento do sistema e suporte contínuo para garantir o sucesso",
                duration: "4-6 semanas",
                image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070"
              }
            ].map((step, index) => (
              <div key={index} className={`relative mb-16 md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center md:left-1/2 md:-translate-x-1/2">
                  <div className="gsap-scale h-full w-full rounded-full bg-gradient-to-br from-blue-400 to-purple-400" />
                  <div className="absolute flex h-8 w-8 items-center justify-center rounded-full bg-gray-900">
                    <span className="text-lg font-bold text-blue-400">{index + 1}</span>
                  </div>
                </div>

                <div className={`pl-16 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="gsap-fade-in rounded-2xl bg-white/5 p-6 backdrop-blur-sm">
                  <div className="inline-flex items-center">
                    <div className="mb-4 inline-flex rounded-xl bg-blue-400/10 p-3 mr-4">
                      {step.icon}
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="mb-4 text-blue-200">{step.description}</p>
                    <div className="inline-flex rounded-full bg-blue-400/10 px-4 py-1">
                      <span className="text-sm text-blue-200">{step.duration}</span>
                    </div>
                  </div>
                </div>

                <div className={`pl-16 md:pl-0 mt-8 md:mt-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}>
                  <div className="gsap-fade-in overflow-hidden rounded-2xl">
                    <div className="relative h-36 md:h-52">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-0 h-80 w-80 rounded-full bg-blue-500/30 blur-[100px]" />
          <div className="absolute -bottom-40 right-0 h-80 w-80 rounded-full bg-purple-500/30 blur-[100px]" />
        </div>
      </section>

      {/* Modules Section */}
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
            <div className="col-span-full md:col-span-5 flex flex-col justify-center">
              <div className="space-y-6 md:space-y-8">
                <h2 className="text-3xl md:text-6xl font-bold text-white">
                  {moduleData[activeModule].title}
                </h2>
                <p className="text-lg md:text-xl text-gray-200">
                  {moduleData[activeModule].description}
                </p>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {moduleData[activeModule].features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="rounded-full bg-white/20 p-1">
                        <Check className="h-3 w-3 md:h-4 md:w-4 text-white" />
                      </div>
                      <span className="text-sm md:text-base text-gray-200">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <Button 
                    size="lg"
                    className="w-full md:w-auto bg-white/20 text-white backdrop-blur-sm hover:bg-white/30"
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

            {/* Right Side - Module Cards */}
            <div className="col-span-full md:col-span-7 relative flex items-center overflow-hidden">
              <div 
                className="flex flex-row gap-4 md:gap-6 transition-transform duration-500"
                style={{
                  transform: `translateX(calc(-${Object.keys(moduleData).indexOf(activeModule)} * (102% / ${isMobile ? 1 : 3})))`,
                  width: `${Object.keys(moduleData).length * 100}%`
                }}
              >
                {(Object.entries(moduleData) as [ModuleKey, typeof moduleData[ModuleKey]][]).map(([key, module]) => (
                  <div
                    key={key} 
                    onClick={() => setActiveModule(key)}
                    className="relative flex-shrink-0 overflow-hidden rounded-xl cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                    style={{ width: isMobile ? '100%' : 'calc(100% / 3)', height: isMobile ? '200px' : '500px' }}
                  >
                    <Image
                      src={module.image}
                      alt={module.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-3 md:p-8 flex flex-col justify-end">
                    <div className="mb-2 md:mb-4 w-min rounded-lg bg-white/20 p-2 md:p-3 backdrop-blur-sm">
                        {key === 'inventory' && <BoxIcon className="h-4 w-4 md:h-6 md:w-6 text-white" />}
                        {key === 'purchasing' && <ShoppingCart className="h-4 w-4 md:h-6 md:w-6 text-white" />}
                        {key === 'vendas' && <LineChart className="h-4 w-4 md:h-6 md:w-6 text-white" />}
                        {key === 'logistica' && <Truck className="h-4 w-4 md:h-6 md:w-6 text-white" />}
                        {key === 'analytics' && <TrendingUp className="h-4 w-4 md:h-6 md:w-6 text-white" />}
                        {key === 'hr' && <Users className="h-4 w-4 md:h-6 md:w-6 text-white" />}
                        {key === 'financial' && <Wallet className="h-4 w-4 md:h-6 md:w-6 text-white" />}
                        {key === 'gerencial' && <BarChart3 className="h-4 w-4 md:h-6 md:w-6 text-white" />}
                        {key === 'industrial' && <Settings className="h-4 w-4 md:h-6 md:w-6 text-white" />}
                        {key === 'recebimento' && <Building2 className="h-4 w-4 md:h-6 md:w-6 text-white" />}
                        {key === 'faturamento' && <FileText className="h-4 w-4 md:h-6 md:w-6 text-white" />}
                      </div>
                      <h3 className="text-base md:text-2xl font-medium text-white mb-1 md:mb-2">
                        {module.title}
                      </h3>
                      <p className="text-xs md:text-base text-gray-200 line-clamp-2">
                        {module.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ControleSection />

      {/* Benefits Section */}
      <section id="benefits" className="gsap-fade-in py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold text-white md:text-5xl">
            Por que escolher a Kodiak?
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefitDetails.map((benefit, index) => (
              <div 
                key={index} 
                onClick={() => setActiveBenefit(index)}
                className="group relative overflow-hidden rounded-xl bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10 cursor-pointer"
              >
                <div className="relative z-10 mx-auto max-w-2xl text-center">
                  <div className="inline-flex rounded-lg bg-blue-400/10 p-3  mb-6">
                    {index === 0 && <BarChart3 className="animate-icon h-8 w-8 text-blue-400" />}
                    {index === 1 && <Wallet className="animate-icon h-8 w-8 text-blue-400" />}
                    {index === 2 && <Box className="animate-icon h-8 w-8 text-blue-400" />}
                    {index === 3 && <FileText className="animate-icon h-8 w-8 text-blue-400" />}
                    {index === 4 && <Building2 className="animate-icon h-8 w-8 text-blue-400" />}
                    {index === 5 && <LineChart className="animate-icon h-8 w-8 text-blue-400" />}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
                  <div className="mt-4 flex items-center justify-center text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm">Saiba mais</span>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Modal */}
        <Dialog open={activeBenefit !== null} onOpenChange={() => setActiveBenefit(null)}>
          <DialogContent className="sm:max-w-[600px]">
            {activeBenefit !== null && (
              <>
                <DialogHeader>
                  <DialogTitle>{benefitDetails[activeBenefit].title}</DialogTitle>
                  <DialogDescription>
                    {benefitDetails[activeBenefit].description}
                  </DialogDescription>
                </DialogHeader>
                <div className="relative aspect-video w-full rounded-lg overflow-hidden mb-4">
                  <iframe
                    src={benefitDetails[activeBenefit].videoUrl}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">Principais Recursos:</h4>
                  <ul className="grid gap-2">
                    {benefitDetails[activeBenefit].details.map((detail, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </section>

      {/* Stats Section */}
      <section className="gsap-fade-in py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-blue-900 p-8 text-white sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="gsap-counter text-4xl font-bold" data-target="1000">0</div>
              <p className="mt-2">Clientes Ativos</p>
            </div>
            <div className="text-center">
              <div className="gsap-counter text-4xl font-bold" data-target="50">0</div>
              <p className="mt-2">Países</p>
            </div>
            <div className="text-center">
              <div className="gsap-counter text-4xl font-bold" data-target="99">0</div>
              <p className="mt-2">% Satisfação</p>
            </div>
            <div className="text-center">
              <div className="gsap-counter text-4xl font-bold" data-target="24">0</div>
              <p className="mt-2">Anos no Mercado</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-20">
        <ClientCarousel clients={[
          {
            name: "TechCorp",
            logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9",
          },
          {
            name: "InnovateX",
            logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9",
          },
          {
            name: "FutureWorks",
            logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9",
          },
          {
            name: "SmartSolutions",
            logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9",
          },
          {
            name: "GlobalTech",
            logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9",
          },
        ]} />
      </section>

      {/* CTA Section */}
      <section id="contact" className="gsap-fade-in py-20">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-blue-900 p-8 text-white md:p-12">
            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold md:text-4xl">
                Pronto para transformar sua indústria?
              </h2>
              <p className="mt-4 text-gray-200">
                Agende uma demonstração gratuita e descubra como a Kodiak pode impulsionar seu negócio.
              </p>
              <Button 
                size="lg" 
                className="mt-8 bg-white text-primary hover:bg-gray-100 hover:scale-105 transition-all duration-300"
              >
                Agende uma Demo
              </Button>
            </div>
            <div className="gsap-float absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl" />
            <div className="gsap-float absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-purple-400/20 blur-3xl" />
          </div>
        </div>
      </section>

      <Footer />
      <AIChat />
    </div>
  );
}