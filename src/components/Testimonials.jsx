import React, { useState, useEffect } from 'react';

const testimonialsData = [
  {
    name: 'John Doe',
    title: 'CEO, Tech Innovations',
    testimonial:
      'Working with David Kings was an amazing experience. His attention to detail and technical expertise helped us elevate our project to new heights!',
    image: 'src/assets/person2.jpg', // Replace with actual image URL
  },
  {
    name: 'Jane Smith',
    title: 'Project Manager, Creative Solutions',
    testimonial:
      'David’s ability to solve complex technical problems while maintaining a positive attitude made him a joy to work with. Highly recommended!',
    image: 'src/assets/person2.jpg', // Replace with actual image URL
  },
  {
    name: 'Michael Lee',
    title: 'CTO, Startup Ventures',
    testimonial:
      'I’ve worked with many developers, and David is one of the best. His dedication and passion for his craft really show in the results.',
    image: 'src/assets/person2.jpg', // Replace with actual image URL
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 5000); // Auto-scroll every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  return (
    <section id="testimonials" className="py-36 bg-blue-50 text-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Testimonials</h2>

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden rounded-lg">
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-opacity duration-500 ease-in-out ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                } absolute w-full flex justify-center`}
              >
                <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full mb-4"
                  />
                  <h3 className="text-2xl font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                  <p className="mt-4 text-gray-700 italic">"{testimonial.testimonial}"</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={handlePrev}
            className="absolute top-28 left-0 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            className="absolute top-28 right-0 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
