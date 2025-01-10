"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Services {
  id: number;
  title: string;
  ville: string;
  image: string;
}

export default function ServicesSection() {
  const services: Services[] = [
    { id: 1, title: "Électricien", ville: "Dakar", image: "/carreleur.png" },
    { id: 2, title: "Plombier", ville: "Dakar", image: "/electricien.avif" },
    { id: 3, title: "Menuisier", ville: "Dakar", image: "/plombier.png" },
    { id: 4, title: "Peintre", ville: "Dakar", image: "/menuisier.png" },
    { id: 5, title: "Plombier", ville: "Dakar", image: "/electricien.avif" },
  ];

  // Limiter à 4 cartes pour l'affichage 2xl
  const displayedServices = services.slice(0, 4);

  return (
    <section className="w-full justify-center px-4 md:px-6">
      {/* Header Section */}
      <div className="hidden md:block">
        <div className="flex w-full justify-between items-center mb-6">
          <h2 className="text-xl  lg:text-3xl font-semibold">
            Services Populaires Près De Chez Vous
          </h2>
          <button className="text-primary border text-[8px] md:text-sm whitespace-nowrap">Voir plus</button>
        </div>

        {/* Desktop view - regular grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
          {(window.innerWidth >= 720 ? displayedServices : services).map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>

      {/* Mobile view - swipeable carousel with partial next slide visible */}
      <div className="md:hidden">
        <div className="flex w-full justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">
            Services Populaires Près De Chez Vous
          </h2>
          <button className="text-primary text-sm">Voir plus</button>
        </div>
        <div className="-mr-4">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2">
              {services.map((service, index) => (
                <CarouselItem key={index} className="pl-2 basis-[85%]">
                  <ServiceCard service={service} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Services }) {
  return (
    <div className="flex flex-col w-[270px] 2xl:w-[340px] gap-4 bg-white rounded-lg overflow-hidden shadow-sm">
      <div className="relative rounded-lg w-full h-[200px] overflow-hidden">
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
                alt=""
                className="mt-1"
              />
              <p className="flex-1">
                Lorem ipsum dolor sit amet consectetur adipiscing elit
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

