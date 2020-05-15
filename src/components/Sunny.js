import React from 'react';
import styles from './sunny.module.scss'

const Sunny = () => {
    return (
        <div className={styles.sunGrid}>
              <div className={styles.sunContainer}>
                <div className={styles.sun}></div>
                <div className={styles.sun1}></div>
                <div className={styles.sun2}></div>
                <div className={styles.sun3}></div>
                <div className={styles.sun4}></div>
              </div>
        </div>
    );
}

export default Sunny;