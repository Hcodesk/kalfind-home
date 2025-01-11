"use client"
import HeroSection from "@/components/HeroSection";
import LearningSection from "@/components/LearningSection";
import Quote from "@/components/Quote";
import ServicesSection from "@/components/ServicesSection";
import Lenis from "lenis"
import {useEffect} from 'react'

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
     const lenis = new Lenis();
     function raf(time: any){
      lenis.raf(time);
      requestAnimationFrame(raf)
     }
     requestAnimationFrame(raf)

     return () => {
      lenis.destroy();
    };
 }, [])
  return (
    <main className="flex flex-col gap-16 ">
        <HeroSection/>
        <ServicesSection/>
        <Quote/>
        <ServicesSection/>
        <LearningSection/>
    </main>
  );
}
