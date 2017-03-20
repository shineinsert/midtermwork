import React, { Component } from 'react';
import logo from './conver.png';
import './App.css';
import './bulma.css';

class App extends Component {
  render() {
    return (
      <section className="hero is-info is-large">
    {/* Hero header: will stick at the top */}
    <div className="hero-head">
      <header className="nav">
        <div className="container">
          <div className="nav-left">
            <a className="nav-item">
             
            </a>
          </div>
          <span className="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div className="nav-right nav-menu">
            <a className="nav-item">
              Yippy
            </a>
            <a className="nav-item">
              Examples
            </a>
            <a className="nav-item">
              Documentation
            </a>
           
          </div>
        </div>
      </header>
    </div>
    <div className="hero-body">
      <div className="image">
      <center><img src='https://scontent.fbkk1-1.fna.fbcdn.net/v/t31.0-8/16797016_1208438825872749_2391972444703171570_o.jpg?oh=ad831a7fc3d8fcf8c9088fce9e1c9c52&oe=596B2E39' /> </center>
      </div>
    </div>
    <div className="hero-foot">
      <nav className="tabs is-boxed is-fullwidth">
        <div className="container">
          <center>
            <a>Credit : Shine  Photo : Mook</a>
          </center>
        </div>
      </nav>
    </div>
    </section>
    );
  }
}

export default location;
