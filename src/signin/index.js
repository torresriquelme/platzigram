var page = require('page');
var empty = require('empty-element');
var template = require('./template');

//Define la ruta /signup de la pagina
page('/signin', function(ctx, next){
	var main = document.getElementById('main-container');
	empty(main).appendChild(template);
});