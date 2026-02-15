import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTrophy,
  FaMedal,
  FaCertificate,
  FaAward,
  FaCode,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const Achievements = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredAchievement, setHoveredAchievement] = useState(null);

  const categories = [
    { id: "all", label: "All", icon: FaTrophy },
    { id: "awards", label: "Awards", icon: FaAward },
    { id: "certifications", label: "Certifications", icon: FaCertificate },
    { id: "competitions", label: "Competitions", icon: FaMedal },
  ];

  const achievements = [
    {
      id: 1,
      title: "Build and Grow Hackathon Winner",
      category: "competitions",
      description:
        "Winner (Pune) & Finalist (Mumbai) for building EduGen, an agentic GenUI microservice platform for dynamic UI generation",
      date: "January 2026",
      organization: "Google Cloud Community",
      link: "https://www.linkedin.com/posts/gdg-cloud-pune_gdgcloudpune-gdgcloudmumbai-hackathon-ugcPost-7422531295605374978-loEw?utm_source=social_share_send&utm_medium=member_desktop_web",
      icon: FaTrophy,
      color: "#F59E0B", // amber
    },
    {
      id: 2,
      title: "Hacktoberfest Hackathon Winner",
      category: "competitions",
      description:
        "First Prize Winner for building an AI-powered legal document analyzer to identify contractual obligations, promises, and risks",
      date: "October 2025",
      organization: "DigitalOcean",
      link: "https://www.linkedin.com/posts/premj01_hacktoberfest2025-pune-punetech-activity-7380922912221872129-Dl2D?utm_source=share&utm_medium=member_desktop",
      icon: FaTrophy,
      color: "#3B82F6", // blue
    },
    {
      id: 3,
      title: "GDGoC Lead - Web Development",
      category: "awards",
      description:
        "Leading web development initiatives and executing campus technical events including HackNova Hackathon",
      date: "July 2025 - Present",
      organization: "Google Developer Group on Campus",
      link: null,
      icon: FaAward,
      color: "#10B981", // emerald
    },
    {
      id: 4,
      title: "7+ National Hackathons",
      category: "competitions",
      description:
        "Participated in 7+ national-level hackathons, collaborating with diverse teams to develop MERN-based full-stack projects",
      date: "2024 - 2026",
      organization: "Various Organizations",
      link: null,
      icon: FaCode,
      color: "#8B5CF6", // violet
    },
    {
      id: 5,
      title: "Academic Excellence",
      category: "awards",
      description:
        "Maintaining 9.21 CGPA in BTech Computer Science and achieved 91.18% in Diploma",
      date: "2021 - Present",
      organization: "JSPM's RSCOE & Govt. Polytechnic Nashik",
      link: null,
      icon: FaMedal,
      color: "#EC4899", // pink
    },
  ];

  const filteredAchievements =
    activeCategory === "all"
      ? achievements
      : achievements.filter((ach) => ach.category === activeCategory);

  return (
    <section
      id="achievements"
      className="min-h-screen py-20 bg-gray-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.1)_0%,transparent_70%)]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.1) 0%, rgba(0,0,0,0) 50%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6 relative inline-block">
            <span className="bg-gradient-to-r from-amber-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
              Achievements
            </span>
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-violet-500 to-pink-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </h2>
        </motion.div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-6 py-3 rounded-xl backdrop-blur-sm border transition-all duration-300
                ${
                  activeCategory === category.id
                    ? "bg-white/10 border-white/20 text-white"
                    : "bg-gray-800/50 border-gray-700 text-gray-400 hover:bg-white/5 hover:border-white/10 hover:text-white"
                }`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-2">
                <category.icon className="text-lg" />
                <span>{category.label}</span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Achievements Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredAchievements.map((achievement) => (
              <motion.div
                key={achievement.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="relative group"
                onMouseEnter={() => setHoveredAchievement(achievement.id)}
                onMouseLeave={() => setHoveredAchievement(null)}
              >
                <motion.div
                  className="h-full bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Background Pattern */}
                  <div
                    className="absolute inset-0 opacity-5 transition-opacity duration-300 group-hover:opacity-10"
                    style={{
                      backgroundImage: `radial-gradient(circle at 50% 50%, ${achievement.color}, transparent 70%)`,
                    }}
                  />

                  {/* Icon */}
                  <div
                    className="p-3 rounded-xl w-fit mb-4"
                    style={{ backgroundColor: `${achievement.color}20` }}
                  >
                    <achievement.icon
                      className="text-2xl"
                      style={{ color: achievement.color }}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {achievement.description}
                  </p>

                  {/* Details */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{achievement.organization}</span>
                    <span>{achievement.date}</span>
                  </div>

                  {/* Link */}
                  {achievement.link && (
                    <motion.a
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300"
                      style={{ color: achievement.color }}
                      whileHover={{ x: 5 }}
                    >
                      View Post
                      <FaExternalLinkAlt className="text-xs" />
                    </motion.a>
                  )}

                  {/* Hover Glow Effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at center, ${achievement.color}, transparent)`,
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
