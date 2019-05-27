import React from 'react';
import Sunny from './Sunny';
import Logo from './Logo';
import MainBody from './MainBody';
import Island from './Island';
import Waves from './Waves';
import './globals.scss';

const Home = () => {
    return (
            <div className="page">
                <div className="containerGrid">
                    <Sunny />
                    <Logo />
                    <MainBody />
                    <Island />
                    <Waves />
                </div>
            </div>
        )
    };

export default Home
