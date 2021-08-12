import React,{Component} from 'react';
import './Resume.css';
import resumePdf from '../../Jisha_Jacob_Resume_portfolio.pdf';

class Resume extends Component{

render(){

return(
<div className="Resume">
<iframe src={resumePdf} title="resumePdf" height="500px" width="80%"/>
</div>
);

}

}


export default Resume;