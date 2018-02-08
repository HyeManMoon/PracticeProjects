const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs.options({
    a: {
        demand: true,
        alias: 'address',
        describe: "Address to fetch weather for",
        string: true
    }
}).help().alias('help','h').argv;

geocode.geocodeAddress(argv.address, (error, results) => {
    if(error) {
        console.log(error);
    } else {
        console.log(results.address);
        weather.getWeather(results.latitude,results.longitude, (wError, wResults) => {
            if(wError) {
                console.log(wError);
            } else {
                console.log(`It's currently ${wResults.temperature}, but feels like ${wResults.apparentTemperature}`)
            } 
        });
        
    }
});
