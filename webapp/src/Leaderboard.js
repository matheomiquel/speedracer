import React, { Component } from 'react';
import './App.css'
import axios from 'axios';
import {Link} from 'react-router-dom';

class  LeaderBoardDR extends Component {
    constructor() {
        super();
        this.state = {
            data: '',
        }

    }
    componentDidMount()
    {
        var i = 0;

        let header = {
            'Content-Type' : 'application/json',
            'Acess-Control-Allow-Origin' : "*",
            'Token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTYxNzM0ODM5fQ.ACKKsrJuXaYhu_jMHaJ68JloKLJfumaE_0NL7xHwR78'

        };
        axios.get('http://localhost:3000/getUsers', { headers: header}).then(Response => {
            while (i < Response.data.users.length) {
                console.log(Response.data.users[i].firstname);
                i++;
            }

        });

    }
    render()
    {
        return (
            <div>
                <div className="body1">
                    <h1>Leaderboard Deep Racer</h1>
                    <div className="leaderboard">
                        <table className="leaderboard2" >
                            <tr className="L">
                                <th>POSiTION</th>
                                <th align="left">RACER</th>
                                <th>TIME</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td align="left"><img className="partimg" src="https://cdn.icon-icons.com/icons2/1238/PNG/512/blacksquare_83753.png" /><a className="nom">Brandon Kernin</a></td>
                                <td>23:15:12</td>
                            </tr>
                            <tr>
                                <td >2</td>
                                <td align="left"><img className="partimg" src="https://cdn.icon-icons.com/icons2/1238/PNG/512/blacksquare_83753.png" /><a className="nom">January Fevrier</a></td>
                                <td>23:49:23</td>
                            </tr>
                        </table>
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

        )
    }
}

export default LeaderBoardDR;
