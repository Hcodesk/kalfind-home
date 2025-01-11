"use client"
import CardsSection from "@/components/CardsSection";
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
    <main className="flex flex-col ">
        <section id="home"><HeroSection/></section>
        <section id="services" className="lg:mx-auto"><ServicesSection/></section>
        <section id="quote"><Quote/></section>
        <section id="prestataires"><CardsSection/></section>
        <section id="academy"><LearningSection/></section>
    </main>
  );
}
