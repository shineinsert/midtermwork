import React, { Component } from 'react';
import {Link} from 'react-router';
import logo from './conver.png';
import './App.css';
import './bulma.css';
import {Menubar} from './Menubar';
import {Foot} from './Foot';
import His02 from "./history/h002.JPG";
import {Histruk} from './Histruk';
import {Howmake} from './Howmake';
import {Typetim} from './Typetim';
import {History} from './History';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
export class Hisice extends Component {
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
    <a className="button is-medium" style={{marginLeft:"50px",marginTop:"20px"}}><strong><font color="Black">History Of Ice Cream</font></strong></a>
    <a className="button is-medium" onClick={this.On2} style={{marginLeft:"50px",marginTop:"20px"}}><strong><font color="Black">History of the Ice Cream Truck</font></strong></a>
    <a className="button is-medium" onClick={this.On3} style={{marginLeft:"50px",marginTop:"20px"}}><strong><font color="Black">HOW TO MAKE ICE CREAM</font></strong></a>
    <a className="button is-medium" onClick={this.On4} style={{marginLeft:"50px",marginTop:"20px"}}><strong><font color="Black">Types of Ice Cream</font></strong></a>
    <div className="columns is-gapless is-multiline is-mobile" style={{marginTop:"50px"}}>
  <div className="column is-half" >
        <img src={His02}/>
        </div>
    <div className="column is-half" > 
      <h5 class="title is-5" style={{marginTop:"30px"}}><font color="Black"><center><strong>The History of Ice Cream</strong></center></font></h5>
      <h6 className="subtitle is-6" style={{marginLeft:"30px"}}><font color="Black">
      &nbsp;&nbsp;&nbsp;Ice cream&#39;s origins are known to reach back as far as the second century B.C., although no specific date

of origin nor inventor has been undisputably credited with its discovery. We know that Alexander the

Great enjoyed snow and ice flavored with honey and nectar. Biblical references also show that King

Solomon was fond of iced drinks during harvesting. During the Roman Empire, Nero Claudius Caesar

(A.D. 54-86) frequently sent runners into the mountains for snow, which was then flavored with fruits and

juices.<br/><br/>

Over a thousand years later, Marco Polo returned to Italy from the Far East with a recipe that closely

resembled what is now called sherbet. Historians estimate that this recipe evolved into ice cream

sometime in the 16th century. England seems to have discovered ice cream at the same time, or perhaps

even earlier than the Italians. &quot;Cream Ice,&quot; as it was called, appeared regularly at the table of Charles I

during the 17th century. France was introduced to similar frozen desserts in 1553 by the Italian Catherine

de Medici when she became the wife of Henry II of France. It wasn&#39;t until 1660 that ice cream was made

available to the general public. The Sicilian Procopio introduced a recipe blending milk, cream, butter and

eggs at Café Procope, the first café in Paris.</font></h6>
    </div>
    </div>
    </div>
   
    <footer className="footer">
                    <Foot/>
                  </footer>
    </section>
    const histruk = <Histruk />;
    const howmake = <Howmake />;
    const typetim = <Typetim />;

    if(this.state.currentS== "hispage")
    {
        renderer = hispage;
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

