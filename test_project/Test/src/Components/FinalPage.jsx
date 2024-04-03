import { useEffect } from "react";
import React from 'react'
import image from "../assets/spinner.gif"


function FinalPage({setCurrentPage , currentPage}) {

    useEffect(() => {
        // print(setCurrentPage,currentPage)
        setTimeout(() => {
          setCurrentPage(currentPage+1); // Switch to second component after 5 seconds
        }, 5000);
    }, []);


  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="relative">
        <img src={image} alt="img" className="w-24 h-24" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-yellow-500 rounded-full w-16 h-16 flex items-center justify-center">
            <div className="bg-white rounded-full w-12 h-12"></div>
          </div>
        </div>
      </div>
      <p className="mt-8 text-lg text-gray-800 text-center">
        Finding learning path recommendations for you based on your responses
      </p>
    </div>
  )
}

export default FinalPage
