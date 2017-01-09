1- Crear carpeta

mkdir react-router

2- Iniciar proyecto (creacion package.json)

npm init

3- Crear README.md

4- Crear .gitignore

"node_modules" para los modulos
"dist" para el lugar donde dejaremos el bundle de webpack

5- Crear carpeta src donde tendremos las fuentes

6- Añadir webpack

npm i webpack --save-dev

7- Añadir archivo de configuracion webpack.config.js

------------------------------------------
'use strict'

const path = require('path');

// Path build
var PATH_BUILD = path.resolve(__dirname, 'dist');

// Path src
var PATH_SRC = path.resolve(__dirname, 'src');

var config = {
	entry: PATH_SRC + '/index.jsx',
	output: {
		path: PATH_BUILD,
		filename:'bundle.js'
	}
};

module.exports = config;
-------------------------------------------

8- Crear index.jsx con contenido "console.log('Hola mundo react-router')"

9- generar bundle con webpack -d

10- crear index.html y probar bundle

------------------------------------------------------------
<html>
  <head>
    <meta charset="utf-8">
    <title>React-router Hola Mundo</title>
  </head>
  <body>
    <div id="app" />
    <script src="../dist/bundle.js" type="text/javascript"></script>
  </body>
</html>
------------------------------------------------------------

11- Instalar babel

npm install babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev

donde:

babel-core babel-loader  -> core de babel
babel-preset-es2015      -> soporte ES6
babel-preset-react       -> soporte JSX react

Todos como dependencia de desarrollo (--save-dev)

12- Crear archivo de configuracion babel (en la raiz del proyeto, .babelrc)

----------------------------------------------
{
  "presets": [
    "es2015",
    "react"
  ]
}
----------------------------------------------

13- Actualizar archivo de configuración de webpack para que use babel

quedaria de la siguiente manera:

----------------------------------------------
'use strict'

const path = require('path');

// Path build
var PATH_BUILD = path.resolve(__dirname, 'dist');

// Path src
var PATH_SRC = path.resolve(__dirname, 'src');

var config = {
	entry: PATH_SRC + '/index.jsx',
	output: {
		path: PATH_BUILD,
		filename:'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				include: PATH_SRC,
				loader: 'babel'
			}
		]

	}
};

module.exports = config;
----------------------------------------------

14- Instalar react

npm i react react-dom --save  (como dependencia, vean que no es solo para desarrollo)


15- Instalar react-router (npm i react-router --save)

16- En este punto ya tengo configurado webpack para que genere el bundle (y evitarme usar grunt o gulp) y babel para que todo lo que venga en ES6 sea traducido a es5 (y poder usar ES6 libremente), y tambien instalado react, vamos a crear una carpeta dentro de src llamada components para crear 2 componentes que vamos a poder routear luego.

components/About.jsx
----------------------------------------------
'use strict';
import React from 'react';

class About extends React.Component{
	render(){
		return (
			<div>
				Hola Mundo About
			</div>
		);
	}
}

export default About;
----------------------------------------------

components/Home.jsx
----------------------------------------------
'use strict';
import React from 'react';

class Home extends React.Component{
	render(){
		return (
			<div>
				Hola Mundo Home
			</div>
		);
	}
}

export default Home;
----------------------------------------------

