import React, { useState } from 'react';

function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    
    if (name === 'name') {
      const regex = /^[a-zA-Z\s]*$/; // Only letters and spaces
      if (!regex.test(value)) return;
    }

    
    if (name === 'phone') {
      const regex = /^[0-9]*$/; // Only numbers
      if (!regex.test(value)) return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment Data:', formData);

  };

  return (
    <section id="book-appointment" className="bg-black text-white py-12">
      <div className="container mx-auto max-w-lg">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Request a New Appointment</h2>
        <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded shadow-md">
          <div className="mb-4">
            <label className="block text-gray-400">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-600 rounded bg-gray-900 text-white"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-600 rounded bg-gray-900 text-white"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-600 rounded bg-gray-900 text-white"
              placeholder="Your Phone Number"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-3 border border-gray-600 rounded bg-gray-900 text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400">Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full p-3 border border-gray-600 rounded bg-gray-900 text-white"
              required
              pattern="[0-9]{2}:[0-9]{2} (AM|PM)" 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-600 rounded bg-gray-900 text-white"
              placeholder="Your Message"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white p-3 rounded w-full hover:bg-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Booking;
