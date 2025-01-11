import React from 'react'
import Image from "next/image";
import { ShineButtonRed } from './ui/ShineButtonRed copy';

interface LearningCardProps {
  img : string;
  title : string
}

export default function LearningCard( {img, title}: LearningCardProps) {
  return (
    <div className="flex flex-col w-[370px] gap-[36px] items-center border rounded-[10px] pb-[24px] ">
      <div className="relative h-[270px] overflow-hidden rounded-t-[10px] w-full">
        <Image src={img || '/hero.svg'} fill={true} style={{ objectFit: 'cover' }} alt="" />
      </div>

      <div className="flex flex-col gap-[24px] max-w-[320px] items-center text-center justify-center">
        <div className="flex flex-col items-center gap-[12px] ">
          <span className="font-bold text-[20px] leading-[28.8px] ">
            {title}
          </span>
        </div>
        <ShineButtonRed className='w-[318px]'>
           Commencer à apprendre
        </ShineButtonRed>
      </div>
    </div>
  );
}
