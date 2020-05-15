import React from 'react';
import styles from "./waves.module.scss";
import Fishes from './Fishes';

const Waves = () => {
    return (
        <div className={styles.wavesGrid}>
            <div id={styles.waveContainer}>
                <div id={styles.wave}>
                    <Fishes />
                    <div className={styles.bubbles}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Waves;