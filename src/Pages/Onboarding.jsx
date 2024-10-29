// src/components/Onboarding.jsx
import React from 'react';

const Onboarding = ({ onClose }) => {
  return (
    <div className="onboarding">
      <h2>Welcome to the App!</h2>
      <p>Heres a quick guide on how to use Client and Server modes.</p>
      <button onClick={onClose}>Got it!</button>
    </div>
  );
};

export default Onboarding;
