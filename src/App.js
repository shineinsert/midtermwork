import React, { Component } from 'react';
import {Link} from 'react-router';
import logo from './conver.png';
import './App.css';
import './bulma.css';
import './w3.css';
import {Banner} from './Banner';
import {About} from './About';
import {Itim} from './Itim';
import {Flavor} from './Flavor';
import {History} from './History';
import {Menubar} from './Menubar';
import {Foot} from './Foot';
import {Hisice} from './Hisice';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
export class App extends Component {
  state = {
    currentScene: "App"
  }

  OnChangeScene = (scene) =>
  {
    this.setState({currentScene: scene});
  }
  render() {
    let scene = null;
      if(this.state.currentScene == "Hisice")
    {
      scene = <Hisice ChangeScene={this.OnChangeScene}/>
    }
    return (
      <section className="hero is-info is-large">
    {/* Hero header: will stick at the top */}
    <div className="hero-head">
      <Menubar/>
    </div>

    <div className="hero-body" >
      <Banner />
      <Itim/>
</div>
<footer className="footer">
  <Foot/>
</footer>
    </section>
    );
  }
}

export default App;
