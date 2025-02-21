"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function EvolutionSection() {
  const pathRef = useRef<SVGPathElement>(null);
  const pointsRef = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const evolutionData = [
    {
      year: "2014",
      label: "Fundação",
      details: "Início da jornada Kodiak ERP com foco em soluções industriais",
      metrics: "Primeira versão do sistema lançada",
      icon: "🚀"
    },
    {
      year: "2017",
      label: "Expansão Inicial",
      details: "Conquista dos primeiros grandes clientes do setor industrial",
      metrics: "+50 empresas atendidas",
      icon: "📈"
    },
    {
      year: "2019",
      label: "Inovação Tecnológica",
      details: "Implementação de tecnologias avançadas e automação industrial",
      metrics: "98% taxa de satisfação",
      icon: "⚙️"
    },
    {
      year: "2021",
      label: "Liderança de Mercado",
      details: "Reconhecimento como líder em soluções ERP para indústria",
      metrics: "+200 projetos implementados",
      icon: "🏆"
    },
    {
      year: "2023",
      label: "Expansão Nacional",
      details: "Presença consolidada em todo território nacional",
      metrics: "Presente em 15 estados",
      icon: "🌎"
    },
    {
      year: "2025",
      label: "Futuro da Inovação",
      details: "IA integrada e soluções Industry 4.0",
      metrics: "Líder em inovação industrial",
      icon: "🤖"
    }
  ];

  useEffect(() => {
    if (!pathRef.current || !containerRef.current) return;

    const pathLength = pathRef.current.getTotalLength();
    const points = pointsRef.current;

    gsap.set(pathRef.current, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength
    });

    // Hide all points initially
    points.forEach(point => {
      if (point) {
        gsap.set(point, {
          opacity: 0,
          scale: 0
        });
      }
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        pin: true,
        pinSpacing: true,
        markers: false, // Útil para debug
        onEnter: () => {
          gsap.to(containerRef.current, {
            opacity: 1,
            duration: 0.5
          });
        },
        onLeave: () => {
          gsap.to(containerRef.current, {
            opacity: 1,
            duration: 0.5
          });
        },
        onEnterBack: () => {
          gsap.to(containerRef.current, {
            opacity: 1,
            duration: 0.5
          });
        },
        onLeaveBack: () => {
          gsap.to(containerRef.current, {
            opacity: 1,
            duration: 0.5
          });
        }
      }
    });

    // Animate the path drawing
    tl.to(pathRef.current, {
      strokeDashoffset: 0,
      duration: 2,
      ease: "power2.inOut"
    });

    // Animate each point when the line reaches it
    points.forEach((point, index) => {
      if (!point) return;

      tl.to(point, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "back.out(1.7)"
      }, `<+=${index * 0.2}`);
    });

    // Add glow effect animation
    tl.to(pathRef.current, {
      filter: "drop-shadow(0px 0px 8px rgba(124, 58, 237, 0.8))",
      duration: 0.5,
      ease: "power2.inOut"
    }, "<");

  }, []);

  return (
    <section 
      className="relative h-screen w-full bg-[#030712] flex items-center justify-center overflow-hidden" 
      ref={containerRef}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.03),rgba(124,58,237,0.03))] animate-pulse"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      {/* Header Content */}
      <div className="absolute top-0 left-0 w-full pt-16 flex flex-col items-center justify-center text-white z-10">
        <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
          Nossa Evolução
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl text-center px-4">
          Uma jornada de inovação e excelência no mercado de ERP industrial
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative w-full h-[60vh] flex items-center justify-center z-20">
        {/* Timeline SVG */}
        <svg className="absolute w-11/12 h-full" viewBox="0 0 1000 300" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2563eb">
                <animate attributeName="stop-color" 
                  values="#2563eb; #7c3aed; #2563eb" 
                  dur="4s" 
                  repeatCount="indefinite"/>
              </stop>
              <stop offset="100%" stopColor="#7c3aed">
                <animate attributeName="stop-color" 
                  values="#7c3aed; #2563eb; #7c3aed" 
                  dur="4s" 
                  repeatCount="indefinite"/>
              </stop>
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <path
            ref={pathRef}
            d="M 100 150 C 250 50, 300 50, 500 150 S 750 250, 900 150"
            stroke="url(#gradientStroke)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            filter="url(#glow)"
          />
        </svg>

        {/* Timeline Points */}
        {evolutionData.map((item, index) => {
          const positions = [
            { left: "15%", top: "66%" },
            { left: "25%", top: "25%" },
            { left: "40%", top: "50%" },
            { left: "60%", top: "75%" },
            { left: "75%", top: "50%" },
            { left: "90%", top: "25%" }
          ];

          return (
            <div
              key={index}
              ref={(el) => (pointsRef.current[index] = el)}
              className="absolute flex flex-col items-center text-center opacity-0 z-30 transform transition-transform duration-300 hover:scale-105"
              style={{ left: positions[index].left, top: positions[index].top, transform: 'translate(-50%, -50%)' }}
            >
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg animate-pulse-slow">
                  <div className="absolute inset-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-ping-slow opacity-75"></div>
                </div>
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl">
                  {item.icon}
                </span>
              </div>
              <div className="mt-4 p-4 bg-gray-900/90 backdrop-blur-sm rounded-lg w-64 transform transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-blue-400">{item.year}</h4>
                  <span className="text-purple-400 font-semibold">{item.label}</span>
                </div>
                <p className="text-gray-300 text-sm mb-2">{item.details}</p>
                <p className="text-xs text-blue-300 font-medium">{item.metrics}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
