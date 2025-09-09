import { useState } from 'react';

export default function UpdatedSkills() {
  const [activeCategory, setActiveCategory] = useState('expertise');

  const skillCategories = {
    expertise: {
      title: 'Core Expertise',
      skills: [
        { name: 'Web Development', level: 95 },
        { name: 'App Development', level: 90 },
        { name: 'Data Science', level: 88 },
        { name: 'Data Analysis', level: 92 },
        { name: 'Machine Learning', level: 85 },
        { name: 'AI & Automation', level: 88 }
      ]
    },
    technologies: {
      title: 'Programming Languages & Technologies',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'HTML5', level: 98 },
        { name: 'CSS3', level: 96 },
        { name: 'JavaScript', level: 94 },
        { name: 'SQL', level: 90 },
        { name: 'MySQL', level: 88 },
        { name: 'MongoDB', level: 85 }
      ]
    },
    frameworks: {
      title: 'Python Frameworks & Libraries',
      skills: [
        { name: 'Pandas', level: 95 },
        { name: 'NumPy', level: 92 },
        { name: 'Matplotlib', level: 90 },
        { name: 'Seaborn', level: 88 },
        { name: 'Scikit-learn', level: 85 },
        { name: 'TensorFlow', level: 80 },
        { name: 'Django', level: 82 },
        { name: 'Flask', level: 85 }
      ]
    },
    tools: {
      title: 'Tools & Software',
      skills: [
        { name: 'VS Code', level: 98 },
        { name: 'Power BI', level: 88 },
        { name: 'Tableau', level: 85 },
        { name: 'Git', level: 95 },
        { name: 'GitHub', level: 95 },
        { name: 'MS Office', level: 92 },
        { name: 'Jupyter Notebook', level: 90 },
        { name: 'Google Colab', level: 88 }
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
            Technologies and tools I use to deliver exceptional solutions
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

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Continuous Learning & Growth
            </h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              I'm constantly updating my skills and exploring new technologies to stay at the forefront 
              of web development, data science, and artificial intelligence. My goal is to deliver 
              cutting-edge solutions that drive real business value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
