import React from 'react'

function MathLevelSelection({handleMathLevelSelect , selectedOption , setSelectedOption,   setCurrentPage  , currentPage}) {
  console.log(currentPage)  
  return (
        <div className="flex flex-col items-center justify-center h-screen bg-white">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-center">What is your math comfort level?</h2>
          <p className="text-base text-gray-600 text-center">
            Choose the highest level you feel confident in — you can always adjust later.
          </p>
        </div>
        <div className="flex gap-4 mb-8" >
          <button className={`bg-white rounded-md border border-gray-300 flex flex-col items-center p-4 hover:bg-gray-100 transition-colors duration-300 ${selectedOption === 'arithmetic' ? 'border-gray-500' : ''}`} onClick={() => handleMathLevelSelect('arithmetic')} >
            <img src="https://ds055uzetaobb.cloudfront.net/answer-images/arithmetic-pC3bWR.png" className="w-32" alt="arithmetic" />
            <span className="text-sm font-semibold mb-2 text-gray-600" style = {{marginTop:'5px'}}>Arithmetic</span>
            <span className="text-base text-gray-500 ">Introductory</span>
          </button>
          <button className={`bg-white rounded-md border border-gray-300 flex flex-col items-center p-4 hover:bg-gray-100 transition-colors duration-300 ${selectedOption === 'algebra' ? 'border-gray-500' : ''}`} onClick={() => handleMathLevelSelect('algebra')} >
            <img src="https://assets-modified.embeddables.com/UkI2pO4KD0xXQLHkN1GG%2Fnumber_08117739254383571.png" className="w-32" alt="algebra" />
            <span className="text-sm font-semibold mb-2 text-gray-600" style = {{marginTop:'20px'}}>Basic Algebra</span>
            <span className="text-base text-gray-500">Foundational</span>
          </button>
          <button className={`bg-white rounded-md border border-gray-300 flex flex-col items-center p-4 hover:bg-gray-100 transition-colors duration-300 ${selectedOption === 'intermediate' ? 'border-gray-500' : ''}`} onClick={() => handleMathLevelSelect('intermediate')} >
            <img src="https://ds055uzetaobb.cloudfront.net/answer-images/intermediate-algebra-HlLTYk.png" className="w-32" alt="intermediate"  style = {{marginTop:'10px'}}/>
            <span className="text-sm font-semibold mb-2 text-gray-600" style = {{marginTop:'25px'}}>Intermediate Algebra</span>
            <span className="text-base text-gray-500">Intermediate</span>
          </button>
          <button className={`bg-white rounded-md border border-gray-300 flex flex-col items-center p-4 hover:bg-gray-100 transition-colors duration-300 ${selectedOption === 'calculus' ? 'border-gray-500' : ''}`} onClick={() => handleMathLevelSelect('calculus')} >
            <img src="https://ds055uzetaobb.cloudfront.net/answer-images/Frame_2-qvqAR5.png" className="w-32" alt="calculus" />
            <span className="text-sm font-semibold mb-2 text-gray-600">Calculus</span>
            <span className="text-base text-gray-500">Advanced</span>
          </button>
        </div>
        <button disabled = {!selectedOption} className={`px-4 py-2 rounded-md mt-6 ${!selectedOption ? 'bg-gray-300 text-gray-600' : 'bg-gray-800 text-white'}`} onClick={() => { setCurrentPage(currentPage + 1); setSelectedOption(null) }}>
          Continue
        </button>
      </div>
      
    );
 };
export default MathLevelSelection;
