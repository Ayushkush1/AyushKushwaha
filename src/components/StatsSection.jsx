'use client'
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: 50, label: "Projects Completed" },
  { value: 30, label: "Happy Clients" },
  { value: 5, label: "Years Experience" },
  { value: 100, label: "Cups of Coffee" }
];

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 relative" id="stats">
     

      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-center "
          >
            <div className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent mb-2">
              {isInView ? `${stat.value}+` : "0+"}
            </div>
            <div className="text-gray-600">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}