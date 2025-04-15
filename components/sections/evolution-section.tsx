"use client";

import Image from 'next/image';

export function EvolutionSection() {
  return (
    <section
      className="relative min-h-[60vh] bg-gradient-to-b from-gray-100 to-gray-200 py-10 overflow-hidden"
    >
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
            Como vamos aprimorar sua gestão
          </h2>
        </div>
        <Image
          src="/evolution.png"
          alt="Evolution"
          width={1200}
          height={600}
          style={{
            maxWidth: "100%",
            height: "auto"
          }}
        />
      </div>
    </section>
  );
}
