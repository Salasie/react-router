'use strict';
import React from 'react';
import {Link} from 'react-router';

class Persona extends React.Component{
	ingresarPersona(){
		console.log('Ingreso Persona');
	}
	render(){
		return (
			<div>
				Nombre
				<input></input>
				<br />
				Apellido
				<input></input>
				<br />
				<button onClick={this.ingresarPersona}>Ingresar</button>
			</div>
		);
	}
}

export default Persona;