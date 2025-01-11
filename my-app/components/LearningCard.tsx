"use client"
import React from 'react'
import Image from "next/image";
import { ShineButtonRed } from './ui/ShineButtonRed copy';
import Link from "next/link"

interface LearningCardProps {
  img : string;
  duration : string;
  description : string;
  title : string
}

export default function LearningCard({ img, duration,description,title }: LearningCardProps ) {
  return (
    <div className="flex flex-col w-full xl:gap-[36px] items-center border rounded-[10px] pb-4 ">
      
      <div className="relative h-[190px] xl:h-[240px] 2xl:h-[270px] overflow-hidden rounded-t-[10px] w-full">
        <Image src={ img || "/woman.jpg"} fill={true} style={{ objectFit: 'cover' }} alt="" />
      </div>

      <div className="flex flex-col px-6 gap-[24px] mx-[16px] 2xl:mx-[24px] max-w-[320px] items-center text-center justify-center">
        <div className="flex w-full flex-col items-center gap-[12px] ">
          
          <span className="font-bold text-[18px] xl:text-[24px] leading-[28.8px] overflow-hidden w-full whitespace-nowrap text-ellipsis  ">
            {title}
          </span>

          <span className="text-[12px] xl:text-[14px] text-[#666666] ">
            3 videos . {duration}
          </span>
        </div>

        <span className="text-[#666666] w-full h-[30px] text-[12px] xl:text-[16px] overflow-hidden whitespace-nowrap text-ellipsis">
          {description} 
        </span>
        
        <ShineButtonRed style={{whiteSpace:"nowrap"}} className='w-full' >
           <Link  href="https://docs.google.com/forms/d/e/1FAIpQLSeQOdpIbJ1G3veqxHOd2zVtbIIJ0ZE2nRa947CmLxI_acIeig/viewform">
               Commencer à apprendre
           </Link>
        </ShineButtonRed>


      </div>
      
    </div>
  );
}
