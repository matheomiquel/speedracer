import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Addleaderboard() {
    return (
        <div>
            <div className="body1">
                <h1>New  Event</h1>
                Type of Event<br/> <input/><br/>
                Maximum number of participants <br/> <input/><br/>
                Number of people on the team <br/> <input/><br/>
                Date <br/> <input/><br/>
                Rate <br/> <input/><br/>
                Description <br/> <input/><br/>
                Minimum age <br/> <input/><br/><br/>
                <input type="submit" value="Let's Go"/>
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

export default Addleaderboard;
