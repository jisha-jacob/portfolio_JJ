import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import './About.css';
import Headshot from '../../images/Headshot.jpg';



class About extends Component {

    render() {

        return (
          <div className="About">
            <img src={Headshot} />
            <h2>Hello! I am Jisha.</h2>
            <h3>
              I am a Software Developer with <b>2 years of experience</b>
            <b> Java</b> with exposure to
              <b> SQL and Agile methodologies</b>. As you can see from this page, I have
              recently started testing the waters of web development using <b>React</b>.
            </h3>
            <br></br>
            <h3>
              I am eager to return to work after a planned career break of 7 years
              during which I have, dare I say, mastered soft skills needed in
              corporate life. Read time management, working under stress and
              negotiation(mom of 3!).
            </h3>
            <br></br>
            <h3>
              Please check out my recent project(s). Feel free to contact me on
              LinkedIn or my email <b>jisha18@gmail.com </b> if you think I can contribute
               effectively to your team and company.
            </h3>
            <ul className="Social">
              <li>
                <SocialIcon
                  url="https://www.linkedin.com/in/jishjacob/"
                  target="_blank"
                  className="SocialLink"
                  bgColor="#686868"
                />
              </li>
              <li>
                <SocialIcon
                  url="https://github.com/jisha-jacob"
                  target="_blank"
                  className="SocialLink"
                  bgColor="#686868"
                />
              </li>
              {/* <li>
                        <a href="https://www.linkedin.com/in/jishjacob/" target="_blank"><i className="fa fa-linkedin"></i></a>
                    </li>
                    <li>
                        <a href="https://github.com/jisha-jacob" target="_blank"><i className="fa fa-github"></i></a>
                    </li> */}
            </ul>
          </div>
        );



    }


}

export default About;



