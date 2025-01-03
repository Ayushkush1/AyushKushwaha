'use client';

import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section className="py-16 relative">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-light text-gray-800">Let’s Connect</h2>
        <p className="text-lg text-gray-400 mt-2">
          Bringing your ideas to life starts here
        </p>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 px-6">
        {/* Contact Form */}
        <div className="flex-1">
          <p className="text-gray-600 mb-6">
            Feel free to contact us any time. We will get back to you as soon as we can!
          </p>
          <form className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="w-full border-b border-gray-400 focus:border-gray-800 outline-none text-gray-700 py-3"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full border-b border-gray-400 focus:border-gray-800 outline-none text-gray-700 py-3"
              />
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Message"
                rows="5"
                className="w-full border-b border-gray-400 focus:border-gray-800 outline-none text-gray-700 py-3 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-orange-500 text-white py-3 px-8 uppercase text-sm font-bold tracking-wide rounded-md hover:bg-orange-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex-1 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white rounded-lg p-8 relative">
          {/* Yellow Ribbon */}
          <div className="absolute top-[-8px] left-[-8px] w-10 h-10 bg-yellow-400 rounded-lg"></div>
          <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
          <ul className="space-y-6">
            <li className="flex items-center space-x-4">
              <i className="fas fa-envelope text-yellow-400 text-xl"></i>
              <a
                href="mailto:ayushkushwaha381@gmail.com"
                className="hover:underline"
              >
                ayushkushwaha381@gmail.com
              </a>
            </li>
            <li className="flex items-center space-x-4">
              <i className="fas fa-phone text-green-400 text-xl"></i>
              <a href="tel:+918738954475" className="hover:underline">
                +91 8738954475
              </a>
            </li>
            <li className="flex items-center space-x-4">
              <i className="fab fa-linkedin text-blue-500 text-xl"></i>
              <a
                href="https://www.linkedin.com/in/ayush-kushwaha-b3b76915b/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/ayush-kushwaha
              </a>
            </li>
            <li className="flex items-center space-x-4">
              <i className="fab fa-github text-gray-400 text-xl"></i>
              <a
                href="https://github.com/Ayushkush1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                github.com/Ayushkush1
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
