import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ModuleDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  module: {
    title: string;
    description: string;
    image: string;
    features: string[];
  };
}

export function ModuleDetailsModal({ isOpen, onClose, module }: ModuleDetailsModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'features'>('overview');

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl w-[90vw] max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-gray-800 text-white border-gray-800">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold text-white">{module.title}</DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-gray-400 hover:text-white hover:bg-gray-800"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        {/* Tabs */}
        <div className="flex gap-4 border-b border-gray-800 mb-6">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-2 px-1 transition-all ${
              activeTab === 'overview'
                ? 'text-white border-b-2 border-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Visão Geral
          </button>
          <button
            onClick={() => setActiveTab('features')}
            className={`pb-2 px-1 transition-all ${
              activeTab === 'features'
                ? 'text-white border-b-2 border-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Funcionalidades
          </button>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {activeTab === 'overview' ? (
            <>
              <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
                <Image
                  src={module.image}
                  alt={module.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-gray-300">{module.description}</p>
              </div>
              <div className="pt-4">
                <Button
                  onClick={() => setActiveTab('features')}
                  className="bg-white text-gray-900 hover:bg-gray-200"
                >
                  Ver Funcionalidades
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {module.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-gray-800/50 backdrop-blur-sm"
                >
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-white">{feature}</h4>
                    <p className="text-sm text-gray-400 mt-1">
                      Otimize seus processos com nossa solução integrada
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
