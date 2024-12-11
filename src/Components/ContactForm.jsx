import React from 'react';

function Contact() {
  return (
    <section className="bg-gray-700 py-12">
      <div className="container mx-auto max-w-lg">
        <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">Contact Us</h2>
        <form className="bg-white p-6 rounded shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded"
              placeholder="Your Message"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white p-3 rounded w-full hover:bg-blue-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
