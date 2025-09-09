import { useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Package, Mail, TrendingUp } from 'lucide-react';

export default function UpdatedProjects() {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: "Sales Data Generation Package",
      description: "Built and published a Python package on PyPI for easy reuse. Automated setup with setup tools and twine for smooth deployment. Designed clean, reusable code with proper documentation and versioning.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Python", "PyPI", "Setuptools", "Twine", "Documentation"],
      githubUrl: "https://github.com/Suryavanshii",
      liveUrl: "https://pypi.org/",
      category: "Data Science",
      icon: <Package className="w-8 h-8" />,
      features: [
        "Published Python Package",
        "Automated Deployment",
        "Clean Code Architecture",
        "Comprehensive Documentation",
        "Version Control"
      ]
    },
    {
      title: "Automatic Emailing Agent",
      description: "Building an Automatic Emailing Agent with Python for scheduled and bulk mail delivery. Added SMTP setup, recipient management, and template-based content. Integrated error handling and logging for reliable performance.",
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&h=400&fit=crop",
      technologies: ["Python", "SMTP", "Email Templates", "Logging", "Automation"],
      githubUrl: "https://github.com/Suryavanshii",
      liveUrl: "#",
      category: "Automation",
      icon: <Mail className="w-8 h-8" />,
      features: [
        "Scheduled Email Delivery",
        "Bulk Mail Management",
        "Template-based Content",
        "Error Handling",
        "Performance Logging"
      ]
    },
    {
      title: "Customer Churn Prediction",
      description: "Established a clear understanding between developers, analysts, and stakeholders. Provided a detailed project structure for churn prediction and strategy generation using advanced machine learning techniques.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Python", "Pandas", "Seaborn", "Matplotlib", "Git", "VS Code"],
      githubUrl: "https://github.com/Suryavanshii",
      liveUrl: "#",
      category: "Machine Learning",
      icon: <TrendingUp className="w-8 h-8" />,
      features: [
        "Predictive Analytics",
        "Data Visualization",
        "Stakeholder Collaboration",
        "Strategy Generation",
        "Project Documentation"
      ]
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
            Real-world solutions in data science, automation, and machine learning
          </p>
        </div>

        {/* Project Carousel */}
        <div className="relative">
          <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-2xl overflow-hidden">
            <div className="md:flex">
              {/* Project Image */}
              <div className="md:flex-shrink-0 md:w-1/2">
                <div className="relative h-64 md:h-full">
                  <img
                    className="h-full w-full object-cover"
                    src={projects[currentProject].image}
                    alt={projects[currentProject].title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-lg">
                      <div className="text-blue-600 dark:text-blue-400 mr-2">
                        {projects[currentProject].icon}
                      </div>
                      <span className="text-sm font-semibold text-gray-800 dark:text-white">
                        {projects[currentProject].category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Project Details */}
              <div className="p-8 md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {projects[currentProject].title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {projects[currentProject].description}
                </p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">KEY FEATURES</h4>
                  <ul className="space-y-2">
                    {projects[currentProject].features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
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
                    View Code
                  </a>
                  <a
                    href={projects[currentProject].liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Learn More
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
