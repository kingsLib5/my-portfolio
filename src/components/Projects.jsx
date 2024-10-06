import React, { useState } from 'react';

// Importing the images
import project1Image from '../assets/project1.jpg';
import project2Image from '../assets/project2.jpg';
import project3Image from '../assets/project3.jpg';

const projectsData = [
  {
    title: 'E-Commerce Website',
    description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB.',
    image: project1Image, // Using imported image
    liveDemo: '#',
    codeLink: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio to showcase my work, built with React and Tailwind CSS.',
    image: project2Image, // Using imported image
    liveDemo: '#',
    codeLink: '#',
  },
  {
    title: 'Weather App',
    description: 'A weather forecasting app using the OpenWeather API, built with React and Tailwind CSS.',
    image: project3Image, // Using imported image
    liveDemo: '#',
    codeLink: 'https://github.com/kingsLib5/weatherForecast',
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-gray-100 text-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Projects</h2>
        
        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
              onClick={() => setSelectedProject(project)}
            >
              <img src={project.image} alt={project.title} className="rounded-lg mb-4 object-cover h-48 w-full" />
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
              <div className="mt-4 flex space-x-4">
                <a href={project.liveDemo} target="_blank" rel="noreferrer" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300">
                  View Live
                </a>
                <a href={project.codeLink} target="_blank" rel="noreferrer" className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition-all duration-300">
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-lg w-full">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              >
                &times;
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="rounded-lg mb-4 object-cover h-48 w-full"
              />
              <h3 className="text-xl font-bold">{selectedProject.title}</h3>
              <p className="mt-4">{selectedProject.description}</p>
              <div className="mt-6 flex space-x-4">
                <a href={selectedProject.liveDemo} target="_blank" rel="noreferrer" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300">
                  View Live
                </a>
                <a href={selectedProject.codeLink} target="_blank" rel="noreferrer" className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition-all duration-300">
                  View Code
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
