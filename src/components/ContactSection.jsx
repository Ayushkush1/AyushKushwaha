export default function ContactSection() {
    return (
      <section className="py-16 relative top-[100px]">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-gray-800">Let’s Connect</h2>
          <p className="text-lg text-gray-500 mt-2">
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
            <form className="space-y-4">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className="w-full border-b border-gray-400 focus:border-gray-800 outline-none text-gray-700 py-2"
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
                  className="w-full border-b border-gray-400 focus:border-gray-800 outline-none text-gray-700 py-2"
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
                  rows="4"
                  className="w-full border-b border-gray-400 focus:border-gray-800 outline-none text-gray-700 py-2 resize-none"
                ></textarea>
              </div>
  
              {/* Submit Button */}
              <button
                type="submit"
                className="bg-black text-white py-2 px-8 uppercase text-sm font-bold tracking-wide"
              >
                Send
              </button>
            </form>
          </div>
  
          {/* Contact Info */}
          <div className="flex-1 bg-black text-white rounded-lg p-6 relative">
            {/* Yellow Ribbon */}
            <div className="absolute top-0 left-0 w-4 h-8 bg-yellow-400 rounded-tl-lg rounded-bl-lg"></div>
            <h3 className="text-lg font-semibold mb-6">Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-4">
                <span>📧</span>
                <a
                  href="mailto:ayushkushwaha381@gmail.com"
                  className="hover:underline"
                >
                  ayushkushwaha381@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-4">
                <span>📱</span>
                <a href="tel:+918738954475" className="hover:underline">
                  +91 8738954475
                </a>
              </li>
              <li className="flex items-center space-x-4">
                <span>🔗</span>
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
                <span>🐙</span>
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
  