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
          className="w-full h-auto max-w-[180px] max-h-[180px] md:max-w-[220px] md:max-h-[220px]"
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
        <g id="icone1">
<path id="Vector" d="M452 1050.38C549.962 1050.38 629.375 970.962 629.375 873C629.375 775.038 549.962 695.625 452 695.625C354.038 695.625 274.625 775.038 274.625 873C274.625 970.962 354.038 1050.38 452 1050.38Z" stroke="white" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_2" d="M345.327 795.285C325.759 822.143 317.041 855.394 320.914 888.399C324.787 921.403 340.966 951.733 366.221 973.331C391.475 994.93 423.947 1006.21 457.153 1004.91C490.359 1003.62 521.855 989.85 545.353 966.353C568.85 942.855 582.621 911.359 583.914 878.153C585.208 844.947 573.93 812.475 552.331 787.221C530.733 761.966 500.403 745.787 467.399 741.914C434.394 738.041 401.143 746.759 374.285 766.327" stroke="white" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_3" d="M522.62 914.25C530.083 901.481 533.95 886.929 533.81 872.139C533.67 857.35 529.529 842.874 521.826 830.248C514.123 817.621 503.146 807.316 490.059 800.425C476.972 793.535 462.264 790.315 447.495 791.109C432.726 791.903 418.447 796.68 406.174 804.934C393.901 813.187 384.091 824.61 377.786 837.989C371.481 851.368 368.915 866.204 370.361 880.924C371.807 895.643 377.211 909.697 386 921.593M403.572 939C416.431 948.443 431.767 953.925 447.697 954.775C463.628 955.625 479.46 951.806 493.25 943.785" stroke="white" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_4" d="M452 909.548C472.185 909.548 488.547 893.185 488.547 873C488.547 852.815 472.185 836.453 452 836.453C431.815 836.453 415.452 852.815 415.452 873C415.452 893.185 431.815 909.548 452 909.548Z" stroke="white" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_5" d="M274.625 873H629.375M452 695.625V1050.38" stroke="white" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_6" d="M358.692 800.318C370.083 800.318 379.317 791.083 379.317 779.693C379.317 768.302 370.083 759.068 358.692 759.068C347.302 759.068 338.067 768.302 338.067 779.693C338.067 791.083 347.302 800.318 358.692 800.318Z" stroke="white" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_7" d="M509.173 950.797C520.563 950.797 529.798 941.563 529.798 930.172C529.798 918.782 520.563 909.547 509.173 909.547C497.782 909.547 488.548 918.782 488.548 930.172C488.548 941.563 497.782 950.797 509.173 950.797Z" stroke="white" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_8" d="M394.827 942.63C401.662 942.63 407.202 937.09 407.202 930.255C407.202 923.42 401.662 917.88 394.827 917.88C387.993 917.88 382.452 923.42 382.452 930.255C382.452 937.09 387.993 942.63 394.827 942.63Z" stroke="white" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
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
          className="w-full h-auto max-w-[180px] max-h-[180px] md:max-w-[220px] md:max-h-[220px]"
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
          className="w-full h-auto max-w-[180px] max-h-[180px] md:max-w-[220px] md:max-h-[220px]"
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
          className="w-full h-auto max-w-[180px] max-h-[180px] md:max-w-[220px] md:max-h-[220px]"
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
            <g id="icone4">
<path id="Vector" d="M453 612.4C540.482 612.4 611.4 541.482 611.4 454C611.4 366.518 540.482 295.6 453 295.6C365.518 295.6 294.6 366.518 294.6 454C294.6 541.482 365.518 612.4 453 612.4Z" stroke="white" stroke-width="10"/>
<path id="Vector_2" d="M453 295.6V322" stroke="white" stroke-width="9"/>
<path id="Vector_3" d="M453 586V612.4" stroke="white" stroke-width="9"/>
<path id="Vector_4" d="M294.6 454H321" stroke="white" stroke-width="9"/>
<path id="Vector_5" d="M585 454H611.4" stroke="white" stroke-width="9"/>
<g id="ponteiro">
<path id="Vector 2" d="M426 453H480.5L453.5 558L426 453Z" stroke="white" stroke-width="3"/>
<path id="Vector 1" d="M480.5 453H426L453 348L480.5 453Z" fill="white" stroke="white" stroke-width="3"/>
<path id="Vector_6" d="M452.8 461.6C457.66 461.6 461.6 457.66 461.6 452.8C461.6 447.94 457.66 444 452.8 444C447.94 444 444 447.94 444 452.8C444 457.66 447.94 461.6 452.8 461.6Z" fill="#DFDFDF" stroke="white" stroke-width="2"/>
</g>
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
          className="w-full h-auto max-w-[180px] max-h-[180px] md:max-w-[220px] md:max-h-[220px]"
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
      // Create a ScrollTrigger just to detect when the section is in view
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top center",
        onEnter: () => {
          // Delay the animation start by 1 second
          setTimeout(() => {
            // Create the main timeline without scroll-based timing
            const mainTimeline = gsap.timeline();

            // Animate each item sequentially
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

              // Add element animations to main timeline
              mainTimeline
                .to(element, {
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  duration: 0.1,
                  ease: "power2.out"
                })
                .to(antenna, {
                  opacity: 1,
                  clipPath: 'inset(0 0 0 0)',
                  scale: 1,
                  duration: 0.1,
                  ease: "power2.inOut",
                  immediateRender: false
                }, ">-0.15");

              // Add small delay between items
              mainTimeline.addLabel(`item${index}`, "+=0.1");
            });

            // Animate progress line
            const progressLine = elementsRef.current[evolutionData.length];
            if (progressLine) {
              gsap.set(progressLine, {
                scaleX: 0,
                transformOrigin: 'left left'
              });

              mainTimeline.to(progressLine, {
                scaleX: 1,
                duration: 0.5,
                ease: 'none'
              }, 0);
            }
          }, 250); // 1 second delay
        },
        once: true // Ensure the animation only plays once
      });
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
                    <div className="flex justify-center md:mt-[170px] items-center w-full overflow-hidden filter drop-shadow-xl transition-all duration-300 group-hover:drop-shadow-2xl">
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
