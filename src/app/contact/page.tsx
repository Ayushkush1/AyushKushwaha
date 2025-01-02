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
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Contact Me</h2>
        <form className="max-w-4xl mx-auto bg-gray-100 p-8 rounded-lg shadow-lg">
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
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Contact Details</h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-4">Feel free to reach me at:</p>
          <p className="text-xl font-bold text-gray-900">Email: <a href="mailto:ayushkushwaha381@gmail.com" className="text-blue-600">ayushkushwaha381@gmail.com</a></p>
          <p className="text-xl font-bold text-gray-900 mt-2">Phone: +91-XXXXXXXXXX</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="https://instagram.com/awsm_ayush_" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Instagram (Personal)</a>
            <a href="https://instagram.com/_artistic_ayush" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Instagram (Artistic)</a>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
