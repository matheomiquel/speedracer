import React from 'react';
import './App.css';
import Nav from './Nav';
import Contact from './Contact';
import Shop from "./Shop";
import LeaderBoardDR from "./Leaderboard";
import Menu from "./Menu.js";
import Login from "./Login.js";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Link} from 'react-router-dom';

import photo1 from './images/photo1.jpg';
import photo2 from './images/photo2.jpg';
import photo3 from './images/photo3.jpg';
import photo4 from './images/photo4.jpg';
import photo5 from './images/photo5.jpg';
import photo6 from './images/photo6.jpg';
import photo7 from './images/photo7.jpg';
import Register from "./Register";
import Addleaderboard from "./AddLeaderboard";
import RegisterE from "./RegisterE";

function App() {

  return (
      <Router>
          <div className="App">
              <Nav/>
              <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/shop" component={Shop} />
                  <Route path="/leaderboard" component={LeaderBoardDR} />
                  <Route path="/menu" component={Menu} />
                  <Route path="/login" component={Login} />
                  <Route path="/register" component={Register}/>
                  <Route path="/AddLeaderboard" component={Addleaderboard}/>
                  <Route path="/RegisterE" component={RegisterE}/>
              </Switch>
          </div>
      </Router>
  );
}

const Home = () => (

    <div><body>
    <div className="body1"><img src= "https://d1.awsstatic.com/r2018/r/Silverstone/Silverstone-PDP-Image_TOP-DOWN_half.e9cf014e23aaf2b6b0e8dbfbafa861280a74eace.png" className="voiture" alt="logo" />
    <p className="text1">DEEP RACER</p><br/>
    <p className="text2">Ceci est un test ceci est un test</p>
        <Link to={'/menu'}><p className="titre3">GO TO LEADERBOARDS</p></Link>
    </div>
    <div className="body2"></div>
    <div className="body3">
        <p className="t3">BUILT BY</p>
        <div className="dev1">
            <img className="image1" src={photo3}/>
            <img className="image1" src={photo4}/>
        </div>
        <div className="dev2">
            <img className="image2" src={photo2}/>
            <img className="image2" src={photo1}/>
            <img className="image2" src={photo5}/>
        </div>
        <div className="dev3">
            <img className="image3" src={photo6}/>
            <img className="image3" src={photo7}/>
        </div>
        <div className="dev4">
            <img className="image4" src="http://yycjs.com/real-world-react/img/react-logo.png"/>
            <img className="image5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png"/>
        </div>
    </div>
    </body>
        <footer className="footer">
            <br/><br/>
            <Link to={'/#therms'}> <a className="a1">Terms</a></Link>
            <Link to={'/#developers'}><a className="a2">Developers</a></Link><br/><br/><br/>
            <Link to={'/#support'}> <a className="a3">Support</a></Link>
            <Link to={'/contact'}> <a className="a4">Contact</a></Link>
        </footer>
    </div>
);
export default App;
