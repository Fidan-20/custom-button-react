import React, { useState } from 'react';
import './App.css';

const CustomButton = ({ text, warnMessage, hint }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  }

  const handleMouseEnter = () => {
    setShowHint(true);
  }

  const handleMouseLeave = () => {
    setShowHint(false);
  }

  return (
    <div className={`custom-button ${warnMessage ? 'warn' : ''}`}>
      <button 
        className="button" 
        onClick={handleClick} 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </button>
      {isClicked && <div className="message">{warnMessage}</div>}
      {showHint && <div className="hint">Hint: {hint}</div>}
    </div>
  );
}

export default CustomButton