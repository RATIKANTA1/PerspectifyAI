import React from 'react';
import ReactPlayer from 'react-player'; // Import ReactPlayer

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
            url="https://repackager.wixmp.com/video.wixstatic.com/video/0bf7f7_6b46815eadb84325be620e57949563c6/,360p,480p,720p,1080p,/mp4/file.mp4.urlset/master.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2aWRlb19pZCI6IjBiZjdmN182YjQ2ODE1ZWFkYjg0MzI1YmU2MjBlNTc5NDk1NjNjNiIsImlzX2NsaXAiOmZhbHNlLCJpYXQiOjE3MzQwMjI4MDAsImV4cCI6MTczNDEwOTIwMCwiaXNzIjoiYXBwOnZvZCIsInN1YiI6InVzZXI6dm9kIn0.Ay4aa41wCO14nBLHQNQPK95RIjbh10krexmJFsSCWIY"
            controls
            playing={false}
            width="100%"
            height="100%"
            config={{
              file: {
                forceHLS: true, // Forces HLS support
              },
            }}
            className="rounded-md shadow-lg"
          />
        </div>
      </div>

      {/* About Us Section */}
     
    </div>
  );
}

export default AboutUs;
