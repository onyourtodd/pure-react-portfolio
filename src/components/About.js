import React, { Component } from 'react';
import styles from "./about.module.scss"
import { Link } from "react-router-dom";

class About extends Component {
    render() {
        return (
            <section className={styles.mainGrid}>
                <section className={styles.mainWrapper}>
                <div className={styles.container}>
                    <h1>CV</h1>
                    <p>I am a Senior Front End Developer with 10 years experience of working in agencies, corporations, start-ups and freelancing. I specialize in coding for web, particularly web apps, but also have extensive experience with UX design and CRM. I thrive in agile environments and put accessibility at the forefront of web. React is my tool of choice with a soft spot for Gatsby.</p>
                    <h2>Employment</h2>
                    <h3>King Games</h3>
                    <span>Senior Developer</span>
                    <time>Jul 2018 – Present</time>
                    <p>Front end developer for King.com working with React. I currently work across the king websites, cms and in-game web apps.</p>
                    <p>We use React, Redux & Jest.</p>
                    <span>Senior CRM Designer and Developer</span>
                    <time>Oct 2014 – Aug 2018</time>
                    <p>Part of a small UX Design team within a big marketing function, I work on a variety of different projects that are directly customer facing/focused.</p>
                    <p>Our team strives for the best possible player experiences within our wide range of games. I am involved in projects that start and finish with the user. Here experience is vital and I bring this to every aspect of my work.</p>
                    <p>With over 8 years of experience in the field of marketing/digital I help ensure that any projects that come to our team are of the best possible standard</p>
                    <hr />
                    <h3>MRM Meteorite</h3>
                    <span>Interface Developer</span>
                    <time>Apr 2013 – Oct 2014</time>
                    <p>Front end development on webpages for clients including Vauxhall / Intel / Nationwide</p>
                    <p>Front end maintenance using SASS/Aptana</p>
                    <p>Coding emails that render perfectly across all browsers/clients</p>
                    <p>Uploading emails into Exact target email platform and creating re-usable modular templates for clients.</p>
                    <hr />
                    <h3>Alchemy Worx</h3>
                    <span>HTML Developer</span>
                    <time>Nov 2010 – Apr 2013</time>
                    <p>Coding Forms and landing pages using CSS3/HTML5 and implementing them into the Yii framework</p>
                    <p>Hand coding best practice HTML emails from scratch that render perfectly in all major Email Clients</p>
                    <p>Render testing using a variety of different ESP's</p>
                    <p>Design Amends using Photoshop</p>
                    <p>Building newsletters pixel perfect from PSD designs</p>
                    <p>Building newsletters pixel perfect from PSD designs</p>
                    <p>Advising Campaign managers on email design/build decisions</p>
                    <p>Constantly keeping ontop of new developments in email and implementing code fixes where possible</p>
                    <p>Building large dynamic mailings for clients such as Tesco, Carphone Warehouse, Aviva, Sainsbury's, Vodafone</p>
                    <hr />
                    <h3>PDV Ltd</h3>
                    <span>eCRM Executive</span>
                    <time>Nov 2010 – Apr 2013</time>
                    <p>Manage email campaigns for high volume broadcasts every day.</p>
                    <p>Review third party email creative's and provide feedback on areas of improvement to achieve better conversion rates.</p>
                    <p>Structure and rebuild third party email creative's using best practice standards and strict html code to improve campaign delivery/open/click rates.</p>
                    <p>Deliver email campaigns using targeted data and segmenting markets using mosaic profiles to improve deliverability and conversion.</p>
                    <p>Build IP reputation from scratch and maintain it, to ensure email campaigns are delivered to email inboxes successfully.</p>
                    <p>Proficient in using Email platforms and CRM tools including SPAM Assassin. </p>
                    <p>Build social media profiles such as twitter to further promote Fair Exchange, our game and reward website.</p>
                    <p>Analysing retention emails as well as maintaining acquisition emails.</p>
                    <p>Building and launching lead gen questionnaires for the fair-exchange website.</p>
                    <p>Sorting images for questionnaires.</p>
                    <p>Meeting with clients and analysing best practise.</p>
                    <hr />
                    <h2>Education</h2>
                    <h3>University of Portsmouth</h3>
                    <span>Bachelor of Science - BS, Computer Science</span>
                    <time>2003 - 2004</time>
                    <h3>Free Code Camp</h3>
                    <span>Full Stack Wev Development Certification, Computer Software Engineering</span>
                    <time>2016 - 2017</time>
                    <h3>SCRUM</h3>
                    <span>Certified ScrumMaster® (CSM)</span>
                    <time>2017</time>
                    <h3>University of Portsmouth</h3>
                    <span>Bsc (Hons), Entertainment Technology</span>
                    <time>2005 - 2008</time>

                    <div className={styles.tentacle}></div>

                    <br /><br /><br /><br /><br /><br />

                    <div className={styles.exit}>
                        <Link to="/">&#x02297;</Link>
                    </div>
            </div>
            </section>
            </section>
        );
    }
}

export default About