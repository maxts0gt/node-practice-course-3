const request = require('postman-request');

const geocode = (address, callback) => {
	const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoibWF4MW11OCIsImEiOiJja3Y2YjI0amE5N3g1MzBtYXA4ams2N3BpIn0.-fPThzXpLyu6XcY0tU8-wQ&limit=1`;

	request({ url, json: true }, (error, { body }) => {
		// console.log(response);
		if (error) {
			callback('Unable to connect', undefined);
		} else if (body.features.length === 0) {
			callback('Unable to find location. Try another search.', undefined);
		} else {
			const { center, text } = body.features[0];
			const long = center[0];
			const lat = center[1];
			callback(undefined, {
				long: long,
				lat: lat,
				location: text,
			});
		}
	});
};

module.exports = geocode;
