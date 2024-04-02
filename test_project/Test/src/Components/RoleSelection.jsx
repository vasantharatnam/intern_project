import React from 'react'
import { FaUserGraduate } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { FaGraduationCap } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';
import { FaEllipsisH } from 'react-icons/fa';

function RoleSelection({ handleRoleSelect , currentPage ,  setCurrentPage , selectedOption  , setSelectedOption}) {
    return (
        <div className="bg-white p-4 flex flex-col justify-center items-center h-screen" >
          <h2 className="text-lg font-semibold mb-4">Which describes you best?</h2>
          <p className="text-sm text-gray-600 mb-6">This will help us personalize your experience.</p>
          <div className=" flex flex-col gap-2 ">
            <button
              onClick={() => handleRoleSelect('student')}
              className={`bg-gray-100 rounded-md p-4 flex items-center hover:bg-gray-200 transition-colors duration-300 ${selectedOption === 'student' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-600'} border-solid border-2 border-transparent focus:outline-none focus:border-gray-500`}
            >
              <FaUserGraduate  size = {30}/>
              <span>Student or soon to be enrolled</span>
            </button>
            <button
              onClick={() => handleRoleSelect('professional')}
              className={`bg-gray-100 rounded-md p-4 flex items-center hover:bg-gray-200 transition-colors duration-300 ${selectedOption === 'professional' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-600'}`}
            >
              <FaBriefcase size={30} />
              <span>Professional pursuing a career</span>
            </button>
            <button
              onClick={() => handleRoleSelect('parent')}
              className={`bg-gray-100 rounded-md p-4 flex items-center hover:bg-gray-200 transition-colors duration-300 ${selectedOption === 'parent' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-600'}`}
            >
              <FaUserAlt size={30} />
              <span>Parent of a school-age child</span>
            </button>
            <button
              onClick={() => handleRoleSelect('learner')}
              className={`bg-gray-100 rounded-md p-4 flex items-center hover:bg-gray-200 transition-colors duration-300 ${selectedOption === 'learner' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-600'}`}
            >
             <FaGraduationCap size={30} />
              <span>Lifelong learner</span>
            </button>
            <button
              onClick={() => handleRoleSelect('teacher')}
              className={`bg-gray-100 rounded-md p-4 flex items-center hover:bg-gray-200 transition-colors duration-300 ${selectedOption === 'teacher' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-600'}`}
            >
              <FaChalkboardTeacher size={30} />
              <span>Teacher</span>
            </button>
            <button
              onClick={() => handleRoleSelect('other')}
              className={`bg-gray-100 rounded-md p-4 flex items-center hover:bg-gray-200 transition-colors duration-300 ${selectedOption === 'other' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-600'}`}
            >
              <FaEllipsisH size={30} />
              <span>Other</span>
            </button>

          </div>
          <button  disabled={!selectedOption} onClick = {()=>{setCurrentPage(currentPage+1), setSelectedOption(null)}} className={`px-4 py-2 rounded-md mt-6 ${!selectedOption ? 'bg-gray-300 text-gray-600' : 'bg-gray-800 text-white'}`}>Continue</button>
        </div>
    );
 };

export default RoleSelection;