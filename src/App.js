import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import Home from './pages/Home/Home'
import Contact from './components/Contact/Contact';
import fourOhFour from './components/FourOhFour/fourOhFour';
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
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
