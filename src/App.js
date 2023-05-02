import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router}from 'react-router-dom';
import Routers from './Components/Routers';
function App() {

  return (
        <Router>
            <div  className="Box">
               <div > <Navbar/></div>
               <div > <Routers /></div>
            </div>
        </Router>


  );
}
export default App;

