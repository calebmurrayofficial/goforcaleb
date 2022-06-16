import React from 'react';

import './App.css';
import About from './components/About/About';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App m-2 space-y-10">
      <Navbar />
      <Hero />
      <Projects />
      <About />
    </div>
  );
}

export default App;
