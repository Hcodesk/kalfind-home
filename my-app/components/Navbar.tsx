"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ShineButton } from "./ui/ShineButton copy";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
   <>
         <nav
      className={`fixed hidden lg:block top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="flex justify-between items-center mx-6 md:gap-6">
        <div className="flex items-center gap-6">
          <Image src="/Logovertical.svg" alt="logo kalfind" width={68} height={50} />
          <a onClick={() => handleScrollTo('home')} className="cursor-pointer hover:text-red-600 transition-colors duration-300 font-medium">
            Accueil
          </a>
          <a onClick={() => handleScrollTo('services')} className="cursor-pointer hover:text-red-600 transition-colors duration-300 font-medium">
            Services
          </a>
          <a onClick={() => handleScrollTo('prestataires')} className="cursor-pointer hover:text-red-600 transition-colors duration-300 font-medium">
            Prestataires
          </a>
          <a onClick={() => handleScrollTo('academy')} className="cursor-pointer hover:text-red-600 transition-colors duration-300 font-medium">
            Academy
          </a>
        </div>

        <div className="flex items-center gap-6">
          <Link href="#" className="hover:text-red-600 transition-colors duration-300 font-medium">
            S'inscrire
          </Link>
          <Link href="#" className="hover:text-red-600 transition-colors duration-300 font-medium">
            Connexion
          </Link>
          <ShineButton className="text-white">
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeQOdpIbJ1G3veqxHOd2zVtbIIJ0ZE2nRa947CmLxI_acIeig/viewform">
              Devenir partenaire
            </Link>
          </ShineButton>
        </div>
      </div>
    </nav>

    <nav className={`fixed block lg:hidden top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-lg py-2"
          : "bg-transparent py-4"
      }`} >
      <div className="md:hidden flex justify-between items-center mx-4">
        <div>
          <Image
            src="/LogoHsvg.svg"
            alt="logo kalfind"
            width={119}
            height={30}/>
        </div>
          <Sheet>
            <SheetTrigger asChild>
              <button className="flex items-center justify-center w-10 h-10 bg-[#F1F1F1] rounded-[8px]">
                <Image
                  src="/menusvg.svg"
                  alt="logo kalfind"
                  width={24}
                  height={24}
                />
              </button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>

              <div className="mt-6 flex flex-col text-md gap-6 text-black items-center">
              <a onClick={() => handleScrollTo('home')} className="cursor-pointer hover:text-red-600 transition-colors duration-300 font-medium">
            Accueil
          </a>
          <a onClick={() => handleScrollTo('services')} className="cursor-pointer hover:text-red-600 transition-colors duration-300 font-medium">
            Services
          </a>
          <a onClick={() => handleScrollTo('prestataires')} className="cursor-pointer hover:text-red-600 transition-colors duration-300 font-medium">
            Prestataires
          </a>
          <a onClick={() => handleScrollTo('academy')} className="cursor-pointer hover:text-red-600 transition-colors duration-300 font-medium">
            Academy
          </a>
                <ShineButton className="mt-2 text-white">
                  <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeQOdpIbJ1G3veqxHOd2zVtbIIJ0ZE2nRa947CmLxI_acIeig/viewform">
                    Devenir partenaire
                  </Link>
                </ShineButton>
              </div>
              <SheetFooter></SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
    </nav>
    
   </>
  );
}
