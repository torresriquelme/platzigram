var express = require('express');
var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function(req, res){
	res.render('index', {title: 'Platzigram'});
})

app.get('/signup', function(req, res){
	res.render('index', {title: 'Platzigram - signup'});
})

app.get('/signin', function(req, res){
	res.render('index', {title: 'Platzigram - signin'});
})

app.get('/api/pictures', function(req, res){
	var pictures = [
		{
			user: {
				username: 'torres--riquelme',
				avatar: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAiRAAAAJGJiNTQ0ZTJlLWZjOTItNDBhZC1hZjEyLTJlZDY2YmIxOTdmMg.jpg'
			},
			url: 'office.jpg',
			likes: 0,
			liked: false,
			createdAt: new Date().getTime()
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
	setTimeout(function () {
		res.send(pictures);
	}, 2000)
})

app.listen(3000, function(err){
	if(err) return console.log('Error'), process.exit(1);
	console.log('Web server running');
	console.log('Port 3000 y jorge andres es chimbo');
})