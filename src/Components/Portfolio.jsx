import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Technologies from "./Technologies";
import Experience from "./Experience";
import Education from "./Education";
import Achievements from "./Achievements";
import Contact from "./Contact";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <main className="bg-gray-900">
        <Hero />
        <About />
        <Projects />
        <Technologies />
        <Experience />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative py-12 overflow-hidden bg-gray-900"
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_0%,transparent_70%)]" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(129,140,248,0.05) 0%, rgba(0,0,0,0) 50%)",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.p
              className="text-base sm:text-lg relative inline-block"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <span className="relative">
                <span className="bg-gradient-to-r from-indigo-500/80 via-purple-500/80 to-pink-500/80 blur-xl absolute inset-0 opacity-20 rounded-full" />
                <span className="relative bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 bg-clip-text text-transparent font-medium">
                  © {new Date().getFullYear()} Prem Jadhav
                </span>
              </span>
              <span className="mx-2 text-gray-400">|</span>
              <span className="text-gray-400 relative group">
                <span className="relative inline-block">
                  Crafted with
                  <motion.span
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      repeatType: "reverse",
                    }}
                    className="inline-block mx-1 text-red-500"
                  >
                    ❤️
                  </motion.span>
                  and Code
                  <motion.div
                    className="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 0.5 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />
                </span>
              </span>
            </motion.p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Portfolio;
