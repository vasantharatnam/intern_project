import React from 'react'

function LandingPage({setCurrentPage , currentPage }) {
  console.log(currentPage) 
  return (
        <>
    <div className="relative h-screen w-screen bg-white">
  <div className="absolute top-0 left-0 right-0 h-8 bg-white-500"></div>
  <div className="flex items-center justify-center h-full">
    <div className="flex items-center">
      <div className="bg-gray-200 rounded-full p-2">
        <img
          src="https://brilliant.org/site_media/version-0/images/nux-animations/reason-1.svg"
          alt="Pulley Icon"
          className="w-64 h-64"
        />
      </div>
      <div className="ml-10 align-middle">
        <h2 className="text-3xl font-semibold mb-4">You're in the right place</h2>
        <p className="text-base text-gray-600 mb-6">
          Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science, and computer science.
        </p>
      </div>
    </div>
  </div>
  <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-8">
    <button
      className="bg-gray-800 text-white px-4 py-2 rounded-md"
      onClick={() => setCurrentPage(currentPage + 1)}
   style = {{marginBottom:'50px'}} >
      Continue
    </button>
  </div>
</div>
        </>
   
    );
};

export default LandingPage;