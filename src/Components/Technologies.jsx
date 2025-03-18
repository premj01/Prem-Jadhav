import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiExpress,
  SiPrisma,
  SiFramer,
} from "react-icons/si";

const Technologies = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const technologies = [
    {
      category: "Frontend",
      icon: FaReact,
      color: "#61DAFB",
      skills: [
        { name: "React.js", icon: FaReact, level: 90, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, level: 85, color: "#000000" },
        { name: "JavaScript", icon: SiJavascript, level: 95, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, level: 80, color: "#3178C6" },
        {
          name: "Tailwind CSS",
          icon: SiTailwindcss,
          level: 90,
          color: "#06B6D4",
        },
        { name: "Framer Motion", icon: SiFramer, level: 75, color: "#FF0055" },
      ],
    },
    {
      category: "Backend",
      icon: FaNodeJs,
      color: "#339933",
      skills: [
        { name: "Node.js", icon: FaNodeJs, level: 85, color: "#339933" },
        { name: "Express.js", icon: SiExpress, level: 85, color: "#000000" },
        { name: "Python", icon: FaPython, level: 80, color: "#3776AB" },
        { name: "Prisma", icon: SiPrisma, level: 75, color: "#2D3748" },
      ],
    },
    {
      category: "Database",
      icon: SiMongodb,
      color: "#47A248",
      skills: [
        { name: "MongoDB", icon: SiMongodb, level: 85, color: "#47A248" },
        { name: "PostgreSQL", icon: SiPostgresql, level: 80, color: "#4169E1" },
        { name: "Redis", icon: SiRedis, level: 70, color: "#DC382D" },
        { name: "Firebase", icon: SiFirebase, level: 80, color: "#FFCA28" },
      ],
    },
    {
      category: "Tools & Others",
      icon: FaGitAlt,
      color: "#F05032",
      skills: [
        { name: "Git", icon: FaGitAlt, level: 90, color: "#F05032" },
        { name: "Docker", icon: FaDocker, level: 75, color: "#2496ED" },
        { name: "AWS", icon: FaAws, level: 70, color: "#232F3E" },
        { name: "Figma", icon: FaFigma, level: 80, color: "#F24E1E" },
      ],
    },
  ];

  return (
    <section
      id="technologies"
      className="min-h-screen py-20 bg-gray-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(76, 29, 149, 0.1) 0%, rgba(0,0,0,0) 50%)",
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
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Technologies & Skills
            </span>
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my technical expertise across different domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group cursor-pointer ${
                selectedCategory === tech.category ? "scale-105" : ""
              }`}
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === tech.category ? null : tech.category
                )
              }
            >
              <div className="relative h-48 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-white/10 p-6 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                {/* Hexagon Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        width: "20px",
                        height: "23px",
                        backgroundColor: tech.color,
                        clipPath:
                          "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                        opacity: 0.1,
                      }}
                    />
                  ))}
                </div>

                <div className="relative z-10 h-full flex flex-col items-center justify-center">
                  <tech.icon
                    className="text-5xl mb-4"
                    style={{ color: tech.color }}
                  />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {tech.category}
                  </h3>
                  <div className="flex items-center gap-1">
                    {[...Array(tech.skills.length)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: tech.color }}
                      />
                    ))}
                  </div>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20"
                  style={{
                    background: `radial-gradient(circle at center, ${tech.color}, transparent)`,
                  }}
                  whileHover={{ opacity: 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {selectedCategory && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {technologies
                  .find((t) => t.category === selectedCategory)
                  ?.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative group"
                      onHoverStart={() => setHoveredSkill(skill.name)}
                      onHoverEnd={() => setHoveredSkill(null)}
                    >
                      <div className="relative bg-gray-900/50 rounded-xl p-4 border border-white/5 overflow-hidden">
                        <div className="flex items-center gap-3 mb-3">
                          <div
                            className="p-2 rounded-lg"
                            style={{ backgroundColor: `${skill.color}20` }}
                          >
                            <skill.icon
                              className="text-2xl"
                              style={{ color: skill.color }}
                            />
                          </div>
                          <span className="text-white font-medium">
                            {skill.name}
                          </span>
                        </div>

                        <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="h-full rounded-full relative"
                            style={{ backgroundColor: skill.color }}
                          >
                            <div
                              className="absolute inset-0"
                              style={{
                                background: `linear-gradient(90deg, transparent, ${skill.color}80)`,
                              }}
                            />
                          </motion.div>
                        </div>

                        <div className="mt-2 flex justify-between items-center">
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className="w-1 h-1 rounded-full"
                                style={{
                                  backgroundColor:
                                    i < skill.level / 20
                                      ? skill.color
                                      : "#4B5563",
                                }}
                              />
                            ))}
                          </div>
                          <span
                            className="text-sm font-medium"
                            style={{ color: skill.color }}
                          >
                            {skill.level}%
                          </span>
                        </div>

                        {/* Skill Card Hover Effect */}
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-20 pointer-events-none"
                          style={{
                            background: `radial-gradient(circle at center, ${skill.color}, transparent)`,
                          }}
                          whileHover={{ opacity: 0.2 }}
                        />
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Technologies;
