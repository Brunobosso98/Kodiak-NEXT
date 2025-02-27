"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ClipboardCheck, Settings, GraduationCap, Rocket } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registra o plugin do ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const implementationSteps = [
  {
    icon: <ClipboardCheck className="h-8 w-8" />,
    title: "Diagnóstico Inicial",
    description:
      "Análise detalhada das necessidades e processos atuais da sua empresa",
    duration: "2-3 semanas",
    image: "/canvas/5.png",
  },
  {
    icon: <Settings className="h-8 w-8" />,
    title: "Configuração e Customização",
    description:
      "Parametrização do sistema de acordo com suas necessidades específicas",
    duration: "3-4 semanas",
    image: "/canvas/7.png",
  },
  {
    icon: <GraduationCap className="h-8 w-8" />,
    title: "Treinamento da Equipe",
    description:
      "Capacitação completa dos usuários para utilização eficiente do sistema",
    duration: "2-3 semanas",
    image: "/canvas/11.png",
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "Go Live e Acompanhamento",
    description:
      "Lançamento do sistema e suporte contínuo para garantir o sucesso",
    duration: "4-6 semanas",
    image: "/canvas/2.png",
  },
];

export function ImplementationSection() {
  // Ref para isolar as animações desta seção
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.defaults({ ease: "power2.out", duration: 0.8 });

      // Animação para os círculos externos
      gsap.utils.toArray(".gsap-scale").forEach((circle) => {
        gsap.fromTo(
          circle as HTMLElement,
          { scale: 0.8, filter: "brightness(0.8)", opacity: 0 },
          {
            scale: 1,
            filter: "brightness(1.5)",
            opacity: 1,
            scrollTrigger: {
              trigger: circle as HTMLElement,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Animação de fade in para os elementos de conteúdo
      gsap.utils.toArray(".gsap-fade-in").forEach((elem) => {
        gsap.fromTo(
          elem as HTMLElement,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: elem as HTMLElement,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Configura o estado inicial da linha
      gsap.set(".scroll-line", {
        background:
          "linear-gradient(to bottom, #60A5FA, #A855F7, transparent)",
      });

      // Animação: conforme o scroll, a linha muda seu gradiente de cor
      gsap.to(".scroll-line", {
        background:
          "linear-gradient(to bottom, #35ecf2, #32fcec, #c9f5f1)",
        ease: "none",
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 90%",
          end: "bottom bottom",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="implementation"
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 pt-16"
    >
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

        {/* Container da timeline com a classe para o trigger */}
        <div className="timeline-container relative mt-16">
          {/* Linha vertical da timeline */}
          <div className="scroll-line absolute left-[20px] top-0 h-full w-1 md:left-1/2 md:-translate-x-1/2" />

          {implementationSteps.map((step, index) => (
            <div
              key={index}
              className={`relative mb-16 md:flex ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center md:left-1/2 md:-translate-x-1/2">
                {/* Círculo externo */}
                <div className="gsap-scale h-full w-full rounded-full bg-gradient-to-br from-blue-400 to-purple-400" />
                {/* Círculo interno – sem animação de preenchimento */}
                <div className="absolute flex h-8 w-8 items-center justify-center rounded-full bg-gray-900">
                  <span className="text-lg font-bold text-blue-400">
                    {index + 1}
                  </span>
                </div>
              </div>

              <div
                className={`pl-16 md:pl-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                }`}
              >
                <div className="gsap-fade-in rounded-2xl bg-white/5 p-6 backdrop-blur-sm">
                  <div className="inline-flex items-center">
                    <div className="mb-4 inline-flex rounded-xl bg-blue-400/10 p-3 mr-4">
                      {step.icon}
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mb-4 text-blue-200">{step.description}</p>
                </div>
              </div>

              <div
                className={`pl-16 md:pl-0 mt-8 md:mt-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pl-16" : "md:pr-16"
                }`}
              >
                <div className="gsap-fade-in overflow-hidden rounded-2xl">
                  <div className="relative h-36 md:h-44">
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

      {/* Elementos decorativos */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-0 h-80 w-80 rounded-full bg-blue-500/30 blur-[100px]" />
        <div className="absolute -bottom-40 right-0 h-80 w-80 rounded-full bg-purple-500/30 blur-[100px]" />
      </div>
    </section>
  );
}
