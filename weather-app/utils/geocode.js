const request = require('postman-request');

const geocode = (address, callback) => {
	const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoibWF4MW11OCIsImEiOiJja3Y2YjI0amE5N3g1MzBtYXA4ams2N3BpIn0.-fPThzXpLyu6XcY0tU8-wQ&limit=1`;

	request({ url: url, json: true }, (error, response) => {
		// console.log(response);
		if (error) {
			callback('Unable to connect', undefined);
		} else if (response.body.features.length === 0) {
			callback('Unable to find location. Try another search.', undefined);
		} else {
			callback(undefined, {
				long: response.body.features[0].center[0],
				lat: response.body.features[0].center[1],
				location: response.body.features[0].text,
			});
		}
	});
};

module.exports = geocode;
