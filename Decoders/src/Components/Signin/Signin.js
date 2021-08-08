import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Profile from "../../assets/Profile.jpg";

function Signin() {
        return (
            <div class="container text-center mt-4">
            <img src={Profile}  class="rounded-circle mt-5" alt="Profile"/>
            <div class="input-group mb-4 mt-5">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">@</span>
                </div>
                <input type="text" class="form-control" placeholder="Email ID" aria-label="Email ID" aria-describedby="basic-addon1"/>
              </div>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">@</span>
                </div>
                <input type="text" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"/>
              </div>
              <div class="row">
              <div class="col">
                <button type="button" class="btn btn-success w-100  mt-4" onclick="window.location.href='home.html'">Sign In</button>
              </div>
              <div class="col">
                <button type="button" class="btn btn-success w-100 mt-4" onclick="window.location.href='signout.html'">Sign Out</button>  
              </div>
              </div>
        </div>
        );
    }


export default Signin;