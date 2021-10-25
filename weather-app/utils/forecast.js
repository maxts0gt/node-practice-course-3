const request = require('postman-request');

const forecast = (lat, long, callback) => {
	const accessKey = '94cf5e290f75760125449496f1f8fc2c';

	const url = `http://api.weatherstack.com/current?access_key=${accessKey}&query=${lat},${long}`;
	request({ url, json: true }, (error, { body }) => {
		if (error) {
			callback('Unable to connect', undefined);
		} else if (body.error) {
			callback('Unable to find weather for location. Try another search.', undefined);
		} else {
			const { temperature: temp, weather_descriptions: weatherDesc } = body.current;
			callback(undefined, `Current temperature is ${temp} degrees out. Weather is ${weatherDesc}.`);
		}
	});
};

module.exports = forecast;
