'use strict';
import React from 'react';
import {Link} from 'react-router';

class About extends React.Component{
	render(){
		return (
			<div>
				Hola Mundo About <Link to={'/'}>Home</Link>
			</div>
		);
	}
}

export default About;