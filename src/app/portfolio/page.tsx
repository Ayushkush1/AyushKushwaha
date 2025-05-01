"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { ArrowRight, Code, ExternalLink, Layers, Star } from "lucide-react"

// Define the Project type
type Project = {
  title: string
  description: string
  image: string
  link: string
}

// Project Data
const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built using Next.js and Tailwind CSS, showcasing my skills and projects.",
    image: "/assets/portfolio.png",
    link: "https://ayushkushwaha.vercel.app/",
  },
  {
    title: 'NinzaHost',
    description: 'NinzaHost offers affordable web hosting with cPanel, free SSL, and 24/7 support.',
    image: '/assets/ninzahost.png', 
    link: 'https://www.ninzahost.com/',
  },
  {
    title: "MOVIX",
    description: "A movie search app using Redux.js, React.js, and SASS with dynamic features.",
    image: "/assets/movix.png",
    link: "https://ayushmovix.vercel.app/",
  },
  {
    title: "RemoveQ",
    description: "An innovative image optimization service enhancing website performance.",
    image: "/assets/removeq.png",
    link: "https://removeq.com/",
  },
  {
    title: "Blog Website",
    description: "A responsive blog website built using HTML, CSS, and JavaScript with dynamic features.",
    image: "/assets/blooger.png",
    link: "https://ayushkush1.github.io/Blooger/",
  },
]

// Skills Data with more visual attributes
const skills = [
  { name: "JavaScript", level: "Advanced", color: "bg-amber-400", icon: <Code className="w-6 h-6" /> },
  { name: "React", level: "Advanced", color: "bg-sky-500", icon: <Code className="w-6 h-6" /> },
  { name: "Next.js", level: "Intermediate", color: "bg-slate-800", icon: <Code className="w-6 h-6" /> },
  { name: "Node.js", level: "Intermediate", color: "bg-emerald-500", icon: <Layers className="w-6 h-6" /> },
  { name: "Tailwind CSS", level: "Intermediate", color: "bg-cyan-500", icon: <Layers className="w-6 h-6" /> },
  { name: "MongoDB", level: "Intermediate", color: "bg-green-600", icon: <Layers className="w-6 h-6" /> },
]

// Updated Experience Data
const experience = [
  {
    role: "Frontend Developer",
    company: "Ninzahost",
    duration: "Sept 2024 - Present",
    description:
      "Developed a new frontend for Ninza Web Solutions using Next.js and Tailwind CSS, ensuring responsive and visually appealing designs. Refined UI/UX and implemented APIs for enhanced functionality.",
    color: "from-fuchsia-500 to-purple-600",
  },
  {
    role: "Frontend Developer",
    company: "RemoveQ",
    duration: "Feb 2024 – May 2024",
    description:
      "Developed responsive interfaces using HTML, CSS, and JavaScript for a Laravel-based website, enhancing functionality and user experience.",
    color: "from-amber-500 to-pink-500",
  },
]

// Cursor dot component
const CursorDot = () => {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    window.addEventListener("mousemove", moveCursor)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
    }
  }, [cursorX, cursorY])

  return (
    <motion.div
      className="fixed w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-white mix-blend-difference pointer-events-none z-50"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: "-50%",
        translateY: "-50%",
      }}
    />
  )
}

// Animated background shapes
const AnimatedBackground = () => {
  const [isClient, setIsClient] = useState(false);
  const [shapes, setShapes] = useState<any[]>([]);

  useEffect(() => {
    setIsClient(true);

    // Generate random values ONCE for each shape
    const generatedShapes = Array.from({ length: 15 }).map(() => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const scale = Math.random() * 0.5 + 0.5;
      const opacity = Math.random() * 0.5 + 0.25;
      const width = Math.random() * 300 + 50;
      const height = Math.random() * 300 + 50;
      const duration = Math.random() * 60 + 60;
      const x1 = Math.random() * window.innerWidth;
      const x2 = Math.random() * window.innerWidth;
      const x3 = Math.random() * window.innerWidth;
      const y1 = Math.random() * window.innerHeight;
      const y2 = Math.random() * window.innerHeight;
      const y3 = Math.random() * window.innerHeight;
      return {
        x, y, scale, opacity, width, height, duration,
        xAnim: [x1, x2, x3],
        yAnim: [y1, y2, y3],
      };
    });
    setShapes(generatedShapes);
  }, []);

  if (!isClient) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden opacity-30">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-orange-300 to-white"
          initial={{
            x: shape.x,
            y: shape.y,
            scale: shape.scale,
            opacity: shape.opacity,
          }}
          animate={{
            x: shape.xAnim,
            y: shape.yAnim,
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: shape.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{
            width: `${shape.width}px`,
            height: `${shape.height}px`,
            filter: "blur(40px)",
          }}
        />
      ))}
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ project, onClick }: { project: Project; onClick: () => void }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative rounded-xl overflow-hidden group cursor-pointer"
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-xl aspect-video">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60 z-10"
          initial={{ opacity: 0.4 }}
          animate={{ opacity: isHovered ? 0.7 : 0.4 }}
        />
        <motion.img
          src={project.image || "/placeholder.svg?height=400&width=600"}
          alt={project.title}
          className="h-full w-full object-cover"
          initial={{ scale: 1 }}
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
        />
      </div>

      <motion.div className="absolute bottom-0 left-0 right-0 z-20 p-6 text-white">
        <motion.h3
          className="text-2xl font-bold mb-2 tracking-tight"
          initial={{ y: 0 }}
          animate={{ y: isHovered ? -8 : 0 }}
        >
          {project.title}
        </motion.h3>

        <motion.p
          className="text-white/80 mb-3 line-clamp-2"
          initial={{ opacity: 0.7, y: 10 }}
          animate={{
            opacity: isHovered ? 1 : 0.7,
            y: isHovered ? 0 : 10,
          }}
        >
          {project.description}
        </motion.p>

        <motion.div
          className="flex items-center text-white/90 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 20,
          }}
        >
          <span>View details</span>
          <ArrowRight className="ml-2 w-4 h-4" />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

