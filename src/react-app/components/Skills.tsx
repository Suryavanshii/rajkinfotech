import { useState } from 'react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'TypeScript', level: 88 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML5/CSS3', level: 98 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Vue.js', level: 80 },
        { name: 'Angular', level: 75 }
      ]
    },
    backend: {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 88 },
        { name: 'Python', level: 85 },
        { name: 'Django', level: 80 },
        { name: 'PHP', level: 82 },
        { name: 'Laravel', level: 78 },
        { name: 'MongoDB', level: 85 },
        { name: 'MySQL', level: 88 }
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'Firebase', level: 85 },
        { name: 'Vercel', level: 90 },
        { name: 'Figma', level: 82 },
        { name: 'Postman', level: 88 },
        { name: 'VS Code', level: 98 }
      ]
    },
    ai: {
      title: 'AI & Automation',
      skills: [
        { name: 'OpenAI API', level: 88 },
        { name: 'Machine Learning', level: 75 },
        { name: 'Automation Scripts', level: 85 },
        { name: 'Chatbot Development', level: 82 },
        { name: 'Data Analysis', level: 78 },
        { name: 'API Integration', level: 92 },
        { name: 'Workflow Automation', level: 85 },
        { name: 'Natural Language Processing', level: 70 }
      ]
    }
  };

  const categories = Object.keys(skillCategories) as Array<keyof typeof skillCategories>;

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {skillCategories[category].title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </h3>
                <span className="text-blue-600 dark:text-blue-400 font-bold">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div
                  className="h-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
