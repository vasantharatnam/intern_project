import React, { useState } from 'react';
import RoleSelection from './Components/RoleSelection';
import InterestSelection from './Components/InterestSelection';
import MathLevelSelection from './Components/MathLevelSelection';
import LandingPage from './Components/LandingPage';
import CompletionPage from './Components/CompletionPage';
import ProgressBar from './Components/ProgressBar';

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
        return <LandingPage setCurrentPage={setCurrentPage} currentPage= {currentPage} />;
      case 4:
        return <MathLevelSelection handleMathLevelSelect={handleMathLevelSelect} setCurrentPage={setCurrentPage} currentPage = {currentPage}  selectedOption={selectedOption} setSelectedOption = {setSelectedOption} />;
      case 5:
        return <CompletionPage />;
      default:
        return null;
    }
  };

  return (
    <div>
      <ProgressBar currentPage={currentPage} />
      {renderPage()}
    </div>
  );
};

export default App;