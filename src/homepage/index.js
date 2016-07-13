var page = require('page');

//Define la ruta de la direccion raiz de la pagina
page('/', function(ctx, next){
	var main = document.getElementById('main-container');
	main.innerHTML = 'Home (En su propia carpeta)<a href="/signup">Signup.....</a>'; 
});