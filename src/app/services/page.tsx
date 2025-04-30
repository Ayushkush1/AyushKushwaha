'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Palette, Terminal, Rocket, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: <Code2 className="w-8 h-8 text-orange-500" />,
      title: "Web Development",
      description: "Building responsive, modern, and scalable web applications using the latest technologies.",
      features: ["React.js", "Next.js", "Tailwind CSS", "TypeScript"],
    },
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: "Backend Development",
      description: "Developing robust and secure backend systems to power your applications.",
      features: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
    },
    {
      icon: <Palette className="w-8 h-8 text-orange-500" />,
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces for seamless user experiences.",
      features: ["Figma", "Adobe XD", "User Research", "Prototyping"],
    },
    {
      icon: <Terminal className="w-8 h-8 text-orange-500" />,
      title: "DevOps & Deployment",
      description: "Streamlining development workflows and ensuring smooth deployments.",
      features: ["Docker", "CI/CD Pipelines", "AWS", "GitHub Actions"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-50 overflow-hidden selection:bg-orange-500 selection:text-white md:px-20">
      {/* Hero Section */}
      <motion.section
        className="pt-20 pb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent mb-6">
              Services
            </h1>
            <p className="text-orange-800/70 text-lg">Transforming ideas into impactful digital solutions</p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg border border-orange-100 hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">{service.title}</h2>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                      <span className="w-2 h-2 bg-orange-500 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="py-24 px-4 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-orange-100 to-white" />
        <div className="max-w-5xl mx-auto relative text-center">
          <motion.div className="inline-block" whileHover={{ scale: 1.05 }}>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Elevate Your Project?</h2>
          </motion.div>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's collaborate to create something extraordinary. I'm here to help you bring your vision to life.
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium shadow-lg hover:shadow-orange-300/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Get In Touch</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
}