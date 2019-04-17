import React, { Component } from 'react';
import styles from "./waves.module.less"
import Fishes from './Fishes'

class Waves extends Component {
    render() {
        return (
            <div className={styles.wavesGrid}>
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
        );
    }
}

export default Waves;