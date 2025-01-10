"use client"

import * as React from "react"
import { ArrowRight } from 'lucide-react'

interface ShineButtonFrProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export const ShineButton = React.forwardRef<HTMLButtonElement, ShineButtonFrProps>(
  ({ className = "", children, ...props }, ref) => {
    return (
      <button
        className={`h-[44px] bg-black text-white group
          text-sm rounded-[10px] justify-start items-center inline-flex gap-[6px] px-5 py-3 
          transition-all duration-300 ease-in-out relative overflow-hidden ${className}`}
        ref={ref}
        {...props}
      >
        {/* Contenu du bouton */}
        <span className="relative z-10 flex items-center gap-[6px]">
          {children}
          <ArrowRight className="transform transition-transform duration-300 group-hover:translate-x-1" />
        </span>

        {/* Effet de brillance */}
        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-[250%] transition-transform duration-1000 ease-in-out" />
        </span>
      </button>
    )
  }
)
ShineButton.displayName = "ShineButtonFr"

