import React, { Component } from 'react';
import styles from "./contact.module.scss"
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div className="page">
        <div className={styles.modal}>
                <h2 className={styles.textPopUp}>Contact me</h2>
                <p>Let's connect!</p>
                <p>If you would like to get in contact regarding web dev then please use the form below.</p>
                <p>Looking forward to hearing from you.</p>

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

                <div className={styles.exit}>
                    <Link to="/">&#x02297;</Link>
                </div>
            </div>
        </div>
        )
    };

export default Contact