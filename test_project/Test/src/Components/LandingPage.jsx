import React from 'react'

function LandingPage({setCurrentPage , currentPage}) {
    return (
        <div className="bg-white p-4">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gray-200 rounded-full p-2">
              <img src="https://brilliant.org/site_media/version-0/images/nux-animations/reason-1.svg" alt="Pulley Icon" className="w-64 h-64" />
            </div>
          </div>
          <h2 className="text-lg font-semibold mb-4">You're in the right place</h2>
          <p className="text-sm text-gray-600 mb-6">
            Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact with
            concepts and solve fun problems in math, science, and computer science.
          </p>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md" onClick={() => setCurrentPage(currentPage+1)}>
            Continue
          </button>
        </div>
    );
};

export default LandingPage;