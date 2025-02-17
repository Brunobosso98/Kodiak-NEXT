"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { BarChart3, Box, Building2, FileText, LineChart, Wallet, ArrowRight } from "lucide-react";
import { useState } from "react";

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

export function BenefitsSection() {
  const [activeBenefit, setActiveBenefit] = useState<number | null>(null);

  return (
    <section id="benefits" className="gsap-fade-in py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-white md:text-5xl">
          Por que escolher a Kodiak?
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefitDetails.map((benefit, index) => (
            <div 
              key={index} 
              onClick={() => setActiveBenefit(index)}
              className="group relative overflow-hidden rounded-xl bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10 cursor-pointer"
            >
              <div className="relative z-10 mx-auto max-w-2xl text-center">
                <div className="inline-flex rounded-lg bg-blue-400/10 p-3  mb-6">
                  {index === 0 && <BarChart3 className="animate-icon h-8 w-8 text-blue-400" />}
                  {index === 1 && <Wallet className="animate-icon h-8 w-8 text-blue-400" />}
                  {index === 2 && <Box className="animate-icon h-8 w-8 text-blue-400" />}
                  {index === 3 && <FileText className="animate-icon h-8 w-8 text-blue-400" />}
                  {index === 4 && <Building2 className="animate-icon h-8 w-8 text-blue-400" />}
                  {index === 5 && <LineChart className="animate-icon h-8 w-8 text-blue-400" />}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
                <div className="mt-4 flex items-center justify-center text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm">Saiba mais</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Modal */}
      <Dialog open={activeBenefit !== null} onOpenChange={() => setActiveBenefit(null)}>
        <DialogContent className="sm:max-w-[600px]">
          {activeBenefit !== null && (
            <>
              <DialogHeader>
                <DialogTitle>{benefitDetails[activeBenefit].title}</DialogTitle>
                <DialogDescription>
                  {benefitDetails[activeBenefit].description}
                </DialogDescription>
              </DialogHeader>
              <div className="relative aspect-video w-full rounded-lg overflow-hidden mb-4">
                <iframe
                  src={benefitDetails[activeBenefit].videoUrl}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Principais Recursos:</h4>
                <ul className="grid gap-2">
                  {benefitDetails[activeBenefit].details.map((detail, index) => (
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
