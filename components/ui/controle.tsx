import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import { ArrowRight, BarChart3, Wallet, Box, FileText, Building2, LineChart } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";


export function ControleSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  
  const features = [
    { text: "Monitoramento Integral", 
      description: "Controle total da operação em tempo real",
      icon: <BarChart3 className="h-8 w-8 text-blue-400" />, 
      videoUrl: "https://www.youtube.com/watch?v=vqrnkXhLIYU", 
      details: ["Dashboards em tempo real", "Alertas automáticos", "Indicadores personalizáveis", "Relatórios detalhados"]
    },
    { text: "Gestão Financeira Inteligente", 
      description: "Otimize fluxo de caixa e decisões financeiras",
      icon: <Wallet className="h-8 w-8 text-blue-400" />, 
      videoUrl: "https://www.youtube.com/embed/your-monitoring-video-id", 
      details: ["Gestão de fluxo de caixa", "Análises preditivas", "Automação de pagamentos", "Relatórios financeiros"]
    },
    { text: "Administração de Estoque", 
      description: "Evite desperdícios e melhore o abastecimento",
      icon: <Box className="h-8 w-8 text-blue-400" />, 
      videoUrl: "https://www.youtube.com/embed/your-monitoring-video-id", 
      details: ["Controle automatizado", "Gestão de fornecedores", "Reposição inteligente", "Inventário atualizado"]
    },
    { text: "Notas Fiscais e Compliance", 
      description: "Emissão ágil e dentro das normas fiscais",
      icon: <FileText className="h-8 w-8 text-blue-400" />, 
      videoUrl: "https://www.youtube.com/embed/your-monitoring-video-id", 
      details: ["Emissão automática de NF", "Conformidade tributária", "Relatórios fiscais", "Validação eletrônica"]
    },
    { text: "Foco Industrial",
      description: "Desenvolvido para atender operações fabris", 
      icon: <Building2 className="h-8 w-8 text-blue-400" />, 
      videoUrl: "https://www.youtube.com/embed/your-monitoring-video-id", 
      details: ["Otimização de produção", "Gestão de qualidade", "Automação de processos", "Análises de eficiência"]
    },
    { text: "Análise de Dados", 
      description: "Insights poderosos para tomada de decisão",
      icon: <LineChart className="h-8 w-8 text-blue-400" />, 
      videoUrl: "https://www.youtube.com/embed/your-monitoring-video-id", 
      details: ["Big Data aplicado", "Gráficos dinâmicos", "Relatórios customizados", "Previsão de tendências"]
    },
  ];

    const borderRadiusStyle = [
      "50% 50% 0% 50%",
      "50% 50% 50% 50%",
      "50% 0% 50% 50%",
    ]; 

    const borderRadiusStyle2 = [
      "50% 50% 50% 0%",
      "50% 50% 50% 50%",
      "0% 50% 50% 50%",
    ]
  
    useEffect(() => {
      if (!sectionRef.current) return; // Verifica se o elemento existe
    
      gsap.fromTo(
        sectionRef.current.querySelectorAll(".feature-box"),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out", 
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } 
        }
      );
    }, []);    

  return (
    <section ref={sectionRef} className="flex flex-col items-center text-center py-16 px-6 bg-white">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-900 text-transparent bg-clip-text mb-4">
      Por que escolher a <span style={{ fontSize: '2.5rem'}} className="sora text-blue-500 font-extrabold">Kodiak?</span> 
      </h2>
      <p className="text-blue-900 max-w-2xl">
      Conheça as vantagens de contratar o nosso ERP.
      </p>
      
    <div className="relative flex flex-col md:flex-row mt-12 mr-10">
        <div className="flex flex-col mr-10 space-y-6 md:ml-12 items-end"> 
            {features.slice(0, 3).map((feature, index) => (
            <div
              key={index}
              onClick={() => setActiveFeature(index)}
              className={`feature-box relative flex items-center bg-white shadow-lg rounded-xl px-6 py-4 w-72 border border-gray-200 cursor-pointer hover:bg-blue-50 transition ${
               index === 1 ? 'mr-10' : ''
              }`}>
                <p className="text-blue-900 font-medium flex-1 pt-4 pb-4 whitespace-normal break-words max-w-[200px]">
                  {feature.text}
                </p>
                  {/* Ícone extrapolando o container */}
                  <div className="absolute right-[-32px] top-1/2 transform -translate-y-1/2 flex items-center justify-center h-16 w-16 bg-white shadow-md border border-gray-200 hover:bg-blue-50 transition"
                       style={{ borderRadius: borderRadiusStyle[index] }}>
                        <span className="text-purple-600 text-2xl">
                          {feature.icon}
                        </span>
                  </div>
            </div>
        ))}
        </div>

        <div className="relative flex items-center justify-center rounded-full border-8 border-blue-300 p-10 mx-6 my-8 shadow-lg">
            <div className="absolute w-full h-full rounded-full border-8 opacity-50 outline outline-8 outline-blue-200 outline-offset-8"></div>
            <Image src="/kodiak-logo.webp" alt="Kodiak Logo" width={215} height={250} className="rounded-full" />
        </div>


        <div className="flex flex-col space-y-6 md:ml-12 items-start"> 
            {features.slice(3).map((feature, index) => (
            <div
                key={index}
                onClick={() => setActiveFeature(index + 3)}
                className={`feature-box relative flex items-center bg-white shadow-lg rounded-xl px-6 py-4 w-72 border border-gray-200 cursor-pointer hover:bg-blue-50 transition ${
                  index === 1 ? 'ml-10' : ''
                }`}>
                <p className="text-blue-900 font-medium flex-1 pt-4 pb-4 whitespace-normal break-words max-w-[200px]">
                  {feature.text}
                </p>
                  {/* Ícone extrapolando o container */}
                  <div className="absolute left-[-32px] top-1/2 transform -translate-y-1/2 flex items-center justify-center h-16 w-16 bg-white shadow-md border border-gray-200 hover:bg-blue-50 transition"
                    style={{ borderRadius: borderRadiusStyle2[index]}}>
                     <span className="text-purple-600 text-2xl">
                      {feature.icon}
                     </span>
                  </div>
            </div>
        ))}
        </div>
      </div>
      <Dialog open={activeFeature !== null} onOpenChange={() => setActiveFeature(null)}>
        <DialogContent className="sm:max-w-[600px]">
          {activeFeature !== null && (
            <>
              <DialogHeader>
                <DialogTitle>{features[activeFeature].text}</DialogTitle>
                <DialogDescription>{features[activeFeature].description}</DialogDescription>
              </DialogHeader>
              <div className="relative aspect-video w-full rounded-lg overflow-hidden mb-4">
                <iframe
                  src={features[activeFeature].videoUrl}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Principais Recursos:</h4>
                <ul className="grid gap-2">
                  {features[activeFeature].details.map((detail, index) => (
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
  );
}