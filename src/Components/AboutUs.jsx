import React from 'react';
import aboutus from '../assets/aboutus.png';  // Replace with your image path

function AboutUs() {
  return (
    <section id="about" className="bg-black text-white py-12">
  <div className="container mx-auto text-center"> {/* Add text-center here */}
    <h2 className="text-3xl font-bold mb-4 text-center">About Us</h2> {/* text-center here */}
    <p className="text-lg mb-8 text-center"> {/* text-center here */}
      We are a financial advisory company committed to helping individuals achieve financial freedom through expert advice, personalized strategies, and a client-first approach.
    </p>
  </div>
  <div className="container mx-auto">
    <img src={aboutus} alt="About Us" className="w-full h-auto" />
  </div>
</section>

  );
}

export default AboutUs;
