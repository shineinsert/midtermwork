import React, { Component } from 'react';
import {Link} from 'react-router';
import logo from './conver.png';
import './App.css';
import './bulma.css';
import {Menubar} from './Menubar';
import {Foot} from './Foot';
import His04 from "./history/h004.jpg";
import {History} from './History';
import {Histruk} from './Histruk';
import {Hisice} from './Hisice';
import {Typetim} from './Typetim';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
export class Howmake extends Component {
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
    <a className="button is-medium" onClick={this.On2} style={{marginLeft:"50px",marginTop:"20px"}}><strong><font color="Black">History of the Ice Cream Truck</font></strong></a>
    <a className="button is-medium"  style={{marginLeft:"50px",marginTop:"20px"}}><strong><font color="Black">HOW TO MAKE ICE CREAM</font></strong></a>
    <a className="button is-medium" onClick={this.On4} style={{marginLeft:"50px",marginTop:"20px"}}><strong><font color="Black">Types of Ice Cream</font></strong></a>
    <div className="columns is-gapless is-multiline is-mobile" style={{marginTop:"50px"}}>
  <div className="column is-half" >
        <img src={His04}/>
        </div>
    <div className="column is-half" > 
      <h5 class="title is-5" style={{marginTop:"30px"}}><font color="Black"><center><strong>HOW TO MAKE ICE CREAM</strong></center></font></h5>
      <h6 className="subtitle is-6" style={{marginLeft:"30px"}}><font color="Black">
      &nbsp;&nbsp;&nbsp;Points to remember<br/><br/>

- Begin by making the custard base. Split the vanilla pod using a small, sharp knife. Scrape out the

vanilla seeds. Add the seeds and pod to the milk and cream.<br/><br/>

- Bring the milk, cream and vanilla pod to the boil. Remove from the heat and leave to infuse for

at least 10 minutes.<br/><br/>

- Whisk the egg yolks and sugar until pale and fluffy.<br/><br/>

- Reheat the cream mixture until nearly boiling. Strain and whisk into the egg mixture until

completely mixed in.<br/><br/>

- Pour the custard back into the pan and cook on the lowest heat, stirring slowly and continuously

for about 10 minutes until thickened. Make sure the spoon touches the bottom of the pan.

When done, the custard should be thick enough to coat the back of a spoon.<br/><br/>

- Strain the custard into a bowl and allow to cool, then churn until scoopable.<br/><br/>

- Transfer to a container to freeze before serving.<br/><br/>

Tip

If you don’t have an ice cream machine, transfer your cooled custard to the container, take out and

whisk after 2- 3 hours to break down any ice crystals, return to the freezer until frozen.</font></h6>
    </div>
    </div>
    </div>
    <footer className="footer">
                    <Foot/>
                  </footer>
    </section>
    const hisice = <Hisice />;
    const histruk = <Histruk />;
    const typetim = <Typetim />;

    if(this.state.currentS== "hispage")
    {
        renderer = hispage;
    }
   
    else if(this.state.currentS=="Hisice")
    {
      renderer = hisice;
    }
    else if(this.state.currentS=="Histruk")
    {
      renderer = histruk;
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

