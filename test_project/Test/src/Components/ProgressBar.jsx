import React from 'react'

function ProgressBar({ currentPage }) {
    const totalSteps = 5;
    const completedSteps = currentPage - 1;
    const progressWidth = (completedSteps / (totalSteps - 1)) * 100;
  
    return (
      <div className="w-full bg-gray-200 rounded-lg overflow-hidden mb-4">
        <div
          className="h-2 bg-green-600 transition-all duration-300"
          style={{ width: `${progressWidth}%` }}
        ></div>
      </div>
    );
  }

export default ProgressBar;