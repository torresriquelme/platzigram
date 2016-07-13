var page = require('page');
var empty = require('empty-element');
var template = require('./template');

//Define la ruta /signup de la pagina
page('/signup', function(ctx, next){
	var main = document.getElementById('main-container');
	empty(main);
	main.innerHTML = 'Signup (En su propia carpeta) <a href="/">Vamonos pa Home puej</a>';

	main.appendChild(template);
});

