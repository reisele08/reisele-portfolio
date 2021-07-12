import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
          <Layout className = "layout">
              <Header transparent className = "header-color" title = "Richard Eisele" style={{color: '#DD614A'}}>
                  <Navigation>
                      <Link to = "/">Home</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/resume">Resume</Link>
                  </Navigation>
              </Header>
              <Drawer className = "drawer-color" title= "Links">
                  <Navigation>
                      <Link to = "/">Home</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/resume">Resume</Link>
                  </Navigation>
              </Drawer>
              <Content>
                <Main/>
              </Content>  

              <Footer size="mini">
            <FooterSection type="left">
        <FooterLinkList>
          <a>Phone: (778)-388-0034</a>
          <a href="mailto: Richard.J.Eisele@gmail.com"><i class="footer-icons fas fa-envelope fa-2x"></i></a>
          <a href="https://www.linkedin.com/in/richard-eisele-06203a97/"><i class="footer-icons fab fa-linkedin fa-2x"></i></a>
          <a href="https://github.com/reisele08"><i class="footer-icons fab fa-github fa-2x"></i></a>

        </FooterLinkList>
    </FooterSection>
    </Footer>


  </Layout>
</div>
    
      
    ); 
  }
}

export default App;