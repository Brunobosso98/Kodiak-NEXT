"use client";

import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface Client {
  name: string;
  logo: string;
}

interface ClientCarouselProps {
  clients: Client[];
  className?: string;
}

export function ClientCarousel({ clients, className }: ClientCarouselProps) {
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      skipSnaps: false,
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
      })
    ]
  );

  return (
    <div className={cn("w-full overflow-hidden bg-gradient-to-r from-gray-50 via-white to-gray-50", className)}>
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          Empresas que confiam em nós
        </h2>
        
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="relative flex-[0_0_250px] min-w-0 transition-transform hover:scale-105"
              >
                <div className="group relative h-32 w-full overflow-hidden rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative h-full w-full">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain p-4 grayscale transition-all group-hover:grayscale-0"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}