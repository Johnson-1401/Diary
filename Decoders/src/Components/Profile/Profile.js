import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Profil from "../../assets/card-img2.jpg";
import axios from 'axios'

class Profile extends Component {
  constructor(){
    super()
    this.state={
      Name:'',
      Email:'',
      Contact:'',
      Bio:'',
    }
    this.onChange=this.onChange.bind(this);
    this.onSubmited=this.onSubmited.bind(this)
  }
  
  onChange = input => e => {
    this.setState({
        [input]: e.target.value
    });
}
  onSubmited(e){
    e.preventDefault();
    const registered ={
      Name:this.state.Name,
      Email:this.state.Email,
      Contact:this.state.Contact,
      Bio:this.state.Bio,
    }
    axios.post('http://localhost:4000/details',registered)
    .then(response=>console.log(response.data))

    this.setState({
      Name:'',
      Email:'',
      Contact:'',
      Bio:'',      
    })

  }

render(){
  return (
 <div>
  <div class="container text-center">
    <img src={Profil}  class="rounded w-25 " alt="Profile"/>
    
    <form className="form-horizontal" onSubmit={this.onSubmited} method="POST">
    <fieldset>
      <div className="form-group mt-3">
      <input onChange={this.onChange('Name')} name="Name" type="text" placeholder="Enter Your Name" className="form-control" />
      </div>
      <div className="form-group mt-3">
      <input onChange={this.onChange('Email')} name="Email" type="text" placeholder="Enter Your Email" className="form-control" />
      </div>
      <div className="form-group mt-3">
      <input onChange={this.onChange('Contact')} name="Contact" type="number" placeholder="Phone No" className="form-control" />
      </div>
      <div className="form-group mt-3">
      <input onChange={this.onChange('Bio')} name="Bio" type="text" placeholder="About" className="form-control" />
      </div>
      <div className="form-group">
      <button type="submit" className="btn btn-primary mt-4 btn-lg w-100">Create</button>
      </div>
      </fieldset>
  </form>
  </div>
 </div>
        );
    }
  }
export default Profile;