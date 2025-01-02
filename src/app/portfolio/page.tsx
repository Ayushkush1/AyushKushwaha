'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio built using Next.js and Tailwind CSS, showcasing my skills and projects.',
    image: 'assets/portfolio.png',
    link: 'https://ayushkushwaha.vercel.app/',
  },
  {
    title: 'MOVIX',
    description: 'A movie search app using Redux.js, React.js, and SASS with dynamic features.',
    image: 'assets/movix.png',
    link: 'https://ayushmovix.vercel.app/',
  },
  {
    title: 'RemoveQ',
    description: 'An innovative image optimization service enhancing website performance.',
    image: 'assets/removeq.png',
    link: 'https://removeq.com/',
  },
];

const skills = [
  { name: 'React.js', level: 'Expert', color: 'bg-blue-500' },
  { name: 'Next.js', level: 'Advanced', color: 'bg-purple-500' },
  { name: 'JavaScript', level: 'Expert', color: 'bg-yellow-500' },
  { name: 'Node.js', level: 'Intermediate', color: 'bg-green-500' },
  { name: 'CSS', level: 'Advanced', color: 'bg-teal-500' },
  { name: 'MongoDB', level: 'Intermediate', color: 'bg-green-700' },
];

// Variants for animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gray-50">
    

      {/* Projects Section */}
      <motion.section
        className="py-5 px-16 bg-gray-50"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="py-16 px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Skills I Use</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`p-4 rounded-lg shadow-md text-center text-white ${skill.color}`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold">{skill.name}</h3>
              <p className="text-sm mt-2">{skill.level}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

     
    </div>
  );
}