// Skill animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const skillVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

// Main Portfolio Page Component
const PortfolioPage = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const { scrollYProgress } = useScroll()
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const headerScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95])

  // Ref for the header section
  const headerRef = useRef<HTMLDivElement>(null)

  const openModal = (project: Project) => {
    setSelectedProject(project)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-white text-gray-900 font-sans selection:bg-orange-500 selection:text-white">
      <CursorDot />
      <AnimatedBackground />

      {/* Hero Header */}
      <motion.header
        ref={headerRef}
        className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
        style={{ opacity: headerOpacity, scale: headerScale }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-orange-100/20 via-white/50 to-white z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-orange-100/20 to-white opacity-80" />
        </div>

        <div className="container max-w-5xl mx-auto z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">
              Ayush Kushwaha
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Blending creativity with code to craft immersive digital experiences
            </p>

            <motion.div
              className="flex flex-wrap justify-center gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 group"
              >
                View my work
                <motion.span className="inline-block ml-2" initial={{ x: 0 }} whileHover={{ x: 4 }}>
                  →
                </motion.span>
              </a>
              <a
                href="#skills"
                className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-gray-900 font-medium hover:bg-white/20 transition-all duration-300"
              >
                Explore skills
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-0 right-0 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-gray-300 flex justify-center p-1"
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
          </motion.div>
        </motion.div>
      </motion.header>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >



            <motion.div
              className="text-center mb-16 relative z-10"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="pb-1 text-4xl font-bold bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 bg-clip-text text-transparent">
                Creative Portfolio
              </h2>
              <p className="text-lg text-gray-600 mt-2">
                A showcase of my digital craftsmanship and creative problem-solving
              </p>
            </motion.div>

          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.15 }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <ProjectCard project={project} onClick={() => openModal(project)} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-100/10 to-white opacity-50" />

        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
              <h2 className="pb-1 text-4xl font-bold bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 bg-clip-text text-transparent">
              Technical Palette
            </h2>
            <p className="text-lg text-gray-600 mt-2">
            The technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={skillVariants}
                className={`${skill.color} relative overflow-hidden rounded-xl p-8 shadow-xl`}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute -right-4 -bottom-4 opacity-20">
                  <Star className="w-32 h-32" />
                </div>
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-2xl font-bold mb-1">{skill.name}</h3>
                <p className="text-white/80 font-medium">{skill.level}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 relative">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
              <h2 className="pb-1 text-4xl font-bold bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 bg-clip-text text-transparent">
              Professional Journey
            </h2>
            <p className="text-lg text-gray-600 mt-2">
            The path I've walked in my professional career</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative mb-12 last:mb-0 pl-8 border-l-2 border-gray-200"
              >
                <div className="absolute -left-[11px] top-0">
                  <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${exp.color}`} />
                </div>

                <div
                  className={`relative p-6 rounded-xl bg-white shadow-lg border border-gray-100 hover:bg-gray-50 transition-all duration-300`}
                >
                  <div className="flex flex-wrap justify-between mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">{exp.role}</h3>
                    <p className="text-gray-600">{exp.duration}</p>
                  </div>
                  <p
                    className={`text-lg bg-gradient-to-r ${exp.color} bg-clip-text text-transparent font-semibold mb-3`}
                  >
                    {exp.company}
                  </p>
                  <p className="text-gray-700">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Footer Section */}
      <footer className="py-24 relative bg-white">
        <div className="absolute inset-0 bg-gradient-to-t from-white via-orange-100/5 to-white opacity-60" />

        <div className="container max-w-5xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to bring your vision to life?</h2>
            <motion.a
              href="/contact"
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium text-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in touch
            </motion.a>

            <div className="mt-16 flex justify-center space-x-6">
              <a href="https://github.com/Ayushkush1" className="text-gray-600 hover:text-gray-900 transition-colors">
                Github
              </a>
              <a href="https://www.linkedin.com/in/ayush-kushwaha-b3b76915b/" className="text-gray-600 hover:text-gray-900 transition-colors">
                LinkedIn
              </a>
              <a href="https://x.com/AyushKu93360528?t=PAMI4rDdx4yS9kuyIe8DZA&s=09" className="text-gray-600 hover:text-gray-900 transition-colors">
                Twitter
              </a>
              <a href="https://www.instagram.com/awsm_ayush_/" className="text-gray-600 hover:text-gray-900 transition-colors">
                Instagram
              </a>
            </div>

            <p className="mt-8 text-gray-400 text-sm">© {new Date().getFullYear()} · Designed & Developed with ♥</p>
          </motion.div>
        </div>
      </footer>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-slate-800 border border-white/10 rounded-2xl max-w-2xl w-full overflow-hidden"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", damping: 30 }}
            >
              <div className="relative aspect-video">
                <img
                  src={selectedProject.image || "/placeholder.svg?height=400&width=600"}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/70 transition-all"
                >
                  ✕
                </button>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">{selectedProject.title}</h3>
                <p className="text-white/70 mb-6">{selectedProject.description}</p>
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white font-medium hover:shadow-lg hover:shadow-fuchsia-500/25 transition-all duration-300"
                >
                  <span>Visit project</span>
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default PortfolioPage
