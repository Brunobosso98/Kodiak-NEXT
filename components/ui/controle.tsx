import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { BarChart3, Wallet, Box, FileText, Building2, LineChart } from "lucide-react";


export function ControleSection() {
  const sectionRef = useRef(null);

  
    const features = [
     { text: "Monitoramento Integral", 
       icon: <BarChart3 className="h-8 w-8 text-blue-400" />,
       videoUrl: "https://www.youtube.com/embed/your-monitoring-video-id",
       details: [
         "Dashboards em tempo real",
         "Alertas automáticos",
         "Indicadores personalizáveis",
         "Relatórios detalhados"
       ]
      },
     { text: "Gestão Financeira Inteligente", icon: <Wallet className="h-8 w-8 text-blue-400" />},
     { text: "Administração de Estoque", icon: <Box className="h-8 w-8 text-blue-400" />},
     { text: "Notas Fiscais e Compliance", icon: <FileText className="h-8 w-8 text-blue-400" />},
     { text: "Foco Industrial", icon: <Building2 className="h-8 w-8 text-blue-400" />},
     { text: "Análise de Dados", icon: <LineChart className="h-8 w-8 text-blue-400" />},
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
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".feature-box"),
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
    );
  }, []);

  return (
    <section ref={sectionRef} className="flex flex-col items-center text-center py-16 px-6 bg-white">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text mb-4">
      Por que escolher a <span className="text-blue-500 font-extrabold">Kodiak</span> 
      </h2>
      <p className="text-gray-600 max-w-2xl">
      Conheça as vantagens de contratar o nosso ERP.
      </p>
      
    <div className="relative flex flex-col md:flex-row mt-12 mr-10">
        <div className="flex flex-col mr-10 space-y-6 md:ml-12 items-end"> 
            {features.slice(0, 3).map((feature, index) => (
                        <div
                        key={index}
                        className={`feature-box relative flex items-center bg-white shadow-lg rounded-xl px-6 py-4 w-72 border border-gray-200 ${
                          index === 1 ? 'mr-10' : ''
                        }`}>
                        <p className="text-blue-900 font-medium flex-1 pt-4 pb-4 whitespace-normal break-words max-w-[200px]">
                            {feature.text}
                        </p>
                            {/* Ícone extrapolando o container */}
                            <div className="absolute right-[-32px] top-1/2 transform -translate-y-1/2 flex items-center justify-center h-16 w-16 bg-white shadow-md border border-gray-200"
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
            <Image src="/kodiak-logo.png" alt="Kodiak Logo" width={215} height={250} className="rounded-full" />
        </div>


        <div className="flex flex-col space-y-6 md:ml-12 items-start"> 
            {features.slice(3).map((feature, index) => (
            <div
                key={index}
                className={`feature-box relative flex items-center bg-white shadow-lg rounded-xl px-6 py-4 w-72 border border-gray-200 ${
                  index === 1 ? 'ml-10' : ''
                }`}>
                <p className="text-blue-900 font-medium flex-1 pt-4 pb-4 whitespace-normal break-words max-w-[200px]">
                  {feature.text}
                </p>
                    {/* Ícone extrapolando o container */}
                    <div className="absolute left-[-32px] top-1/2 transform -translate-y-1/2 flex items-center justify-center h-16 w-16 bg-white shadow-md border border-gray-200"
                    style={{ borderRadius: borderRadiusStyle2[index]}}>
                        <span className="text-purple-600 text-2xl">{feature.icon}</span>
                    </div>
            </div>
        ))}
        </div>
      </div>
    </section>
  );
}