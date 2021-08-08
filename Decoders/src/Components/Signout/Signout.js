import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Signout=()=> {
        return (
            <div class="container text-center">
            <h1 class="text-white mt-5">Sign Up</h1>
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
              <button type="button" class="btn btn-success w-100 mt-4" onclick="window.location.href='signin.html'">Confirm</button>
        </div>
        );
    }
export default Signout;