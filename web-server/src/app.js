const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

//Define pathfs for Express config
const publicDirPath = path.join(__dirname, '../public');
const viewsDirPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//Setup handlebars engine and views engine
app.set('view engine', 'hbs');
app.set('views', viewsDirPath);
hbs.registerPartials(partialsPath);

//Setup static directory to serve
app.use(express.static(publicDirPath));

//
app.get('', (req, res) => {
	res.render('index', {
		title: 'Weather App',
		name: 'Max',
	});
});
app.get('/about', (req, res) => {
	res.render('about', {
		title: 'About Me',
		name: 'Max',
	});
});
app.get('/help', (req, res) => {
	res.render('help', {
		title: 'Help',
		content: 'This is some helpful text!',
		name: 'Max',
	});
});

app.get('/help/*', (req, res) => {
	res.render('404', {
		title: '404',
		error: 'Oops! 404! Help article not found!',
		name: 'Max',
	});
});

app.get('*', (req, res) => {
	res.render('404', {
		title: '404',
		error: 'Oops! 404 Not Found',
		name: 'Max',
	});
});

app.listen(3000, () => {
	console.log('Express server listening on port 3000');
});
