"use client"
import { motion } from "framer-motion"
import { Code, Smartphone, Palette, ShoppingCart, Layers, Cog } from "lucide-react"

const services = [
  {
    title: "Web Development",
    description: "Custom websites built with modern technologies",
    icon: Code,
    color: "bg-gradient-to-br from-orange-400 to-amber-500",
    features: ["Responsive Design", "SEO Optimized", "Fast Performance"],
  },
  {
    title: "Mobile App Development",
    description: "Cross-platform apps for iOS and Android",
    icon: Smartphone,
    color: "bg-gradient-to-br from-blue-400 to-cyan-500",
    features: ["Cross-Platform", "Push Notifications", "Offline Support"],
  },
  {
    title: "UI/UX Design",
    description: "Beautiful and intuitive user interfaces",
    icon: Palette,
    color: "bg-gradient-to-br from-purple-400 to-pink-500",
    features: ["User-Centered Design", "Wireframing", "Prototyping"],
  },
  {
    title: "E-commerce Solutions",
    description: "Secure online stores for your products",
    icon: ShoppingCart,
    color: "bg-gradient-to-br from-green-400 to-teal-500",
    features: ["Payment Gateways", "Inventory Management", "Customer Support"],
  },
  {
    title: "Full Stack Development",
    description: "End-to-end web application development",
    icon: Layers,
    color: "bg-gradient-to-br from-indigo-400 to-purple-500",
    features: ["Frontend & Backend", "Database Design", "API Development", "Cloud Deployment"],
  },
  {
    title: "Custom Software Development",
    description: "Tailored solutions for your business needs",
    icon: Cog,
    color: "bg-gradient-to-br from-pink-400 to-red-500",
    features: ["Customization", "Integration", "Maintenance"],
  },
]

export default function ServicesSection() {
  return (
    <section className="py-24 relative overflow-hidden" id="services">
    

      {/* Header */}

      <div className="relative text-center mb-16">
        <h2 className="text-4xl pb-2 font-bold bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 bg-clip-text text-transparent">
        My Services <span className="inline-block animate-bounce">🗣️</span>
        </h2>
        <p className="text-lg text-gray-600"> Explore the digital superpowers I bring to your projects</p>
      </div>
     

      {/* Service Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <div
              className={`absolute inset-0 ${service.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg -z-10`}
            ></div>

            <div className="h-full p-6 rounded-2xl bg-white/90 backdrop-blur-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col">
              {/* Card Header */}
              <div className="flex items-start gap-4 mb-4">
                {/* Icon */}
                <motion.div
                  className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center text-white shadow-lg`}
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon className="w-7 h-7" />
                </motion.div>

                {/* Title */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-fuchsia-600 to-pink-600 transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </div>

              {/* Features */}
              <div className="mt-auto">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent my-3"></div>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-700"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                    >
                      <span className={`inline-block w-2 h-2 rounded-full ${service.color}`}></span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Hover Effect */}
              <motion.div
                className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.2, rotate: 90 }}
              >
                <div className={`w-8 h-8 ${service.color} rounded-full flex items-center justify-center`}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 6H11M6 1V11" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-10 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>

      <div className="absolute top-10 left-10 w-20 h-20 border-4 border-dashed border-purple-300 rounded-full animate-spin-slow opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 border-4 border-dotted border-pink-300 rounded-full animate-bounce opacity-20"></div>

      <style jsx global>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}</style>
    </section>
  )
}
