import React from 'react'
import Image from 'next/image'
import { ShineButton } from './ui/ShineButton copy'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className='px-4 bg-black rounded-t-xl flex flex-col gap-6 py-20 items-center justify-center mt-20'>
        <div>
            <Image src="/logo2.svg" alt="logo" width={68} height={51} className="object-contain" />
        </div>
        <span className="text-center text-white text-sm whitespace-normal">
                Rejoignez une communauté de professionnels
                 et de clients pour concrétiser vos projets.
        </span>  
        <span className="flex gap-6 flex-col md:flex-row items-center">
            <input type="email" placeholder="L'e-mail va ici" className="bg-transparent border focus:outline-none text-white 
            border-[#808080] min-w-[291px] min-h-10 placeholder:text-[#808080] placeholder:text-sm px-4 rounded-md "/>

            <ShineButton className='w-[118px] h-[42px] bg-red-600 rounded-md text-white '>
               <Link  href="https://docs.google.com/forms/d/e/1FAIpQLSeQOdpIbJ1G3veqxHOd2zVtbIIJ0ZE2nRa947CmLxI_acIeig/viewform">
                  Envoyer
                </Link>
            </ShineButton>
        </span>
        <span className=" text-sm whitespace-normal  text-[#808080] ">
            2024 Kalfind. All Rights Received
        </span>

    </div>
  )
}
