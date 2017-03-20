import React, { Component } from 'react';
import './bulma.css';

export class About extends Component {

  render() {
    

      return (
        <div className="container">
        <label className="label">Name</label>
			<p className="control">
  				<input className="input" type="text" placeholder="Text input"/>
			</p>
<label className="label">Username</label>
<p className="control has-icon has-icon-right">
  <input className="input is-success" type="text" placeholder="Text input" value="bulma"/>
  <span className="icon is-small">
    <i className="fa fa-check"></i>
  </span>
  <span className="help is-success">This username is available</span>
</p>
<label className="label">Email</label>
<p className="control has-icon has-icon-right">
  <input className="input is-danger" type="text" placeholder="Email input" />
  <span className="icon is-small">
    <i className="fa fa-warning"></i>
  </span>
  <span className="help is-danger">This email is invalid</span>
	</p>
<label className="label">Subject</label>
<p className="control">
  <span className="select">
    <select>
      <option>Select dropdown</option>
      <option>With options</option>
    </select>
  </span>
</p>
<label className="label">Message</label>
<p className="control">
  <textarea className="textarea" placeholder="Textarea"></textarea>
</p>
<p className="control">
  <label className="checkbox">
    <input type="checkbox"/>
    <font color="Black">Remember me</font>
  </label>
</p>
<p className="control">
  <label className="radio">
    <input type="radio" name="question"/>
    <font color="Black">Yes</font>
  </label>
  <label className="radio">
    <input type="radio" name="question"/>
    <font color="Black">No</font>
  </label>
</p>
<div className="control is-grouped">
  <p className="control">
    <button className="button is-primary">Submit</button>
  </p>
  <p className="control">
    <button className="button is-link">Cancel</button>
  </p>
</div>
      </div>
      
      );
  }
}



