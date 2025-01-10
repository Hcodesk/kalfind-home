"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import LearningCard from "./LearningCard";

interface Learning {
  id: number;
  title: string;
  duration: string;
  description: string;
  image: string;
}

export default function LearningSection() {
  const learnings: Learning[] = [
    { id: 1, title: "Comment devenir électricien ?", duration: "1 Heure", description: "Découvrez les étapes pour devenir un électricien qualifié", image: "/electricienne.png" },
    { id: 2, title: "Les bases de la plomberie", duration: "45 Minutes", description: "Apprenez les fondamentaux de la plomberie résidentielle", image: "/plombier.png" },
    { id: 3, title: "Menuiserie pour débutants", duration: "1 Heure 30", description: "Initiez-vous aux techniques de base de la menuiserie", image: "/menuisierF.png" },
    { id: 4, title: "Techniques de peinture d'interieur", duration: "1 Heure", description: "Maîtrisez les techniques de peinture professionnelles", image: "/plombier2.png" },
    { id: 5, title: "Introduction à la décoration", duration: "2 Heures", description: "Découvrez les principes de base de la décoration d'intérieur", image: "/decorateur interieur.png" },
  ];

  // Limiter à 4 cartes pour l'affichage 2xl
  const displayedLearnings = learnings.slice(0, 4);

  return (
    <section className="w-full justify-center px-4 md:px-6">
      {/* Header Section */}
      <div className="hidden md:block">
        <div className="flex w-full justify-between items-center mb-6">
          <h2 className="text-xl lg:text-3xl font-semibold">
            Apprenez de nouvelles compétences
          </h2>
          <button className="text-primary border text-[8px] md:text-sm whitespace-nowrap px-3 py-1 rounded">Voir plus</button>
        </div>

        {/* Desktop view - regular grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
          {(typeof window !== 'undefined' && window.innerWidth >= 720 ? displayedLearnings : learnings).map((learning, index) => (
            <LearningCard 
              key={learning.id}
              img={learning.image}
              duration={learning.duration}
              description={learning.description}
              title={learning.title}
            />
          ))}
        </div>
      </div>

      {/* Mobile view - swipeable carousel with partial next slide visible */}
      <div className="md:hidden">
        <div className="flex w-full justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">
            Apprenez de nouvelles compétences
          </h2>
          <button className="hidden text-primary text-sm border px-3 py-1 rounded">Voir plus</button>
        </div>
        <div className="-mr-4">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2">
              {learnings.map((learning, index) => (
                <CarouselItem key={learning.id} className="pl-2 basis-[85%]">
                  <LearningCard 
                    img={learning.image}
                    duration={learning.duration}
                    description={learning.description}
                    title={learning.title}
                  />
                </CarouselItem>
              ))}
              <CarouselItem className="pl-2 basis-[20%] flex items-center justify-center">
                  <button className="flex-1 text-black">Voir plus</button>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

