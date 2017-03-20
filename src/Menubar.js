import React, { Component } from 'react';
import {Link} from 'react-router';
import logo from './toto.png';
import './App.css';
import './bulma.css';
import './w3.css';
import {Banner} from './Banner';
import {About} from './About';
import {Itim} from './Itim';
import {History} from './History';
import {Third} from './Third';
import App from './App';
import './bulma.css';
import {Store} from './Store';

export class Menubar extends Component {

  render() {
    

      return (
      	 <header className="nav" >
        <div className="container">
          <div className="nav-left">
            <Link to="/" className="nav-item">
              <img src={logo} alt="Logo"/>
            </Link>
          </div>
          <span className="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div className="nav-right nav-menu">
            <Link to="/History" className="nav-item">
                <strong><font color="White">About</font></strong>
            </Link>
            <Link to="/Flavor" className="nav-item">
              <strong><font color="White">Flavor</font></strong>
            </Link>
            <Link to="/Store" className="nav-item">
              <strong><font color="White">Store</font></strong>
            </Link>
           
          </div>
        </div>
      </header>

      );
  }
}