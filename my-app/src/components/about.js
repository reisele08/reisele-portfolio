import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class About extends Component {
  render(){
    return (
	<div style={{width: '80%', margin: 'auto'}}>
    {/*Skills*/}
		<header class="major">

		</header>

		<h2>Skills</h2>
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
			</Cell>
		</Grid>

		<h2>Interests</h2>
	<footer class="major">
		<ul class="actions special">
		<li><a href="generic.html" class="button">Learn More</a></li>
		</ul>
	</footer>				
    </div>  
    )
  }
}

export default About;