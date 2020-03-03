import React from 'react';
import './App.css';
import Navigation from './Components/Navigation'
import Slides from './Components/Slides'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <header className="App-header">
        <Slides/>
      </header>


    </div>
  );
}

export default App;
