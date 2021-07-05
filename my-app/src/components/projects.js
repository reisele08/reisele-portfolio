import React, {Component} from 'react';
import {Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton, Grid, Cell} from 'react-mdl';

class Projects extends Component {
  render(){
    return (
      <div style={{width: '80%', margin: 'auto'}}>
      <Grid className="projects-row-1">
    
        <Cell col={6} tablet={8} phone={4}>
          <Card shadow={1} style={{width: '512px', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(/reisele-portfolio/img/cradle_screenie.png) center / cover'}}></CardTitle>
        <CardText>
          <h3>Cradle</h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris sagittis pellentesque lacus eleifend lacinia...
          new 
        </CardText>
        <CardActions border>
          <Button colored href="https://github.com/reisele08/CradlePlatform" target="_blank">Check out the source here</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
      </Card>
      </Cell>

      <Cell col={6} tablet={8} phone={4}>
      <Card shadow={1} style={{width: '512px', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(/reisele-portfolio/img/weathermap_screenie.png) center / cover'}}></CardTitle>
        <CardText>
          <h3>Weather-Map</h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris sagittis pellentesque lacus eleifend lacinia...
        </CardText>
        <CardActions border>
        <Button colored href="https://github.com/reisele08/WeatherMap" target="_blank">Check out the source here</Button>
          {/*<Button colored component={Link} to="/weathermap-source">Check out the source here</Button>*/}
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
      </Card>
      </Cell>
      </Grid>

      <Grid className="projects-row-2">
      <Cell col={6} tablet={8} phone={4}>
      <Card shadow={1} style={{width: '512px', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / contain'}}></CardTitle>
        <CardText>
          <h3>Quarantine-Assist</h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris sagittis pellentesque lacus eleifend lacinia...
        </CardText>
        <CardActions border>
          <Button colored>Check out the source here</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
      </Card>
      </Cell>

      <Cell col={6} tablet={8} phone={4}>
      <Card shadow={1} style={{width: '512px', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(/reisele-portfolio/img/decaf_img.png) center / contain'}}></CardTitle>
        <CardText>
          <h3>Decaf Compiler</h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris sagittis pellentesque lacus eleifend lacinia...
        </CardText>
        <CardActions border>
          <Button href="https://github.com/reisele08/Decaf-Compiler" target="_blank">Check out the source here</Button>
          <Button href="https://anoopsarkar.github.io/compilers-class/decafspec.html" target="_blank">Decaf Spec</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
      </Card>
      </Cell>

      </Grid>

      </div>

      
    )
  }
}
export default Projects;