import React from 'react';
// import './scss/App.css'; DEVELOPMENT SASS 
import './scss/App.scss' /* PROD SASS */ 
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
