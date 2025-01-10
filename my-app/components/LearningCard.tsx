"use client"

import React from 'react'
import Image from "next/image";
import { ShineButtonRed } from './ui/ShineButtonRed copy';

interface LearningCardProps {
  img: string;
  duration: string;
  description: string;
  title: string;
}

export default function LearningCard({ img, duration, description, title }: LearningCardProps) {
  return (
    <div className="flex flex-col w-full xl:gap-[36px] items-center border rounded-[10px] pb-[24px]">
      <div className="relative h-[190px] xl:h-[240px] 2xl:h-[270px] overflow-hidden rounded-t-[10px] w-full">
        <Image src={img || "/woman.jpg"} fill alt={title} style={{ objectFit: 'cover' }} />
      </div>

      <div className="flex flex-col gap-[24px] mx-[16px] 2xl:mx-[24px] max-w-[320px] items-center text-center justify-center">
        <div className="flex flex-col items-center gap-[12px]">
          <span className="font-bold text-[18px] xl:text-[24px] leading-[28.8px]">
            {title}
          </span>
          <span className="text-[12px] xl:text-[14px] text-[#666666]">
            3 videos · {duration}
          </span>
        </div>

        <span className="text-[#666666] w-full text-[12px] xl:text-[16px] line-clamp-2">
          {description} 
        </span>
        
        <ShineButtonRed style={{ whiteSpace: "nowrap" }}>
          Commencer à apprendre
        </ShineButtonRed>
      </div>
    </div>
  );
}
