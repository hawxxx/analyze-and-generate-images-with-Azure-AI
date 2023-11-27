import React, { useState } from 'react';
import './App.css';
import analyzeImage from './azure-image-analysis';

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyzeClick = async () => {
    setLoading(true);
    setAnalysisResult(null);
    try {
      const result = await analyzeImage(imageUrl);
      setAnalysisResult(result);
    } catch (error) {
      console.error('Error analyzing image:', error);
    }
    setLoading(false);
  };

  const DisplayResults = () => {
    if (!analysisResult) return null;
    return (
      <div>
        <h3>Analysis Results:</h3>
        <pre>{JSON.stringify(analysisResult, null, 2)}</pre>
      </div>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Image Analyzer and Generator using Azure AI</h1>
        <input type="text" placeholder="Enter image URL or prompt" className="input-field" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        <div className="button-group">
          <button className="button" onClick={handleAnalyzeClick} disabled={loading}>Analyze Image</button>
          <button className="button">Generate Image</button>
        </div>
        {loading && <p>Loading...</p>}
        <DisplayResults />
      </header>
    </div>
  );
}

export default App;
