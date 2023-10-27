import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import '../../App.css';


class Menu extends Component {
  render() {
    return (

        <div className="main-menu"> 
          <ul>
            <li className="d-none d-sm-block"><NavLink to="/"><img className="img-fluid" src={require('../../assets/img/logo.png')} alt="Logo"/></NavLink></li>
            <li><NavLink to="/"><i className="far fa-newspaper"></i> News</NavLink></li>
            <li><NavLink to="/market"><i className="fas fa-chart-bar"></i> Market</NavLink></li>
            <li><NavLink to="/about"><i className="far fa-id-card"></i> About</NavLink></li>
            <li><NavLink to=""><i className="fas fa-link"></i> App</NavLink></li>
          </ul>
        </div>
    );
  }
}

export default Menu;
