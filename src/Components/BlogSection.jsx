import React from 'react';

function BlogSection() {
  return (
    <section id='blog' className="container mx-auto py-20 bg-black">
      {/* Blog Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-500">Blog</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-3">
        {/* First Blog: Malcolm Hodnyl */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold text-white text-center mb-2">Malcolm Hodnyl</h3>
          <p className="text-blue-400 text-center mb-4 font-semibold">- Fashion Designer</p>
          <p className="text-gray-300 text-lg text-center">
            "Perspectify has been incredibly useful in transforming how I feel and manage my business.
            I've gained a lot of insight into financial acumen and how my habits and mentality can
            significantly impact my finances."
          </p>
        </div>

        {/* Second Blog: Michael Gyasi */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold text-white text-center mb-2">Michael Gyasi</h3>
          <p className="text-purple-400 text-center mb-4 font-semibold">- MMA Fighter</p>
          <p className="text-gray-300 text-lg text-center">
            “Perspectify’s personalisation is amazing. It doesn’t feel like I’m talking to an AI—it’s like
            having a friend who's also a financial genie. Perspectify has helped me map out my MMA career,
            keeping me on track and managing my finances effectively. It’s been a game-changer for me."
          </p>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
