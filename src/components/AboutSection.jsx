"use client"

import { motion } from "framer-motion"
import "@fortawesome/fontawesome-free/css/all.min.css"
import { useEffect, useState } from "react"
import { SiReact, SiNodedotjs, SiMongodb, SiNextdotjs, SiJavascript, SiTailwindcss, SiExpress, SiTypescript, SiRedux, SiCss3, SiHtml5, SiGit  } from "react-icons/si"

export default function AboutSection() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const skills = [
    { icon: SiReact, name: "React", color: "#61DAFB" },
    { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
    { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
    { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
    { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
    { icon: SiExpress, name: "Express", color: "#000000" },
    { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { icon: SiGit, name: "Git", color: "#F05032" },
    { icon: SiHtml5, name: "HTML5", color: "#E34F26" },
    { icon: SiCss3, name: "CSS3", color: "#1572B6" },
    { icon: SiRedux, name: "Redux", color: "#764ABC" },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  return (
    <section className="py-24 relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* Header */}
      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative text-center mb-2">
          <h2 className="pb-1 text-4xl font-bold bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 bg-clip-text text-transparent">
            Who I Am
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            A passionate developer turning ideas into impactful digital experiences
          </p>
        </div>
      </motion.div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-20 max-w-6xl mx-auto flex-grow px-8">
        {/* Image with decorative elements */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full blur-md opacity-20 scale-110"></div>
          <div className="w-72 h-72 md:w-80 md:h-96 rounded-full overflow-hidden shadow-2xl relative border-4 border-white">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-orange-200 to-amber-100"
              animate={{
                background: [
                  "linear-gradient(to bottom right, #fed7aa, #fef3c7)",
                  "linear-gradient(to bottom right, #fef3c7, #fed7aa)",
                  "linear-gradient(to bottom right, #fed7aa, #fef3c7)",
                ],
              }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            ></motion.div>
            <motion.img
              src="/assets/Profile-removebg.png"
              alt="Profile"
              className="w-full h-full object-cover relative z-10"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            />
          </div>

          {/* Floating badges */}
          <motion.div
            className="absolute -top-4 -right-4 bg-white rounded-full shadow-lg p-3"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          >
            <SiReact className="text-3xl text-blue-400" />
          </motion.div>
          <motion.div
            className="absolute -bottom-4 -left-4 bg-white rounded-full shadow-lg p-3"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.5 }}
          >
            <SiNodedotjs className="text-3xl text-green-600" />
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="text-center md:text-left max-w-2xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            I'm a{" "}
            <span className="font-bold bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 bg-clip-text text-transparent">
              Full Stack MERN Developer
            </span>{" "}
            who loves creating web applications that are both functional and visually appealing. With experience in
            React.js, Node.js, MongoDB, and Next.js, I specialize in building complete solutions from frontend to
            backend.
          </p>
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            Beyond coding, I enjoy sketching, capturing nature through photography, cooking delightful meals, and
            exploring creative ideas.
          </p>

          {/* Skills section */}
          <motion.div variants={container} initial="hidden" animate="show" className="mb-8">
            <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ scale: 1.01, y: -2 }}
                  className="flex flex-row gap-2 justify-center items-center bg-white p-3 rounded-lg shadow-md"
                >
                  <skill.icon style={{ color: skill.color }} className="text-2xl" />
                  <span className="text-xs text-center flex items-center justify-center font-medium text-gray-700">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

         
        </motion.div>
      </div>
    </section>
  )
}
