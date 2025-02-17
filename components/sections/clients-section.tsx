'use client';

import Image from 'next/image';
import { ClientCarousel } from '@/components/ui/client-carousel';

export function ClientsSection() {
  return (
    <section id="clients" className="py-20">
      <ClientCarousel clients={[
        {
          name: "Felippe Telhas",
          logo: "/clients/felippetelhas.png",
        },
        {
          name: "Cabral",
          logo: "/clients/cabral.png",
        },
        {
          name: "Guerreiro",
          logo: "/clients/guerreiro.png",
        },
        {
          name: "JJFoods",
          logo: "/clients/jjfoods.png",
        },
        {
          name: "Recreativa",
          logo: "/clients/recreativa.png",
        },
        {
          name: "Viana",
          logo: "/clients/viana.png",
        },
        {
          name: "APAE",
          logo: "/clients/Ativo.png",
        },
        {
          name: "ItaFrig",
          logo: "/clients/Ativo-1.png",
        },
        {
          name: "SLIMA",
          logo: "/clients/Ativo-2.png",
        },
        {
          name: "M. Francar",
          logo: "/clients/Ativo-3.png",
        },
        {
          name: "Ltt",
          logo: "/clients/Ativo-4.png",
        },
        {
          name: "Santa Casa ITAPIRA",
          logo: "/clients/Ativo-5.png",
        },
        {
          name: "Ceramica Formigari",
          logo: "/clients/Ativo-6.png",
        },
        {
          name: "ACJ",
          logo: "/clients/Ativo-7.png",
        },
        {
          name: "Securite",
          logo: "/clients/Ativo-8.png",
        },
        {
          name: "Momesso",
          logo: "/clients/Ativo-9.png",
        },
        {
          name: "Riciluca",
          logo: "/clients/Ativo-10.png",
        },
        {
          name: "PRIMACAF",
          logo: "/clients/Ativo-11.png",
        },
        {
          name: "Sao Jose Isoladores",
          logo: "/clients/Ativo-18.png",
        },
        {
          name: "Crico",
          logo: "/clients/Ativo-20.png",
        },
        {
          name: "Ervas",
          logo: "/clients/Ativo-22.png",
        },
        {
          name: "Ativa",
          logo: "/clients/Ativo-23.png",
        },
        {
          name: "Fulaneto",
          logo: "/clients/Ativo-24.png",
        },
        {
          name: "Fundição Itapira",
          logo: "/clients/Ativo-25.jpg",
        },
        {
          name: "ISOPOWER",
          logo: "/clients/Ativo-26.png",
        },
        {
          name: "ITASCAP",
          logo: "/clients/Ativo-27.png",
        },
        {
          name: "JSA",
          logo: "/clients/Ativo-28.png",
        },
        {
          name: "KSK",
          logo: "/clients/Ativo-29.png",
        },
        {
          name: "FInelli",
          logo: "/clients/Ativo-30.png",
        },
        {
          name: "Confor",
          logo: "/clients/Ativo-31.png",
        },
        {
          name: "Rossi locações",
          logo: "/clients/Ativo-32.jpg",
        },
        {
          name: "Scapex",
          logo: "/clients/Ativo-33.png",
        },
        {
          name: "SEMS",
          logo: "/clients/Ativo-34.png",
        },
        {
          name: "SingleShot",
          logo: "/clients/Ativo-35.png",
        },
        {
          name: "Soberano GRILL",
          logo: "/clients/Ativo-36.png",
        },
        {
          name: "Soluttion",
          logo: "/clients/Ativo-37.jpg",
        },
        {
          name: "Viana",
          logo: "/clients/Ativo-38.png",
        },
        {
          name: "Viana",
          logo: "/clients/Ativo-39.png",
        },
        {
          name: "Viana",
          logo: "/clients/Ativo-40.png",
        },
        {
          name: "Viana",
          logo: "/clients/Ativo-41.png",
        },
        {
          name: "Viana",
          logo: "/clients/Ativo-42.png",
        },
        {
          name: "Viana",
          logo: "/clients/Ativo-43.png",
        },
        {
          name: "Viana",
          logo: "/clients/Ativo-44.png",
        },
        {
          name: "Viana",
          logo: "/clients/Ativo-45.png",
        },
      ]} />
    </section>
  );
}