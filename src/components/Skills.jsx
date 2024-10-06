import React, { useState, useEffect, useRef } from 'react';

const skillsData = {
  frontend: [
    { name: 'React.js', level: '90%' },
    { name: 'HTML5', level: '95%' },
    { name: 'CSS3', level: '90%' },
    { name: 'JavaScript', level: '85%' },
    { name: 'Tailwind Css', level: '80%' },
    { name: 'Responsive', level: '90%' }
  ],
  backend: [
    { name: 'Node.js', level: '85%' },
    { name: 'Express.js', level: '80%' },
    { name: 'MongoDB', level: '75%' },
    { name: 'SQL', level: '70%' },
    { name: 'MicroSoft SQL Server', level: '80%' }
  ],
  tools: [
    { name: 'Git', level: '90%' },
    { name: 'Docker', level: '70%' },
    { name: 'Webpack', level: '65%' }
  ]
};

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('frontend');
  const progressBarRefs = useRef([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing once it's animated
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    if (progressBarRefs.current) {
      progressBarRefs.current.forEach((bar) => {
        if (bar) observer.observe(bar);
      });
    }

    return () => {
      if (progressBarRefs.current) {
        progressBarRefs.current.forEach((bar) => {
          if (bar) observer.unobserve(bar);
        });
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Skills</h2>
        
        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-10">
          {Object.keys(skillsData).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`py-2 px-4 rounded-full transition-all duration-300 ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Skill Bars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skillsData[selectedCategory].map((skill, index) => (
            <div
              key={index}
              ref={(el) => (progressBarRefs.current[index] = el)}
              className="relative bg-gray-100 p-6 rounded-lg shadow-lg transition-all duration-300 hover:bg-blue-500 hover:text-white"
            >
              <h3 className="text-lg font-bold mb-4">{skill.name}</h3>
              
              {/* Progress Bar */}
              <div className="relative h-2 w-full bg-gray-300 rounded-full">
                <div
                  className="absolute top-0 left-0 h-full bg-blue-500 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: isVisible ? skill.level : '0%'
                  }}
                ></div>
              </div>
              <span className="absolute top-2 right-4 text-sm">{skill.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
