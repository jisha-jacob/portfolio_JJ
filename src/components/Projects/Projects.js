import React, { Component } from 'react';
import resumeData1 from '../../resumeData';
import './Projects.css';
import JobTutor from '../../images/JobTutor.jpg';
import CommunicationCoach from '../../images/CommunicationCoach.jpg';

export default class Porfolio extends Component {
    render() {
        let resumeData = resumeData1;
        return (
          <section id="portfolio">
            <div className="row">
              <div className="twelve columns collapsed">
                <h1>Check Out Some of My Works.</h1>
                <div
                  id="portfolio-wrapper"
                  className="bgrid-quarters s-bgrid-thirds cf"
                >
                  
                    <div className="columns portfolio-item">
                      <div className="item-wrap">
                        <a
                          href="https://jisha-jacob.github.io/jobtutoring/"
                          target="_blank"
                          rel="noreferrer"
                          title="Click for Demo"
                        >
                          <img src={JobTutor} className="item-img" />

                          <div className="portfolio-item-meta">
                            <h5>Job Tutor</h5>
                            <p>WebApp to help refresh skills needed for job</p>
                            <a
                              href="https://github.com/jisha-jacob/jobtutoring"
                              target="_blank"
                              rel="noreferrer"
                              title=""
                            >
                              View Code
                            </a>
                          </div>
                        </a>
                      </div>
                      <div className="item-wrap">
                        
                          <img src={CommunicationCoach} className="item-img" />

                          <div className="portfolio-item-meta">
                            <h5>Communication Coach</h5>
                            <p>coming soon..</p>
                           
                              
                          </div>
                    
                      </div>
                      

                    </div>
                  
                  
                </div>
              </div>
            </div>
          </section>
        );
    }
}
