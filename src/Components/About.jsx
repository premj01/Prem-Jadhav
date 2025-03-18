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
                      src="/your-photo.jpg" // Replace with your photo path
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
                    Hello! I'm Prem Jadhav, a passionate full-stack developer
                    with a keen eye for creating innovative and user-centric web
                    solutions. I specialize in building scalable applications
                    that combine beautiful interfaces with robust functionality.
                  </p>
                  <p>
                    My expertise spans the entire development spectrum, from
                    crafting responsive front-end experiences to architecting
                    scalable back-end systems. I'm particularly enthusiastic
                    about emerging technologies and their potential to solve
                    real-world challenges.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new
                    technologies, contributing to open-source projects, or
                    sharing knowledge with the developer community.
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
                      "React",
                      "Node.js",
                      "TypeScript",
                      "MongoDB",
                      "Next.js",
                      "Express",
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
                  href="/your-cv.pdf" // Replace with your CV path
                  download
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
