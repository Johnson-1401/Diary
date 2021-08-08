import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Assests from "../../assets/assets.jpg";
function Show () {
        return (
            <div>
  <div class="container mt-2">
      <h6>Date</h6>
      <div class="text-center">
          <h1>Title</h1>
          <h2>Content</h2>
          <h6>Memories</h6>
      <div class="row">
        <div class="col">
          <img src={Assests} class="w-25 rounded mb-2" alt="Pic"/>
          <img src={Assests} class="w-25 rounded mb-2" alt="Pic"/>
          <img src={Assests} class="w-25 rounded mb-2" alt="Pic"/>
          <img src={Assests} class="w-25 rounded mb-2" alt="Pic"/>
          <img src={Assests} class="w-25 rounded mb-2" alt="Pic"/>
          <img src={Assests} class="w-25 rounded mb-2" alt="Pic"/>
        </div>
     </div>
     </div>
  </div>
</div>
        );
    }


export default Show;