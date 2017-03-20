import React, { Component } from 'react';
import './bulma.css';
import His from './history/h001.jpg';
import {Link} from 'react-router';
import logo from './toto.png';
import './App.css';
import './bulma.css';
import './w3.css';
import {Banner} from './Banner';
import {About} from './About';
import {History} from './History';
import {Third} from './Third';
import App from './App';
import {Store} from './Store';
import {Flavor} from './Flavor';
export class Itim extends Component {

  render() {
    

      return (
        <div className="container">
  <div className="aboutt">
  <Link to="/History" >
                <a className="button is-info is-inverted is-outlined" style={{marginLeft:"590px",marginTop:"-80px"}}><strong><font color="Black">READ MORE...</font></strong></a>
            </Link>
    </div>
    <div className="taste">
    <Link to="/Flavor" >
                <a className="button is-info is-inverted is-outlined" style={{marginTop:"150px"}}><strong><font color="Black">READ MORE...</font></strong></a>
            </Link>
  </div>
  <div className="store">
  <Link to="/Store" >
                <a className="button" style={{marginTop:"-145px",marginLeft:"-650px"}}><strong><font color="Black">READ MORE...</font></strong></a>
            </Link>
  </div>
  </div>
      );
  }
}



