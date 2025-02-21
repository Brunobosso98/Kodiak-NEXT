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
import DemoModal from "@/components/ui/demo-modal";
import { WhatsApp } from '../components/ui/wpp';
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ImplementationSection } from "@/components/sections/implementation-section";
import { ModulesSection } from "@/components/sections/modules-section";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { StatsSection} from "@/components/sections/stats-section";
import { ClientsSection } from "@/components/sections/clients-section";
import { CTASection} from "@/components/sections/cta-section";
import { EvolutionSection } from "@/components/sections/evolution-section";


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
    image: "https://images.unsplash.com/photo-1496247749665-49cf5b5883817?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
  const [isModal, setIsModal] = useState(false)
  const moduleContentRef = useRef<HTMLDivElement>(null);
  const moduleImageRef = useRef<HTMLDivElement>(null);
  const moduleFeaturesRef = useRef<HTMLDivElement>(null);
  
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
        .fromTo(moduleFeaturesRef.current.children, // ← Agora o TypeScript reconhece a propriedade
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
      <HeroSection />
      <AboutSection />
      <ImplementationSection />
      <ModulesSection />
      <BenefitsSection />
      <EvolutionSection />
      <StatsSection />
      <ClientsSection />
      <CTASection />
      <WhatsApp />
      <Footer />
      <AIChat />
    </div>
  );
}