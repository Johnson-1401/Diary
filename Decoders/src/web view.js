import React from 'react';
import Home from "./Components/Home/Home";
import { BrowserRouter as Router,Switch, Route, } from 'react-router-dom';
import Gallery from './Components/Gallery/Gallery';
import Add from './Components/Add/add';
import Disprofile from './Components/Disprofile/Disprofile';
import Favourite from './Components/Favourite/Favourite';
import Plan from './Components/Plan/Plan';
import Profile from './Components/Profile/Profile';
import Show from './Components/Show/Show';
import Signin from './Components/Signin/Signin';
import Signout from './Components/Signout/Signout';


function Project() {
    return (
        <div>
        <Router>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/add" component={Add}/>
        <Route exact path="/gallery" component={Gallery}/>
        <Route exact path="/disprofile" component={Disprofile}/>
        <Route exact path="/favourite" component={Favourite}/>
        <Route exact path="/plan" component={Plan}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/show" component={Show}/>
        <Route exact path="/signin" component={Signin}/>
        <Route exact path="/signout" component={Signout}/>
        </Switch>
        </Router>
        </div>
      );
    };

    export default Project;
