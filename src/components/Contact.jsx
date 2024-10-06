import React, { useState } from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name.trim()) formErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email address is invalid';
    }
    if (!formData.message.trim()) formErrors.message = 'Message is required';
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setSubmitted(true);
      // Here you can handle the form submission (e.g., send the data to a server)
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">Get in Touch</h2>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto bg-white p-8 shadow-lg rounded-lg mb-12"
          >
            {/* Name Field */}
            <div className="mb-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`w-full p-4 rounded-lg border-2 ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:border-blue-500 transition-all duration-200`}
              />
              {errors.name && <p className="text-red-500 mt-2">{errors.name}</p>}
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className={`w-full p-4 rounded-lg border-2 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:border-blue-500 transition-all duration-200`}
              />
              {errors.email && <p className="text-red-500 mt-2">{errors.email}</p>}
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                className={`w-full p-4 rounded-lg border-2 ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:border-blue-500 transition-all duration-200`}
              />
              {errors.message && <p className="text-red-500 mt-2">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        ) : (
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-green-500">Thank you for reaching out!</h3>
            <p className="mt-4">I will get back to you as soon as possible.</p>
            <p className="mt-4">You can also reach out to me on my Social Media handles.</p>
            <p className='mt-4'>below</p>

          </div>
        )}

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-12">
          <a
            href="https://x.com/DavidIgboa5379"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 text-3xl transition-colors duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/david-igboanusi-757a66270/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-700 text-3xl transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/kingsLib5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 text-3xl transition-colors duration-300"
          >
            <FaGithub />
          </a>
          {/* <a
            href="https://facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 text-3xl transition-colors duration-300"
          >
            <FaFacebook />
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
