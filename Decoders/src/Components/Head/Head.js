import React from 'react';
import '../../App.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Profile from "../../assets/Profile.jpg";
import {Link} from 'react-router-dom';


function Home() {
return(
<div className="container">
  <nav className="navbar navbar-light">
    <Link className="navbar-brand"><b>Once</b></Link>
    <img src={Profile} className="rounded-circle navbar-brand float-left" id="Profile" alt="..."/>
  </nav>
</div>);
};
export default Home;
