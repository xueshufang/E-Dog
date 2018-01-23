import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.scss';
import App from './javascripts/App';
import registerServiceWorker from './registerServiceWorker';

import {Router,Route,IndexRedirect,hashHistory,Redirect} from 'react-router'

import GoodList from './javascripts/components/good-list/GoodList.js'



let routes = <Router history={hashHistory}>
	<Route path='/' component={App}>
	
		<Route path="goodlist" component={GoodList}/>
	</Route>
	
</Router>
ReactDOM.render(
	routes
	,document.getElementById('root'));
registerServiceWorker();
