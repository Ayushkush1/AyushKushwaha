'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Introduction Section */}
      <motion.section
        className="py-10 px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl text-center font-light text-gray-800">Who I Am</h2>
        <p className="text-lg text-center text-gray-400 mt-2 mb-10">
          A passionate developer turning ideas into impactful digital experiences
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-7xl mx-auto">
          {/* Image */}
          <motion.div
            className="w-80 h-80 rounded-full overflow-hidden bg-white shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="/assets/Profile-removebg.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="text-center md:text-left max-w-2xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              I’m Ayush Kushwaha, a passionate Full Stack Developer with expertise in modern technologies like React.js, Next.js, Node.js, and MongoDB. I specialize in creating scalable, efficient, and user-friendly web applications that deliver impactful user experiences.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              My journey as a developer has been driven by a relentless curiosity to learn and a desire to build solutions that seamlessly bridge design and functionality.
            </p>
            <p className="text-gray-900 font-bold text-xl">
              My goal is to create seamless, scalable solutions that leave a lasting impact.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="py-16 px-16 bg-gray-50"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl text-center font-light text-gray-800">
          The Skills That Power My Code
        </h2>
        <p className="text-lg text-center text-gray-400 mt-2 mb-12">A collection of the tools and technologies I use to bring ideas to life</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { name: 'React.js', color: 'bg-blue-500' },
            { name: 'Next.js', color: 'bg-purple-500' },
            { name: 'JavaScript', color: 'bg-yellow-500' },
            { name: 'Node.js', color: 'bg-green-500' },
            { name: 'CSS', color: 'bg-teal-500' },
            { name: 'MongoDB', color: 'bg-green-700' },
          ].map((skill, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-lg shadow-md text-center text-white ${skill.color} hover:bg-opacity-90 transition`}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Interests Section */}
      <motion.section
        className="py-16 px-8 "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl text-center font-light text-gray-800">
          Exploring Beyond Code
        </h2>
        <p className="text-lg text-center text-gray-400 mt-2 mb-12">
          Passions that inspire creativity and fuel my imagination
        </p>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto text-center">
          Beyond coding, I enjoy sketching, capturing nature through photography, cooking delightful meals, and exploring creative ideas. Check out my personal and professional profiles:
        </p>
        <div className="flex justify-center gap-8 mt-6 items-center flex-wrap">
          {/* Instagram Personal */}
          <a
            href="https://instagram.com/awsm_ayush_"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg"
          >
            <i className="fab fa-instagram text-3xl text-pink-600"></i>
            <span className="text-blue-500 hover:text-blue-700">@awsm_ayush_</span>
          </a>

          {/* Instagram Artistic */}
          <a
            href="https://instagram.com/_artistic_ayush"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg"
          >
            <i className="fab fa-instagram text-3xl text-pink-600"></i>
            <span className="text-blue-500 hover:text-blue-700">@_artistic_ayush</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ayush-kushwaha-b3b76915b/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg"
          >
            <i className="fab fa-linkedin text-3xl text-blue-600"></i>
            <span className="text-blue-500 hover:text-blue-700">Ayush Kushwaha</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Ayushkush1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg"
          >
            <i className="fab fa-github text-3xl text-gray-800"></i>
            <span className="text-blue-500 hover:text-blue-700">@Ayushkush1</span>
          </a>
        </div>

      </motion.section>


    </div>
  );
}
