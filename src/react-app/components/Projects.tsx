import { useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with advanced features including user authentication, payment integration, inventory management, and responsive design.",
      image: "https://mocha-cdn.com/01992a6a-6536-730e-bb54-156bfcd69ef4/ecommerce-project.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      githubUrl: "https://github.com/Suryavanshii",
      liveUrl: "#",
      category: "Full-Stack"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with real-time data visualization, engagement metrics, and automated reporting features.",
      image: "https://mocha-cdn.com/01992a6a-6536-730e-bb54-156bfcd69ef4/social-dashboard.jpg",
      technologies: ["Vue.js", "Express.js", "MySQL", "Chart.js"],
      githubUrl: "https://github.com/Suryavanshii",
      liveUrl: "#",
      category: "Frontend"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with drag-and-drop functionality, team collaboration tools, and project tracking capabilities.",
      image: "https://mocha-cdn.com/01992a6a-6536-730e-bb54-156bfcd69ef4/task-manager.jpg",
      technologies: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/Suryavanshii",
      liveUrl: "#",
      category: "Full-Stack"
    },
    {
      title: "AI Chatbot Interface",
      description: "Intelligent chatbot interface powered by AI with natural language processing, context awareness, and seamless user experience.",
      image: "https://mocha-cdn.com/01992a6a-6536-730e-bb54-156bfcd69ef4/ai-chatbot.jpg",
      technologies: ["Python", "OpenAI API", "React", "WebSocket"],
      githubUrl: "https://github.com/Suryavanshii",
      liveUrl: "#",
      category: "AI/ML"
    },
    {
      title: "Real Estate Platform",
      description: "Comprehensive real estate platform with property listings, advanced search filters, map integration, and virtual tour capabilities.",
      image: "https://mocha-cdn.com/01992a6a-6536-730e-bb54-156bfcd69ef4/real-estate.jpg",
      technologies: ["Next.js", "PostgreSQL", "Google Maps API", "AWS"],
      githubUrl: "https://github.com/Suryavanshii",
      liveUrl: "#",
      category: "Full-Stack"
    },
    {
      title: "Portfolio Website",
      description: "Creative portfolio website with interactive animations, project showcases, skills visualization, and modern responsive design.",
      image: "https://mocha-cdn.com/01992a6a-6536-730e-bb54-156bfcd69ef4/portfolio-site.jpg",
      technologies: ["React", "GSAP", "Tailwind CSS", "Vercel"],
      githubUrl: "https://github.com/Suryavanshii",
      liveUrl: "#",
      category: "Frontend"
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Showcasing some of my best work and creative solutions
          </p>
        </div>

        {/* Project Carousel */}
        <div className="relative">
          <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-2xl overflow-hidden">
            <div className="md:flex">
              {/* Project Image */}
              <div className="md:flex-shrink-0 md:w-1/2">
                <img
                  className="h-64 md:h-full w-full object-cover"
                  src={projects[currentProject].image}
                  alt={projects[currentProject].title}
                />
              </div>
              
              {/* Project Details */}
              <div className="p-8 md:w-1/2">
                <div className="flex items-center mb-4">
                  <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-3 py-1 rounded-full">
                    {projects[currentProject].category}
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {projects[currentProject].title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {projects[currentProject].description}
                </p>
                
                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">TECHNOLOGIES USED</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[currentProject].technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <a
                    href={projects[currentProject].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-900 dark:bg-gray-600 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-500 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                  <a
                    href={projects[currentProject].liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white dark:bg-gray-800 shadow-lg rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white dark:bg-gray-800 shadow-lg rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Project Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentProject
                  ? 'bg-blue-600'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Suryavanshii"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
