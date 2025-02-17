"use client";

export function StatsSection() {
return (
    <section className="gsap-fade-in py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-blue-900 p-8 text-white sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="gsap-counter text-4xl font-bold" data-target="1000">0</div>
              <p className="mt-2">Clientes Ativos</p>
            </div>
            <div className="text-center">
              <div className="gsap-counter text-4xl font-bold" data-target="50">0</div>
              <p className="mt-2">Indústrias Atendidas</p>
            </div>
            <div className="text-center">
              <div className="gsap-counter text-4xl font-bold" data-target="99">0</div>
              <p className="mt-2">% Satisfação</p>
            </div>
            <div className="text-center">
              <div className="gsap-counter text-4xl font-bold" data-target="30">0</div>
              <p className="mt-2">Anos no Mercado</p>
            </div>
          </div>
        </div>
      </section>
      )}