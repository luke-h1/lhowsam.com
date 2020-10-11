import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Projects from './components/Projects';
import HeroSection from './components/HeroSection';
import Contact from './components/Contact';
import fourOhFour from './components/fourOhFour';
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HeroSection} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/contact" exact component={Contact} />
          <Route default component={fourOhFour} /> 
        </Switch>
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
}
export default App;
