// Importing Required Libraries 
import React from "react";
import HomeBanner from "@/components/HomeBanner";
import SkillsSection from "@/components/SkillsSection";
import ProjectSection from "@/components/ProjectSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

// Code for Home page

export default function Home() {
  return (
    <div className="bg-gray-50">
      <HomeBanner />
      <SkillsSection />
      <ProjectSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
