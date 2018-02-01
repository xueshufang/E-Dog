import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.scss';

import App from './javascripts/App';
import Home from './javascripts/components/home/Home';
import GoodList from './javascripts/components/goodlist/GoodList.js'
import SearchGoods from './javascripts/components/search/SearchGoods'
import registerServiceWorker from './registerServiceWorker';

import {Router,Route,IndexRedirect,hashHistory,Redirect} from 'react-router'





let routes = <Router history={hashHistory}>
	<Route path='/' component={App}>
		<IndexRedirect to='home'/>
		<Route path='home' component={Home}/>
		<Route path='search' component={SearchGoods}/>
		<Route path="goodlist" component={GoodList}/>
		<Route path='*' component={Home}/>
		<Redirect from='*' to='home'/>
	</Route>	
</Router>
ReactDOM.render(
	routes
	,document.getElementById('root'));
registerServiceWorker();
