import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import './landingpage.css';

class Landing extends Component {
  render(){
    return (
      <div className = "home-page" style={{width: '80%', margin: 'auto'}}>

        <Grid className="landingpage-row-1">
        <Cell col={6} align= "middle">
        <p className = "landing-text">Hello, my name is Richard Eisele. I am
          a recent grad of SFU's Software Systems program
          within the school of Computing Science.
          I have a passion for coding, video games, and guitar.
        </p>
        </Cell>

        <Cell col={6}>  
        <img className="self_img" src={process.env.PUBLIC_URL + '/img/img_self.png'}/>
        </Cell>
        </Grid>

            {/*Skills*/}

<h3>Skills</h3>
<Grid className="skills-row-1">
  <Cell col={4}>								
    <span class="icon solid major fas fa-code"></span>
    <h3>Languages</h3>
    <p>Python</p>
    <p>JavaScript</p>
    <p>SQL</p>
          <p>C++</p>
          <p>C</p>
          <p>Java</p>				
  </Cell>

  <Cell col={4}>
    <span class="icon solid major fas fa-database"></span>
    <h3>Database</h3>
    <p>mySQL</p>
    <p>MongoDB</p>						
  </Cell>

  <Cell col={4}>		
    <span class="icon solid major fas fa-cloud-upload-alt"></span>
    <h3>Deploy</h3>
    <p>AWS</p>
    <p>Kubernetes</p>		
    <p>Docker</p>		
  </Cell>
</Grid>
  </div>
    )
  }
}

export default Landing;
