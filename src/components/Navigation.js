import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navigation extends Component {
    render() {
        return (
            <>
                <ul>
                    <li><Link to="/about">About</Link></li>
                </ul>
                <ul>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </>
        );
    }
}

export default Navigation;
