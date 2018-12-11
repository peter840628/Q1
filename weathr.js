const request = require('request');

var rng = parseInt(Math.random() * 50000 + 1538586000);

var getAddress = (address, callback) => {

    request({
        url: 'https://maps.googleapis.com/maps/api/geocode/json' +
            '?address=' + encodeURIComponent(address) +
            '&key=AIzaSyCaTQM3W3bMEE7yLT9OkUnx - pZfsCVSUBQ',
        json: true

    }, (error, response, body) => {

        if (error) {
            callback('Cant connect to google');
        } else if (body.status == 'ZERO_RESULTS') {
            callback('Cant find the address');
        } else if (body.status == 'OK') {
            callback(undefined, {
                Address: body.results[0].formatted_address,
                Type: body.results[0].types[0],
                lat: body.results[0].geometry.location.lat,
                lng: body.results[0].geometry.location.lng
            });
            var latitude = body.results[0].geometry.location.lat;
            var longitude = body.results[0].geometry.location.lng;

            getWeather(latitude, longitude, rng, (errorMessage, results) => {
                if (errorMessage) {
                    console.log(errorMessage);
                } else {
                    callback(body);
                }

            })
        }
    });

};

var getWeather = (latitude, longitude, time, callback) => {

    request({
        url: `https://api.darksky.net/forecast/751e8af775ee3d7e6b30b1991affb991/${latitude},${longitude},${time}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Cant connect to Dark Sky Weather');
        } else {
            callback(undefined, {
                Temperature: body.currently.temperature,
                Humidity: body.currently.humidity,
                WindSpeed: body.currently.summary
            });

        }
    });

};

module.exports = {
    getWeather,
    getAddress
};