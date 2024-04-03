import React from 'react';
import { FaBookOpen } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaCalculator } from 'react-icons/fa';
import { FaBrain } from 'react-icons/fa';
import { FaLightbulb } from 'react-icons/fa';


function InterestSelection({handleInterestSelect,  currentPage ,  setCurrentPage , selectedOption , setSelectedOption }) {
  console.log(currentPage)  
  return (
        <div className="bg-white p-4 flex flex-col justify-center items-center h-screen ">
          <h2 className="text-3xl font-semibold mb-4">Which are you most interested in?</h2>
          <p className="text-base text-gray-600 mb-6">
            Choose just one. This will help us get you started (but won't limit your experience).
          </p>
          <div className="grid grid-cols-1 gap-4">
            <button
              onClick={() => handleInterestSelect('career')}
              className={`bg-gray-100 rounded-md p-4 flex items-center hover:bg-gray-200 transition-colors duration-300 ${selectedOption === 'career' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-600'}`}
            >
               <FaBookOpen size = {30}/>
              <span>Learning specific skills to advance my career</span>
            </button>
            <button
              onClick={() => handleInterestSelect('topic')}
              className={`bg-gray-100 rounded-md p-4 flex items-center hover:bg-gray-200 transition-colors duration-300 ${selectedOption === 'topic' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-600'}`}
            >
              <FaSearch size = {30}/>
              <span>Exploring new topics I'm interested in</span>
            </button>
            <button
              onClick={() => handleInterestSelect('math')}
              className={`bg-gray-100 rounded-md p-4 flex items-center hover:bg-gray-200 transition-colors duration-300 ${selectedOption === 'math' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-600'}`}
            >
               <FaCalculator size = {30}/>
              <span>Refreshing my math foundations</span>
            </button>
            <button
              onClick={() => handleInterestSelect('brain')}
              className={`bg-gray-100 rounded-md p-4 flex items-center hover:bg-gray-200 transition-colors duration-300 ${selectedOption === 'brain' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-600'}`}
            >
               <FaBrain size = {30}/>
              <span>Exercising my brain to stay sharp</span>
            </button>
            <button
              onClick={() => handleInterestSelect('else')}
              className={`bg-gray-100 rounded-md p-4 flex items-center hover:bg-gray-200 transition-colors duration-300 ${selectedOption === 'else' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-600'}`}
            >
              <FaLightbulb size = {30}/>
              <span>Something else</span>
            </button>
          </div>
          <button disabled = {!selectedOption} onClick = {()=> {setCurrentPage(currentPage+1) , setSelectedOption(null)}} className={`px-4 py-2 rounded-md mt-6 ${!selectedOption ? 'bg-gray-300 text-gray-600' : 'bg-gray-800 text-white'}`}>Continue</button>
        </div>
      );
    };
export default InterestSelection;
