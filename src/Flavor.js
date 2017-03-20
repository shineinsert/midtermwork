import React, { Component } from 'react';
import {Link} from 'react-router';
import logo from './conver.png';
import './App.css';
import './bulma.css';
import './w3.css';
import {Banner} from './Banner';
import {About} from './About';
import {Itim} from './Itim';
import {History} from './History';
import {Third} from './Third';
import App from './App';
import {Menubar} from './Menubar';
import {Foot} from './Foot';
import {Picture} from './Picture';
export class Flavor extends Component {
  render() {
    return (
      <section className="hero is-info is-large">
    {/* Hero header: will stick at the top */}
     <div className="hero-head">
      <Menubar/>
    </div>

    <div className="hero-body" >
     <div className="taste" style={{marginTop:"-250px"}}>
      </div>
      <Third />
    </div>

    <footer className="footer">
    <Foot/>
    </footer>

    </section>
    );
  }
}