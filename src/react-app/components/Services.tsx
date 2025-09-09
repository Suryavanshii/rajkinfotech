import { Code, Smartphone, Bot, Palette, Database, Zap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Website Development",
      description: "Custom websites built with modern technologies, responsive design, and optimized performance for all devices.",
      features: [
        "Responsive Web Design",
        "SEO Optimization", 
        "Performance Optimization",
        "Cross-browser Compatibility",
        "Content Management Systems"
      ]
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "App Development",
      description: "Mobile-first applications with intuitive user interfaces and seamless functionality across platforms.",
      features: [
        "Progressive Web Apps",
        "Mobile-Responsive Design",
        "User Experience Focus",
        "Cross-Platform Development",
        "App Store Deployment"
      ]
    },
    {
      icon: <Bot className="w-12 h-12" />,
      title: "AI & Automation",
      description: "Intelligent solutions powered by AI to automate processes and enhance user experiences.",
      features: [
        "Chatbot Development",
        "Process Automation",
        "AI Integration",
        "Data Analysis Tools",
        "Smart Workflows"
      ]
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "UI/UX Design",
      description: "Beautiful and functional designs that create engaging user experiences and drive conversions.",
      features: [
        "User Interface Design",
        "User Experience Research",
        "Prototyping & Wireframing",
        "Design Systems",
        "Usability Testing"
      ]
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Backend Development",
      description: "Robust server-side solutions with secure databases and scalable architecture.",
      features: [
        "API Development",
        "Database Design",
        "Server Configuration",
        "Security Implementation",
        "Performance Monitoring"
      ]
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Performance Optimization",
      description: "Speed up your website and applications with advanced optimization techniques.",
      features: [
        "Page Speed Optimization",
        "Code Splitting",
        "Image Optimization",
        "Caching Strategies",
        "Performance Monitoring"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive digital solutions to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-gray-700 dark:text-gray-400"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-6 w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss how I can help bring your vision to life
            </p>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Contact Me Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
