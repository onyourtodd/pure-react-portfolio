import React, { Component } from 'react';
import Sunny from './Sunny';
import Logo from './Logo';
import MainBody from './MainBody';
import Island from './Island';
import Waves from './Waves';
import './globals.less'


class App extends Component {
  render() {
    return (
        <div className="containerGrid">
            <Sunny />
            <Logo />
            <MainBody />
            <Island />
            <Waves />
        </div>
    );
  }
}

export default App;
