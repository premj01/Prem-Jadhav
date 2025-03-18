import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaTrophy,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredItem, setHoveredItem] = useState(null);

  const navItems = [
    { id: "home", icon: FaHome, label: "Home" },
    { id: "about", icon: FaUser, label: "About" },
    { id: "projects", icon: FaCode, label: "Projects" },
    { id: "experience", icon: FaBriefcase, label: "Experience" },
    { id: "education", icon: FaGraduationCap, label: "Education" },
    { id: "achievements", icon: FaTrophy, label: "Achievements" },
    { id: "contact", icon: FaEnvelope, label: "Contact" },
  ];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/premj01", label: "GitHub" },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/premj01",
      label: "LinkedIn",
    },
    { icon: FaTwitter, href: "https://twitter.com/premj01", label: "Twitter" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleScrollSpy = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.pageYOffset;

      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollSpy);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollSpy);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Vertical Navbar */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-4"
      >
        {/* Navigation Items */}
        <div className="flex flex-col items-center gap-3 bg-gray-900/90 backdrop-blur-md p-3 rounded-xl shadow-xl border border-white/10">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative"
              onHoverStart={() => setHoveredItem(item.id)}
              onHoverEnd={() => setHoveredItem(null)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div
                className={`p-2 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/20"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                <item.icon className="text-lg" />
              </div>
              <AnimatePresence>
                {hoveredItem === item.id && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: -10 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="absolute right-full top-1/2 -translate-y-1/2 mr-2 px-2 py-1 rounded-lg text-xs font-medium whitespace-nowrap bg-gray-900/90 backdrop-blur-sm text-white shadow-lg"
                  >
                    {item.label}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center gap-2 bg-gray-900/90 backdrop-blur-md p-3 rounded-xl shadow-xl border border-white/10">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setHoveredItem(social.label)}
              onHoverEnd={() => setHoveredItem(null)}
            >
              <div className="p-2 rounded-lg bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white transition-all duration-300">
                <social.icon className="text-lg" />
              </div>
              <AnimatePresence>
                {hoveredItem === social.label && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: -10 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="absolute right-full top-1/2 -translate-y-1/2 mr-2 px-2 py-1 rounded-lg text-xs font-medium whitespace-nowrap bg-gray-900/90 backdrop-blur-sm text-white shadow-lg"
                  >
                    {social.label}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Mobile Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`md:hidden fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-gray-900/80 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                PJ
              </span>
            </motion.div>

            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-white/5 backdrop-blur-sm text-gray-300 hover:text-white transition-colors"
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? (
                <FaTimes className="text-xl" />
              ) : (
                <FaBars className="text-xl" />
              )}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-gray-900/95 backdrop-blur-md"
            >
              <div className="px-4 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? "bg-white/10 text-white"
                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                    }`}
                    whileHover={{ x: 10 }}
                  >
                    <item.icon className="text-lg" />
                    <span>{item.label}</span>
                  </motion.button>
                ))}

                <div className="flex items-center justify-center gap-4 py-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-white/5 text-gray-300 hover:text-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon className="text-lg" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
