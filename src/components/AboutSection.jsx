export default function AboutSection() {
    return (
      <section className="py-16 relative top-[150px]">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-gray-800">Who I Am</h2>
          <p className="text-lg text-gray-500 mt-2">
            A passionate developer turning ideas into impactful digital experiences
          </p>
        </div>
  
        {/* Content */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto">
          {/* Image */}
          <div className="w-64 h-64 rounded-full overflow-hidden shadow-md">
            <img
              src="/assets/Profile.png"
              alt="Profile"
              className="h-72 object-cover"
            />
          </div>
  
          {/* Text Content */}
          <div className="text-center md:text-left max-w-lg">
            <p className="text-gray-700 text-base mb-4">
              I'm a <span className="font-bold text-black">Full Stack MERN Developer</span> who loves creating web applications that are both functional and visually appealing. With experience in React.js, Node.js, MongoDB, and Next.js, I specialize in building complete solutions from frontend to backend.
            </p>
            <p className="text-gray-700 text-base mb-4">
              In my free time, I love sketching and capturing nature through photography. You can check out my personal work on Instagram:
            </p>
            <p className="text-gray-700 text-base mb-4">
              Personal: <a href="https://instagram.com/awsm_ayush_" target="_blank" className="text-blue-500">@awsm_ayush_</a> Artistic: <a href="https://instagram.com/_artistic_ayush" target="_blank" className="text-blue-500">@_artistic_ayush</a>
            </p>
            <p className="text-gray-900 font-md text-lg">
              My goal is to create user-friendly digital products that make a real impact.
            </p>
          </div>
        </div>
      </section>
    );
  }
  