"use client"
import React from 'react'
import Image from "next/image";
import { ShineButton } from './ui/ShineButton copy';
import Link from "next/link"
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Navbar() {

  return (
    <nav className='flex justify-between items-center mt-2 mx-4  md:gap-6' >
      <div className='mobile-logo md:hidden'>
        <Image src="/LogoHsvg.svg" alt="logo kalfind" width={119} height={30} />
      </div>
      <div className='desktop-logo hidden md:block'>
        <Image src="/LogoV.svg" alt="logo kalfind" width={68} height={50} />
      </div>
      <div className="hidden md:flex text-md gap-6 text-black items-center ">
        <div className="mx-4 transition-all duration-300 ease-in-out hover:text-red-600 ">
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeQOdpIbJ1G3veqxHOd2zVtbIIJ0ZE2nRa947CmLxI_acIeig/viewform"> {`S'inscrire`} </Link>
        </div>
        <div>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeQOdpIbJ1G3veqxHOd2zVtbIIJ0ZE2nRa947CmLxI_acIeig/viewform" className="transition-all duration-300 ease-in-out hover:text-red-600 shadow-sm ">Connexion</Link>
        </div>
      </div> 

      <ShineButton className=' ml-auto hidden md:flex text-white' >
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeQOdpIbJ1G3veqxHOd2zVtbIIJ0ZE2nRa947CmLxI_acIeig/viewform">Devenir partenaire</Link>
      </ShineButton>

     <div className="md:hidden">
     <Sheet>
      <SheetTrigger asChild>
        <button className="flex items-center justify-center w-10 h-10 bg-[#F1F1F1] rounded-[8px] ">
            <Image src="/menusvg.svg" alt="logo kalfind" width={24} height={24} />
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

            <div className="mt-6 flex flex-col text-md gap-6 text-black items-center">
                  <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeQOdpIbJ1G3veqxHOd2zVtbIIJ0ZE2nRa947CmLxI_acIeig/viewform" className='transition-all duration-300 ease-in-out hover:text-red-600'> S'inscrire</Link>
                  <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeQOdpIbJ1G3veqxHOd2zVtbIIJ0ZE2nRa947CmLxI_acIeig/viewform" className='transition-all duration-300 ease-in-out hover:text-red-600'>Connexion</Link>
                  <ShineButton className='mt-2 text-white '>
                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeQOdpIbJ1G3veqxHOd2zVtbIIJ0ZE2nRa947CmLxI_acIeig/viewform">Devenir partenaire</Link>
                  </ShineButton>
            </div>
        <SheetFooter>
        </SheetFooter>
      </SheetContent>
    </Sheet>
     </div>
    </nav>
  )
}
