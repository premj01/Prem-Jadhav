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

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Photo Container */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-50"
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-3 border border-white/10">
                  <div className="aspect-square rounded-xl overflow-hidden">
                    <motion.img
                      src="/prem_jadhav_image.png"
                      alt="Prem Jadhav"
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-sm" />
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-sm" />
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/2 space-y-8"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h3 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Full Stack Developer & Tech Enthusiast
                </h3>
                <div className="space-y-6 text-gray-300">
                  <p>
                    Hello! I'm Prem Jadhav, a passionate MERN Stack Developer from Pune, India. 
                    I specialize in building full-stack web applications using React, Node.js, 
                    Express, and MongoDB, with a strong focus on creating scalable and efficient solutions.
                  </p>
                  <p>
                    Currently pursuing my Bachelor of Technology in Computer Science at JSPM's Rajashri 
                    Shahu College of Engineering with a CGPA of 9.21. I've gained hands-on experience 
                    through my internship at SUMAGO Infotech and have won multiple hackathons including 
                    Google Cloud's Build and Grow Hackathon and DigitalOcean's Hacktoberfest Hackathon.
                  </p>
                  <p>
                    As the Lead of Web Development at Google Developer Group on Campus (GDGoC), I'm 
                    passionate about building innovative solutions and sharing knowledge with the 
                    developer community. I've participated in 7+ national-level hackathons and love 
                    working on AI-powered applications.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 mt-8">
                  {/* Tech Stack */}
                  <motion.div
                    className="flex gap-3 flex-wrap"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
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
                        className="px-4 py-2 rounded-xl bg-gray-700/50 text-gray-300 text-sm border border-gray-600 hover:border-gray-500 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>

                {/* Download CV Button */}
                <motion.a
                  href="/Prem_Jadhav_Resume.pdf"
                  download="Prem_Jadhav_Resume.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 mt-8 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-medium hover:opacity-90 transition-opacity"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaDownload className="text-sm" />
                  Download CV
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
