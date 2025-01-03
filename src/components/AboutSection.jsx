"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-16 relative bg-gray-50">
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-light text-gray-800">Who I Am</h2>
        <p className="text-lg text-gray-400 mt-2">
          A passionate developer turning ideas into impactful digital
          experiences
        </p>
      </motion.div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto">
        {/* Image */}
        <motion.div
          className="w-64 h-64 rounded-full overflow-hidden shadow-md relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.img
            src="/assets/Profile-removebg.png"
            alt="Profile"
            className="w-64 h-64 rounded-full bg-white-100 object-cover"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="text-center md:text-left max-w-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-gray-700 text-base mb-4">
            I'm a{" "}
            <span className="font-bold text-black">
              Full Stack MERN Developer
            </span>{" "}
            who loves creating web applications that are both functional and
            visually appealing. With experience in React.js, Node.js, MongoDB,
            and Next.js, I specialize in building complete solutions from
            frontend to backend.
          </p>
          <p className="text-gray-700">
            Beyond coding, I enjoy sketching, capturing nature through
            photography, cooking delightful meals, and exploring creative ideas.
            Check out my personal and professional profiles:
          </p>
          <div className="flex gap-5 mt-6 items-center flex-wrap justify-center md:justify-start">
            {/* Instagram Personal */}
            <a
              href="https://instagram.com/awsm_ayush_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <i className="fab fa-instagram text-2xl text-pink-600"></i>
              <span className="text-blue-500 hover:text-blue-700">
                @awsm_ayush_
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ayush-kushwaha-b3b76915b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <i className="fab fa-linkedin text-2xl text-blue-600"></i>
              <span className="text-blue-500 hover:text-blue-700">
                Ayush Kushwaha
              </span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Ayushkush1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <i className="fab fa-github text-2xl text-gray-800"></i>
              <span className="text-blue-500 hover:text-blue-700">
                @Ayushkush1
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
