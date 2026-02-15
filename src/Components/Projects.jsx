import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaRocket,
  FaPlay,
  FaStar,
  FaMicrochip,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const projects = [
  {
    title: "PrintGo",
    description: "Automated self-service printing kiosk with QR scanning and payment integration",
    technologies: ["React", "Node.js", "MongoDB", "Payment Gateway"],
    github: "https://github.com/premj01/PrintGo",
    demo: "https://printgo-demo.vercel.app",
    videoId: "TxBCVHh21D8",
    image: null,
    features: ["QR Scanning", "Document Upload", "Payment Integration", "24/7 Access"],
    gradient: "from-blue-500/20 to-cyan-500/20",
    accent: "blue",
    stars: 20,
    status: "active",
    ai: false,
  },
  {
    title: "Make My Study Plan",
    description: "AI-powered study planner with personalized schedules and progress tracking",
    technologies: ["React", "Node.js", "MongoDB", "AI/LLM"],
    github: "https://github.com/premj01/Make-My-Study-Plan",
    demo: "https://make-my-plan.vercel.app/",
    videoId: "XilwOyj5dns",
    image: null,
    features: ["AI Planning", "Custom Schedules", "Progress Tracking", "Difficulty Levels"],
    gradient: "from-purple-500/20 to-pink-500/20",
    accent: "purple",
    stars: 35,
    status: "active",
    ai: true,
  },
  {
    title: "Custom WhatsApp Bot",
    description: "WhatsApp bot with AI-powered features and command support",
    technologies: ["Node.js", "WhatsApp API", "LLM", "Express"],
    github: "https://github.com/premj01/WhatsAppBot_AI",
    demo: "https://github.com/premj01/WhatsAppBot_AI",
    videoId: null,
    image: "/whatsappbot_image.jpg",
    features: ["URL Shortening", "YT Summarization", "AI Q&A", "Command Support"],
    gradient: "from-green-500/20 to-emerald-500/20",
    accent: "green",
    stars: 25,
    status: "active",
    ai: true,
  },
];

const ProjectSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      y: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      y: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex + newDirection + projects.length) % projects.length
    );
  };

  const getYouTubeEmbedUrl = (videoId) => {
    const baseUrl = "https://www.youtube.com/embed/";
    const params = new URLSearchParams({
      autoplay: isPlaying ? "1" : "0",
      rel: "0",
      modestbranding: "1",
      controls: "1",
      loop: "1",
      playlist: videoId,
      enablejsapi: "1",
      origin: window.location.origin,
    });
    return `${baseUrl}${videoId}?${params.toString()}`;
  };

  return (
    <section
      id="projects"
      className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-3">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore my latest projects showcasing my skills and expertise in web
            development
          </p>
        </motion.div>

        <div className="relative h-[500px] overflow-visible">
          {/* Previous Slide Preview */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[15%] h-[90%] bg-white/5 backdrop-blur-sm rounded-xl opacity-50 transform -translate-x-1/2" />

          {/* Next Slide Preview */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[15%] h-[90%] bg-white/5 backdrop-blur-sm rounded-xl opacity-50 transform translate-x-1/2" />

          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                y: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-[70%] h-full left-1/2 -translate-x-1/2"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 h-full flex flex-col md:flex-row gap-6">
                {/* Video/Image Section */}
                <div className="w-full md:w-2/3 aspect-video rounded-lg overflow-hidden">
                  {projects[currentIndex].videoId ? (
                    <iframe
                      src={getYouTubeEmbedUrl(projects[currentIndex].videoId)}
                      title={projects[currentIndex].title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  ) : (
                    <img
                      src={projects[currentIndex].image}
                      alt={projects[currentIndex].title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-white">
                          {projects[currentIndex].title}
                        </h3>
                        {projects[currentIndex].ai && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="bg-purple-500/20 px-2 py-0.5 rounded-full"
                          >
                            <FaMicrochip className="text-sm text-purple-400" />
                          </motion.div>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <FaStar
                            className={`text-${projects[currentIndex].accent}-500`}
                          />
                          <span className="text-sm text-gray-300">
                            {projects[currentIndex].stars}
                          </span>
                        </div>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className={`w-2 h-2 rounded-full bg-${
                            projects[currentIndex].status === "active"
                              ? "green"
                              : "yellow"
                          }-500`}
                        />
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4 text-sm">
                      {projects[currentIndex].description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {projects[currentIndex].technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-2">
                      {projects[currentIndex].features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-gray-300 text-sm"
                        >
                          <span
                            className={`w-1.5 h-1.5 bg-${projects[currentIndex].accent}-500 rounded-full`}
                          />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 mt-6">
                    <motion.a
                      href={projects[currentIndex].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg hover:bg-white/20 transition-colors text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub className="text-lg" />
                      <span>GitHub</span>
                    </motion.a>
                    <motion.a
                      href={projects[currentIndex].demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1.5 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaRocket className="text-lg" />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/20 transition-colors"
            onClick={() => paginate(-1)}
          >
            <FaChevronLeft className="text-lg" />
          </button>
          <button
            className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/20 transition-colors"
            onClick={() => paginate(1)}
          >
            <FaChevronRight className="text-lg" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-white" : "bg-white/30"
                }`}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSlider;
