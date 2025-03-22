import React, { useState, useEffect } from 'react';

const experiencesData = [
  {
    company: 'Kings',
    role: 'Full-Stack Developer',
    duration: 'Jan 2022 - Present',
    description: 'Developing and maintaining web applications with React, Node.js, and MongoDB.',
    icon: '💻',
  },
  {
    company: 'NathConcept',
    role: 'Frontend Developer',
    duration: ' Sep 2022 - Feb 2025',
    description: 'Worked on designing and developing highly interactive and responsive front-end applications.',
    icon: '🎨',
  },
  {
    company: 'LUMVA',
    role: 'Backend Developer',
    duration: 'Jul 2024 - Dec 2024 ',
    description: 'Built RESTful APIs using Node.js and Express, and managed cloud databases with AWS and MongoDB.',
    icon: '🔧',
  },
];

const Experience = () => {
  const [visibleExperiences, setVisibleExperiences] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const timelineElements = document.querySelectorAll('.timeline-item');
      timelineElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8 && !visibleExperiences.includes(index)) {
          setVisibleExperiences((prev) => [...prev, index]);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visibleExperiences]);

  return (
    <section id="experience" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>

        {/* Timeline */}
        <div className="relative">
          <div className="border-l-4 border-blue-500 absolute left-1/2 transform -translate-x-1/2 h-full"></div>

          {experiencesData.map((experience, index) => (
            <div
              key={index}
              className={`timeline-item relative transition-opacity duration-500 ease-in-out ${
                visibleExperiences.includes(index) ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="flex items-center justify-start mb-8">
                <div className="bg-blue-500 text-white p-4 rounded-full text-xl mr-6 flex-shrink-0">
                  {experience.icon}
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-xl">
                  <h3 className="text-2xl font-semibold">{experience.role}</h3>
                  <p className="text-gray-600">{experience.company}</p>
                  <p className="text-gray-400 text-sm">{experience.duration}</p>
                  <p className="mt-4">{experience.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
