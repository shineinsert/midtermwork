import React, { Component } from 'react';
import {Link} from 'react-router';
import logo from './conver.png';
import './App.css';
import './bulma.css';
import {Menubar} from './Menubar';
import {Foot} from './Foot';
import His03 from "./history/h007.jpg";
import {History} from './History';
import {Hisice} from './Hisice';
import {Howmake} from './Howmake';
import {Typetim} from './Typetim';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
export class Histruk extends Component {
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
      const hispage =<section className="hero is-info is-large">
    {/* Hero header: will stick at the top */}
    <div className="hero-head">
      <Menubar/>
    </div>
      
    <div className="hero-body" >
    <div className="aboutt" style={{marginTop:"-250px"}}>
    </div>
    <a className="button is-medium" onClick={this.On1} style={{marginLeft:"50px",marginTop:"20px"}}><strong><font color="Black">History Of Ice Cream</font></strong></a>
    <a className="button is-medium" style={{marginLeft:"50px",marginTop:"20px"}}><strong><font color="Black">History of the Ice Cream Truck</font></strong></a>
    <a className="button is-medium" onClick={this.On3} style={{marginLeft:"50px",marginTop:"20px"}}><strong><font color="Black">HOW TO MAKE ICE CREAM</font></strong></a>
    <a className="button is-medium" onClick={this.On4} style={{marginLeft:"50px",marginTop:"20px"}}><strong><font color="Black">Types of Ice Cream</font></strong></a>
    <div className="columns is-gapless is-multiline is-mobile" style={{marginTop:"50px"}}>
  <div className="column is-half" >
        <img src={His03}/>
        </div>
    <div className="column is-half" > 
      <h5 class="title is-5" style={{marginTop:"30px"}}><font color="Black"><center><strong>A Brief History of the Ice Cream Truck</strong></center></font></h5>
      <h6 className="subtitle is-6" style={{marginLeft:"30px"}}><font color="Black">
      &nbsp;&nbsp;&nbsp;How a musical truck hijacked an elite dessert and delivered it to the people.

It’s the sound of summer: a string of jangly notes cutting through the sticky-hot air. The response is

Pavlovian. Mouths water. Parents reach for their wallets. Kids lace up their shoes and hit the pavement.

For Ben Van Leeuwen, it was no different. Growing up in suburban Riverside, Conn., he’d race toward

the siren song. The ice cream truck was coming.<br/><br/>

In the sea of sweaty half-pints elbowing to place orders, Van Leeuwen always took his time. He’d inspect

the full menu, pondering each offering, from cartoon-colored Popsicles to animal-shaped treats with

gum balls for eyes. He’d imagine the flavors—Strawberry Shortcake, Choco Taco, King Cone. Then he’d

pick what he always picked: a Reckless Rainbow Pop Up. “We were poor,” he laughs. The push pop was

cheap.<br/><br/>

Today, Van Leeuwen is an ice cream magnate. With six trucks and three storefronts in New York City,

the company he runs with his brother, Pete, and business partner, Laura O’Neill, prides itself on its

quality. Handcrafted recipes combine sustainably sourced ingredients from far-flung places: Michel

Cluizel chocolate from France, pistachios from Sicily, Tahitian vanilla beans from Papua New Guinea. The

flavors have put Van Leeuwen on the vanguard of an ice cream truck resurgence. In a single generation,

the ice cream truck has moved upmarket.<br/><br/>

The history of frozen street treats begins long before Van Leeuwen encountered his first push pop—it

begins before even mechanical refrigeration. The very nature of the industry—taking something frozen

and hawking it on sultry sidewalks—has always forced ice cream peddlers to innovate. That the cold

treat had to come to America before it could move off kings’ tables and into the hands of common folk

makes the story that much sweeter.</font></h6>
    </div>
    </div>
    </div>
    
    <footer className="footer">
                    <Foot/>
                  </footer>
    </section>
    const hisice = <Hisice />;
    const howmake = <Howmake />;
    const typetim = <Typetim />;

    if(this.state.currentS== "hispage")
    {
        renderer = hispage;
    }
   
    else if(this.state.currentS=="Hisice")
    {
      renderer = hisice;
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

