import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './landingpage';
import About from './about';
import Projects from './projects';
import Contact from './contact';
import Resume from './resume';
import {HashRouter as Router} from 'react-router-dom';

const Main = () => (
  /*<Switch>*/
  <Router>
    <Route exact path = "/" component = {LandingPage} />
    <Route path = "/about" component = {About} />
    <Route path="/projects" exact component={Projects} />
    <Route path="/contact" exact component={Contact} />
    <Route path="/resume" exact component={Resume} />
  </Router>
  /*</Switch>*/
)

export default Main;
