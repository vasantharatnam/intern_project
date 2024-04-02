import React from 'react'

function MathLevelSelection({handleMathLevelSelect , selectedOption , setSelectedOption,   setCurrentPage  , currentPage}) {
    return (
        <div className="bg-white p-4">
          <h2 className="text-lg font-semibold mb-4">What is your math comfort level?</h2>
          <p className="text-sm text-gray-600 mb-6">
            Choose the highest level you feel confident in — you can always adjust later.
          </p>
          <div className="grid grid-cols-4 gap-4">
            <button
              onClick={() => handleMathLevelSelect('introductory')}
              className={`bg-white rounded-md p-4 border border-gray-300 flex flex-col items-center hover:bg-gray-100 transition-colors duration-300 ${selectedOption === 'introductory' ? 'bg-gray-800 text-black' : 'bg-gray-100 text-gray-600'}`}
            >
              <span className="text-sm font-semibold mb-2">Arithmetic</span>
              <span className="text-xs text-gray-500">Introductory</span>
              <span className="text-sm mt-2">5 × 1/2 = ?</span>
            </button>
            {/* Add remaining math level options */}
          </div>
          <button disable = {!selectedOption} className={`px-4 py-2 rounded-md mt-6 ${!selectedOption ? 'bg-gray-300 text-gray-600' : 'bg-gray-800 text-white'}`} onClick={() => {setCurrentPage(currentPage+1) , setSelectedOption(null)}}>
            Continue
          </button>
        </div>
      );
    };
export default MathLevelSelection;
