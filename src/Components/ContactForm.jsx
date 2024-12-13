import React, { useState } from 'react';
import img from "../assets/cl2.png"
function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleNameChange = (e) => {
    const value = e.target.value;
    if (/^[A-Za-z\s]*$/.test(value)) {
      setName(value);
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setPhone(value);
    }
  };

  return (
    <section id="contact" className="relative text-white py-20 px-auto">
    {/* Background Image */}
    <img
      src={img}
      alt="loading"
      className="absolute top-0 left-0 w-full h-full object-cover -z-10"
    />
  
    {/* Overlay (semi-transparent background for readability) */}
    <div className="absolute top-0 left-0 w-full h-full bg-black/50 -z-10"></div>
    {/* Content Section */}
      <div className="container mx-auto relative flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
      {/* Left side */}
      
      <div className="w-full md:w-1/2 p-6 rounded">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">
          Request Invite
        </h2>
        <p className="text-lg text-center mb-4">
          We want learning to become just as fun and accessible as entertainment - Be the first to redefine your financial and personal path with Perspectify!
        </p>
        <p className="text-center">
          <strong>Email:</strong>{" "}
          <a href="mailto:Info@PerspectifyAI.com" className="text-blue-400">
            Info@PerspectifyAI.com
          </a>
        </p>
        <p className="text-center">
          <strong>Phone:</strong>{" "}
          <a href="tel:07932433446" className="text-blue-400">
            07932433446
          </a>
        </p>
      </div>
  
      {/* Right side - Contact Form */}
       <div className="w-full md:w-3/4 lg:w-1/2 p-6
        rounded mx-auto  backdrop-blur-md">
        <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">
          Contact Us
        </h2>
        <form className="flex flex-wrap gap-y-4">
          <div className="w-full sm:w-1/2 px-2">
            <label className="block text-gray-400 mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              className="w-full p-3 border border-gray-300  rounded-md bg-transparent outline-none  text-white"
              placeholder="Your Name"
            />
          </div>
          <div className="w-full sm:w-1/2 px-2">
            <label className="block text-gray-400 mb-2">Email</label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300  rounded-md bg-transparent outline-none  text-white"
              placeholder="Your Email"
            />
          </div>
          <div className="w-full sm:w-1/2 px-2">
            <label className="block text-gray-400 mb-2">Phone</label>
            <input
              type="text"
              value={phone}
              onChange={handlePhoneChange}
              className="w-full p-3 border border-gray-300  rounded-md bg-transparent outline-none  text-white"
              placeholder="Your Phone Number"
            />
          </div>
          <div className="w-full lg:w-1/2 px-2 ">
            <label className="block text-gray-400 mb-2">Message</label>
            <textarea
              className="w-full p-3 border border-gray-300  rounded-md bg-transparent outline-none  text-white"
              placeholder="Your Message"
              rows="4"
            ></textarea>
          </div>
          <div className="w-full px-2">
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg hover:from-blue-500 hover:to-blue-300 transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
  
  );
}
export default Contact;
