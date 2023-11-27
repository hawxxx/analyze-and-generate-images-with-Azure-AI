import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Image Analyzer and Generator</h1>
        <input type="text" placeholder="Enter image URL or prompt" className="input-field" />
        <div className="button-group">
          <button className="button">Analyze Image</button>
          <button className="button">Generate Image</button>
        </div>
      </header>
    </div>
  );
}

export default App;
