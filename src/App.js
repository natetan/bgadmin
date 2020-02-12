import React from 'react';

import About from './components/About/About';
import Footer from './components/Footer/Footer';
import MastHead from './components/MastHead/MastHead';

import './App.css';

function App() {
  return (
    <div className='App'>
      <MastHead />
      <About />
      <Footer />
    </div>
  );
}

export default App;
