import Project from './web view';
import Footer from './Components/Footer/Footer'
import Head from './Components/Head/Head'
import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';


class App extends React.Component{

  render(){
  return (
    <div>
      <Router>
      <Head/> 
      <Project/>
      <Footer/>
      </Router>
    </div>
  );
}
}
export default App;
