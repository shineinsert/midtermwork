import React, { Component } from 'react';
import {Link} from 'react-router';
import logo from './conver.png';
import './App.css';
import './bulma.css';
import {Menubar} from './Menubar';
import {Foot} from './Foot';
import His05 from "./history/h005.jpg";
import {Histruk} from './Histruk';
import {Howmake} from './Howmake';
import {Hisice} from './Hisice';
import {History} from './History';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
export class Typetim extends Component {
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
     const hispage=<section className="hero is-info is-large">
    {/* Hero header: will stick at the top */}
    <div className="hero-head">
      <Menubar/>
    </div>
      
    <div className="hero-body" >
    <div className="aboutt" style={{marginTop:"-250px"}}>
    </div>
    <a className="button is-medium" onClick={this.On1} style={{marginLeft:"50px",marginTop:"20px"}}><strong><font color="Black">History Of Ice Cream</font></strong></a>
    <a className="button is-medium" onClick={this.On2} style={{marginLeft:"50px",marginTop:"20px"}}><strong><font color="Black">History of the Ice Cream Truck</font></strong></a>
    <a className="button is-medium" onClick={this.On3} style={{marginLeft:"50px",marginTop:"20px"}}><strong><font color="Black">HOW TO MAKE ICE CREAM</font></strong></a>
    <a className="button is-medium" style={{marginLeft:"50px",marginTop:"20px"}}><strong><font color="Black">Types of Ice Cream</font></strong></a>
    <div className="columns is-gapless is-multiline is-mobile" style={{marginTop:"50px"}}>
  <div className="column is-half" >
        <img src={His05}/>
        </div>
    <div className="column is-half" > 
    <h5 class="title is-5" style={{marginTop:"30px"}}><font color="Black"><center><strong>Types of Ice Cream</strong></center></font></h5>
      <h6 className="subtitle is-6" style={{marginLeft:"30px"}}><font color="Black">
      &nbsp;&nbsp;&nbsp;Ice cream is a sweet, creamy cold treat that has been around for centuries. It has inspired songs, had

Anne of Green Gables (the heroine of Lucy Maud Montgomery’s famed novels) dreaming for days in

anticipation of tasting it for the very first time, and is always popular at birthday parties and family

gatherings. But never, have the options been so varied! Today, you can find a world of flavours and an

ice cream to suit every taste...<br/><br/>

Hard Ice Cream<br/><br/>

Traditional or regular ice cream made with cream and/or milk, sugar, and may contain

eggs, stabilizers and other flavouring ingredients such as vanilla, chocolate, fruit and many other add-

ins…the options seem endless.<br/><br/>

French Ice Cream<br/><br/>

Traditional ice cream made with a custard base containing cream and/or milk, egg yolks or whole

eggs, sugar, stabilizers and other flavourings.<br/><br/>

Soft Ice Cream<br/><br/>

Ice cream made with milk and/or cream, sugar, stabilizers and flavourings that is frozen at a higher

temperature in a special machine that keeps the mixture smooth, creamy and soft while it’s being

frozen. It is stored in the machine as a liquid ice cream mix and frozen as it’s served into a cone or

bowl. This is available at restaurants and specialty ice cream shops.<br/><br/>

Light Ice Cream<br/><br/>

Traditional ice cream made with milk ingredients, sugar, stabilizers and other flavourings that contains at

least 25% less milk fat than regular hard ice cream.<br/><br/>

Reduced Fat Ice Cream<br/><br/>

Made with lower fat milk ingredients, sugar, stabilizers and other flavourings. The amount of fat can vary

and is declared on the label.<br/><br/>

Fat-free Frozen Dairy Dessert<br/><br/>

Made with modified milk ingredients, sugar or artificial or natural sweeteners and stabilizers, this ice

cream contains about 0.1% fat or 0.5 g fat per serving.<br/><br/>

No Sugar Added Ice Cream or Frozen Dairy Dessert<br/><br/>

Similar to ice cream, generally made with milk ingredients and stabilizers as well as artificial sweeteners

or natural sugar substitutes and other flavourings. These desserts are often lower in fat than regular

ice cream.<br/><br/>

Lactose-free Ice Cream<br/><br/>

Ice cream made with added lactase enzyme and therefore contains no detectable lactose [link to

lactose intolerance article] making it more easily digestible for people with lactose intolerance.<br/><br/>

Gluten-Free Ice Cream<br/><br/>

Since some stabilizers and other ingredients added in ice cream production may contain gluten, it is

important to read the ingredients list to make sure the ice cream is gluten-free. Some brands include

a “gluten-free” logo on the label.<br/><br/>

Organic Ice Cream<br/><br/>

Any type of ice cream made with organically produced milk and other ingredients.<br/><br/>

Italian-style Gelato<br/><br/>

A dense ice cream generally made with more milk than cream (making it lower in fat), egg yolks,

sugar or other sweeteners and flavourings. Gelato has a more intense flavour than traditional ice

cream and less air.</font></h6>
    </div>
    </div>
    </div>
      
    <footer className="footer">
                    <Foot/>
                  </footer>
    </section>
  const histruk = <Histruk />;
    const howmake = <Howmake />;
    const hisice = <Hisice />;

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
    else if (this.state.currentS=="Hisice") 
    {
      renderer = hisice;
    }
    return (
      <div>
        {renderer}
      </div>
    );
  }
}

