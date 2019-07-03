import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: 'white'
    };

    return (
        <nav>
            <header className="header">
                <Link to={'/'}><img src="https://cdn.steemitimages.com/DQmNQKaWuqVMAPXppQWN7i8vJ1vFwfaBJVVppNDUh3t8S7M/deepracer-logo.png" className="logo"/>
                 <p className="titre">DEEP RACER</p></Link>
                <Link style={navStyle} to={'/menu'}><p className="titre2">GO TO LEADERBOARDS</p></Link>
                <Link to={'/login'}><button className="log">SIGN IN</button></Link>
                <Link to={'/register'}><button className="reg">SIGN UP</button></Link>
            </header>
        </nav>
    );
}

export default Nav;
