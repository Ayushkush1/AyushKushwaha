"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define the Project type
type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
};

// Project Data
const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built using Next.js and Tailwind CSS, showcasing my skills and projects.",
    image: "/assets/portfolio.png",
    link: "https://ayushkushwaha.vercel.app/",
  },
  {
    title: "MOVIX",
    description:
      "A movie search app using Redux.js, React.js, and SASS with dynamic features.",
    image: "/assets/movix.png",
    link: "https://ayushmovix.vercel.app/",
  },
  {
    title: "RemoveQ",
    description:
      "An innovative image optimization service enhancing website performance.",
    image: "/assets/removeq.png",
    link: "https://removeq.com/",
  },
  {
    title: "Blog Website",
    description:
      "A responsive blog website built using HTML, CSS, and JavaScript with dynamic features.",
    image: "/assets/blooger.png",
    link: "https://ayushkush1.github.io/Blooger/",
  },
];

// Skills Data
const skills = [
  { name: "JavaScript", level: "Advanced", color: "bg-yellow-500" },
  { name: "React", level: "Advanced", color: "bg-blue-500" },
  { name: "Next.js", level: "Intermediate", color: "bg-gray-800" },
  { name: "Node.js", level: "Intermediate", color: "bg-green-500" },
  { name: "Tailwind CSS", level: "Intermediate", color: "bg-teal-500" },
  { name: "MongoDB", level: "Intermediate", color: "bg-green-700" },
];

// Updated Experience Data
const experience = [
  {
    role: "Frontend Developer",
    company: "Ninzahost",
    duration: "Sept 2024 - Present",
    description:
      "Developed a new frontend for Ninza Web Solutions using Next.js and Tailwind CSS, ensuring responsive and visually appealing designs. Refined UI/UX and implemented APIs for enhanced functionality.",
    color: "bg-gray-200",
  },
  {
    role: "Frontend Developer",
    company: "RemoveQ",
    duration: "Feb 2024 – May 2024",
    description:
      "Developed responsive interfaces using HTML, CSS, and JavaScript for a Laravel-based website, enhancing functionality and user experience.",
    color: "bg-gray-200",
  },
];

// Framer Motion Variants
const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const modalVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: 50, transition: { duration: 0.5 } },
};

const PortfolioPage = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-50 px-4 lg:px-0"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.section className="py-16" variants={sectionVariants}>
        <motion.h2
          className="text-4xl text-center font-light text-gray-800"
          variants={itemVariants}
        >
          Crafting Digital Excellence
        </motion.h2>
        <motion.p
          className="text-lg text-center text-gray-400 mt-2 mb-12"
          variants={itemVariants}
        >
          From concept to code
        </motion.p>

        {/* Project Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 px-20"
          variants={sectionVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative shadow-lg rounded-lg overflow-hidden bg-white transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer"
              variants={itemVariants}
              onClick={() => openModal(project)}
            >
              {/* Image Section */}
              <div className="overflow-hidden h-56">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                  initial={{ scale: 1.1 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <p className="text-sm text-orange-500">
                  Click to see more details
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Skills Section */}
      <motion.section className="py-16" variants={sectionVariants}>
        <motion.h2
          className="text-4xl text-center font-light text-gray-800"
          variants={itemVariants}
        >
          Skills & Expertise
        </motion.h2>
        <motion.p
          className="text-lg text-center text-gray-400 mt-2 mb-12"
          variants={itemVariants}
        >
          Tools and technologies that power my projects
        </motion.p>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-6 mx-20"
          variants={sectionVariants}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-lg shadow-lg text-center text-white ${skill.color}`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold">{skill.name}</h3>
              <p className="text-sm mt-2">{skill.level}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section className="py-16 bg-gray-50" variants={sectionVariants}>
        <motion.h2
          className="text-4xl text-center font-light text-gray-800"
          variants={itemVariants}
        >
          Professional Experience
        </motion.h2>
        <motion.p
          className="text-lg text-center text-gray-400 mt-2 mb-12"
          variants={itemVariants}
        >
          A brief overview of my roles and responsibilities
        </motion.p>
        <motion.div
          className="max-w-4xl mx-auto space-y-8"
          variants={sectionVariants}
        >
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              className={`rounded-lg border border-orange-400 shadow-lg p-6 text-center ${exp.color}`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-bold text-gray-800">{exp.role}</h3>
              <p className="text-orange-500">{exp.company}</p>
              <p className="text-sm text-gray-400">{exp.duration}</p>
              <p className="text-gray-600 mt-4">{exp.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
          >
            <div className="bg-white rounded-lg shadow-lg max-w-xl w-full p-6 relative">
              <button
                onClick={closeModal}
                className="absolute top-0 right-2 text-gray-500 hover:text-gray-700 text-xl"
              >
                &times;
              </button>

              {/* Modal Content */}
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {selectedProject.title}
              </h3>
              <p className="text-gray-600 mb-4">{selectedProject.description}</p>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 shadow-md transition-all duration-300"
              >
                View Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PortfolioPage;
