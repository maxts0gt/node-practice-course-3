const request = require('postman-request');

const forecast = (lat, long, callback) => {
	const accessKey = '94cf5e290f75760125449496f1f8fc2c';

	const url = `http://api.weatherstack.com/current?access_key=${accessKey}&query=${lat},${long}`;
	request({ url: url, json: true }, (error, response) => {
		if (error) {
			callback('Unable to connect', undefined);
		} else if (response.body.error) {
			callback('Unable to find weather for location. Try another search.', undefined);
		} else {
			callback(
				undefined,
				`Current temperature is ${response.body.current.temperature} degrees out. Weather is ${response.body.current.weather_descriptions}.`
			);
		}
	});
};

module.exports = forecast;
