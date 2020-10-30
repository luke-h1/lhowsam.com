import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import HeroSection from './components/HeroSection/HeroSection';
import Contact from './components/Contact/Contact';
import FourOhFour from './components/FourOhFour/FourOhFour';
import Automation from './components/Projects/Automation/Automation';
import DrinkApp from './components/Projects/DrinkApp/DrinkApp';
import FormValidator from './components/Projects/FormValidator/FormValidator';
import Quotes from './components/Projects/Quotes/Quotes';
import ReactGA from 'react-ga';

function initializeReactGA() {
  // ReactGA.initialize('UA-251109845');
  ReactGA.initialize('G-SVNV2BSZ6Y');
  ReactGA.pageview('/');
  
  ReactGA.pageview(window.location.pathname + window.location.search);
}

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HeroSection} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/Automation" exact component={Automation} />
          <Route exact path="/drink-app" component={DrinkApp} />
          <Route exact path="/form-validator" component={FormValidator} />
          <Route exact path="/quotes-app" component={Quotes} />
          <Route default component={FourOhFour} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
}
export default App;
