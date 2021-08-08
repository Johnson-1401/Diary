import React from 'react';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import img1 from "../../assets/card-img1.png";
function Plan() {
        return (
<div>
  <div class="card bg-dark text-white mt-2 mx-1">
    <img class="card-img" src={img1} alt="Cardimage"/>
    <div class="card-img-overlay">
      <h5 class="card-title">Date</h5>
      <p class="card-text">card's title</p>
    </div>
  </div>
  <div class="text-center mb-5">
    <span class="material-icons bg-dark p-2 rounded mt-2 text-light">add</span>
  </div>
</div>
        );
    }

export default Plan;