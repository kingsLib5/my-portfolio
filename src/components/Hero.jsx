import React from 'react';
import heroImage from '../assets/person2.jpg'; // Fallback image
import heroVideo from '../assets/codes.mp4'; // Video for the background
import profilePic from '../assets/person2.jpg'; // Your profile picture

const Hero = () => {
  const name = "David Igboanusi".split(""); // Split name into individual characters

  return (
    <section
      id="home"
      className="relative h-screen w-full flex flex-col items-center justify-center text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Lazy Load Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={heroImage} // Fallback image if video doesn't load
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-8 p-4">
        {/* Profile Picture */}
        <img
          src={profilePic}
          alt="David Kings Igboanusi"
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-lg mb-6"
        />

        {/* Name with Letter-by-Letter Animation */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-wide">
          {name.map((letter, index) => (
            <span
              key={index}
              className="inline-block animate-letterReveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {letter === " " ? "\u00A0" : letter} {/* Handle spaces */}
            </span>
          ))}
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-4xl font-light animate-fadeIn delay-200">
          MERN Stack Developer
        </h2>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="#projects"
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="bg-transparent border-2 border-white hover:border-blue-500 text-white py-2 px-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
