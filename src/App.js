import React from 'react';
// import './scss/App.css';
import './scss/App.scss'
import Greeting from './components/Greeting';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';
function App() {
  return (
    <div className='App'>
      <Greeting />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
