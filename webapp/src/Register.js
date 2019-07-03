import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

export class Register extends React.Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:'',
            firstname:'',
            lastname:'',
            pseudo:'',
        }
    }
    render(){
    return (
        <div>
            <div className="body1">
                <h1>Register Page</h1>

                Email <br/> <input type="text" name="Email"
                onChangeText={(text) => this.setState({ email: text})}
                /><br/>
                Firstname <br/> <input type="text" name="Firstname" 
                onChangeText={(text) => this.setState({ firstname: text})}
                /><br/>
                Lastname <br/> <input type="text" name="Lastname"
                  onChangeText={(text) => this.setState({ lastname: text})}
                 /><br/>
                 Pseudo <br/> <input type="text" name="Lastname"
                  onChangeText={(text) => this.setState({ lastname: text})}
                 /><br/>
                 Password <br/>  <input type="text" name="Password"
                onChangeText={(text) => this.setState({ password: text})}
                /><br/>
                <button
                 onClick={ () =>
                     axios.post('localhost:3000/register',{
                         email:this.state.email , 
                         firstname:this.state.firstname , 
                         lastname:this.state.lastname , 
                         pseudo:this.state.pseudo , 
                         password:this.state.password , 

                        })
                        .then(response => {
                          console.log(response.data);
                        })
                        .catch(error => {
                          console.log(error );
                          alert("erreur recommence bouffon")
                        })
                        
                     }> 
                     
                     Sign Up </button>
                
                     
                <Link to={'/login'}><p>Already Account ? Sign In</p></Link>
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
}

export default Register;
