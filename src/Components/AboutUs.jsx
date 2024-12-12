import React from 'react';
import aboutus from '../assets/aboutus.png';  // Replace with your image path

function AboutUs() {
  return (
     <div id="about" className='bg-black py-24'>



    <section  className="bg-black text-white">
  <div className="container mx-auto text-center flex-col items-center "> {/* Add text-center here */}
    <h2 className="text-3xl font-bold mb-4 text-center text-blue-600">About Us</h2> {/* text-center here */}
     <h3 className=' text-5xl font-extrabold text-blue-400'>Welcome</h3>
    <p className="text-xl mb-8 text-center max-w-2xl  md:ml-10 lg:ml-36 xl:ml-[26rem] py-6 leading-relaxed"> {/* text-center here */}
    Welcome to Perspectify AI, your personalized financial mentor. We offer loyalty programs, exceptional customer service, and flexible hours to cater to your financial needs. Join us online and experience a bespoke journey towards financial success.
    </p>
  </div>
  <div className="container mx-auto">
    <img src={aboutus} alt="About Us" className="w-full h-auto" />
  </div>
</section>
     </div>

  );
}

export default AboutUs;
