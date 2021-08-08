import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
function Home() {
return(
<div className="container">
  <nav className="navbar fixed-bottom navbar-light bg-light p-2">
    <a href="/"><span className="material-icons text-dark">home</span></a>
    <a href="/add"><span className="material-icons text-dark">add_circle</span></a>
    <a href="/favourite"><span className="material-icons text-dark">search</span></a>
  </nav>
  </div>);
};
export default Home;
