require('babel-polyfill');
var page = require('page');

require('./homepage');
require('./signup');
require('./signin');
require('./user-page');
require('./footer');

//Con este comando se pone a correr PageJS. Es requerido.....
page();