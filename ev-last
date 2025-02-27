"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function EvolutionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Dados de evolução com SVG inline responsivo
  const evolutionData = [
    {
      filename: "inicio.svg",
      title: "Onde estou?",
      description: "Entender a posição atual do negócio",
      titleColor: "#5776F0",
      svg: (
        <svg
          className="w-full h-auto max-w-[250px] max-h-[250px] md:max-w-[300px] md:max-h-[300px]"
          viewBox="0 0 905 1326"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="antena">
            <line
              id="Line1"
              x1="445"
              y1="699.967"
              x2="448"
              y2="150.967"
              stroke="#1D1C1C"
              strokeWidth="12"
            />
            <circle
              id="Ellipse6"
              cx="452.5"
              cy="81.5"
              r="76.5"
              fill="#5776F0"
              stroke="white"
              strokeWidth="10"
              filter="url(#glow)"
            />
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
          </g>
          <circle
            id="circulo"
            cx="452.5"
            cy="873.5"
            r="447.5"
            fill="#5776F0"
            stroke="white"
            strokeWidth="10"
          />
        <g id="icone">
        <path id="Vector" d="M335.621 950.683C305.575 959.697 287 972.147 287 985.9C287 1013.41 361.318 1035.7 453 1035.7C544.682 1035.7 619 1013.41 619 985.9C619 972.147 600.416 959.697 570.379 950.683" stroke="white" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_2" d="M453 969.3C453 969.3 560.9 898.783 560.9 817.261C560.9 759.127 512.594 712 453 712C393.406 712 345.1 759.127 345.1 817.261C345.1 898.783 453 969.3 453 969.3Z" stroke="white" stroke-width="10" stroke-linejoin="round"/>
<path id="Vector_3" d="M453 861.4C464.006 861.4 474.562 857.028 482.345 849.245C490.128 841.462 494.5 830.907 494.5 819.9C494.5 808.894 490.128 798.338 482.345 790.555C474.562 782.772 464.006 778.4 453 778.4C441.994 778.4 431.438 782.772 423.655 790.555C415.872 798.338 411.5 808.894 411.5 819.9C411.5 830.907 415.872 841.462 423.655 849.245C431.438 857.028 441.994 861.4 453 861.4Z" stroke="white" stroke-width="10" stroke-linejoin="round"/>
          </g>
        </svg>
      )
    },
    {
      filename: "diag.svg",
      title: "Diagnóstico",
      description: "Identificar e entender os problemas e oportunidades",
      titleColor: "#2ECF6C",
      svg: (
        <svg
          className="w-full h-auto max-w-[250px] max-h-[250px] md:max-w-[300px] md:max-h-[300px]"
          viewBox="0 0 905 1326" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="diag">
            <g id="antena">
              <line 
                id="Line 2" 
                x1="445" 
                y1="1179.97" 
                x2="448" 
                y2="630.967" 
                stroke="#1D1C1C" 
                stroke-width="12"/>
              <circle 
                id="Ellipse 6" 
                cx="452.5" 
                cy="1244.5" 
                r="76.5" 
                fill="#2ECF6C" 
                stroke="white" 
                stroke-width="10" 
                filter="url(#glow2)"/>
              <defs>
              <filter id="glow2">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            </g>
          <circle 
            id="circulo" 
            cx="452.5" 
            cy="452.5" 
            r="447.5" 
            fill="#2ECF6C" 
            stroke="white" 
            stroke-width="10"/>
          <g id="icone">
            <path id="Vector" 
              d="M606 606.333H299V299.333" 
              stroke="white" stroke-width="10" 
              stroke-linecap="round" 
              stroke-linejoin="round"/>
            <path 
              id="Vector_2" 
              d="M299 356.896L452.5 510.396L510.062 452.833L596.406 539.177" 
              stroke="white" 
              stroke-width="10" 
              stroke-linecap="round" 
              stroke-linejoin="round"/>
          </g>
        </g>
        </svg>

      )
    },
    {
      filename: "pront.svg",
      title: "Correções",
      description: "Implementar medidas corretivas para os problemas",
      titleColor: "#87DB47",
      svg: (
        <svg
          className="w-full h-auto max-w-[250px] max-h-[250px] md:max-w-[300px] md:max-h-[300px]"
          viewBox="0 0 905 1326" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg">
            <g id="pront">
            <g id="antena">
              <line 
                id="Line 1" 
                x1="445" 
                y1="699.967" 
                x2="448" 
                y2="150.967" 
                stroke="#1D1C1C" 
                stroke-width="12"/>
              <circle 
                id="Ellipse 6" 
                cx="452.5" 
                cy="81.5" 
                r="76.5" 
                fill="#87DB47" 
                stroke="white" 
                stroke-width="10" 
                filter="url(#glow3)"/>
            </g>
            <circle 
              id="circulo" 
              cx="452.5" 
              cy="873.5" 
              r="447.5" 
              fill="#87DB47" 
              stroke="white" 
              stroke-width="10"/>
            <path 
              id="icone" 
              d="M376.5 723H361.4C340.26 723 329.69 723 321.612 727.115C314.509 730.734 308.734 736.509 305.115 743.612C301 751.69 301 762.26 301 783.4V964.6C301 985.74 301 996.31 305.115 1004.39C308.734 1011.49 314.509 1017.27 321.612 1020.89C329.671 1025 340.241 1025 361.343 1025H376.5M376.5 723H542.6C563.74 723 574.31 723 582.37 727.115C589.485 730.739 595.261 736.496 598.885 743.612C603 751.671 603 762.241 603 783.343V964.676C603 985.778 603 996.329 598.885 1004.39C595.261 1011.49 589.479 1017.27 582.37 1020.89C574.31 1025 563.759 1025 542.657 1025H376.5M376.5 723V1025M452 855.125H527.5M452 798.5H527.5" 
              stroke="white" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
        </svg>
      )
    },
    {
      filename: "dire.svg",
      title: "Para onde ir?",
      description: "Fornecer direcionamento para novos procedimentos",
      titleColor: "#55A7EB",
      svg: (
        <svg
          className="w-full h-auto max-w-[250px] max-h-[250px] md:max-w-[300px] md:max-h-[300px]"
          viewBox="0 0 905 1326" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg">
            <g id="dire">
            <g id="antena">
              <line id="Line 2" x1="445" y1="1179.97" x2="448" y2="630.967" stroke="#1D1C1C" stroke-width="12"/>
              <circle id="Ellipse 6" cx="452.5" cy="1244.5" r="76.5" fill="#55A7EB" stroke="white" stroke-width="10" filter="url(#glow4)"/>
              <defs>
                <filter id="glow4">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                 <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
            </g>
            <circle id="circulo" cx="452.5" cy="452.5" r="447.5" fill="#55A7EB" stroke="white" stroke-width="10"/>
            <g id="icone">
              <path 
                id="Vector" 
                d="M376.5 301H301M301 301V376.5M301 301L395.375 395.375M527.5 301H603M603 301V376.5M603 301L508.625 395.375M376.5 603H301M301 603V527.5M301 603L395.375 508.625M527.5 603H603M603 603V527.5M603 603L508.625 508.625" stroke="white" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </g>
        </svg>
      )
    },
    {
      filename: "monit.svg",
      title: "Monitorar",
      description: "Rastrear a eficácia das medidas implementadas",
      titleColor: "#9A59E9",
      svg: (
        <svg
          className="w-full h-auto max-w-[250px] max-h-[250px] md:max-w-[300px] md:max-h-[300px]"
          viewBox="0 0 905 1326" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg">
            <g id="monit">
            <g id="antena">
             <line 
              id="Line 1" 
              x1="445" 
              y1="699.967" 
              x2="448" 
              y2="150.967" 
              stroke="#1D1C1C" 
              stroke-width="12"/>
             <circle 
              id="Ellipse 6" 
              cx="452.5" 
              cy="81.5" 
              r="76.5" 
              fill="#9A59E9" 
              stroke="white" 
              stroke-width="10" 
              filter="url(#glow5)"/>
              <defs>
               <filter id="glow5">
                 <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                 <feMerge>
                   <feMergeNode in="coloredBlur"/>
                   <feMergeNode in="SourceGraphic"/>
                 </feMerge>
               </filter>
             </defs>
            </g>
            <circle 
              id="circulo" 
              cx="452.5" 
              cy="873.5" 
              r="447.5" 
              fill="#9A59E9" 
              stroke="white" 
              stroke-width="10"/>
              <g id="icone">
                <path id="Vector" d="M606 1027H299V720" stroke="white" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Vector_2" d="M596.406 777.562L442.906 931.062L385.344 873.5L299 959.844" stroke="white" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
            </g>
          </svg>

      )
    }
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Pin the section with modified settings
      ScrollTrigger.create({
        trigger: containerRef.current,  
        pin: true,
        start: "top top",
        end: "+=300%",
        scrub: false,
        pinSpacing: true,
        anticipatePin: 1
      });

      // Create a main timeline with scrub enabled
      const mainTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%",
          scrub: 1,
          toggleActions: "play none none reverse"
        }
      });

      // Animate each item sequentially with scroll-based timing
      elementsRef.current.forEach((element, index) => {
        if (!element) return;

        // Update the title color using the predefined color
        const titleElement = element.querySelector('h3');
        if (titleElement) {
          titleElement.style.color = evolutionData[index].titleColor;
        }

        // Set initial state
        gsap.set(element, {
          opacity: 0,
          x: 50,
          scale: 0.8
        });

        const antenna = element.querySelector('[id="antena"]');
        if (antenna) {
          gsap.set(antenna, {
            opacity: 0,
            clipPath: `inset(${index % 2 === 0 ? '100%' : '0'} 0 ${index % 2 === 0 ? '0' : '100%'} 0)`,
            scale: 0.8
          });
        }

        // Add element animations to main timeline with scroll-based timing
        mainTimeline
          .to(element, {
            opacity: 1,
            x: 0,
            scale: 1,
            ease: "power2.out"
          })
          .to(antenna, {
            opacity: 1,
            clipPath: 'inset(0 0 0 0)',
            scale: 1,
            duration: 1,
            ease: "power2.inOut",
            immediateRender: false
          }, ">-0.25");

        // Add spacing between animations
        mainTimeline.addLabel(`item${index}`, "+=0.5");
      });

      // Animate progress line
      const progressLine = elementsRef.current[evolutionData.length];
      if (progressLine) {
        gsap.set(progressLine, {
          scaleX: 0,
          transformOrigin: 'left left'
        });

        // Add progress line animation to main timeline
        mainTimeline.to(progressLine, {
          scaleX: 1,
          duration: evolutionData.length,
          ease: 'none'
        }, 0); // Start at the beginning of the timeline
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-20 overflow-hidden"
    >
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
            Como vamos aprimorar sua gestão
          </h2>
        </div>

        <div className="relative max-w-7xl mx-auto overflow-hidden">
          {/* Linha de conexão */}
          <div className="absolute top-1/2 left-0 w-full h-1.5 bg-gray-300/50 rounded-full backdrop-blur-sm transform -translate-y-1/2">
            <div className="progress-line h-full bg-gradient-to-r from-blue-600 via-green-500 to-purple-600 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"
              ref={(el) => (elementsRef.current[evolutionData.length-1] = el)} />
          </div>

          {/* Itens de evolução */}
          <div className="relative w-full flex justify-between px-12">
            {evolutionData.map((item, index) => (
              <div
                key={index}
                ref={(el) => (elementsRef.current[index] = el)}
                className="relative flex flex-col items-center group transition-transform hover:-translate-y-2 duration-300"
                style={{ flex: "1" }}
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="mb-4 text-center">
                      <h3 className="text-2xl font-extrabold tracking-tight drop-shadow-lg transition-all duration-300 group-hover:scale-110" style={{ color: item.titleColor }}>{item.title}</h3>
                      <p className="text-gray-800 text-base font-medium mt-2 opacity-90">{item.description}</p>
                    </div>
                    <div className="flex justify-center items-center w-full overflow-hidden filter drop-shadow-xl transition-all duration-300 group-hover:drop-shadow-2xl">
                      {item.svg}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-center md:mt-[200px] items-center w-full overflow-hidden filter drop-shadow-xl transition-all duration-300 group-hover:drop-shadow-2xl">
                      {item.svg}
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="text-2xl font-extrabold tracking-tight drop-shadow-lg transition-all duration-300 group-hover:scale-110" style={{ color: item.titleColor }}>{item.title}</h3>
                      <p className="text-gray-800 text-base font-medium mt-2 opacity-90">{item.description}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-0 h-96 w-96 rounded-full bg-blue-500/30 blur-[120px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-green-500/20 blur-[150px] animate-pulse" />
        <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-purple-500/30 blur-[120px] animate-pulse" />
      </div>
    </section>
  );
}
