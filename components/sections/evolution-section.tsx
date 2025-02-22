"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function EvolutionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  const evolutionData = [
    {
      year: "Jan",
      label: "Desafios Operacionais",
      details: "Problemas com estoque e integração limitada.",
      metrics: "Baixa eficiência nos processos.",
      icon: "🚀"
    },
    {
      year: "Mar",
      label: "Decisão Estratégica",
      details: "Escolha do ERP para otimizar operações industriais.",
      metrics: "Pesquisa de soluções no mercado.",
      icon: "📈"
    },
    {
      year: "Mai",
      label: "Implementação Ágil",
      details: "Configuração, treinamento e adoção do sistema.",
      metrics: "Sistema implementado rapidamente.",
      icon: "⚙️"
    },
    {
      year: "Jun",
      label: "Otimização dos Processos",
      details: "Automação de compras, vendas e financeiro eficiente.",
      metrics: "Redução de 30% nos desperdícios.",
      icon: "🏆"
    },
    {
      year: "Ago",
      label: "Ganho de Produtividade",
      details: "Produção otimizada e logística mais eficiente.",
      metrics: "Aumento de 40% na produtividade.",
      icon: "🌎"
    },
    {
      year: "Set",
      label: "Expansão e Escalabilidade",
      details: "Novos mercados e competitividade fortalecida.",
      metrics: "+50 empresas atendidas.",
      icon: "🚀"
    }
  ];

  useEffect(() => {
    if (!containerRef.current || !timelineRef.current) return;

    const ctx = gsap.context(() => {
      // Create main timeline for section
      const mainTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%",
          pin: true,
          pinSpacing: true,
          scrub: 1,
          anticipatePin: 1
        }
      });

      // Timeline base animation
      mainTimeline
        .fromTo(
          timelineRef.current,
          { width: "0%" },
          {
            width: "100%",
            duration: 2,
            ease: "none"
          }
        );

      // Animate each evolution element sequentially
      elementsRef.current.forEach((element, index) => {
        if (!element) return;

        // Add each element's animation to the main timeline with sequence
        mainTimeline.fromTo(
          element,
          { 
            opacity: 0,
            x: -100,
            scale: 0.8
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1,
            ease: "power2.inOut"
          },
          // Position each animation with a slight overlap
          index === 0 ? ">" : ">-0.8"
        );
      });
    },);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-br from-gray-950/95 via-gray-950 to-gray-950 py-20 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-200 via-blue-400 to-purple-200 bg-clip-text text-transparent">
            Nossa Evolução
          </h2>
          <p className="mt-4 text-lg text-blue-200/90">
            Uma jornada de inovação e excelência no mercado de ERP industrial
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto overflow-x-hidden">
          {/* Main horizontal timeline */}
          <div className="flex items-center justify-center relative h-[600px]">
            {/* Timeline base line */}
            <div ref={timelineRef} className="absolute h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 w-full shadow-[0_0_15px_rgba(59,130,246,0.5)] blur-[0.5px]" />
            
            {/* Timeline items */}
            <div className="relative w-full flex justify-between items-center px-12">
              {evolutionData.map((item, index) => (
                <div
                  key={index}
                  ref={el => elementsRef.current[index] = el}
                  className="relative"
                  style={{ flex: '1' }}
                >
                  {/* Vertical connecting lines - Up and Down */}
                  {/* Upward lines */}
                  {index % 2 === 0 ? (
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-blue-400/20"
                         style={{ height: '120px', bottom: '100%' }} />
                  ) : (
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-blue-400/20"
                         style={{ height: '150px', bottom: '100%' }} />
                  )}
                  {/* Downward lines */}
                  {index % 2 === 0 ? (
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-blue-400/20"
                         style={{ height: '150px', top:'100%' }} />
                  ) : (
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-blue-400/20"
                         style={{ height: '120px', top: '100%' }} />
                  )}
                
                  {/* Content box */}
                  <div className={`absolute w-56 left-1/2 transform -translate-x-1/2 ${index % 2 === 0 ? '-top-[250px]' : 'top-[110px]'}`}>
                    <div className="bg-blue-950/60 backdrop-blur-sm rounded-lg p-4 shadow-lg hover:bg-blue-900/60 transition-colors duration-300 border border-blue-500/20">
                      <span className="text-blue-300 font-medium">{item.year}</span>
                      <h3 className="text-white font-bold mt-1">{item.label}</h3>
                      <p className="text-blue-200/90 text-sm mt-2">{item.details}</p>
                    </div>
                  </div>
                
                  {/* Arrow on timeline */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:scale-105 transition-all duration-300 flex items-center justify-center">
                      <ArrowRight className="w-8 h-8 text-white" />
                    </div>
                  </div>
                
                  {/* Icon box - alternating position */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 ${index % 2 === 0 ? 'top-[150px]' : '-top-[210px]'}`}>
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-3xl shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-110 transition-all duration-300">
                      {item.icon}
                    </div>
                  </div>
                
                  {/* Connecting line to next item */}
                  {index < evolutionData.length - 1 && (
                    <div className="absolute top-1/2 transform -translate-y-1/2 left-[60px] right-0 h-1.5 bg-gradient-to-r from-blue-500/30 to-purple-500/30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-purple-500/10 blur-[120px]" />
      </div>
    </section>
  );
}
