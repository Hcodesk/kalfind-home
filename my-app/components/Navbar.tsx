"use client"
import React from 'react'
import Image from "next/image";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import { Button } from "@/components/ui/button"
import { ShineButton } from './ui/ShineButton copy';
import Link from "next/link"

type Checked = DropdownMenuCheckboxItemProps["checked"]

export default function Navbar() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
  const [showPanel, setShowPanel] = React.useState<Checked>(false)

  return (
    <nav className='flex justify-between items-center  md:gap-6' >
      <div className='mobile-logo md:hidden'>
        <Image src="/LogoHsvg.svg" alt="logo kalfind" width={119} height={30} />
      </div>
      <div className='desktop-logo hidden md:block'>
        <Image src="/LogoV.svg" alt="logo kalfind" width={68} height={50} />
      </div>
      <div className="hidden md:flex text-md gap-6 text-black items-center">
        <span >
          <Link href="#"> S'inscrire</Link>
        </span>
        <span>
          <Link href="#">Connexion</Link>
        </span>
      </div> 

      <ShineButton className=' ml-auto hidden md:flex' >Devenir partenaire</ShineButton>


     <div className="md:hidden">
     
     </div>

     
    </nav>
  )
}
