import React, {Component} from 'react';
import {Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton, Grid, Cell} from 'react-mdl';

class Projects extends Component {
  render(){
    return (
      <div style={{width: '100%', margin: 'auto'}}>
      <Grid className="projects-row-1">
    
        <Cell col={4} tablet={8} phone={4}>
          <Card shadow={1} style={{width: '512px', margin: 'auto'}}>
            {/* /reisele-portfolio/img/cradle_screenie.png */}
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(/img/cradle_screenie.png) center / cover'}}></CardTitle>
        <CardText>
          <h3>Cradle</h3>
          Cradle is a web application project that was meant to assist health professionals and volunteers in the field with the Syrian refugee crisis.
           The project included a team of 8 and took place over the course of an entire semester, split up into cycles using Agile practices. We used React 
           for the front end, Java for our backend, and we chose MongoDB for our database.
        </CardText>
        <CardActions border>
          <Button colored href="https://github.com/reisele08/CradlePlatform" target="_blank">Check out the source here</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
      </Card>
      </Cell>

      <Cell col={4} tablet={8} phone={4}>
      <Card shadow={1} style={{width: '512px', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(/img/weathermap_screenie.png) center / cover'}}></CardTitle>
        <CardText>
          <h3>Weather-Map</h3>
          Weather-Map is a web application created using React that pulls from various API's to show current environmental hazards on an interactive world map. Due to the COVID-19 pandemic, we 
          decided to include COVID-19 data on the map, as well as various tables and charts that pull from COVID-19 API's to show current and up to date 
          information on the pandemic.
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

      <Cell col={4} tablet={8} phone={4}>
      <Card shadow={1} style={{width: '512px', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(/img/decaf_img.png) center / contain'}}></CardTitle>
        <CardText>
          <h3>Decaf Compiler</h3>
          A compiler for the "Decaf" programming langauge. This solo project was built over 3 stages:
           <br />
           <br />
          Lexical Analysis using Lex. <br />
          Parsing using Yacc and C++. <br />
          Code Generation using LLVM.
        </CardText>
        <CardActions border>
          <Button colored href="https://github.com/reisele08/Decaf-Compiler" target="_blank">Check out the source here</Button>
          <Button colored href="https://anoopsarkar.github.io/compilers-class/decafspec.html" target="_blank">Decaf Spec</Button>
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