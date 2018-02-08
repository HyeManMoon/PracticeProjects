const request = require('request');

var getWeather = (lat,lng,callback) => {
    request({
        url: `https://api.darksky.net/forecast/2fea7132af7e13a7f8367ad180a6e2a6/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if(!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else  {
            callback(`Unable to fetch the weather`);
        }
    })
}

module.exports.getWeather = getWeather;

 