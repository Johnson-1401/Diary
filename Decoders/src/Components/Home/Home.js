import React from 'react';
import axios from 'axios';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Edit from '../Edit/edit'

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      title: "",
      content: ""
    }
  }

  handleChange = event => {
    this.setState({ title: event.target.value });
  }
  handleChange1 = event => {
    this.setState({ content: event.target.value });
  }

  componentDidMount() {
    axios.get("http://localhost:5000/root")
      .then(res => {
        console.log(res.data)
        this.setState({
          data: res.data
        });
      })
  }

  DeleteFuc(id) {
    axios.delete(`http://localhost:5000/root/del/${id}`)
      .then(res => {
        console.log(res.data)
        alert("Deleted Successfully");
      })
  }
  render() {
    return (
      <div className="mb-5">  
        {this.state.data.map(detail =>
          <div>
            <div>
              <div className="card  mx-1 p-1">
                <div className="m-1 ">
                  <h6 className="card-title">{detail.title}</h6>
                  <p className="card-text">{detail.content}</p>
                  <nav className="navbar">
                    <Edit id={detail._id} title={detail.title} content={detail.content}/>
                    <span className="material-icons  text-danger" onClick={(e) => this.DeleteFuc(detail._id)}>delete</span>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  };
}
