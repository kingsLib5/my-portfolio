import { useState, useEffect } from 'react';
import { Link } from 'react-scroll'; // For smooth scrolling

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false); // Track scroll state
  const [isOpen, setIsOpen] = useState(false); // Track mobile menu state

  // Effect to handle scroll and add dynamic effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Shrink header when scrolled down
      } else {
        setIsScrolled(false); // Reset header when scrolled back up
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close the menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest('.mobile-menu') && !event.target.closest('.hamburger-icon')) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener('click', handleOutsideClick);
    } else {
      window.removeEventListener('click', handleOutsideClick);
    }
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <header className={`fixed w-full top-0 z-20 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-[#4d4d5e9a] py-2 shadow-lg' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold text-white">
          <a href="/">Kings</a>
        </div>

        {/* Navigation Links for larger screens */}
        <nav className="hidden md:flex space-x-8">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-white hover:text-blue-300 cursor-pointer transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-white hover:text-blue-300 cursor-pointer transition-colors duration-200"
          >
            About
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="text-white hover:text-blue-300 cursor-pointer transition-colors duration-200"
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="text-white hover:text-blue-300 cursor-pointer transition-colors duration-200"
          >
            Projects
          </Link>
          
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-white hover:text-blue-300 cursor-pointer transition-colors duration-200"
          >
            Get in touch
          </Link>
        </nav>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden hamburger-icon">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Overlay Background when Menu is Open */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300"></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`mobile-menu fixed top-0 right-0 w-3/4 h-full bg-[#4d4d5e9a] text-white z-20 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <nav className="flex flex-col space-y-4 p-8">
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-blue-300 cursor-pointer transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-blue-300 cursor-pointer transition-colors duration-200"
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-blue-300 cursor-pointer transition-colors duration-200"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-blue-300 cursor-pointer transition-colors duration-200"
          >
            Get in touch
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
