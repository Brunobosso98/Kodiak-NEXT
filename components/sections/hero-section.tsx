"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative h-[90vh] w-full">
      <Image
        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
        alt="Industrial Background"
        fill
        className="object-cover brightness-50"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container text-center text-white">
          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
            Gestão Inteligente para sua
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              {" "}
              Indústria Evoluir!
            </span>
          </h1>
          <p className="hero-description text-lg text-blue-200 md:text-xl mb-4">
            Automação, controle e eficiência em um só sistema ERP.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="bg-blue-400 text-blue-950 hover:bg-blue-300 hover:scale-105 transition-all duration-300"
              onClick={() =>
                window.open(
                  "https://wa.me/5519989386246?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Kodiak%20ERP.",
                  "_blank"
                )
              }
            >
              Solicitar uma Demonstração
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-primary text-white hover:bg-white/40"
              onClick={() => {
                const modulesSection = document.getElementById("modules");
                if (modulesSection) {
                  modulesSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
            >
              Conheça os Módulos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
