"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 relative h-screen">
      {/* Header */}
      <div className="relative text-center mb-12">
        <h2 className="pb-1 text-4xl font-bold bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 bg-clip-text text-transparent">
          What I Bring to the Table
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          Skills That Drive Results
        </p>
      </div>

      {/* Skill Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Full Stack Development */}
        <motion.div 
          className="pt-5 p-6"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Full Stack Development
          </h3>
          <AnimatedPercentage isVisible={isVisible} percentage={75} />
          
          <div className="flex flex-wrap gap-2 pt-4 justify-center">
            <span className="px-3 py-1 text-xs bg-orange-100 text-orange-800 rounded-full">MongoDB</span>
            <span className="px-3 py-1 text-xs bg-orange-100 text-orange-800 rounded-full">Express.js</span>
            <span className="px-3 py-1 text-xs bg-orange-100 text-orange-800 rounded-full">React.js</span>
            <span className="px-3 py-1 text-xs bg-orange-100 text-orange-800 rounded-full">Node.js</span>
            <span className="px-3 py-1 text-xs bg-orange-100 text-orange-800 rounded-full">Next.js</span>
          </div>
        </motion.div>

        {/* Frontend Development */}
        <motion.div 
          className="pt-5 p-6 "
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Frontend Development
          </h3>
          <AnimatedPercentage isVisible={isVisible} percentage={85} />
         
          <div className="flex flex-wrap gap-2 pt-4 justify-center">
            <span className="px-3 py-1 text-xs bg-orange-100 text-orange-800 rounded-full">HTML5</span>
            <span className="px-3 py-1 text-xs bg-orange-100 text-orange-800 rounded-full">CSS3</span>
            <span className="px-3 py-1 text-xs bg-orange-100 text-orange-800 rounded-full">JavaScript</span>
            <span className="px-3 py-1 text-xs bg-orange-100 text-orange-800 rounded-full">React.js</span>
            <span className="px-3 py-1 text-xs bg-orange-100 text-orange-800 rounded-full">Next.js</span>
          </div>
        </motion.div>

        {/* Backend Development */}
        <motion.div 
          className="pt-5 p-6"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Backend Development
          </h3>
          <AnimatedPercentage isVisible={isVisible} percentage={65} />
          <div className="flex flex-wrap gap-2 pt-4 justify-center">
            <span className="px-3 py-1 text-xs bg-orange-100 text-orange-800 rounded-full">Node.js</span>
            <span className="px-3 py-1 text-xs bg-orange-100 text-orange-800 rounded-full">Express.js</span>
            <span className="px-3 py-1 text-xs bg-orange-100 text-orange-800 rounded-full">REST APIs</span>
            <span className="px-3 py-1 text-xs bg-orange-100 text-orange-800 rounded-full">Authentication</span>
          </div>
        </motion.div>
      </div>

      {/* Additional Content */}
      <div className="max-w-4xl mx-auto mt-10 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Beyond the Basics
        </h3>
        <p className="text-gray-600 mb-6">
          I also have experience with various tools and technologies that enhance development workflows:
        </p>
        <div className="flex flex-wrap gap-4 text-sm justify-center">
          <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full">Git & GitHub</span>
          <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full">Excalidraw</span>
          <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full">Figma</span>
          <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full">Docker</span>
        </div>
      </div>
    </section>
  );
};

const AnimatedPercentage = ({ isVisible, percentage }: { isVisible: boolean; percentage: number }) => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      let start = 0;
      const end = percentage;
      const duration = 2000;
      const increment = end / (duration / 10);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
          hasAnimated.current = true;
        } else {
          setCount(Math.ceil(start));
        }
      }, 10);

      return () => clearInterval(timer);
    }
  }, [isVisible, percentage]);

  return (
    <motion.p
      className="text-8xl font-extrabold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent mb-4"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      {count}%
    </motion.p>
  );
};

export default SkillsSection;
