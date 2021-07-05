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


    <Route exact path="/decaf-source" render={() => (window.location = "https://github.com/reisele08/Decaf-Compiler")} />
    <Route exact path="/decaf-spec" render={() => (window.location = "https://anoopsarkar.github.io/compilers-class/decafspec.html")} />
    <Route exact path="/cradle-source" render={() => (window.location = "https://github.com/reisele08/CradlePlatform")} />
    <Route exact path="/weathermap-source" render={() => (window.location = "https://github.com/reisele08/WeatherMap")} />
  </Switch>
)

export default Main;
