"use client"

import * as React from "react"

interface ShineButtonRedProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export const ShineButtonRed = React.forwardRef<HTMLButtonElement, ShineButtonRedProps>(
  ({ className = "", children, ...props }, ref) => {
    return (
      <button
        className={`text-white bg-red-600 w-full text-[16px] font-semibold px-[40px] py-[20px] rounded-[6px]
          relative overflow-hidden group transition-all duration-300 ease-in-out ${className}`}
        ref={ref}
        {...props}
      >
        <span className="relative z-10">{children}</span>

        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-[250%] transition-transform duration-1000 ease-in-out" />
        </span>
      </button>
    )
  }
)
ShineButtonRed.displayName = "ShineButtonRed"

