'use client';

import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">


      {/* Contact Form Section */}
      <motion.section
        className="py-16 px-8 bg-gray-50"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl text-center font-light text-gray-800">Let’s Connect</h2>
        <p className="text-lg text-center text-gray-400 mt-2 mb-12">
          Bringing your ideas to life starts here
        </p>
        <form className="max-w-6xl mx-auto  bg-gray-100 p-8  rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              rows={5}
              placeholder="Your Message"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <div className="mt-6 text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </motion.section>

      {/* Contact Details Section */}
      <motion.section
        className="py-16 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl text-center font-light text-gray-800 mb-10">Contact Details</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {/* Email Card */}
          <div className="flex items-center bg-white shadow-md rounded-lg p-6 gap-4">
            <i className="fas fa-envelope text-blue-500 text-3xl"></i>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Email</h3>
              <a
                href="mailto:ayushkushwaha381@gmail.com"
                className="text-blue-600 hover:underline text-sm"
              >
                ayushkushwaha381@gmail.com
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="flex items-center bg-white shadow-md rounded-lg p-6 gap-4">
            <i className="fas fa-phone text-green-500 text-3xl"></i>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
              <a href="tel:+918738954475" className="hover:underline text-blue-500 text-sm">
                +91-8738954475
              </a>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="flex items-center bg-white shadow-md rounded-lg p-6 gap-4">
            <i className="fab fa-linkedin text-blue-600 text-3xl"></i>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/ayush-kushwaha-b3b76915b/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-500 text-sm"
              >
                linkedin.com/in/ayush-kushwaha
              </a>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="flex items-center bg-white shadow-md rounded-lg p-6 gap-4">
            <i className="fab fa-github text-gray-800 text-3xl"></i>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">GitHub</h3>
              <a
                href="https://github.com/Ayushkush1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-500 text-sm"
              >
                github.com/Ayushkush1
              </a>
            </div>
          </div>

          {/* Instagram Personal Card */}
          <div className="flex items-center bg-white shadow-md rounded-lg p-6 gap-4">
            <i className="fab fa-instagram text-pink-500 text-3xl"></i>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Instagram (Personal)</h3>
              <a
                href="https://instagram.com/awsm_ayush_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm"
              >
                @awsm_ayush_
              </a>
            </div>
          </div>

          {/* Instagram Artistic Card */}
          <div className="flex items-center bg-white shadow-md rounded-lg p-6 gap-4">
            <i className="fab fa-instagram text-pink-500 text-3xl"></i>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Instagram (Artistic)</h3>
              <a
                href="https://instagram.com/_artistic_ayush"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm"
              >
                @_artistic_ayush
              </a>
            </div>
          </div>
        </div>

      </motion.section>
    </div>
  );
}
