import React, { Component } from 'react';
import './bulma.css';
import Fla1 from "./flavors/f01.jpg";
import Fla2 from "./flavors/f02.jpg";
import Fla3 from "./flavors/f03.jpg";
import Fla4 from "./flavors/f04.jpg";
import Fla5 from "./flavors/f05.jpg";
import Fla6 from "./flavors/f06.jpg";
import Fla7 from "./flavors/f07.jpg";
import Fla8 from "./flavors/f08.jpg";
import Fla9 from "./flavors/f09.jpg";
import Fla10 from "./flavors/f10.jpg";
import Fla11 from "./flavors/f11.jpg";
import Fla12 from "./flavors/f12.jpg";

export class Third extends Component {

  render() {
    

      return (
      	<div className="columns is-gapless is-multiline is-mobile" style={{marginLeft:"180px"}}>
      <div className="column is-one-quarter" >
        <img src={Fla1} />
        <h5 className="title is-5"><font color="Black" style={{marginLeft:"90px"}}><strong>OREO</strong></font></h5>
        </div>
        
      <div className="column is-one-quarter" style={{marginLeft:"50px"}}>
          <img src={Fla2} />
          <center><h5 className="title is-5"><font color="Black" style={{marginLeft:"1px"}}><strong>CHOCOLATE 
          & SEA SALT</strong></font></h5></center>
        </div>
        <div className="column is-one-quarter" style={{marginLeft:"50px"}}>
          <img src={Fla3} />
          <center><h5 className="title is-5"><font color="Black" style={{marginLeft:"-5px"}}><strong>VANILLA 
          STRAWBERRY</strong></font></h5></center>
        </div>
        <div className="column is-one-quarter" >
        <img src={Fla4} />
        <center><h5 className="title is-5"><font color="Black" style={{marginLeft:"-5px"}}><strong>CHERRY CHEESECAKE</strong></font></h5></center>
        </div>
        
      <div className="column is-one-quarter" style={{marginLeft:"50px"}}>
          <img src={Fla5} />
          <h5 className="title is-5"><font color="Black" style={{marginLeft:"70px"}}><strong>PISTACHIO</strong></font></h5>
        </div>
        <div className="column is-one-quarter" style={{marginLeft:"50px"}}>
          <img src={Fla6} />
          <center><h5 className="title is-5"><font color="Black" style={{marginLeft:"-5px"}}><strong>HAZELNUT & COOKIES</strong></font></h5></center>
        </div>
        <div className="column is-one-quarter" >
        <img src={Fla7} />
        <center><h5 className="title is-5"><font color="Black" style={{marginLeft:"-5px"}}><strong>SALTED CARAMEL SOY</strong></font></h5></center>
        </div>
        
      <div className="clumn is-one-quarter" style={{marginLeft:"50px"}}>
          <img src={Fla8} />
          <h5 className="title is-5"><font color="Black" style={{marginLeft:"5px"}}><strong>BRAMBLEBERRY  SORBET</strong></font></h5>
        </div>
        <div className="column is-one-quarter" style={{marginLeft:"50px"}}>
          <img src={Fla9} />
          <center><h5 className="title is-5"><font color="Black" style={{marginLeft:"-10px"}}><strong>BANANA & HONEY</strong></font></h5></center>
        </div>
        <div className="column is-one-quarter" >
        <img src={Fla10} />
        <center><h5 className="title is-5"><font color="Black" style={{marginLeft:"-25px"}}><strong>RASPBERRY SORBET</strong></font></h5></center>
        </div>
        
      <div className="column is-one-quarter" style={{marginLeft:"50px"}}>
          <img src={Fla11} />
          <center><h5 className="title is-5"><font color="Black" style={{marginLeft:"-10px"}}><strong>STRAWBERRY & COCONUT</strong></font></h5></center>
        </div>
        <div className="column is-one-quarter" style={{marginLeft:"50px"}}>
          <img src={Fla12} />
          <center><h5 className="title is-5"><font color="Black" style={{marginLeft:"-5px"}}><strong>LIME SORBET</strong></font></h5></center>
        </div>
        </div>

      );
  }
}