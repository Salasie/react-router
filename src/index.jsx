import React from 'react';
import {render} from 'react-dom';

import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Content from './components/Content.jsx';

import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

class App extends React.Component{
	render(){
		return (
			<Router history={hashHistory}>
				<Route path="/" component={Content}>
					<IndexRoute component={Home}/>
					<Route path='home' component={Home} />
					<Route path='about' component={About} />
				</Route>
			</Router>
		);
	}
}

render( <App />, document.getElementById('app'));