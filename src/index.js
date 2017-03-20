import React from 'react';
import ReactDOM from 'react-dom';
import {Router , Route , browserHistory } from 'react-router';
import {App} from './App';
import {About} from './About';
import {Flavor} from './Flavor';
import {History} from './History';
import {Store} from './Store';
import './index.css';

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}></Route>
		<Route path="/About" component={About}></Route>
		<Route path="/Flavor" component={Flavor}></Route>
		<Route path="/History" component={History}></Route>
		<Route path="/Store" component={Store}></Route>
	</Router>
  	,
  document.getElementById('root')
);
