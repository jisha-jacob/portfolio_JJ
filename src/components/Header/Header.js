import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import About from '../About/About';
import Resume from '../Resume/Resume';
import Projects from '../Projects/Projects';

import './Header.css';

class Header extends Component {
    render() {

        return (
            <div className="Header">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact activeStyle={{ color: '#fa923f' }}>Home</NavLink></li>
                            <li><NavLink to="/resume" activeStyle={{ color: '#fa923f' }}>Resume</NavLink></li>
                            <li><NavLink to="/projects" activeStyle={{ color: '#fa923f' }}>Projects</NavLink></li>
                        
                        </ul>
                    </nav>
                </header>
                <Switch>
                <Route path="/resume"  component={Resume} />
                <Route path="/projects" component={Projects} />
                <Route path="/" component={About} />
                <Route render={()=> <h1>Not Found</h1>}/>
                {/* <Redirect from ="/" to="/posts"/>               */}
                </Switch>
            </div>
        );


    }


}

export default Header;