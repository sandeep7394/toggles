import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleBackground = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark' : ''}`}>
      <h1>Toggle Background Color</h1>
      <button onClick={toggleBackground}>Toggle</button>
    </div>
  );
};

export default App;
