import React from 'react'
import { FaStar } from 'react-icons/fa';

function CompletionPage({setCurrentPage , currentPage}) {
  
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
    <div className="flex items-center justify-center mb-8">
      <img
        src="https://static.vecteezy.com/system/resources/previews/022/157/104/original/hip-hip-hooray-celebration-happy-text-icon-label-icon-design-vector.jpg"
        className="w-64 h-64"
        alt="Celebration"
      />
    </div>
    <h2 className="text-lg font-semibold mb-4">You're on your way!</h2>
    <div className="flex items-center justify-center mb-6">
      <div className="flex">
        <FaStar color="gold" size={30} />
        <FaStar color="gold" size={30} />
        <FaStar color="gold" size={30} />
        <FaStar color="gold" size={30} />
        <FaStar color="gold" size={30} />
      </div>
    </div>
    <p className="text-sm text-gray-600 mb-4 max-w-lg text-center">
      "Through its engaging and well-structured courses, Brilliant has taught me
      mathematical concepts that I previously struggled to understand. I now feel
      confident approaching both technical job interviews and real world problem
      solving situations."
    </p>
    <p className="text-sm text-gray-600 mb-8">— Jacob S.</p>
    <button
      onClick={() => setCurrentPage(currentPage + 1)}
      className="bg-gray-800 text-white px-4 py-2 rounded-md"
    >
      Continue
    </button>
  </div>
      );
    };
export default CompletionPage;