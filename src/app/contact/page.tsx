'use client';

import { motion } from 'framer-motion';
import { ChevronUp, Mail, Phone, Linkedin, Github, Instagram } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submissionStatus, setSubmissionStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      setSubmissionStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-50 overflow-hidden selection:bg-orange-500 selection:text-white">
      {/* Hero Section */}
      <motion.section
        className="pt-20 pb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent mb-6">
              Contact Me
            </h1>
            <p className="text-orange-800/70 text-lg">Let’s bring your ideas to life together</p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Your Message"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="mt-6 text-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition"
                >
                  Send Message
                </button>
              </div>
              {submissionStatus === 'success' && (
                <p className="mt-4 text-center text-green-600">Message sent successfully!</p>
              )}
              {submissionStatus === 'error' && (
                <p className="mt-4 text-center text-red-600">Failed to send message. Please try again.</p>
              )}
            </form>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Details Section */}
      <motion.section
        className="py-16 bg-gradient-to-r from-orange-50 to-amber-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center font-light text-gray-800 mb-10">Contact Details</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Email Card */}
            <div className="flex items-center bg-white shadow-md rounded-lg p-6 gap-4">
              <Mail className="w-8 h-8 text-orange-500" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                <a
                  href="mailto:ayushkushwaha381@gmail.com"
                  className="text-orange-600 hover:underline text-sm"
                >
                  ayushkushwaha381@gmail.com
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="flex items-center bg-white shadow-md rounded-lg p-6 gap-4">
              <Phone className="w-8 h-8 text-green-500" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                <a href="tel:+918738954475" className="text-orange-600 hover:underline text-sm">
                  +91-8738954475
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="flex items-center bg-white shadow-md rounded-lg p-6 gap-4">
              <Linkedin className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/ayush-kushwaha-b3b76915b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:underline text-sm"
                >
                  linkedin.com/in/ayush-kushwaha
                </a>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="flex items-center bg-white shadow-md rounded-lg p-6 gap-4">
              <Github className="w-8 h-8 text-gray-800" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">GitHub</h3>
                <a
                  href="https://github.com/Ayushkush1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:underline text-sm"
                >
                  github.com/Ayushkush1
                </a>
              </div>
            </div>

            {/* Instagram Personal Card */}
            <div className="flex items-center bg-white shadow-md rounded-lg p-6 gap-4">
              <Instagram className="w-8 h-8 text-pink-500" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Instagram (Personal)</h3>
                <a
                  href="https://instagram.com/awsm_ayush_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:underline text-sm"
                >
                  @awsm_ayush_
                </a>
              </div>
            </div>

            {/* Instagram Artistic Card */}
            <div className="flex items-center bg-white shadow-md rounded-lg p-6 gap-4">
              <Instagram className="w-8 h-8 text-pink-500" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Instagram (Artistic)</h3>
                <a
                  href="https://instagram.com/_artistic_ayush"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:underline text-sm"
                >
                  @_artistic_ayush
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
