import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function RegisterE() {
    return (
        <div>
            <div className="body1">
                <h1>Registration for event</h1>
                Firstame <br/> <input/><br/>
                Lastname <br/> <input/><br/>
                Team <br/> <input/><br/>
                Email <br/> <input/><br/>
                Age <br/> <input/><br/>
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

export default RegisterE;
