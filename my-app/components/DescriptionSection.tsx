import React from 'react'
import Image from "next/image"
import { ShineButton } from './ui/ShineButton copy'
import Link from 'next/link'


export default function DescriptionSection() {
  return (
   <div className='mt-20 grid border pt-10 px-4 rounded-xl grid-cols-1 justify-center lg:grid-cols-2 bg-footerBg lg:h-[592px] w-full bg-no-repeat bg-cover'>
        <div className="flex justify-center">
            <Image src="/footer.png" alt="footer img" width={535} height={443} className="object-contain" />
        </div>

        <div className='flex flex-col p-4 gap-6 justify-center text-white'>
             <span className='text-4xl font-semibold bg-gradient-to-r from-[#FFA7A9] to-[#FFFFFF] inline-block text-transparent bg-clip-text'>
               Trouvez les meilleurs
               professionnels pour vos projets
             </span>

             <span className='text-sm font-light '>
             Recherchez, comparez et engagezdes professionnelsqualifiés 
             en toute simplicité.Kalfind vous connecte rapidement à des professionnels
             et prestataires fiables près de chez vous.
             </span>

             <ShineButton className="rounded-sm text-black bg-white hover:bg-black hover:text-white   font-semibold w-[158px] ">
               <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeQOdpIbJ1G3veqxHOd2zVtbIIJ0ZE2nRa947CmLxI_acIeig/viewform">
                     Commencer
               </Link>
             </ShineButton>
        </div>
   </div>
  )
}
