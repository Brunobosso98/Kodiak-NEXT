"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Target, Eye, ArrowRight } from "lucide-react";
import { useState } from "react";

const cardContent = {
  mission: {
    title: "Nossa Missão",
    description: "Simplificar e otimizar a gestão industrial através de tecnologia inovadora.",
    videoUrl: "https://www.youtube.com/embed/your-mission-video-id",
    details: [
      "Desenvolvimento de soluções intuitivas",
      "Foco em resultados mensuráveis",
      "Suporte técnico especializado",
      "Inovação constante"
    ]
  },
  vision: {
    title: "Nossa Visão",
    description: "Ser referência em soluções ERP para o setor industrial.",
    videoUrl: "https://www.youtube.com/embed/your-vision-video-id",
    details: [
      "Expansão global",
      "Liderança em inovação",
      "Excelência em atendimento",
      "Impacto positivo no setor"
    ]
  }
};

export function AboutSection() {
  const [activeCard, setActiveCard] = useState<'mission' | 'vision' | null>(null);

  return (
    <section id="about" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50" />
      <div className="container relative mx-auto px-4">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="relative h-[600px] overflow-hidden rounded-2xl">
              <div className="absolute -left-4 -top-4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
              <div className="absolute -bottom-4 -right-4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
              <Image
                src="/modules/bi.webp"
                alt="Equipe Kodiak"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzMzMzIi8+PC9zdmc+"
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
                O Kodiak ERP é um sistema de gestão especializado no segmento industrial, desenvolvido para proporcionar uma implementação ágil e intuitiva, aliando tecnologia e inteligência para otimizar a tomada de decisão e impulsionar a eficiência dos negócios.
                </p>
              </div>
              <div className="grid gap-8 sm:grid-cols-2">
                <div className="gsap-scale group">
                  <div
                    onClick={() => setActiveCard('mission')}
                    className="content-card group rounded-xl bg-white p-6 shadow-lg transition-all duration-300 cursor-pointer hover:shadow-xl"
                  >
                    <div className="mb-4 inline-block rounded-lg bg-blue-100 p-3 group-hover:bg-blue-200 transition-colors">
                      <Target className="animate-icon h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-blue-900 group-hover:text-blue-700">Missão</h3>
                    <p className="text-gray-600">
                      Simplificar e otimizar a gestão industrial através de tecnologia inovadora.
                    </p>
                    <div className="mt-4 flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-sm">Saiba mais</span>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </div>
                <div className="gsap-scale group">
                  <div
                    onClick={() => setActiveCard('vision')}
                    className="content-card group rounded-xl bg-white p-6 shadow-lg transition-all duration-300 cursor-pointer hover:shadow-xl"
                  >
                    <div className="mb-4 inline-block rounded-lg bg-blue-100 p-3 group-hover:bg-blue-200 transition-colors">
                      <Eye className="animate-icon h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-blue-900 group-hover:text-blue-700">Visão</h3>
                    <p className="text-gray-600">
                      Ser referência em soluções ERP para o setor industrial.
                    </p>
                    <div className="mt-4 flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-sm">Saiba mais</span>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Dialog */}
      <Dialog open={activeCard !== null} onOpenChange={() => setActiveCard(null)}>
        <DialogContent className="sm:max-w-[600px]">
          {activeCard && (
            <>
              <DialogHeader>
                <DialogTitle>{cardContent[activeCard].title}</DialogTitle>
                <DialogDescription>
                  {cardContent[activeCard].description}
                </DialogDescription>
              </DialogHeader>
              <div className="relative aspect-video w-full rounded-lg overflow-hidden mb-4">
                <iframe
                  src={cardContent[activeCard].videoUrl}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Principais Pontos:</h4>
                <ul className="grid gap-2">
                  {cardContent[activeCard].details.map((detail, index) => (
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
