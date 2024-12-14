import React from 'react';
import ReactPlayer from 'react-player'; // Import ReactPlayer
 import video from  '../assets/video.mp4'
function AboutUs() {
  return (
    <div id="about" className="bg-black py-20">


    <section className="bg-black text-white">
        <div className="container mx-auto text-center flex-col items-center">
          <h2 className="text-3xl font-bold mb-4 text-center text-blue-600">About Us</h2>
          <h3 className="text-5xl font-extrabold text-blue-400">Welcome</h3>
          <p className="text-xl mb-8 text-center max-w-2xl mx-auto py-6 leading-relaxed">
            Welcome to Perspectify AI, your personalized financial mentor. We offer loyalty programs, exceptional customer service, and flexible hours to cater to your financial needs. Join us online and experience a bespoke journey towards financial success.
          </p>
        </div>
      </section>


      {/* Video Section */}
      <div className="flex justify-center items-center bg-black ">
        <div className="w-full md:w-3/4 lg:w-1/2 h-[28rem]">
         <ReactPlayer
            url={video}
            controls
            playing={false}
            width="100%"
            height="100%"
            className="rounded-md shadow-lg"
          />
        </div>
      </div>

      {/* About Us Section */}
     
    </div>
  );
}

export default AboutUs;
 