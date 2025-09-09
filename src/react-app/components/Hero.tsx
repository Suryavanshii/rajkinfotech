import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import SocialLinks from './SocialLinks';

export default function Hero() {
  const [currentService, setCurrentService] = useState(0);
  
  const services = [
    "Website Development",
    "App Development", 
    "Mchine Learning",
    "AI & Automation"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
        <div className="absolute inset-0 opacity-50 animate-pulse">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-blue-100/20 to-transparent dark:via-purple-900/20"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left mb-10 lg:mb-0">
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-4">
              hello, I am
            </p>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                RAJKUMAR
              </span>
              <br />
              <span className="text-gray-800 dark:text-white">
                SURYAVANSHI
              </span>
            </h1>

            {/* Service Slider */}
            <div className="mb-8 h-16 flex items-center">
              <div className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                <span className="inline-block transform transition-all duration-500 ease-in-out">
                  {services[currentService]}
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Hire Me
              </button>
              <button 
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-600 hover:text-white dark:hover:text-white transition-all duration-300"
              >
                View Projects
              </button>
            </div>

            <SocialLinks />
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl">
                <img 
                  src="https://mocha-cdn.com/01992a89-5610-71bf-9269-a54db96d495b/WhatsApp-Image-2025-02-23-at-03.01.37_9cc78547.jpg"
                  alt="Rajkumar Suryavanshi"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/20 to-purple-600/20 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={scrollToNext}
            className="animate-bounce text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
}
