import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.scss';
import App from './javascripts/App';
import registerServiceWorker from './registerServiceWorker';

import { Router, Route, IndexRedirect, hashHistory, Redirect } from 'react-router'

import GoodList from './javascripts/components/goodlist/GoodList.js'
import GoodListPinpai from './javascripts/components/goodlist/GoodListPinpai.js'

let routes = <Router history={hashHistory}>
	<Route path='/' component={App}>
	
		<Route path="goodlist" component={GoodList}/>
		<Route path="goodListPinpai" component={GoodListPinpai}/>
	</Route>
	
</Router>
ReactDOM.render(
	routes, document.getElementById('root'));
registerServiceWorker();


