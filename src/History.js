import React, { Component } from 'react';
import {Link} from 'react-router';
import logo from './conver.png';
import './App.css';
import './bulma.css';
import {App} from './App';
import {Hisice} from './Hisice';
import {Histruk} from './Histruk';
import {Menubar} from './Menubar';
import {Foot} from './Foot';
import {Howmake} from './Howmake';
import {Typetim} from './Typetim';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
export class History extends Component {

  state = {
    currentS: "hispage"
  }

  On1 = (e) =>
  {
    this.setState({currentS: "Hisice"});
  }
  On2 =(e) =>
  {
    this.setState({currentS:"Histruk"});
  }
  On3 =(e) =>
  {
    this.setState({currentS:"Howmake"});
  }
  On4 =(e) =>
  {
    this.setState({currentS:"Typetim"});
  }

  render() {
    let renderer = null;
    const hispage = <section className="hero is-info is-large">
                      <div className="hero-head">
                        <Menubar/>
                      </div>
                        
                      <div className="hero-body" >
                      <div className="aboutt" style={{marginTop:"-250px"}}>
                      </div>
                      <button className="button is-medium" onClick={this.On1} style={{marginLeft:"50px",marginTop:"20px"}} ><strong><font color="Black" >History Of Ice Cream</font></strong></button>
                      <a className="button is-medium" onClick={this.On2} style={{marginLeft:"50px",marginTop:"20px"}}><strong><font color="Black">History of the Ice Cream Truck</font></strong></a>
                      <a className="button is-medium" onClick={this.On3} style={{marginLeft:"50px",marginTop:"20px"}}><strong><font color="Black">HOW TO MAKE ICE CREAM</font></strong></a>
                      <a className="button is-medium" onClick={this.On4} style={{marginLeft:"50px",marginTop:"20px"}}><strong><font color="Black">Types of Ice Cream</font></strong></a>
                      </div>
                    <footer className="footer">
                    <Foot/>
                  </footer>
                </section>;

    const hisice = <Hisice />;
    const histruk = <Histruk />;
    const howmake = <Howmake />;
    const typetim = <Typetim />;

    if(this.state.currentS== "hispage")
    {
        renderer = hispage;
    }
    else if(this.state.currentS == "Hisice")
    {
        renderer = hisice;
    }
    else if(this.state.currentS=="Histruk")
    {
      renderer = histruk;
    }
    else if(this.state.currentS=="Howmake")
    {
      renderer = howmake;
    }
    else if (this.state.currentS=="Typetim") 
    {
      renderer = typetim;
    }
    return (
      <div>
        {renderer}
      </div>
    );
  }
}

