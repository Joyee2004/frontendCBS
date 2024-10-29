// src/App.jsx
import React, { useState } from 'react';
import Login from './Pages/Login';
import ModeSelection from './Pages/ModeSelection';
import Onboarding from './Pages/Onboarding';
import './Pages/Styles.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedMode, setSelectedMode] = useState(null);
  const [showOnboarding, setShowOnboarding] = useState(true);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleModeSelection = (mode) => {
    setSelectedMode(mode);
    setShowOnboarding(false);
  };

  return (
    <div className="app">
      {!isLoggedIn && <Login onLogin={handleLogin} />}
      {isLoggedIn && !selectedMode && (
        <ModeSelection onSelectMode={handleModeSelection} />
      )}
      {isLoggedIn && selectedMode && !showOnboarding && (
        <div>
          <h2>Welcome to {selectedMode === 'client' ? 'Client' : 'Server'} Mode</h2>
        </div>
      )}
      {isLoggedIn && showOnboarding && (
        <Onboarding onClose={() => setShowOnboarding(false)} />
      )}
    </div>
  );
};

export default App;
