"use client"
import React from 'react'
import { useState,useRef,useCallback } from 'react';
import Link from "next/link"
import { ShineButton } from './ui/ShineButton copy';

export default function Quote() {

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect()
      setCursorPosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      })
    }
  }, [])

  return (
    <div
    ref={cardRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsHovering(false)}
     className="flex relative overflow-hidden py-[64px] mx-auto border bg-center rounded-xl bg-quoteBg h-[400px] lg:h-[506px] px-2 lg:px-[126px] bg-no-repeat bg-cover xl:w-full ">
      <div className="flex flex-col gap-6 lg:gap-[48.53px] ">
        <div className="max-w-[646px] flex flex-col text-white gap-4 lg:gap-[29.87px] ">
          <div className="flex flex-col"> 
            <span className='text-sm lg:text-[14.93px] '>Lorem ipsum dolor sit amet</span>
            <span className=" text-xl lg:text-[44.8px] leading-tight lg:leading-[53.76px] font-semibold ">
              {`Besoin de quelqu'un pour vos travaux d'aménagement ou d'intérieur
              ?`}
            </span>
          </div>

          <span>
            Lorem ipsum dolor sit amet consectetur. Mi netus sed in sed
            tincidunt odio malesuada. Quis id eu ultricies sed tortor massa mi
            feugiat euismod.
          </span>
        </div>

        <ShineButton className="px-[33.6px] py-[14.93px] transition-colors  duration-300 ease-in-out rounded-[6px] text-[14.93px] hover:bg-black hover:text-white bg-white font-semibold max-w-[157.2px] ">
          <Link  href="https://docs.google.com/forms/d/e/1FAIpQLSeQOdpIbJ1G3veqxHOd2zVtbIIJ0ZE2nRa947CmLxI_acIeig/viewform">
               Commencer 
          </Link>
        </ShineButton>
      </div>

      {isHovering && (
        <div 
          className="absolute rounded-[6px] p-4 bg-white opacity-80 pointer-events-none transition-transform ease-linear"
          style={{
           
            transform: `translate(${cursorPosition.x }px, ${cursorPosition.y }px)`,
          }}
        >Travailleurs Qualifiés🔨</div>
      )}
    </div>
  );
}
