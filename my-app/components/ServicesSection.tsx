import React from "react";
import Image from "next/image";
import { ArrowUpRight } from 'lucide-react';

interface Services {
    id: number;
    title: string;
    ville: string;
    image: string;
}

export default function ServicesSection() {
  const services : Services[] = [
    { id: 1, title: "web design", ville: "Dakar", image: "" },
    { id: 2, title: "web design", ville: "Dakar", image: "" },
    { id: 2, title: "web design", ville: "Dakar", image: "" },
    { id: 2, title: "web design", ville: "Dakar", image: "" },
    { id: 2, title: "web design", ville: "Dakar", image: "" },
  ];

  return (
    <section>
      {services.map((service, index) => (
        <div className={`flex flex-col gap-[16px]`}>
          <div className={`relative w-full rounded-[30px]  overflow-hidden`}>
            <span>
              <Image
                src={service.image || "/hero.svg"}
                fill={true}
                objectFit="cover"
                alt=""
              />
            </span>
          </div>

          <div>
            <div className={`flex flex-col items-start justify-center`}>
              <div className="flex flex-col gap-[16px] ">
                <span className={` text-md font-semibold `}> {service.title} </span>
                <div className="flex justify-between gap-[12px] ">
                  <span className="min-w-[24px]">
                    <Image src="/MapPin.svg" width={24} height={24} alt="" />
                  </span>

                  <span
                    className={`max-w-[328px] whitespace-normal text-[#666666]`}
                  >
                    {service.ville}
                  </span>
                </div>
              </div>

              <button
                className={`flex justify-center max-w-[239px] gap-2 items-center leading-none border border-[#666666] px-[20px] py-[12px] rounded-[6px] whitespace-nowrap`}
              >
                Selectionner un service
                <ArrowUpRight
                  width={20}
                  height={20}
                  className="text-[#666666] min-w-[20px] "
                />
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
