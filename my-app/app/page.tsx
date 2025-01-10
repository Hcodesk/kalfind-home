import HeroSection from "@/components/HeroSection";
import LearningSection from "@/components/LearningSection";
import Quote from "@/components/Quote";
import ServicesSection from "@/components/ServicesSection";
import Image from "next/image";

export default function Home() {
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
