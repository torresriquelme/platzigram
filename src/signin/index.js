var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

//Define la ruta /signup de la pagina
page('/signin', function(ctx, next){
	title('Platzigram-Signin');
	var main = document.getElementById('main-container');
	empty(main).appendChild(template);
});