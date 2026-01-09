import React, { useState } from 'react';
import './App.css';
function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className={`app-container ${isDark ? 'dark' : 'light'}`}>
      <div className="content">
        <h1>{isDark ? 'Dark Mode' : 'Light Mode'}</h1>
        <button onClick={() => setIsDark(!isDark)}>
          Switch Theme
        </button>
      </div>
    </div>
  );
}
export default App;