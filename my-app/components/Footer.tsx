import React from 'react'
import Image from "next/image"
import { ShineButton } from './ui/ShineButton copy'

export default function Footer() {
  return (
   <footer className='mt-20 grid border pt-10 px-4 rounded-md grid-cols-1 justify-center lg:grid-cols-2 bg-footerBg lg:h-[592px] w-full bg-no-repeat bg-cover'>
        <div className="flex justify-center">
            <Image src="/footerImg.svg" alt="footer img" width={535} height={443} />
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

             <ShineButton className="rounded-sm text-gray-900 bg-gray-100 font-semibold w-[158px] "> Commencer</ShineButton>
        </div>
   </footer>
  )
}