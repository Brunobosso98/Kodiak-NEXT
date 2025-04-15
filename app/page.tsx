"use client";

import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { useGSAPAnimations } from "@/hooks/use-gsap-animations";
import { useState, useEffect, useRef, lazy, Suspense } from "react";
import dynamic from 'next/dynamic';
import gsap from "gsap";
import { AIChat } from "@/components/ui/ai-chat";
import { WhatsApp } from '../components/ui/wpp';
import { HeroSection } from "@/components/sections/hero-section";
import { StatsSection } from "@/components/sections/stats-section";
import { AboutSection } from "@/components/sections/about-section";
import { ImplementationSection } from "@/components/sections/implementation-section";
import { ModulesSection } from "@/components/sections/modules-section";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { ClientsSection } from "@/components/sections/clients-section";
import { CTASection} from "@/components/sections/cta-section";
import { EvolutionSection } from "@/components/sections/evolution-section";
import { VideoShowcaseSection } from "@/components/sections/video-showcase-section";
import moduleData, { ModuleKey } from "@/data/module-data";

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
      <VideoShowcaseSection />
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
