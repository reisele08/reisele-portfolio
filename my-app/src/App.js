import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';
import {Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton} from 'react-mdl';

class App extends Component {
  render() {
    return (
      <div>
          <Layout>
              <Header className = "header-color" title = "Richard Eisele">
                  <Navigation>
                      <Link to = "/">Home</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/about">About Me</Link>
                      <Link to="/contact">Contact</Link>
                  </Navigation>
              </Header>
              <Drawer className = "drawer-color" title= "Drawer Title">
                  <Navigation>
                      <Link to="/resume">Link</Link>
                      <Link to="/aboutme">Link</Link>
                      <Link to="/projects">Link</Link>
                      <Link to="/contact">Link</Link>
                  </Navigation>
              </Drawer>
              <Content>
                <Main/>
              </Content>     
          </Layout>
      </div>
      
    ); 
  }
}

export default App;