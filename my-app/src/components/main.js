import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './landingpage';
import About from './about';
import Projects from './projects';
import Contact from './contact';

const Main = () => (
  <Switch>
    <Route exact path = "/" component = {LandingPage} />
    <Route path = "/about" component = {About} />
    <Route path="/projects" exact component={Projects} />
    <Route path="/contact" exact component={Contact} />

  </Switch>
)

export default Main;
