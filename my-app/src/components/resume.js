import React, {Component} from 'react';
import './resume.css';

class Resume extends Component {
  render(){
    return (
    <div>
        <img className="resume_img_1" src={process.env.PUBLIC_URL + '/img/resume_1.png'}/>
        <img className="resume_img_2" src={process.env.PUBLIC_URL + '/img/resume_2.png'}/>
        
    </div>
    )
  }
}

export default Resume;