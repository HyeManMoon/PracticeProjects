// const yargs = require('yargs');

// const geocode = require('./geocode/geocode');

// const argv = yargs.options({
//     a: {
//         demand: true,
//         alias: 'address',
//         describe: "Address to fetch weather for",
//         string: true
//     }
// }).help().alias('help','h').argv;

// geocode.geocodeAddress(argv.address, (error, results) => {
//     if(error) {
//         console.log(error);
//     } else {
//         console.log(JSON.stringify(results, undefined, 2));
//     }
// });


//2fea7132af7e13a7f8367ad180a6e2a6

const request = require('request');

request({
    url: `https://api.darksky.net/forecast/2fea7132af7e13a7f8367ad180a6e2a6/33.8276052,-117.9073244`,
    json: true
}, (error, response, body) => {
    if(error) {
        console.log("unable to connect to the server")
    } else if(body.status === 'The given location is invalid') {
        console.log("unable to find that location");
    } else {
        console.log( body.currently.temperature);
    }
})