import React from 'react';

import './App.css';
import About from './components/About/About';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App m-2">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
