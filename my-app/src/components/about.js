import React, {Component} from 'react';

class About extends Component {
  render(){
    return (
      <div><h1>About Me Component</h1>
      {/*Skills*/}
      <section id="first" class="main special">
								<header class="major">
									<h2>Skills</h2>
								</header>
								<ul class="skills">
									<li>
										<span class="icon solid major style1 fa-code"></span>
										<h3>Languages</h3>
										<p>JavaScript</p>
                                        <p>C++</p>
                                        <p>C</p>
                                        <p>Java</p>
									</li>
									<li>
										<span class="icon major style3 fa-copy"></span>
										<h3>Database</h3>
										<p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
									</li>
									<li>
										<span class="icon major style5 fa-gem"></span>
										<h3>Technologies</h3>
										<p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
									</li>
								</ul>
								<footer class="major">
									<ul class="actions special">
										<li><a href="generic.html" class="button">Learn More</a></li>
									</ul>
								</footer>
							</section>
      </div>

      
    )
  }
}

export default About;