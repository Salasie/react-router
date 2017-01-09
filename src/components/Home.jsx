'use strict';
import React from 'react';
import {Link} from 'react-router';
import {render} from 'react-dom';
import Persona from './Persona.jsx';
class Home extends React.Component{
	esHola() {
		render(<Persona />, document.getElementById('contenido'));
	}
	esMundo() {
		render(<div>Mundo</div>, document.getElementById('contenido'));
	}	
	render(){
		return (
			<div>
				Hola Mundo Home <Link to={'/about'}>About</Link>
				<button onClick={this.esHola}>Contenido es Hola</button>
				<button onClick={this.esMundo}>Contenido es Mundo</button>
				<div id='contenido'></div>
			</div>
		);
	}
}

export default Home;