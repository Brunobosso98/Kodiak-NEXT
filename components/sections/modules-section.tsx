"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ModuleDetailsModal } from "@/components/ui/module-details-modal";
import { ArrowRight, ArrowLeft, BoxIcon, ShoppingCart, LineChart, Truck, TrendingUp } from "lucide-react";
import moduleData, { ModuleKey } from "@/data/module-data";

export function ModulesSection() {
  const [activeModule, setActiveModule] = useState<ModuleKey>('inventory');
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="modules" className="relative min-h-[600px] md:min-h-[800px] overflow-hidden">
      {/* Background Image - Otimizado para performance */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.8)), url(${moduleData[activeModule]?.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          willChange: 'opacity',
          contain: 'paint'
        }}
      />
      {/* Content */}
      <div className="relative h-auto">
        <div className="container mx-auto grid h-auto grid-cols-1 md:grid-cols-12 gap-8 px-4 py-20">
          {/* Left Side - Module Info */}
          <div className="col-span-full md:col-span-4 flex flex-col justify-center h-full">
            <div className="space-y-4 md:space-y-6 h-full flex flex-col justify-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                {moduleData[activeModule].title}
              </h2>
              <div className="h-auto">
                <p className="text-lg text-gray-200">
                  {moduleData[activeModule].description}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {moduleData[activeModule].features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="rounded-full bg-white/20 p-1">
                      <ArrowRight className="h-3 w-3 md:h-4 md:w-4 text-white" />
                    </div>
                    <span className="text-sm md:text-base text-gray-200">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                <Button
                  size="lg"
                  className="w-full md:w-auto bg-white/20 text-white backdrop-blur-sm hover:bg-white/30"
                  onClick={() => setIsModalOpen(true)}
                >
                  Saiba mais
                </Button>

                {/* Navigation Controls */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => {
                      const keys = Object.keys(moduleData) as ModuleKey[];
                      const currentIndex = keys.indexOf(activeModule);
                      const prevIndex = currentIndex === 0 ? keys.length - 1 : currentIndex - 1;
                      setActiveModule(keys[prevIndex]);
                    }}
                    className="rounded-full bg-white/20 p-2 backdrop-blur-sm hover:bg-white/30"
                  >
                    <ArrowLeft className="h-4 w-4 md:h-6 md:w-6 text-white" />
                  </button>
                  <div className="flex-1">
                    <div className="relative h-0.5 bg-white/20">
                      <div
                        className="absolute h-0.5 bg-white transition-all duration-300"
                        style={{
                          width: `${(Object.keys(moduleData).indexOf(activeModule) + 1) * (100 / Object.keys(moduleData).length)}%`
                        }}
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      const keys = Object.keys(moduleData) as ModuleKey[];
                      const currentIndex = keys.indexOf(activeModule);
                      const nextIndex = currentIndex === keys.length - 1 ? 0 : currentIndex + 1;
                      setActiveModule(keys[nextIndex]);
                    }}
                    className="rounded-full bg-white/20 p-2 backdrop-blur-sm hover:bg-white/30"
                  >
                    <ArrowRight className="h-4 w-4 md:h-6 md:w-6 text-white" />
                  </button>
                  <div className="text-right text-xl md:text-2xl font-bold text-white">
                    {(Object.keys(moduleData).indexOf(activeModule) + 1).toString().padStart(2, '0')}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Module Cards */}
          <div className="col-span-full md:col-span-8 flex flex-col justify-center h-full">
            {/* Slider Container */}
              <div className="absolute -top-6 left-0 right-0 flex justify-center gap-2 md:hidden">
                {Object.keys(moduleData).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveModule(key as ModuleKey)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeModule === key ? 'w-4 bg-white' : 'w-2 bg-white/40'
                    }`}
                  />
                ))}
              </div>

              {/* Slider Content */}
              <div className="overflow-hidden touch-pan-x h-full">
                <div
                  className="flex gap-4 transition-transform duration-500 cursor-grab active:cursor-grabbing px-2 md:px-0 h-full"
                  style={{
                    transform: `translateX(calc(-${Object.keys(moduleData).indexOf(activeModule)} * ${
                      isMobile ? "49%" : "35%"
                    }))`,
                  }}
                  onTouchStart={(e) => {
                    const touch = e.touches[0];
                    const startX = touch.clientX;
                    const element = e.currentTarget;
                    let startTime = Date.now();

                    const handleTouchMove = (e: TouchEvent) => {
                      const touch = e.touches[0];
                      const deltaX = touch.clientX - startX;
                      const deltaTime = Date.now() - startTime;

                      if (Math.abs(deltaX) > 20 && deltaTime > 100) {
                        const keys = Object.keys(moduleData) as ModuleKey[];
                        const currentIndex = keys.indexOf(activeModule);

                        if (deltaX > 0 && currentIndex > 0) {
                          setActiveModule(keys[currentIndex - 1]);
                        } else if (deltaX < 0 && currentIndex < keys.length - 1) {
                          setActiveModule(keys[currentIndex + 1]);
                        }

                        element.removeEventListener('touchmove', handleTouchMove);
                      }
                    };

                    element.addEventListener('touchmove', handleTouchMove);
                    element.addEventListener('touchend', () => {
                      element.removeEventListener('touchmove', handleTouchMove);
                    }, { once: true });
                  }}
                >
                  {/* Reduzido para apenas os módulos necessários para melhorar performance */}
                  {Object.entries(moduleData).map(([key, module], index) => (
                    <div
                      key={`${key}-${index}`}
                      onClick={() => setActiveModule(key as ModuleKey)}
                      className={`relative flex-shrink-0 w-[calc(48%)] md:w-[calc(100%/3)] h-[180px] md:h-full overflow-hidden rounded-xl cursor-pointer transition-all duration-300 ${
                        activeModule === key ? 'scale-100 opacity-100' : 'scale-95 opacity-70'
                      }`}
                    >
                      <Image
                        src={module.image}
                        alt={module.title}
                        fill
                        className="object-cover"
                        loading="lazy"
                        sizes="(max-width: 768px) 48vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-2 md:p-3 flex flex-col justify-end">
                        <div className="mb-1 md:mb-2 w-min rounded-lg bg-white/20 p-1.5 md:p-3 backdrop-blur-sm">
                          {key === 'inventory' && <BoxIcon className="h-3 w-3 md:h-6 md:w-6 text-white" />}
                          {key === 'purchasing' && <ShoppingCart className="h-3 w-3 md:h-6 md:w-6 text-white" />}
                          {key === 'vendas' && <LineChart className="h-3 w-3 md:h-6 md:w-6 text-white" />}
                          {key === 'logistica' && <Truck className="h-3 w-3 md:h-6 md:w-6 text-white" />}
                          {key === 'analytics' && <TrendingUp className="h-3 w-3 md:h-6 md:w-6 text-white" />}
                        </div>
                        <h3 className="text-sm md:text-2xl font-medium text-white mb-0.5 md:mb-2">
                          {module.title}
                        </h3>
                        <p className="text-[10px] md:text-base text-gray-200 line-clamp-2">
                          {module.description}
                        </p>
                      </div>

                      {/* Swipe Indicator - Only shows on mobile */}
                      {isMobile && index === 0 && (
                        <div className="absolute inset-0 flex items-center justify-end pointer-events-none md:hidden">
                          <div className="animate-pulse-x mr-2 flex items-center text-white/80">
                            <ArrowLeft className="h-4 w-4" />
                            <span className="text-xs ml-1">Deslize</span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* Module Details Modal */}
      <ModuleDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        module={moduleData[activeModule]}
      />
    </section>
  );
}
