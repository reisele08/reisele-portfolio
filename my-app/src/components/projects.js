import React, {Component} from 'react';
import {Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton, Grid, Cell} from 'react-mdl';


class Projects extends Component {
  render(){
    return (
      <div style={{width: '80%', margin: 'auto'}}>

      <Grid className="projects-row-1">
    
        <Cell col={6}>
          <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
        <CardTitle style={{color: '#1f1f1f', height: '176px', background: 'url(/reisele-portfolio/img/cradle_screenie.png) center / cover'}}>Cradle</CardTitle>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris sagittis pellentesque lacus eleifend lacinia...
          new 
        </CardText>
        <CardActions border>
          <Button colored>Check out the source here</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
      </Card>
      </Cell>

      <Cell col={6}>
      <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(/reisele-portfolio/img/weathermap_screenie.png) center / cover'}}>Weather-Map</CardTitle>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris sagittis pellentesque lacus eleifend lacinia...
        </CardText>
        <CardActions border>
          <Button colored>Check it out here</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
      </Card>
      </Cell>
      </Grid>

      <Grid className="projects-row-2">
      <Cell col={6}>
      <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Quarantine Assist</CardTitle>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris sagittis pellentesque lacus eleifend lacinia...
        </CardText>
        <CardActions border>
          <Button colored>Check it out here</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
      </Card>
      </Cell>

      <Cell col={6}>
      <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Decaf Compiler</CardTitle>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris sagittis pellentesque lacus eleifend lacinia...
        </CardText>
        <CardActions border>
          <Button colored>Check it out here</Button>
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