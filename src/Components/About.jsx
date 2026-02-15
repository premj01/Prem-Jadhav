import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_70%)]" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(129,140,248,0.1) 0%, rgba(0,0,0,0) 50%)",
          }}
        />
        {/* Animated shapes */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 relative inline-block">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              About Me
            </span>
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Main Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-700 shadow-2xl"
          >
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              {/* Photo Container - Creative Geometric Design */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-full lg:w-80 flex-shrink-0 mx-auto lg:mx-0"
              >
                <div className="relative">
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-md opacity-60"></div>
                  
                  {/* Main Image Container */}
                  <div className="relative bg-gray-900 rounded-3xl p-1">
                    <div className="relative rounded-[22px] overflow-hidden">
                      {/* Gradient Overlay on Image */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-40 z-10"></div>
                      
                      <img
                        src="/prem_jadhav_image.png"
                        alt="Prem Jadhav"
                        className="w-full h-full object-cover aspect-square"
                      />
                      
                      {/* Corner Accents */}
                      <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-blue-500 rounded-tl-[22px]"></div>
                      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-pink-500 rounded-br-[22px]"></div>
                    </div>
                  </div>
                  
                  {/* Floating Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl px-4 py-2 shadow-xl"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-white text-sm font-semibold">Available</span>
                    </div>
                  </motion.div>
                  
                  {/* Decorative Dots Pattern */}
                  <div className="absolute -top-6 -left-6 grid grid-cols-3 gap-2 opacity-50">
                    {[...Array(9)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* About Content */}
              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Full Stack Developer & Tech Enthusiast
                  </h3>
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mb-6"></div>
                </div>

                <div className="space-y-4 text-gray-300 text-base leading-relaxed">
                  <p>
                    👋 Hello! I'm <span className="text-white font-semibold">Prem Jadhav</span>, a passionate MERN Stack Developer from Pune, India. 
                    I specialize in building full-stack web applications using React, Node.js, 
                    Express, and MongoDB, with a strong focus on creating scalable and efficient solutions.
                  </p>
                  <p>
                    🎓 Currently pursuing my Bachelor of Technology in Computer Science at JSPM's Rajashri 
                    Shahu College of Engineering with a <span className="text-white font-semibold">CGPA of 9.21</span>. I've gained hands-on experience 
                    through my internship at SUMAGO Infotech and have won multiple hackathons including 
                    <span className="text-blue-400 font-semibold"> Google Cloud's Build and Grow Hackathon</span> and 
                    <span className="text-blue-400 font-semibold"> DigitalOcean's Hacktoberfest Hackathon</span>.
                  </p>
                  <p>
                    🚀 As the <span className="text-white font-semibold">Lead of Web Development at Google Developer Group on Campus (GDGoC)</span>, I'm 
                    passionate about building innovative solutions and sharing knowledge with the 
                    developer community. I've participated in 7+ national-level hackathons and love 
                    working on AI-powered applications.
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="pt-4">
                  <h4 className="text-lg font-semibold text-white mb-4">Tech Stack</h4>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "React.js",
                      "Node.js",
                      "Express.js",
                      "MongoDB",
                      "Spring Boot",
                      "MySQL",
                    ].map((tech, index) => (
                      <motion.span
                        key={index}
                        className="px-4 py-2 rounded-lg bg-gradient-to-r from-gray-700/50 to-gray-800/50 text-gray-200 text-sm border border-gray-600 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Download Resume Button */}
                <div className="pt-4">
                  <motion.a
                    href="/Prem_Jadhav_Resume.pdf"
                    download="Prem_Jadhav_Resume.pdf"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaDownload className="text-lg" />
                    Download Resume
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
