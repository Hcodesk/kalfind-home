"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight } from 'lucide-react';
import Lenis from '@studio-freight/lenis';

interface Services {
  id: number;
  title: string;
  ville: string;
  image: string;
}

const seeMoreButtonClass = `
  absolute right-0 top-1/2 -translate-y-1/2 
  bg-white text-primary border border-primary 
  px-3 py-2 rounded-l-md shadow-md
  z-50 text-sm font-medium
  hover:bg-primary hover:text-white transition-colors
`;

export default function ServicesSection() {
  const [isEnd, setIsEnd] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);

  const services: Services[] = [
    { id: 1, title: "Électricien", ville: "Dakar", image: "/carreleur.png" },
    { id: 2, title: "Plombier", ville: "Dakar", image: "/electricien.avif" },
    { id: 3, title: "Menuisier", ville: "Dakar", image: "/plombier.png" },
    { id: 4, title: "Peintre", ville: "Dakar", image: "/menuisier.png" },
    { id: 5, title: "Plombier", ville: "Dakar", image: "/electricien.avif" },
  ];

  useEffect(() => {
    // Initialisation de Lenis
    lenisRef.current = new Lenis({
      duration: 1.6, // Durée du défilement fluide
    });

    // Fonction de rafraîchissement pour Lenis
    const raf = (time: number) => {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setIsEnd(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  const scrollSmoothly = () => {
    if (carouselRef.current) {
      lenisRef.current?.scrollTo(carouselRef.current, { offset: 300 });
    }
  };

  return (
    <section className="w-full justify-center px-4 md:px-6">
      {/* Header Section Desktop */}
      <div className="hidden md:flex flex-col gap-4 w-full items-start">
        <div className="flex w-full justify-between items-center mb-6 2xl:pr-16">
          <h2 className="text-xl 2xl:text-3xl font-semibold">
            Services Populaires Près De Chez Vous
          </h2>
          <button className="text-nowrap text-primary border text-[8px] md:text-sm  px-3 py-1 rounded">Voir plus</button>
        </div>

        {/* Desktop view - regular grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
          {services.slice(0, 4).map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>

      {/* Mobile view - swipeable carousel */}
      <div className="md:hidden relative">
        <div className="flex w-full justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">
            Services Populaires Près De Chez Vous
          </h2>
        </div>
        {/* Utilisation de la ref et activation du scroll horizontal */}
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="overflow-x-scroll whitespace-nowrap flex gap-4"
          style={{ scrollBehavior: 'unset' }} // Désactive le scroll behavior CSS, nous contrôlons via JS
        >
          {services.map((service, index) => (
            <div key={index} className="pl-2 flex-shrink-0 w-[85%]">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

        {/* Bouton affiché uniquement lorsque l'on atteint la fin */}
        {isEnd && (
          <button
            className={seeMoreButtonClass}
            onClick={scrollSmoothly} // Ajout du scroll fluide lors du clic
          >
            Voir plus →
          </button>
        )}
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Services }) {
  return (
    <div className="flex flex-col w-[270px] 2xl:w-[380px] gap-4 bg-white rounded-lg overflow-hidden shadow-sm">
      <div className="relative rounded-2xl w-full h-[200px] overflow-hidden">
        <Image
          src={service.image || "/plombier.png"}
          fill
          className="object-cover"
          alt={service.title}
        />
      </div>

      <div className="p-4">
        <div className="flex flex-col gap-4">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">{service.title}</h3>
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <Image
                src="/MapPin.svg"
                width={16}
                height={16}
                alt="Icône de localisation"
                className="mt-1"
              />
              <p className="flex-1">
                Disponible à {service.ville}, ce professionnel est reconnu pour son expertise et son sérieux.
              </p>
            </div>
          </div>

          <button className="flex items-center justify-center gap-2 w-full py-3 px-4 border border-input rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
            Sélectionner un service
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
