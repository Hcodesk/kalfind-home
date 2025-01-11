"use client";


import React from "react";
import Image from "next/image";
import { ArrowUpRight} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";

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
  const services: Services[] = [
    { id: 1, title: "Électricien", ville: "Dakar", image: "/carreleur.png" },
    { id: 2, title: "Plombier", ville: "Dakar", image: "/electricien.avif" },
    { id: 3, title: "Menuisier", ville: "Dakar", image: "/plombier.png" },
    { id: 4, title: "Peintre", ville: "Dakar", image: "/menuisier.png" },
    { id: 5, title: "Plombier", ville: "Dakar", image: "/electricien.avif" },
  ];

  const displayedServices = services.slice(0, 4);

  return (
    <section className="w-full justify-center px-4 md:px-6">
      {/* Header Section Desktop */}
      <div className="hidden md:flex flex-col gap-4 w-full items-start">
        <div className="flex w-full justify-between items-center mb-6 2xl:pr-16">
          <h2 className="text-xl 2xl:text-3xl font-semibold">
            Services Populaires Près De Chez Vous
          </h2>
          <button
            className="text-nowrap text-primary hover:text-white
          transition-colors duration-300 ease-in-out hover:bg-black border text-[8px] md:text-sm  px-3 py-1 rounded"
          >
            Voir plus
          </button>
        </div>

        {/* Desktop view - regular grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
          {displayedServices.map((service, index) => (
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
        </div>
        <div className="-mr-4">
          <Carousel className="w-full">
            <CarouselContent className="">
              {services.map((service, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="">
                    <ServiceCard service={service} />
                  </div>
                </CarouselItem>
              ))}

              <CarouselItem className="pl-2 basis-[20%] flex items-center justify-center">
                <button className="flex-1 text-black transition-transform duration-300 ease-in-out">
                  Voir plus
                </button>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Services }) {
  return (
    <div className="flex flex-col max-w-[380px] gap-4 bg-white rounded-lg overflow-hidden shadow-sm">
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
                Disponible à {service.ville}, ce professionnel est reconnu pour
                son expertise et son sérieux.
              </p>
            </div>
          </div>

          <button className="flex group items-center  transition-all duration-300 ease-in-out lg:max-w-[214px] hover:-translate-y-1 hover:bg-black hover:text-white justify-center w-full py-3 px-4 border border-input rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground">
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeQOdpIbJ1G3veqxHOd2zVtbIIJ0ZE2nRa947CmLxI_acIeig/viewform" className="flex gap-2 ">
              Sélectionner un service <ArrowUpRight className="group-hover:-translate-y-1 group-hover:translate-x-1  transition-transform duration-300 ease-in-out h-4 w-4" />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
