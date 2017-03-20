import React, { Component } from 'react';
import './bulma.css';
import './App.css';
import {Hisice} from './Hisice.js';

export class main extends Component {
    state = {
    currentScene: "App"
  }

  OnChangeScene = (scene) =>
  {
    this.setState({currentScene: scene});
  }
  render() 
  {
    var scene = null;
      if(this.state.currentScene == "Hisice")
    {
      scene = <Hisice ChangeScene={this.OnChangeScene}/>;
    }
  }
}
