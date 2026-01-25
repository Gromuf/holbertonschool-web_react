const $ = require('jquery');
require('./header.css');

console.log('Init header');

$(function() {
	$('body').append('<div id="logo"></div>');
	$('body').append('<h1>Holberton DDashboard</h1>');
});
