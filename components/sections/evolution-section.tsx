"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function EvolutionSection() {
  const containerRef = useRef(null);
  const stepsRef = useRef([]);
  const textsRef = useRef([]);
  const iconsRef = useRef([]);

  const evolutionData = [
    { title: "Início", description: "Entender a localização atual do negócio", icon: "📍" },
    { title: "Diagnóstico", description: "Identificar problemas que afetam a lucratividade", icon: "📊" },
    { title: "Prontuário", description: "Implementar medidas corretivas para os problemas identificados", icon: "🛠️" },
    { title: "Direção", description: "Orientar o negócio na execução de novos procedimentos", icon: "📈" },
    { title: "Monitorar", description: "Rastrear a eficácia das medidas implementadas", icon: "🔍" },
  ];

  useEffect(() => {
    if (!containerRef.current) return;
    
    gsap.set(stepsRef.current, { opacity: 0, scale: 0.8 });
    gsap.set(textsRef.current, { opacity: 0, y: 50 });
    gsap.set(iconsRef.current, { opacity: 0, y: -50 });

    gsap.to(stepsRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      stagger: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
        end: "bottom 40%",
        scrub: true,
      },
    });

    gsap.to(textsRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
        end: "bottom 40%",
        scrub: true,
      },
    });

    gsap.to(iconsRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
        end: "bottom 40%",
        scrub: true,
      },
    });
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-[#030712] py-16 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-white mb-10">Processo de Melhoria de Gestão</h2>
      <div className="flex justify-between items-center w-11/12 max-w-6xl relative">
        {evolutionData.map((step, index) => (
          <div key={index} className="relative flex flex-col items-center text-center text-white w-1/5">
            <div className="absolute top-[-60px]" ref={(el) => (textsRef.current[index] = el)}>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-300 text-sm">{step.description}</p>
            </div>
            <div
              ref={(el) => (stepsRef.current[index] = el)}
              className="relative w-24 h-24 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-3xl"
            >
              ➝
            </div>
            <div className="absolute bottom-[-60px]" ref={(el) => (iconsRef.current[index] = el)}>
              <span className="text-3xl">{step.icon}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
