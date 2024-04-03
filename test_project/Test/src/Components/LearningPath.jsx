import React from 'react'
import image from '../assets/pro_img.gif'

function LearningPath() {
  return (
    <div className="bg-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Learning paths based on your answers
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          Choose one to get started. You can switch anytime.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-8">
            <div className="flex items-center justify-center mb-4">
              <img
                src={image}
                alt="Foundational Math"
                className="w-32 h-32"
              />
              <span className="ml-4 text-blue-500">AI</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Foundational Math Build
            </h3>
            <p className="text-gray-700">
              your foundational skills in algebra, geometry, and probability.
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-8">
            <div className="flex items-center justify-center mb-4">
              <img
                src={image}
                alt="Mathematical Thinking"
                className="w-32 h-32"
              />
              <span className="ml-4 text-blue-500">AI</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Mathematical Thinking
            </h3>
            <p className="text-gray-700">
              Build your foundational skills in algebra, geometry, and
              probability.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <span className="bg-yellow-500 text-white px-3 py-1 rounded-full font-semibold">
          MOST POPULAR
        </span>
      </div>
    </div>
  </div>
  );
};

export default LearningPath;
