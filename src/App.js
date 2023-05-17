import React from 'react'
import './App.css';
import Weather from './components/Weather'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="San Jose" />
      </div>
      <footer> This app was coded by <span className="name"> Alice Yang </span>and is <a href="https://github.com/Ayang471/react-weather-app" target="_blank" rel="noreferrer">open-sourced on GitHub </a>
        and hosted on <a href="https://glowing-bonbon-bc9d7c.netlify.app/" target="_blank" rel="noreferrer"> Netlify.</a></footer>
    </div>
  );
}

export default App;
