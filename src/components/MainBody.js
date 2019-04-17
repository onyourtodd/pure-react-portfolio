import React, { Component } from 'react';
import Cloud from './Cloud'
import styles from '../mainBody.module.less'
import Clock from 'react-live-clock';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const MainLinks = [
  {
    name: 'More info',
    link: '/about',
  },
  {
    name: 'Contact',
    link: '/contact',
  },
];

class MainBody extends Component {
  render() {
    return (
        <Router>
        <div className={styles.mainGrid}>
          <Cloud />
          <section className={styles.mainWrapper}>
            <h1>Hola</h1>
            <h2>
              I'm Todd, a{' '}
                front-end developer
              {' '}
              from London, living in 🌞 Barcelona. It's <Clock format={'h.mm a'} ticking={true} timezone={'Europe/Madrid'} /> here!
            </h2>
            <p>
              I have over 10 years of industry experience in the digital space, across a variety of different departments, projects and disciplines. Right now, I am currently focused on creating web apps using the latest front end technologies.
            </p>
            <p>
              Including but not limited to; <i>HTML5</i>, <i>CSS3</i>, <i>Javascript</i>
              , <i>React</i>, <i>Redux</i>.
            </p>
            <ul>
              <li>
                <a href={"http://www.email-mentor.com"} target={"_blank"}>Latest work<span className={styles.linkarrow}>&nbsp;→</span></a>
              </li>
            </ul>
            <ul>
              {MainLinks.map((link, index) => (
                  <li key={'main-body-link' + index}>
                    <Link to={link.link}>{link.name}<span className={styles.linkarrow}>&nbsp;→</span></Link>
                  </li>
              ))}
            </ul>

          </section>
        </div>
        </Router>
    );
  }
}

export default MainBody;
