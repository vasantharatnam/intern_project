import React, { useState } from 'react';
import RoleSelection from './Components/RoleSelection';
import InterestSelection from './Components/InterestSelection';
import MathLevelSelection from './Components/MathLevelSelection';
import LandingPage from './Components/LandingPage';
import CompletionPage from './Components/CompletionPage';
import ProgressBar from './Components/ProgressBar';
import FinalPage from './Components/FinalPage'
import LearningPath from './Components/LearningPath';

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);


  const [userInfo, setUserInfo] = useState({
    role: null,
    interest: null,
    mathLevel: null,
  });

  const handleRoleSelect = (role) => {
    setUserInfo((prevUserInfo) => ({ ...prevUserInfo, role }));
    setSelectedOption(role);
  };

  const handleInterestSelect = (interest) => {
    setUserInfo((prevUserInfo) => ({ ...prevUserInfo, interest }));
    setSelectedOption(interest)
  };

  const handleMathLevelSelect = (level) => {
    setUserInfo((prevUserInfo) => ({ ...prevUserInfo, mathLevel: level }));
    setSelectedOption(level);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <RoleSelection handleRoleSelect={handleRoleSelect} setCurrentPage = {setCurrentPage} currentPage= {currentPage}  selectedOption={selectedOption} setSelectedOption = {setSelectedOption} />;
      case 2:
        return <InterestSelection handleInterestSelect={handleInterestSelect} setCurrentPage = {setCurrentPage} currentPage= {currentPage}  selectedOption={selectedOption} setSelectedOption = {setSelectedOption} />;
      case 3:
        return <LandingPage setCurrentPage={setCurrentPage} currentPage= {currentPage}  />;
      case 4:
        return <MathLevelSelection handleMathLevelSelect={handleMathLevelSelect} setCurrentPage={setCurrentPage} currentPage = {currentPage}  selectedOption={selectedOption} setSelectedOption = {setSelectedOption} />;
      case 5:
        return <CompletionPage  setCurrentPage={setCurrentPage} currentPage = {currentPage} />;
      case 6:
        return <FinalPage setCurrentPage={setCurrentPage} currentPage = {currentPage}/>;
      case 7:
        return <LearningPath />;
      }
  };

  return (
    <div>
      <div className='mt-5 flex justify-center'>
     <div className='w-80'>
    {currentPage <= 5 && <ProgressBar currentPage={currentPage} setCurrentPage={setCurrentPage}   setSelectedOption = {setSelectedOption}/>}
    </div>
    </div>
    {/* {renderPage()} */}
    {currentPage === 1 && <RoleSelection handleRoleSelect={handleRoleSelect} setCurrentPage = {setCurrentPage} currentPage= {currentPage}  selectedOption={selectedOption} setSelectedOption = {setSelectedOption} />}
    {currentPage === 2 &&  <InterestSelection handleInterestSelect={handleInterestSelect} setCurrentPage = {setCurrentPage} currentPage= {currentPage}  selectedOption={selectedOption} setSelectedOption = {setSelectedOption} />}
    {currentPage === 3 && <LandingPage setCurrentPage={setCurrentPage} currentPage= {currentPage}  />}
    {currentPage === 4 && <MathLevelSelection handleMathLevelSelect={handleMathLevelSelect} setCurrentPage={setCurrentPage} currentPage = {currentPage}  selectedOption={selectedOption} setSelectedOption = {setSelectedOption} />}
    {currentPage === 5 && <CompletionPage  setCurrentPage={setCurrentPage} currentPage = {currentPage} />}
    {currentPage === 6 && <FinalPage setCurrentPage={setCurrentPage} currentPage = {currentPage}/>}
    {currentPage === 7 && <LearningPath />}
    </div>
  );
};

export default App;