import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';
import ProjectPage from './Pages/Projects/ProjectPage';
import ContactPage from './Pages/Contact/ContactPage';
import HomePage from './Pages/HomePage/HomePage';
import FourOhFour from './components/FourOhFour/FourOhFour';
import Automation from './projects/Automation/Automation';
import DrinkApp from './projects/DrinkApp/DrinkApp';
import FormValidator from './projects/FormValidator/FormValidator';
import Quotes from './projects/Quotes/Quotes';
import PersonalSite from './projects/PersonalSite/PersonalSite';
import { GlobalStyle } from './styles/GlobalStyles';
import BlogPage from './Pages/BlogPage/BlogPage';
import HelloWorld from './blog-posts/HelloWorld/HelloWorld';

ReactGA.initialize(`${process.env.REACT_APP_GOOGLE_TRACKING_ID}`);
ReactGA.pageview(window.location.pathname + window.location.search)

const App = () => (
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
        <Route exact path="/blog" component={BlogPage} />
        <Route exact path="/blog/hello-world" component={HelloWorld} />
        <Route default component={FourOhFour} />
      </Switch>
    </BrowserRouter>
  </>
);
export default App;
