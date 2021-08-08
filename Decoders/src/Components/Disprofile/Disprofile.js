import React from 'react';
import Profile from "../../assets/Profile.jpg";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
function Disprofile() {
        return (
            <div>
  <div class="container mt-2">
  <img src={Profile}  class="rounded" alt="Profile"/>
  <div class="row mt-4">
    <div class="col">
        <h6>Name :</h6>
    </div>
    <div class="col">
        <h6>John</h6>
    </div>
  </div>
  <div class="row mt-4 ">
    <div class="col">
        <h6>Email ID :</h6>
    </div>
    <div class="col ">
        <h6>john@gmail.com</h6>
    </div>
  </div>
  <div class="row mt-4">
    <div class="col">
        <h6>Phone No :</h6>
    </div>
    <div class="col">
        <h6>9360655122</h6>
    </div>
  </div>
  <div class="row mt-4">
    <div class="col">
        <h6>About :</h6>
    </div>
    <div class="col">
        <h6>I'm Fine </h6>
    </div>
  </div>
  </div>
</div>
        );
    }

export default Disprofile;