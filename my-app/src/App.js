import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
          <Layout>
              <Header className = "header-color" title = "Richard Eisele">
                  <Navigation>
                      <Link to = "/">Home</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/resume">Resume</Link>
                      <Link to="/contact">Contact</Link>
                  </Navigation>
              </Header>
              <Drawer className = "drawer-color" title= "Links">
                  <Navigation>
                      <Link to = "/">Home</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/resume">Resume</Link>
                      <Link to="/contact">Contact</Link>
                  </Navigation>
              </Drawer>
              <Content>
                <Main/>
              </Content>  

              <Footer className = "footer-color" size="mini">
            <FooterSection type="left" logo="Richard Eisele">
        <FooterLinkList>
            <a href="mailto: Richard.J.Eisele@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/richard-eisele-06203a97/">LinkedIn</a>
            <a href="https://github.com/reisele08">GitHub</a>
        </FooterLinkList>
    </FooterSection>
    </Footer>
  </Layout>
</div>
    
      
    ); 
  }
}

export default App;