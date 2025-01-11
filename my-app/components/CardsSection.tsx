import React from 'react'
import Card from './Card'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/components/ui/carousel";

export default function CardsSection() {
    const tab = [
        {work : "Électricien", location : "Dakar", img:"/electricienne.png", textSize:'text-[14px] ', titleSize:'text-[20px] ', height:'h-[224.29px]', gap:'gap-[20.55px] '},
        {work : "Plombier", location : "Dakar", img:"/plombier.png", textSize:'text-[14px] ', titleSize:'text-[20px] ', height:'h-[224.29px]', gap:'gap-[20.55px] '},
        {work : "Menuisier", location : "Dakar", img:"/menuisier.png", textSize:'text-[14px] ', titleSize:'text-[20px] ', height:'h-[224.29px]', gap:'gap-[20.55px] '},
        {work : "Peintre", location : "Dakar", img:"/peintre.png", textSize:'text-[14px] ', titleSize:'text-[20px] ', height:'h-[224.29px]', gap:'gap-[20.55px] '},]
  return (
   <section className="px-4 my-14">
        <div className="-mr-4 2xl:hidden">
          <Carousel className="w-full">
            <CarouselContent className="">
              {tab.map((item, index) => (
                <CarouselItem key={index} className="pl-2 basis-full sm:basis-1/2 lg:basis-1/3 flex items-center justify-center">
                        <Card key={index} work={item.work} location={item.location} img={item.img} textSize={item.textSize} titleSize={item.titleSize} height={item.height} gap={item.gap} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

          <div className="hidden 2xl:flex justify-center gap-4">
            {tab.map((item, index) => (
              <Card key={index} {...item} />
            ))}
          </div>
   </section>
  )
}