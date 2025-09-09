import { Code, Lightbulb, Users, Award, Download } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Data Scientist & Analyst",
      description: "Expert in extracting insights from complex datasets and statistical analysis"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Machine Learning",
      description: "Developing intelligent models for predictive analytics and pattern recognition"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Automation Engineer",
      description: "Building automated solutions to streamline processes and workflows"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality-Driven",
      description: "Committed to clean code and best practices in data science projects"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate web developer with expertise in creating dynamic, user-friendly applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                I'm Rajkumar Suryavanshi, a dedicated web developer with a passion for creating 
                innovative digital solutions. With extensive experience in modern web technologies, 
                I specialize in building responsive websites, dynamic web applications, and AI-powered 
                automation tools.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                My journey in web development started with a curiosity about how digital experiences 
                could transform businesses. Today, I combine technical expertise with creative problem-solving 
                to deliver solutions that not only meet requirements but exceed expectations.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                I believe in the power of clean code, intuitive design, and seamless user experiences. 
                Whether it's a simple landing page or a complex web application, I approach each project 
                with dedication and attention to detail.
              </p>
            </div>

            {/* Download Resume Button */}
            <a
              href="/resume.pdf"
              download="Rajkumar_Suryavanshi_Resume.pdf"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
