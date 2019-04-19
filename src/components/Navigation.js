import React, { Component } from 'react';
import Cloud from './Cloud'
import About from './About'
import Home from './Home'
import styles from './mainBody.module.scss';
import SplitText from 'react-pose-text'
import Clock from 'react-live-clock';
import { Route, Link, HashRouter, Switch } from "react-router-dom";

class Navigation extends Component {
    render() {
        return (

                <div>

                        <ul>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                    </ul>



                </div>

        );
    }
}

export default Navigation;
