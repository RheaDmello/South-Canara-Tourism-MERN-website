import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Backbutton.css';
const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <button className="back-button" onClick={handleBack}>Back</button>
  );
};

export default BackButton;