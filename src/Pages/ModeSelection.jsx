// src/components/ModeSelection.jsx
import React from 'react';

const ModeSelection = ({ onSelectMode }) => {
  return (
    <div className="mode-selection">
      <h2>Select Mode</h2>
      <button onClick={() => onSelectMode('client')}>Client Mode</button>
      <button onClick={() => onSelectMode('server')}>Server Mode</button>
    </div>
  );
};

export default ModeSelection;
