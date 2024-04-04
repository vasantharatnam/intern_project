import React from 'react'

function ProgressBar({ currentPage, setCurrentPage , setSelectedOption }) {
  const totalSteps = 5;
  const completedSteps = currentPage - 1;
  const progressWidth = (completedSteps / (totalSteps - 1)) * 100;

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setSelectedOption(null);
    }
  };

  return (
    <div className="flex items-center">
     <button
     className="text-gray-800 font-bold py-2 px-4 "
     onClick={handlePrevPage}
     disabled={currentPage === 1} style ={{marginBottom:'15px'}}>
     &larr;
    </button>
      <div className="flex-grow bg-gray-200 rounded-r-lg overflow-hidden mb-4">
        <div
          className="h-2 bg-green-600 transition-all duration-300"
          style={{ width: `${progressWidth}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar