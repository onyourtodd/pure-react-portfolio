import React from 'react';
import styles from "./contact.module.scss"
import { Link } from "react-router-dom";
import monkey from "../images/monkey.gif";

const Contact = () => {
    return (
        <div className="page">
        <div className={styles.modal}>
                <h2 className={styles.textPopUp}>Contact me</h2>
                <p>Buenos dias!</p>
                <p>I'm always available to discuss potential projects, mentoring, or even if you just want to geek out about tech and games.</p>
                <p>This form will notify me and i'll get back to you right away.</p>
                <p>In the meantime, 'Look behind you, a Three-Headed Monkey!'</p>

                <form name="contact" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="contact" value="contact" />
                    <p>
                        <label>Email: <input type="text" name="name" /></label>
                    </p>
                    <p>
                        <label>Message: <textarea name="message"></textarea></label>
                    </p>
                    <div data-netlify-recaptcha></div>
                    <p>
                        <button type="submit" className={styles.bubblyButton}>Send</button>
                    </p>
                    <input type="hidden" name="form-name" value="contact" />
                </form>
                <img src={monkey} className={styles.monkey} alt={"Monkey island monkey swinging from top of the page"}/>

                <div className={styles.exit}>
                    <Link to="/">&#x02297;</Link>
                </div>
            </div>
        </div>
        )
    };

export default Contact