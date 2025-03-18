import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
  FaCalendar,
  FaMapMarkerAlt,
  FaMedal,
  FaCode,
  FaBook,
} from "react-icons/fa";

const Education = () => {
  const [activeEdu, setActiveEdu] = useState(null);

  const education = [
    {
      id: 1,
      degree: "Bachelor of Engineering",
      major: "Computer Science",
      institution: "Pune University",
      location: "Pune, India",
      duration: "2019 - 2023",
      grade: "8.9 CGPA",
      achievements: [
        "Department Topper - All Semesters",
        "Best Project Award - Final Year",
        "Published research paper on ML algorithms",
        "Led college coding club",
      ],
      courses: [
        "Data Structures & Algorithms",
        "Database Management",
        "Web Development",
        "Machine Learning",
        "Cloud Computing",
        "Software Engineering",
      ],
      projects: [
        {
          name: "AI-Powered Study Planner",
          tech: ["Python", "TensorFlow", "React"],
        },
        {
          name: "Distributed Database System",
          tech: ["Java", "PostgreSQL", "Redis"],
        },
      ],
      color: "#8B5CF6", // purple
    },
    {
      id: 2,
      degree: "Higher Secondary Education",
      major: "Science",
      institution: "Mumbai Junior College",
      location: "Mumbai, India",
      duration: "2017 - 2019",
      grade: "92%",
      achievements: [
        "State Board Merit List",
        "Science Olympiad Finalist",
        "Mathematics Club President",
        "Perfect attendance award",
      ],
      courses: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
      projects: [
        {
          name: "Smart Home Automation",
          tech: ["Arduino", "IoT", "C++"],
        },
      ],
      color: "#EC4899", // pink
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen py-20 bg-gray-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1)_0%,transparent_70%)]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(236,72,153,0.1) 0%, rgba(0,0,0,0) 50%)",
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
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
              Education
            </span>
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {/* Education Card */}
              <motion.div
                className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 cursor-pointer
                  ${activeEdu === edu.id ? "ring-2" : ""}
                `}
                style={{
                  borderColor:
                    activeEdu === edu.id ? edu.color : "rgba(255,255,255,0.1)",
                  boxShadow:
                    activeEdu === edu.id ? `0 0 20px ${edu.color}20` : "",
                }}
                whileHover={{ scale: 1.02 }}
                onClick={() =>
                  setActiveEdu(activeEdu === edu.id ? null : edu.id)
                }
              >
                {/* Header with Icon */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="p-4 rounded-xl"
                    style={{ backgroundColor: `${edu.color}20` }}
                  >
                    <FaGraduationCap
                      className="text-3xl"
                      style={{ color: edu.color }}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-gray-300 mb-2">{edu.major}</p>
                  </div>
                </div>

                {/* Institution Info */}
                <div className="flex items-center gap-2 text-gray-400 mb-3">
                  <FaUniversity
                    className="text-lg"
                    style={{ color: edu.color }}
                  />
                  <span>{edu.institution}</span>
                </div>

                {/* Duration and Location */}
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <FaCalendar
                      className="text-lg"
                      style={{ color: edu.color }}
                    />
                    {edu.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <FaMapMarkerAlt
                      className="text-lg"
                      style={{ color: edu.color }}
                    />
                    {edu.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <FaMedal className="text-lg" style={{ color: edu.color }} />
                    {edu.grade}
                  </div>
                </div>

                <AnimatePresence>
                  {activeEdu === edu.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pt-4 border-t border-white/10"
                    >
                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                          <FaMedal
                            className="text-lg"
                            style={{ color: edu.color }}
                          />
                          Key Achievements
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {edu.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-start gap-2 text-gray-300"
                            >
                              <span
                                className="text-lg"
                                style={{ color: edu.color }}
                              >
                                •
                              </span>
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Courses */}
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                          <FaBook
                            className="text-lg"
                            style={{ color: edu.color }}
                          />
                          Key Courses
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.1 }}
                              className="px-3 py-1 rounded-full text-sm"
                              style={{
                                backgroundColor: `${edu.color}20`,
                                color: edu.color,
                              }}
                            >
                              {course}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Projects */}
                      <div>
                        <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                          <FaCode
                            className="text-lg"
                            style={{ color: edu.color }}
                          />
                          Notable Projects
                        </h4>
                        <div className="space-y-3">
                          {edu.projects.map((project, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="bg-gray-900/50 rounded-lg p-3"
                            >
                              <p className="text-gray-300 mb-2">
                                {project.name}
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, j) => (
                                  <span
                                    key={j}
                                    className="px-2 py-1 rounded text-xs bg-gray-800 text-gray-400"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
