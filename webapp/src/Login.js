import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import {Link} from 'react-router-dom';


class Login extends Component {
    constructor(){
        super();
        this.state = {
            mail : 'matheo@gmail.com',
            password: 'bijour',
        };
    }  

getapi(){
    
    axios.get('localhost:3000/getUsers').then(resp => {
        console.log("here");
    });
}

    render() {
        return (
            <div>
                <div className="body1">
                    <h1>Login Page</h1>
                    <br/>
                    <br/>
                    Email<br/>
                    <input type="text"  name="Email"/><br/>
                    Password<br/>
                    <input type="password" id="password" name="password" /><br/><br/>
                    <button
       // onPress={this._onPressButtonHome.bind(this)}
        onClick={this.getapi}
        title="Login"
        color="#0054CA"
        />

                    <Link to={'/register'}><p>No Account ? Sign Up</p></Link>
                </div>
                <footer className="footer">
                    <br/><br/>
                    <Link to={'/#therms'} className="a1"> Term</Link>
                    <Link to={'/#developers'} className="a2" >Developer</Link>
                    <br/><br/><br/>
                    <Link to={'/#support'} className="a3">Support</Link>
                    <Link to={'/contact'} className="a4">Contact</Link>
                </footer>
            </div>

        );
    }
}

export default Login;
