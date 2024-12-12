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

    // Only allow letters in the name field
    if (name === 'name') {
      const regex = /^[a-zA-Z\s]*$/; // Only letters and spaces
      if (!regex.test(value)) return;
    }

    // Only allow numbers in the phone field
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
    <section id="book-appointment" className="bg-black text-white py-12 px-4">
  <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-start justify-between gap-8">
    {/* Left: Booking Form */}
    <div className="w-full md:w-1/2 p-6 bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-blue-500 mb-8">
        Request a New Appointment
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block  text-gray-400 text-sm font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-semibold mb-2">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Phone Number"
            required
          />
        </div>
        {/* <div className="mb-4">
          <label className="block text-gray-400 text-sm font-semibold mb-2">
            Date
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div> */}
        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-semibold mb-2">
            Time
          </label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-semibold mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Message"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white p-3 rounded-lg w-full hover:bg-blue-500 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>

    {/* Right Side: How does it work Section */}
    <div className="w-full md:w-1/2 p-8 bg-gray-900  text-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-blue-400">
        How does it work?
      </h2>
      <ul className="list-disc pl-5 space-y-4 text-gray-300">
        <li className='text-lg'>
          Take a financial literacy assessment to understand your strengths and
          areas for improvement.
        </li>
        <li className='text-lg'>
          Connect with your personalized AI mentor for tailored guidance and
          support.
        </li>
        <li className='text-lg'>
          Engage continuously with interactive lessons and tools to enhance your
          financial skills.
        </li>
        <li className='text-lg'>
          Connect with highly credited financial advisers for expert advice.
        </li>
      </ul>
      <p className="mt-6 text-lg font-semibold text-gray-100">
        Perspectify is a social enterprise committed to providing bespoke
        financial education through advanced AI technology.
      </p>
    </div>
  </div>
</section>

  );
}

export default Booking;
