// components/ProjectsSection.js
import { motion } from "framer-motion";
import Image from "next/image"; // Import the Image component

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/project1.jpg", // Replace with your image path
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and drag-and-drop functionality.",
      technologies: ["Next.js", "Firebase", "Tailwind CSS"],
      image: "/project2.jpg",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A responsive weather application with location detection and 5-day forecast using weather API.",
      technologies: ["React", "API", "CSS3"],
      image: "/project3.jpg",
      liveUrl: "#",
      githubUrl: "#",
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-slate-800">
      <div className="container mx-auto">
        <h2
          className="text-4xl font-bold text-center mb-4 text-white"
          data-aos="fade-up"
        >
          My Projects
        </h2>
        <p
          className="text-lg text-gray-300 text-center mb-16 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Here are some of the projects I&apos;ve worked on. Each one represents a
          unique challenge and learning opportunity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ y: -10 }}
              className="bg-slate-700 rounded-xl overflow-hidden shadow-lg group cursor-pointer"
            >
              {/* Project Image - Using Next.js Image component */}
              <div className="overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={192}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-cyan-600/20 text-cyan-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="text-white hover:text-cyan-400 transition-colors duration-300 text-sm font-medium"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="text-white hover:text-cyan-400 transition-colors duration-300 text-sm font-medium"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
