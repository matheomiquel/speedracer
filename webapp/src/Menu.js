import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Menu() {
    return (
        <div>
        <div className="body1">
            <h1>Menu Page</h1>
            <Link to={'/addleaderboard'}><button className="buttonadd">ADD EVENT</button></Link>
            <div className="Menu">
                <Link to={'/leaderboard'}><div className="Menu1">
                    <p className="R1">Type of Event</p>
                    <p className="R2">12 participants</p>
                    <p className="R2">Age</p><br/>
                    <p className="R3">Data</p>
                    <p className="R4">Price</p><br/>
                    <p className="R6">Description</p>
                    <p className="R5">Wallah ceci est une decritption ouais tran,quille la famille le chien le chat et tout ta mère fils de pute</p>

                </div></Link>
                <div className="Menu1"></div>
                <div className="Menu1"></div>
                <div className="Menu1"></div>
                <div className="Menu1"></div>
                <div className="Menu1"></div>
            </div><br/>
        </div>
            <footer className="footer">
                <br/><br/>
                <Link to={'/#therms'}> <a className="a1">Terms</a></Link>
                <Link to={'/#developers'}><a className="a2">Developers</a></Link><br/><br/><br/>
                <Link to={'/#support'}> <a className="a3">Support</a></Link>
                <Link to={'/contact'}> <a className="a4">Contact</a></Link>
            </footer>
        </div>


    );
}

export default Menu;
