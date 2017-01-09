'use strict';
import React from 'react';
import {Link} from 'react-router';

class Content extends React.Component{
	render(){
		return (
			<div>
				<h1>Main</h1>
				<ul role="nav">
					<li><Link to="about">About</Link></li>
					<li><Link to="home">Home</Link></li>
				</ul>

				{this.props.children}

			</div>
		);
	}
}

export default Content;