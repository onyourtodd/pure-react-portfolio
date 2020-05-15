import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => {
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

export default Navigation;
