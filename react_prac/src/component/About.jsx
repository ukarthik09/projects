import React from 'react';

const About = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About Our Company</h1>
        <p className="text-lg text-gray-600">
          We are passionate innovators dedicated to creating meaningful solutions that transform industries.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Team</h3>
          <p className="text-gray-600">
            A diverse group of professionals united by a shared vision of innovation and excellence.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
          <p className="text-gray-600">
            To deliver cutting-edge solutions that solve complex challenges and drive meaningful progress.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Values</h3>
          <p className="text-gray-600">
            Integrity, innovation, collaboration, and continuous learning are at the core of everything we do.
          </p>
        </div>
      </div>

      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
        <p className="text-gray-600">
          Founded in 2020, our company began with a simple yet powerful idea:
          to create technology that makes a difference. From a small startup
          to a growing enterprise, we've remained committed to our core principles.
        </p>
      </div>

      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Meet Our Leadership</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          <div className="flex flex-col items-center">
            <img
              src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
              className="w-32 h-32 rounded-full object-cover mb-3"
              alt="Jane Doe"
            />
            <h4 className="text-xl font-semibold text-gray-800">Jane Doe</h4>
            <p className="text-gray-500">CEO & Founder</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
              className="w-32 h-32 rounded-full object-cover mb-3"
              alt="John Smith"
            />
            <h4 className="text-xl font-semibold text-gray-800">John Smith</h4>
            <p className="text-gray-500">CTO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
