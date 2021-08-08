import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default class Add extends React.Component {
  constructor()  
  {
      super();
      this.state = {
      title: "",
      content:""
    }
  }

handleChange = event => {
  this.setState({ title: event.target.value });
}
handleChange1 = event => {
  this.setState({ content: event.target.value });
}

DataSubmit = event =>{
  event.preventDefault();
  let data={
    title:this.state.title,
    content:this.state.content
  }
  axios.post(`http://localhost:5000/root`,data)
      .then(res => {
      console.log(res.data);
  })
  alert('Successfuly');
} 

render(){
return(
<div>
  <div className="container mt-3 text-white">
  <form onSubmit={this.DataSubmit}>
    <div className="form-group">
      <label for="exampleInputEmail1">Title</label>
      <input type="text" 
        onChange={this.handleChange}
        name="title"
        className="form-control" 
        id="exampleInputEmail1" 
        aria-describedby="emailHelp" 
        placeholder="Enter The Title"/>  
    </div>
    <div className="form-group">
      <label>Today Memories</label>
      <textarea 
        onChange={this.handleChange1}
        name="content"
        className="form-control pb-5" 
        placeholder="Type your today feeling...">
      </textarea>
    </div>                   
    <div className="text-center">
    <button type="submit" className="btn btn-primary w-50 mt-2">Submit</button>
    </div>
  </form>
  </div>
</div>
);
};
}