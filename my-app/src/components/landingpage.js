import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import './landingpage.css';

class Landing extends Component {
  render(){
    return (
      <div class="container">

        <Grid className="landingpage-row-1">
        <Cell col={6} align= "middle">
        <p className = "landing-text">Hello, my name is Richard Eisele. I am
          a recent grad of SFU's Software Systems program
          within the school of Computing Science.
          I have a passion for coding, video games, and music.
        </p>
        </Cell>

        <Cell col={6}>
        <img src={process.env.PUBLIC_URL + '/img/IMG_5893.jpg'}/>
        </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
