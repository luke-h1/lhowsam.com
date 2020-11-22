import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProjectPage from './Pages/Projects/ProjectPage';
import ContactPage from './Pages/Contact/ContactPage';
import HomePage from './Pages/HomePage/HomePage';
import FourOhFour from './components/FourOhFour/FourOhFour';
import Automation from './components/Projects/Automation/Automation';
import DrinkApp from './components/Projects/DrinkApp/DrinkApp';
import FormValidator from './components/Projects/FormValidator/FormValidator';
import Quotes from './components/Projects/Quotes/Quotes';
import PersonalSite from './components/Projects/PersonalSite/PersonalSite';
import { GlobalStyle } from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/projects" exact component={ProjectPage} />
          <Route path="/contact" exact component={ContactPage} />
          <Route exact path="/projects/Automation" component={Automation} />
          <Route
            exact
            path="/projects/personal-site"
            component={PersonalSite}
          />
          <Route exact path="/projects/drink-app" component={DrinkApp} />
          <Route
            exact
            path="/projects/form-validator"
            component={FormValidator}
          />
          <Route exact path="/projects/quotes-app" component={Quotes} />
          <Route default component={FourOhFour} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
export default App;
