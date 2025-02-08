"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Header } from "@/components/ui/header";
import { ArrowRight, BarChart3, Box, Building2, FileText, GraduationCap, LineChart, Settings, Target, Truck, Users, Wallet, ClipboardCheck, Eye, Rocket, BoxIcon, ShoppingCart, Factory, TrendingUp, DollarSign, Check, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { ClientCarousel } from "@/components/ui/client-carousel";
import { Footer } from "@/components/ui/footer";
import { useGSAPAnimations } from "@/hooks/use-gsap-animations";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const moduleData = {
  inventory: {
    title: "Gestão de Estoque",
    description: "Controle total do seu inventário com rastreabilidade e gestão de lotes. Monitore em tempo real todos os movimentos e mantenha seu estoque otimizado.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8d3c8310d?q=80&w=2070",
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
    image: "https://images.unsplash.com/photo-1554774853-719586f82d77?q=80&w=2070",
    features: [
      "Cotações Automáticas",
      "Gestão de Fornecedores",
      "Aprovações Digitais",
      "Histórico de Preços",
      "Contratos Digitais",
      "Análise de Custos"
    ]
  },
  production: {
    title: "Produção",
    description: "Planejamento e controle da produção com análise em tempo real. Otimize seus processos e aumente a eficiência operacional.",
    image: "https://images.unsplash.com/photo-1565465295423-68c959fbd6e2?q=80&w=2070",
    features: [
      "MRP Avançado",
      "Ordens de Produção",
      "Controle de Qualidade",
      "Gestão de Capacidade",
      "Manutenção Preventiva",
      "Indicadores de OEE"
    ]
  },
  analytics: {
    title: "BI & Analytics",
    description: "Dashboards personalizados e relatórios detalhados para tomada de decisão. Visualize dados em tempo real e identifique tendências.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
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
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070",
    features: [
      "Contas a Pagar",
      "Contas a Receber",
      "Fluxo de Caixa",
      "Conciliação Bancária",
      "DRE em Tempo Real",
      "Gestão de Custos"
    ]
  }
};

export default function Home() {
  const [activeModule, setActiveModule] = useState("inventory");
  const moduleContentRef = useRef(null);
  const moduleImageRef = useRef(null);
  const moduleFeaturesRef = useRef(null);

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
    animateModuleContent();
  }, [activeModule]);

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Header />

      {/* Hero Section */}
      <section id="home" className="hero-section relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-blue-900 py-20 text-white md:py-32">
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <h1 className="hero-title text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Transforme sua
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  {" "}
                  Gestão Industrial
                </span>
              </h1>
              <p className="hero-description text-lg text-gray-200 md:text-xl">
                Simplifique processos, aumente a produtividade e tome decisões mais inteligentes com nossa solução completa de ERP.
              </p>
              <div className="hero-cta flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-gray-100 hover:scale-105 transition-all duration-300"
                >
                  Agende uma Demo
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 hover:scale-105 transition-all duration-300"
                >
                  Saiba Mais
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="gsap-float absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-400/20 blur-3xl" />
              <div className="gsap-float absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-purple-400/20 blur-3xl" />
              <Image
                src="/dashboard.png"
                alt="Dashboard"
                width={600}
                height={400}
                className="gsap-parallax rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
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
                    <div className="rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                      <div className="mb-4 inline-block rounded-lg bg-blue-100 p-3">
                        <Target className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="mb-2 text-xl font-semibold text-blue-900">Missão</h3>
                      <p className="text-gray-600">
                        Simplificar e otimizar a gestão industrial através de tecnologia inovadora.
                      </p>
                    </div>
                  </div>
                  <div className="gsap-scale group">
                    <div className="rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                      <div className="mb-4 inline-block rounded-lg bg-blue-100 p-3">
                        <Eye className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="mb-2 text-xl font-semibold text-blue-900">Visão</h3>
                      <p className="text-gray-600">
                        Ser referência em soluções ERP para o setor industrial.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section id="implementation" className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        <div className="container relative mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="bg-gradient-to-r from-blue-200 via-blue-400 to-purple-200 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              Processo de Implementação
            </h2>
            <p className="mt-4 text-lg text-blue-200">
              Transforme sua gestão industrial em 4 etapas simples
            </p>
          </div>

          <div className="relative mt-20">
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
                icon: <Settings className="h-6 w-6" />,
                title: "Configuração e Customização",
                description: "Parametrização do sistema de acordo com suas necessidades específicas",
                duration: "3-4 semanas",
                image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070"
              },
              {
                icon: <GraduationCap className="h-8 w-8" />,
                title: "Treinamento da Equipe",
                description: "Capacitação completa dos usuários para utilização eficiente do sistema",
                duration: "2-3 semanas",
                image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070"
              },
              {
                icon: <Rocket className="h-8 w-8" />,
                title: "Go Live e Acompanhamento",
                description: "Lançamento do sistema e suporte contínuo para garantir o sucesso",
                duration: "4-6 semanas",
                image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070"
              }
            ].map((step, index) => (
              <div key={index} className={`relative mb-32 md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center md:left-1/2 md:-translate-x-1/2">
                  <div className="gsap-scale h-full w-full rounded-full bg-gradient-to-br from-blue-400 to-purple-400" />
                  <div className="absolute flex h-8 w-8 items-center justify-center rounded-full bg-gray-900">
                    <span className="text-lg font-bold text-blue-400">{index + 1}</span>
                  </div>
                </div>

                <div className={`ml-16 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="gsap-fade-in rounded-2xl bg-white/5 p-8 backdrop-blur-sm">
                    <div className="mb-4 inline-flex rounded-xl bg-blue-400/10 p-3">
                      {step.icon}
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-white">{step.title}</h3>
                    <p className="mb-4 text-blue-200">{step.description}</p>
                    <div className="inline-flex rounded-full bg-blue-400/10 px-4 py-1">
                      <span className="text-sm text-blue-200">{step.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="ml-16 mt-8 md:mt-0 md:w-1/2">
                  <div className="gsap-fade-in overflow-hidden rounded-2xl">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover"
                    />
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
      <section id="modules" className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${moduleData[activeModule].image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

        {/* Content */}
        <div className="relative h-full">
          <div className="container mx-auto flex h-full flex-col justify-between px-4 py-20">
            {/* Module Info */}
            <div className="max-w-2xl space-y-6">
              <h2 className="text-5xl font-bold text-white">
                {moduleData[activeModule].title}
              </h2>
              <p className="text-xl text-gray-200">
                {moduleData[activeModule].description}
              </p>
              <Button 
                size="lg"
                className="bg-white/20 text-white backdrop-blur-sm hover:bg-white/30"
              >
                Saiba mais
              </Button>
            </div>

            {/* Module Cards */}
            <div className="relative">
              {/* Navigation Arrows */}
              <button 
                onClick={() => {
                  const keys = Object.keys(moduleData);
                  const currentIndex = keys.indexOf(activeModule);
                  const prevIndex = currentIndex === 0 ? keys.length - 1 : currentIndex - 1;
                  setActiveModule(keys[prevIndex]);
                }}
                className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur-sm hover:bg-black/50"
              >
                <ArrowLeft className="h-6 w-6" />
              </button>
              <button 
                onClick={() => {
                  const keys = Object.keys(moduleData);
                  const currentIndex = keys.indexOf(activeModule);
                  const nextIndex = currentIndex === keys.length - 1 ? 0 : currentIndex + 1;
                  setActiveModule(keys[nextIndex]);
                }}
                className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur-sm hover:bg-black/50"
              >
                <ArrowRight className="h-6 w-6" />
              </button>

              {/* Cards */}
              <div className="flex gap-4 overflow-x-auto pb-4">
                {Object.entries(moduleData).map(([key, module]) => (
                  <button
                    key={key}
                    onClick={() => setActiveModule(key)}
                    className={`relative flex-shrink-0 overflow-hidden rounded-xl ${
                      activeModule === key ? 'ring-2 ring-white' : ''
                    }`}
                    style={{ width: '280px', height: '180px' }}
                  >
                    <Image
                      src={module.image}
                      alt={module.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                      <div className="rounded-lg bg-white/20 p-2 backdrop-blur-sm w-min">
                        {key === 'inventory' && <BoxIcon className="h-6 w-6 text-white" />}
                        {key === 'purchasing' && <ShoppingCart className="h-6 w-6 text-white" />}
                        {key === 'production' && <Factory className="h-6 w-6 text-white" />}
                        {key === 'analytics' && <TrendingUp className="h-6 w-6 text-white" />}
                        {key === 'hr' && <Users className="h-6 w-6 text-white" />}
                        {key === 'financial' && <DollarSign className="h-6 w-6 text-white" />}
                      </div>
                      <h3 className="mt-2 text-lg font-medium text-white">
                        {module.title}
                      </h3>
                    </div>
                  </button>
                ))}
              </div>

              {/* Current Module Indicator */}
              <div className="mt-4 flex justify-center gap-2">
                {Object.keys(moduleData).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveModule(key)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      activeModule === key ? 'bg-white w-8' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
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
    </div>
  );
}