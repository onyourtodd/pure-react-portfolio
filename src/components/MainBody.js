import React, { Component } from 'react';
import Cloud from './Cloud'
import styles from './mainBody.module.scss';
import SplitText from 'react-pose-text'
import Clock from 'react-live-clock';
import { Link } from "react-router-dom";

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

const textEffect = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
  },
};

class MainBody extends Component {
  state = {
    isLit: true
  };

  flipLight = () => {
    this.setState({
      isLit: !this.state.isLit
    });
  };

  render() {
    const brightness = this.state.isLit ? "lit" : "dark";

    return (

          <div className={styles.mainGrid}>
            <Cloud />
            <section className={styles.mainWrapper}>
              <h1>Hola</h1>
              <h2>
                I'm Todd, a{' '}
                <SplitText initialPose="exit" pose="enter" charPoses={textEffect} className={styles.splittext}>
                  front-end developer
                </SplitText>{' '}
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
              <div className={`room ${brightness}`}>
                the room is {brightness}
                <br />
                <button onClick={this.flipLight}>flip</button>
              </div>
              <ul>
                {MainLinks.map((link, index) => (
                    <li key={'main-body-link' + index}>
                      <Link to={link.link}>{link.name}<span className={styles.linkarrow}>&nbsp;→</span></Link>
                    </li>
                ))}
              </ul>
            </section>
          </div>

    );
  }
}

export default MainBody;
