import React from "react";
import HomeBanner from "@/components/HomeBanner";
import SkillsSection from "@/components/SkillsSection";
import ProjectSection from "@/components/ProjectSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import NewHomeBanner from "@/components/NewHomeBanner";
import TestimonialsSection from "@/components/TestimonialsSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen md:w-5xl  lg:w-full">
      {/* Removed overflow-hidden to prevent clipping the scrollable context */}
      <AnimatedBackground />
      
      <div className="relative z-10 bg-transparent">
        <NewHomeBanner />
        <SkillsSection />
        {/* Wrap ProjectSection in a div to ensure scrollable context */}
        <div className="relative min-h-screen">
          <ProjectSection />
        </div>
        <AboutSection />
        <TestimonialsSection />
        <ServicesSection />
        <StatsSection />
        <ContactSection />
      </div>
      
     
    </div>
  );
}