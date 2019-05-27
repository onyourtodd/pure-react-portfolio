import React, { Component } from 'react';
import styles from './Logo.module.scss'
import DarkModeToggle from "./DarkModeToggle";

class Logo extends Component {
    render() {
        return (
            <>
                <div className={styles.logoGrid}>
                    <svg viewBox="0 0 132 132" className={`${styles.bounce} ${styles.logo}`}>
                        <rect className={styles.cls1} width="132" height="132" rx="10" ry="10" />
                        <text id="t" className={styles.cls2} x="19.602" y="113.992">t</text>
                        <text id="f" className={styles.cls2} x="55.227" y="123.809">f</text>
                    </svg>
                </div>
                <DarkModeToggle />
            </>
        );
    }
}

export default Logo;