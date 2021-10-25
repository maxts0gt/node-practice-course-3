const http = require('http');

const url = `http://api.weatherstack.com/current?access_key=94cf5e290f75760125449496f1f8fc2c&query=45,-75`;

const request = http.request(url, (response) => {
	let data = '';

	response.on('data', (chunk) => {
		data = data + chunk.toString();
	});

	response.on('end', () => {
		const body = JSON.parse(data);
		console.log(body);
	});
});

request.on('error', (err) => {
	console.log('An error', err);
});

request.end();
