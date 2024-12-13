import React, { useState } from 'react';

function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    time: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'name' && !/^[a-zA-Z\s]*$/.test(value)) return;
    if (name === 'phone' && !/^[0-9]*$/.test(value)) return; 

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment Data:', formData);
  };

  return (
    <section id="book-appointment" className="bg-black text-white min-h-screen py-12 px-0 flex items-center justify-center">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row  gap-8 ">
        {/* Left: Booking Form */}
        <div className="w-full md:w-1/2 bg-gray-900 p-8 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold text-center text-blue-500 mb-8">
            Request a New Appointment
          </h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
            {/* Name & Email */}
            <div className="col-span-1">
              <label className="block text-gray-400 text-sm mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="col-span-1">
              <label className="block text-gray-400 text-sm mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white"
                placeholder="Your Email"
                required
              />
            </div>
            {/* Phone & Time */}
            <div className="col-span-1">
              <label className="block text-gray-400 text-sm mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white"
                placeholder="Your Phone Number"
                required
              />
            </div>
            <div className="col-span-1">
              <label className="block text-gray-400 text-sm mb-2">Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white"
                required
              />
            </div>
            {/* Message */}
            <div className="col-span-2">
              <label className="block text-gray-400 text-sm mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white"
                placeholder="Your Message"
                rows="4"
                required
              />
            </div>
            {/* Submit Button */}
            <div className="col-span-2">
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg hover:from-blue-500 hover:to-blue-300 transition-all duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Right: How Does it Work */}
        <div className="w-full md:w-1/2 bg-gray-900 p-8 rounded-lg shadow-xl text-center">
          <h2 className="text-2xl font-bold mb-6 text-blue-400">
            How does it work?
          </h2>
          <ul className="list-disc pl-5 space-y-4 text-gray-300 text-left text-lg py-4">
            <li>Take a financial literacy assessment to understand your strengths.</li>
            <li>Connect with your personalized AI mentor for tailored guidance.</li>
            <li>Engage with interactive lessons and tools to enhance financial skills.</li>
            <li>Connect with credited financial advisers for expert advice.</li>
          </ul>
          <p className="mt-6 text-lg font-semibold text-gray-100">
            Perspectify is a social enterprise committed to providing bespoke financial education through advanced AI technology.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Booking;
