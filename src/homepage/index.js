var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');
var request = require('superagent');
var header = require('../header');
var axios = require('axios');

//Define la ruta /signup de la pagina
page('/', header, loadPicturesAxios, function(ctx, next){
	title('Platzigram');
	var main = document.getElementById('main-container');
	
	empty(main).appendChild(template(ctx.pictures));
});

function loadPictures(ctx, next){
	request
		.get('/api/pictures')
		.end(function(err, res){
			if(err) return console.log(err);
			ctx.pictures = res.body;
			console.log('Callback con superagent');
			next();
		})
}

function loadPicturesAxios(ctx, next){
	axios
		.get('/api/pictures')
		.then(function(res){
			ctx.pictures = res.data;
			console.log('Callback con Axios');
			next();
		})
		.catch(function(err){
			console.log(err);
		})
}