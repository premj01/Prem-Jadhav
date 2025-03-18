import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBriefcase,
  FaBuilding,
  FaCalendar,
  FaMapMarkerAlt,
  FaLink,
} from "react-icons/fa";

const Experience = () => {
  const [activeExp, setActiveExp] = useState(null);

  const experiences = [
    {
      id: 1,
      role: "Full Stack Developer",
      company: "Tech Innovators Inc.",
      duration: "2022 - Present",
      location: "Remote",
      type: "Full-time",
      companyUrl: "https://example.com",
      description:
        "Leading full-stack development initiatives and driving technical innovation.",
      highlights: [
        "Developed and launched 3 major features increasing user engagement by 45%",
        "Led a team of 4 developers in implementing microservices architecture",
        "Reduced API response time by 60% through optimization",
        "Implemented CI/CD pipeline reducing deployment time by 70%",
      ],
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker"],
      color: "#3B82F6", // blue
    },
    {
      id: 2,
      role: "Frontend Developer",
      company: "Digital Solutions Ltd",
      duration: "2021 - 2022",
      location: "Mumbai, India",
      type: "Full-time",
      companyUrl: "https://example.com",
      description:
        "Specialized in creating responsive and interactive user interfaces.",
      highlights: [
        "Built 5+ responsive web applications using React and Next.js",
        "Improved website performance scores by 40%",
        "Implemented state management reducing bugs by 35%",
        "Created reusable component library used across projects",
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      color: "#EC4899", // pink
    },
    {
      id: 3,
      role: "Backend Developer Intern",
      company: "Cloud Systems",
      duration: "2020 - 2021",
      location: "Pune, India",
      type: "Internship",
      companyUrl: "https://example.com",
      description: "Focused on backend development and database optimization.",
      highlights: [
        "Developed RESTful APIs serving 100K+ daily requests",
        "Optimized database queries improving performance by 50%",
        "Implemented real-time notification system",
        "Created automated testing suite with 90% coverage",
      ],
      technologies: ["Node.js", "Express", "PostgreSQL", "Redis"],
      color: "#10B981", // green
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen py-20 bg-gray-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, rgba(0,0,0,0) 50%)",
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
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Experience
            </span>
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A timeline of my professional journey and key achievements
          </p>
        </motion.div>

        <div className="relative flex justify-center">
          {/* Timeline Line */}
          <div className="absolute h-full w-1 bg-gradient-to-b from-blue-500 via-pink-500 to-green-500" />

          {/* Timeline Content */}
          <div className="relative w-full max-w-3xl">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative mb-24 ${
                  index % 2 === 0 ? "ml-auto pl-8" : "mr-auto pr-8"
                }`}
                style={{ width: "calc(50% - 24px)" }}
              >
                {/* Timeline Node */}
                <div
                  className={`absolute ${
                    index % 2 === 0
                      ? "left-0 -translate-x-1/2"
                      : "right-0 translate-x-1/2"
                  } top-0 w-12 h-12 rounded-full border-4 flex items-center justify-center`}
                  style={{
                    backgroundColor: `${exp.color}20`,
                    borderColor: exp.color,
                  }}
                >
                  <FaBriefcase
                    className="text-xl"
                    style={{ color: exp.color }}
                  />
                </div>

                {/* Experience Card */}
                <motion.div
                  className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10
                    ${activeExp === exp.id ? "ring-2" : ""}
                  `}
                  style={{
                    borderColor:
                      activeExp === exp.id
                        ? exp.color
                        : "rgba(255,255,255,0.1)",
                  }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() =>
                    setActiveExp(activeExp === exp.id ? null : exp.id)
                  }
                >
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-400 mb-2">
                    <FaBuilding
                      className="text-lg"
                      style={{ color: exp.color }}
                    />
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      {exp.company}
                    </a>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <FaCalendar
                        className="text-lg"
                        style={{ color: exp.color }}
                      />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <FaMapMarkerAlt
                        className="text-lg"
                        style={{ color: exp.color }}
                      />
                      {exp.location}
                    </div>
                  </div>

                  <AnimatePresence>
                    {activeExp === exp.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-gray-400 mb-4">{exp.description}</p>
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-start gap-2 text-gray-300"
                            >
                              <span
                                className="text-lg mt-1"
                                style={{ color: exp.color }}
                              >
                                •
                              </span>
                              {highlight}
                            </motion.li>
                          ))}
                        </ul>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.1 }}
                              className="px-3 py-1 rounded-full text-sm"
                              style={{
                                backgroundColor: `${exp.color}20`,
                                color: exp.color,
                              }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
