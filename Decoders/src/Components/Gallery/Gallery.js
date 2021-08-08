import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Profile from "../../assets/Profile.jpg";
import Assests from "../../assets/assets.jpg";

function Gallery() {
        return (
            <div>

  <div class="d-flex flex-wrap">
    <img src={Assests} class="rounded float-left p-2 w-50 h-50" alt="..."/>
    <img src={Profile} class="rounded float-left p-2 w-50 h-50" alt="..."/>
    <img src={Assests} class="rounded float-left p-2 w-50 h-50" alt="..."/>
    <img src={Profile} class="rounded float-left p-2 w-50 h-50" alt="..."/>
    <img src={Assests} class="rounded float-left p-2 w-50 h-50" alt="..."/>
    <img src={Profile} class="rounded float-left p-2 w-50 h-50" alt="..."/>
    <img src={Assests} class="rounded float-left p-2 w-50 h-50" alt="..."/>
    <img src={Profile} class="rounded float-left p-2 w-50 h-50" alt="..."/>
    <img src={Assests} class="rounded float-left p-2 w-50 h-50" alt="..."/>
    <img src={Profile} class="rounded float-left p-2 w-50 h-50" alt="..."/>
  </div>
</div>
        );
    }
export default Gallery;