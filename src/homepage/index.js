var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

//Define la ruta /signup de la pagina
page('/', function(ctx, next){
	title('Platzigram');
	var main = document.getElementById('main-container');
	var pictures = [
		{
			user: {
				username: 'torres--riquelme',
				avatar: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAiRAAAAJGJiNTQ0ZTJlLWZjOTItNDBhZC1hZjEyLTJlZDY2YmIxOTdmMg.jpg'
			},
			url: 'office.jpg',
			likes: 0,
			liked: false,
			createdAt: new Date()
		},
		{
			user: {
				username: 'torresriquelme',
				avatar: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAiRAAAAJGJiNTQ0ZTJlLWZjOTItNDBhZC1hZjEyLTJlZDY2YmIxOTdmMg.jpg'
			},
			url: 'office.jpg',
			likes: 1,
			liked: false,
			createdAt: new Date().setDate(new Date().getDate() - 10)
		}
	];
	empty(main).appendChild(template(pictures));
});