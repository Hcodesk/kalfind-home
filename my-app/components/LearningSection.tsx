import React from 'react';
import LearningCard from './LearningCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function LearningSection() {
  const tab = [
    {title : "Formation Électricien", img : "/electricien2.png"},
    {title : "Formation en Menuisierie", img : "/menuisier2.png"},
    {title : "Formation en Plomberie", img : "/plombier3.png"},
  ]

  return (
    <section className='container mt-6 mx-auto md:px-10 2xl:px-[370px] px-4 '>
      <div className='flex flex-col max-w-[433px] mb-12'>
        <h1 className="font-semibold text-xl lg:text-[44px] leading-tight mb-4">
          Kalfind Academy
        </h1>
        <p className="text-base lg:text-lg text-[#666666]">
          Votre espace de formation e-learning pour acquérir des
          compétences et devenir un professionnel de qualité
        </p>
      </div>

      <div className="w-full hidden lg:block h-px bg-[#FFC2C4] mb-12"></div>

      <div className='hidden xl:grid xl:grid-cols-3 gap-8 max-w-6xl mx-auto'>
        {tab.map((item, index) => (
          <LearningCard key={index} title={item.title} img={item.img}/>
        ))}
      </div>

      <div className="xl:hidden">
        <Carousel className="w-full">
          <CarouselContent className="-ml-4">
            {tab.map((item, index) => (
              <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2">
                <LearningCard title={item.title} img={item.img} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}

