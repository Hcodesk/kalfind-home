import React from 'react';
import Card from './Card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function ServicesSection() {

  const tab = [
    {work : "Électricien", location : "Dakar", img:"/electricienne.png"},
    {work : "Plombier", location : "Dakar", img:"/plombier.png"},
    {work : "Menuisier", location : "Dakar", img:"/menuisier.png"},
  ]
  return (
    <div className='flex  my-6 px-4 flex-col gap-4'>
      <div className="flex gap-1 w-full">
        <span className="flex w-full font-semibold text-xl lg:text-[44px] lg:leading-[48px]">
          Services Les Plus Demandés
        </span>
        <span className="text-red-600 flex items-center justify-end w-full lg:hidden">
            Voir plus
        </span>
      </div>

      <div className="w-full hidden lg:flex border border-[#FFC2C4] my-4"></div>

      <div className="md:hidden">
        <div className="-mr-4 lg:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {tab.map((item, index) => (
                <CarouselItem key={index} className="pl-2 flex items-center justify-center">
                    <Card work={item.work} location={item.location} img={item.img} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      <div className="hidden lg:flex justify-center w-full gap-[40px] ">
        {tab.map((item, index) => (
          <Card key={index} work={item.work} location={item.location} img={item.img} />
        ))}
      </div>
    </div>
  );
}
