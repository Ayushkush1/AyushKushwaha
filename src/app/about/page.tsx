"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import {
  Instagram,
  Linkedin,
  Github,
  Code2,
  Database,
  Palette,
  Terminal,
  Rocket,
  Award,
  Coffee,
  BookOpen,
  Briefcase,
  Laptop,
  Sparkles,
  Sun,
  Star,
  Zap,
  ArrowRight,
} from "lucide-react"

export default function AboutPage() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.1 })
  const [isClient, setIsClient] = useState(false); // Moved useState here

  useEffect(() => {
    setIsClient(true);
  }, []);

  const skills = [
    { icon: <Code2 className="w-6 h-6" />, name: "Frontend", level: 90, tech: "React.js, Next.js" },
    { icon: <Database className="w-6 h-6" />, name: "Backend", level: 85, tech: "Node.js, MongoDB" },
    { icon: <Terminal className="w-6 h-6" />, name: "Languages", level: 88, tech: "JavaScript, TypeScript" },
    { icon: <Palette className="w-6 h-6" />, name: "Design", level: 80, tech: "UI/UX, Tailwind" },
  ]

  const experiences = [
    {
      title: "Frontend Developer",
      company: "Ninzahost",
      period: "September 2024 – Present",
      description: (
        <>
          <ul className="list-disc pl-5 space-y-1">
            <li>Redesigned the Ninza Web Solutions website with Next.js and Tailwind CSS, achieving a 30% improvement in page responsiveness.</li>
            <li>Refined UI/UX iteratively, boosting user satisfaction scores by 25%.</li>
            <li>Integrated APIs with optimized functionality, cutting response time by 20%.</li>
          </ul>
        </>
      ),
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      title: "Frontend Developer",
      company: "RemoveQ",
      period: "February 2024 – May 2024",
      description: (
        <>
          <ul className="list-disc pl-5 space-y-1">
            <li>Created responsive interfaces for a Laravel-based website using HTML, CSS, and JavaScript, improving cross-device compatibility by 40%.</li>
            <li>Enhanced website functionality and user experience, leading to a 30% increase in user retention.</li>
          </ul>
        </>
      ),
      icon: <Laptop className="w-5 h-5" />,
    },
  ]

  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      institute: "Ajay Kumar Garg Engineering College, Ghaziabad",
      year: "2022 - 2025",
      icon: <BookOpen className="w-5 h-5" />,
    },
  ]

  const achievements = [
    { title: "First Prize at Startup Conclave 2024", icon: <Award className="w-6 h-6" />, description: "Won First Prize for RemoveQ at Idealab AKGEC's Startup Conclave 2024" },
    { title: "10+ Projects Delivered", icon: <Rocket className="w-6 h-6" /> },
    { title: "100+ GitHub Contributions", icon: <Coffee className="w-6 h-6" /> },
  ]

  // Custom cursor animation
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const moveCursor = (e: MouseEvent) => {
      if (cursor) {
        (cursor as HTMLElement).style.left = `${e.clientX}px`;
        (cursor as HTMLElement).style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", moveCursor)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
    }
  }, [])

  // Parallax effect for decorative elements
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 100])
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -360])

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-50 overflow-hidden selection:bg-orange-500 selection:text-white">
      {/* Custom cursor */}
      <div
        ref={cursorRef}
        className="fixed w-8 h-8 rounded-full bg-orange-400/30 mix-blend-multiply pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 backdrop-blur-sm hidden md:block"
      />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-orange-200/30 blur-3xl"
          style={{ y: y1 }}
        />
        <motion.div
          className="absolute top-[40%] left-[5%] w-96 h-96 rounded-full bg-amber-100/40 blur-3xl"
          style={{ y: y2 }}
        />
        <motion.div
          className="absolute bottom-[10%] right-[15%] w-80 h-80 rounded-full bg-orange-100/30 blur-3xl"
          style={{ y: y3 }}
        />

        {/* Artistic elements */}
        <motion.div className="absolute top-[15%] left-[20%] text-orange-200" style={{ rotate: rotate1 }}>
          <Sun className="w-16 h-16" />
        </motion.div>
        <motion.div className="absolute bottom-[25%] right-[25%] text-amber-200" style={{ rotate: rotate2 }}>
          <Star className="w-12 h-12" />
        </motion.div>

        {/* Scattered small elements */}
        {isClient && [...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-orange-300"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5 + 0.3,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative pt-20 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div className="inline-block relative" whileHover={{ scale: 1.05 }}>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent mb-6">
                About Me
              </h1>
              <motion.div
                className="absolute -top-6 -right-6 text-orange-400"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Sparkles className="w-8 h-8" />
              </motion.div>
            </motion.div>

            <p className="text-orange-800/70 text-lg">Crafting digital experiences with passion and precision</p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              className="relative w-full lg:w-2/5"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
                {/* Animated rings around profile */}
                <motion.div
                  className="absolute inset-0 border-2 border-dashed border-orange-300/50 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-4 border-2 border-dashed border-amber-300/40 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-8 border-2 border-dashed border-orange-200/30 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />

                {/* Profile image with glow */}
                <div className="absolute inset-12 bg-gradient-to-br from-orange-200 to-amber-200 rounded-full blur-xl opacity-70" />
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <motion.div
                    className="w-[85%] h-[85%] rounded-full overflow-hidden border-4 border-white shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img src="/assets/Profile-removebg.png" alt="Profile" className="w-full h-full object-cover" />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="space-y-8 w-full lg:w-3/5"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-800">
                  Hi, I'm <span className="text-orange-600">Ayush Kushwaha</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  A passionate FrontEnd Developer specializing in creating scalable, efficient, and user-friendly web
                  applications. With expertise in React.js, Next.js, Node.js, and MongoDB, I transform complex problems
                  into elegant solutions.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-orange-500" />
                  <span>My Expertise</span>
                </h3>

                <div className="grid gap-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <span className="p-2.5 bg-gradient-to-br from-orange-100 to-amber-100 rounded-lg text-orange-600 shadow-sm">
                            {skill.icon}
                          </span>
                          <div>
                            <h3 className="font-medium text-gray-800">{skill.name}</h3>
                            <p className="text-xs text-gray-500">{skill.tech}</p>
                          </div>
                        </div>
                        <span className="text-sm font-medium text-orange-600">{skill.level}%</span>
                      </div>

                      <div className="h-2.5 bg-orange-100 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full relative"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: index * 0.2 }}
                        >
                          <motion.div
                            className="absolute right-0 top-0 h-full w-4 bg-white/30"
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{
                              duration: 1.5,
                              repeat: Number.POSITIVE_INFINITY,
                              repeatType: "loop",
                              ease: "linear",
                              delay: index * 0.2,
                            }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <motion.div
        className="py-20 px-4 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-amber-200 opacity-40" />

        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Connect With Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-amber-400 mx-auto" />
          </div>

          <div className="flex justify-center gap-4 md:gap-6 flex-wrap">
            {[
              {
                icon: <Instagram className="w-5 h-5" />,
                label: "@awsm_ayush_",
                href: "https://instagram.com/awsm_ayush_",
                color: "from-orange-500 to-rose-500",
              },
              {
                icon: <Instagram className="w-5 h-5" />,
                label: "@_artistic_ayush",
                href: "https://instagram.com/_artistic_ayush",
                color: "from-rose-500 to-orange-500",
              },
              {
                icon: <Linkedin className="w-5 h-5" />,
                label: "Ayush Kushwaha",
                href: "https://www.linkedin.com/in/ayush-kushwaha-b3b76915b/",
                color: "from-orange-500 to-amber-500",
              },
              {
                icon: <Github className="w-5 h-5" />,
                label: "@Ayushkush1",
                href: "https://github.com/Ayushkush1",
                color: "from-amber-500 to-orange-500",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 px-6 py-3.5 rounded-full text-white bg-gradient-to-r ${social.color} hover:shadow-lg transition-all duration-300 border border-white/20`}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {social.icon}
                <span className="font-medium">{social.label}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Experience Timeline Section */}
      <motion.section
        ref={containerRef}
        className="py-24 px-4 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl font-bold mb-4 inline-block bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Professional Journey
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-4" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              The path I've walked in my professional career, building expertise and delivering excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Experience Timeline */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-orange-500" />
                <span>Experience</span>
              </h3>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 via-amber-300 to-orange-200" />

                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-12 mb-12 last:mb-0"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    {/* Timeline dot */}
                    <motion.div
                      className="absolute left-0 top-0 w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-amber-400 flex items-center justify-center shadow-md z-10"
                      whileHover={{ scale: 1.2 }}
                    >
                      <div className="text-white">{exp.icon}</div>
                    </motion.div>

                    {/* Content card */}
                    <motion.div
                      className="bg-white p-6 rounded-xl shadow-lg border border-orange-100 hover:shadow-xl transition-shadow duration-300"
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-center gap-2 text-orange-500 mb-2">
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-1">{exp.title}</h4>
                      <p className="text-orange-600 mb-3">{exp.company}</p>
                      {/* Render description directly to avoid <ul> inside <p> */}
                      {exp.description}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education & Achievements */}
            <div className="space-y-16">
              {/* Education */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-orange-500" />
                  <span>Education</span>
                </h3>

                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg border border-orange-100 relative overflow-hidden"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-orange-100 rounded-full opacity-50" />
                    <div className="absolute right-4 bottom-4 text-orange-300">
                      <BookOpen className="w-10 h-10" />
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-2 text-orange-500 mb-2">
                        <span className="font-medium">{edu.year}</span>
                      </div>
                      <h4 className="text-2xl font-semibold text-gray-800 mb-1">{edu.degree}</h4>
                      <p className="text-orange-600 mb-1">{edu.field}</p>
                      <p className="text-gray-600">{edu.institute}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Achievements */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center gap-2">
                  <Award className="w-5 h-5 text-orange-500" />
                  <span>Achievements</span>
                </h3>

                <div className="grid grid-cols-1 gap-6">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl shadow-lg border border-orange-100 flex items-center gap-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{
                        y: -5,
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                      }}
                    >
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-amber-400 flex items-center justify-center text-white shadow-md">
                        {achievement.icon}
                      </div>
                      <p className="font-semibold text-lg text-gray-800">{achievement.title}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Artistic Footer */}
      <footer className="py-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-orange-100 to-white" />

        <div className="max-w-5xl mx-auto relative">
          <div className="text-center">
            <motion.div className="inline-block" whileHover={{ scale: 1.05 }}>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Let's Create Something Amazing Together</h2>
            </motion.div>

            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
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

        
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500" />
      </footer>
    </div>
  )
}
