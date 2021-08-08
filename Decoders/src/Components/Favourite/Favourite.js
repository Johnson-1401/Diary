import React from 'react';
import axios from 'axios';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


export default class Favourite extends React.Component {
  constructor()  
  {
      super();
      this.state = {
      dataum: [],
      show:"true"
    }
  }

  SearchFun(id){  
    axios.get(`http://localhost:5000/root/search/${id}`) 
      .then(res => {   
        console.log(res.data)
        this.setState({ 
          dataum:res.data,
          show:false
      });
    })
  }  

handleChange = event => {
  this.setState({ id: event.target.value });
}

render(){
return (
<div>
  {this.state.show ?
  <div>
  <div className="container" id="Fav">
    <div className="mt-5">
      <p className="">Enter The ID</p>
      <input type="text" 
        onChange={this.handleChange}
        name="id"
        className="form-control" 
        placeholder="Enter The ID"/> 
      <div className="text-center">
    <button type="submit" onClick={(e) => this.SearchFun(this.state.id)} className="btn btn-primary w-50 mt-5">Submit</button>
    </div>
    </div>
  </div>
 </div>
:
 <div className="mb-5">
 <div className="card  mx-1 p-1">
 <div className="m-1 ">
     <h6 className="card-title">{this.state.dataum.title}</h6>
     <p className="card-text">{this.state.dataum.content}</p>
 </div>
 </div>
 <div className="text-center">
 <button className="btn btn-primary w-50 mt-2" onClick={()=>this.setState({ show:true })}>Back</button>
</div>
</div>
}
</div>
 );
 }
}

