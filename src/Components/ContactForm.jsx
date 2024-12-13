import React, { useState } from 'react';

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
    <section id="contact" className="bg-black text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
        
        <div className="w-full md:w-1/2 bg-gray-800 p-6 rounded shadow-md">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">Request Invite</h2>
          <p className="text-lg text-center mb-4">
            We want learning to become just as fun and accessible as entertainment - Be the first to redefine your financial and personal path with Perspectify!
          </p>
          <p className="text-center">
            <strong>Email:</strong> <a href="mailto:Info@PerspectifyAI.com" className="text-blue-400">Info@PerspectifyAI.com</a>
          </p>
          <p className="text-center">
            <strong>Phone:</strong> <a href="tel:07932433446" className="text-blue-400">07932433446</a>
          </p>
        </div>

        {/* Right side - Contact Form */}
        <div className="w-full md:w-1/2 bg-gray-800 p-6 rounded shadow-md">
          <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">Contact Us</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-400">Name</label>
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                className="w-full p-3 border border-gray-600 rounded bg-gray-900 text-white"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400">Email</label>
              <input
                type="email"
                className="w-full p-3 border border-gray-600 rounded bg-gray-900 text-white"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400">Phone</label>
              <input
                type="text"
                value={phone}
                onChange={handlePhoneChange}
                className="w-full p-3 border border-gray-600 rounded bg-gray-900 text-white"
                placeholder="Your Phone Number"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400">Message</label>
              <textarea
                className="w-full p-3 border border-gray-600 rounded bg-gray-900 text-white"
                placeholder="Your Message"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg hover:from-blue-500 hover:to-blue-300 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Contact;
