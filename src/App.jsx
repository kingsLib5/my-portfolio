import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
// import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* about */}
      <AboutMe/>

      {/* my skills */}
      <Skills/>

      {/* my projects */}
      <Projects/>

      {/* my experience */}
      <Experience/>

      {/* testimonial */}
      {/* <Testimonials/> */}

      {/* my contact */}
      <Contact/>

      {/* my footer */}
      <Footer/>

      {/* Other sections will go here */}
    </div>
  );
}

export default App;
