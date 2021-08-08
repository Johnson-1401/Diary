import React from 'react';
import axios from 'axios';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


export default class Edit extends React.Component {
    constructor()  
    {
        super();
        this.state = {
          title: "",
          content:"",
          edit:false
      }
    } 

    DataSubmited = (id) => {
      let data = {
        title: this.state.title,
        content: this.state.content
      }
      console.log(`${data}`);

      axios.put(`http://localhost:5000/root/up/${id}`, data)
        .then(res => {
          console.log(res.data);
        })
    }

    handleChange = () => {
      this.setState({ edit: !this.state.edit });
      
    }
    handleChange1 = event => {
      this.setState({ title: event.target.value });
    }
    handleChange2 = event => {
      this.setState({ content: event.target.value });
    }

    componentDidMount() {
      this.setState({ 
        title: this.props.title,
        content: this.props.content,
       });
    }

    render() {
        return (
          <div>
            <span className="material-icons text-danger" onClick={this.handleChange}>edit</span>
            { this.state.edit ?
            <div className="model">
                <div className="container mt-3">
                <form >
                <p>Title</p>
                  <div className="form-group">
                    <input type="text" 
                      onChange={this.handleChange1}
                      name="title"
                      className="form-control" 
                      id="exampleInputEmail1" 
                      aria-describedby="emailHelp" 
                      placeholder="Enter The Title"/>  
                  </div>
                  <div className="form-group">
                    <label>Today Memories</label>
                    <textarea 
                      onChange={this.handleChange2}
                      name="content"
                      className="form-control pb-5" 
                      placeholder="Type your today feeling...">
                    </textarea>
                  </div>                   
                  <div className="text-center">
                  <button type="submit" className="btn btn-primary w-50 mt-2" onSubmit={this.DataSubmited(this.props.id)}>Submit</button>
                  <button type="submit" className="btn btn-danger w-50 mt-2" onClick={this.handleChange}>Back</button>
                  </div>
                </form>
                </div>
              </div>
              :
              <div></div>} 
              </div>
)};
}

