import React from "react";
import { Search } from "lucide-react";
import Image from "next/image";


export default function HeroSection() {
  return (
    <section className="flex 2xl:justify-between items-center 2xl:gap-6 mt-12 ">
      <div className="flex flex-col gap-6 items-center justify-center p-8 lg:w-[711px]  2xl:w-2/4">
        <div className="flex  flex-col text-center lg:leading-[40px] lg:text-start text-xl md:text-[24px] xl:text-[48px] 3xl:text-6xl font-medium leading-none text-black  whitespace-wrap">
          <span>Les professionnels de qualité
            pour vos travaux de construction,
            rénovation, dépannage et entretien de maison </span>
          <span className="text-red-600 font-semibold ">au meilleur prix</span>
        </div>

        {/* Input de recherche */}
        <div className="relative w-full flex items-center">
          <input
            type="text"
            placeholder="De quoi avez vous besoin d'aide ?"
            className="h-12 text-sm border border-[#111111] w-full md:h-[68px] placeholder:text-[#111111] px-4 rounded-[40px] placeholder:text-sm outline-[#FFB543]"
          />
          <div className="absolute right-3 flex justify-center items-center text-red-600 md:text-white md:bg-red-600 rounded-full w-[47px] h-[47px]">
            <Search />
          </div>
        </div>

        {/* Boutons Desktop des catégories */}
        <div className="hidden md:flex justify-center lg:justify-start relative flex-wrap gap-4 w-full ">
          {[
            { icon: "/Lightning.svg", label: "Électricien" },
            { icon: "/Pipe.svg", label: "Plombier" },
            { icon: "/Log.svg", label: "Menuisier" },
            { icon: "/PaintRoller.svg", label: "Peintre" },
            { icon: "/Wall.svg", label: "Maçon" },
            { icon: "/GridFour.svg", label: "Carreleur" },
            { icon: "/dots.svg", label: "Voir plus" },
          ].map((item, index) => (
            <span
              key={index}
              className=" hidden md:flex items-center border-[#111111] motion-preset-expand justify-center gap-2 
              border border-bgBlack rounded-[40px] w-[152px] h-[58px] lg:h-[46px] "
            >
              <Image src={item.icon} alt="" width={24} height={24} /> {item.label}
            </span>
          ))}
        </div>

        {/* Boutons Desktop des catégories */}
        <div className="grid md:hidden grid-cols-3 gap-2 w-full max-w-md mx-auto mt-4">
        {[
          { icon: "/Lightning.svg", label: "Électricien" },
          { icon: "/Pipe.svg", label: "Plombier" },
          { icon: "/Log.svg", label: "Menuisier" },
          { icon: "/PaintRoller.svg", label: "Peintre" },
          { icon: "/Wall.svg", label: "Maçon" },
          { icon: "/GridFour.svg", label: "Carreleur" },
        ].map((item, index) => (
          <span
            key={index}
            className="flex flex-col items-center justify-center p-2 gap-1
              border border-[#111111] rounded-lg text-sm"
          >
            <Image src={item.icon} alt="" width={20} height={20} />
            {item.label}
          </span>
        ))}
      </div>

      <div className="md:hidden w-full">
          <span className="text-red-600"> Voir plus</span>
      </div>

      </div>

      <div className="hidden lg:block ">
        <Image src="/heroImg.svg" width={560} height={588} alt="" className="xl:w-full 3xl:scale-110 3xl:-translate-x-20 object-contain " />
      </div>
    </section>
  );
}
