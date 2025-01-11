import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
    work: string;
    location: string;
    img: string;
    customStyles?: string;
    titleSize?: string;
    textSize?: string;
    height?: string;
    gap?: string;
}

export default function Card({ 
    work,
    location,
    img,
    customStyles,
    titleSize = "text-[24px]", 
    textSize = "text-[16px]",
    height = "h-[262px]",
    gap = 'gap-[24px] '
}: CardProps) {

  return (
    <div className={`flex flex-col gap-[16px] ${customStyles}`}>
          <div className={`relative ${height} w-[370px] rounded-[30px] overflow-hidden`}>
                <span>
                    <Image src={img || '/hero.svg'} fill={true} objectFit='cover' alt='' />
                </span>
          </div>

          <div>
                <div className={`flex flex-col items-start justify-center ${gap}`}>
                    <div className="flex flex-col gap-[16px]">
                     <span className={`${titleSize} font-semibold`}>{work}</span>
                        <div className="flex  gap-2">
                            <span className="min-w-[24px]">
                              <Image src='/MapPin.svg' width={24} height={24} alt=""/>
                            </span>
                            <span className={`whitespace-normal text-[#666666]`}>
                                 {location}
                            </span>
                        </div>
                    </div>
                    <button className="flex group items-center  transition-all duration-300 ease-in-out lg:max-w-[240px] hover:-translate-y-1 hover:bg-black hover:text-white justify-center w-full py-3 px-4 border border-input rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground">
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeQOdpIbJ1G3veqxHOd2zVtbIIJ0ZE2nRa947CmLxI_acIeig/viewform" className="flex gap-2 ">
              Sélectionner un service <ArrowUpRight className="group-hover:-translate-y-1 group-hover:translate-x-1  transition-transform duration-300 ease-in-out h-4 w-4" />
            </Link>
          </button>
                </div>
          </div>
    </div>
  );
}
