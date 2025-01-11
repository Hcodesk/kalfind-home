import React from "react";
import { Search } from "lucide-react";
import Image from "next/image";


export default function HeroSection() {
  return (
    <section className="flex justify-center gap-6 lg:py-8 ">
      <div className="flex flex-col gap-6 items-center p-8 lg:w-1/2">
        <div className="flex  flex-col text-center text-2xl md:text-6xl leading-none text-black  whitespace-nowrap">
          <span>Tous les professionnels,</span>
          <span className="text-red-600 font-semibold ">au meilleur prix</span>
        </div>

        {/* Input de recherche */}
        <div className="relative w-full md:w-[600px] flex items-center">
          <input
            type="text"
            placeholder="De quoi avez vous besoin d'aide ?"
            className="h-12 text-sm border border-black w-full  md:h-[68px] px-4 rounded-[40px] placeholder:text-sm outline-[#FFB543]"
          />
          <div className="absolute right-3 flex justify-center items-center text-red-600 md:text-white md:bg-red-600 rounded-full w-[47px] h-[47px]">
            <Search />
          </div>

          <div className="absolute hidden 2xl:flex justify-center items-center -right-20 gap-1">
            <Image src="/filter.svg" alt="" width={24} height={24} />
            <span className="text-sm">Filters</span>
          </div>
        </div>

        {/* Boutons des catégories */}
        <div className="flex justify-center relative flex-wrap gap-4 w-full ">
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
              className="flex flex-col items-center motion-preset-expand justify-center gap-2 border border-bgBlack rounded-[10px] w-28 sm:w-36 h-24"
            >
              <Image src={item.icon} alt="" width={24} height={24} />
              {item.label}
            </span>
          ))}

        </div>  
      </div>

      <div className="hidden lg:block">
          <Image src="/heroImage.svg" width={560} height={588} alt="" />
      </div>
    </section>
  );
}
