const yargs = require('yargs');
const axios = require('axios');
const key = require('./key.js').key;

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeURL).then((response) => {
  if (response.data.status === 'ZERO_RESULTS'){
    throw new Error('Unable to find that address');
  }

  var latitude = response.data.results[0].geometry.location.lat;
  var longitude = response.data.results[0].geometry.location.lng;
  var weatherURL = `https://api.darksky.net/forecast/${key}/${latitude},${longitude}`;
  console.log(response.data.results[0].formatted_address);

  return axios.get(weatherURL);

}).then((response) => {
  var summary = response.data.currently.summary;
  var temperature = response.data.currently.temperature;
  var apparentTemperature = response.data.currently.apparentTemperature;
  console.log(`The weather currently is ${summary}, with a temperature of ${temperature} that feels like ${apparentTemperature}.`);
}).catch((err) => {
  if (err.code === 'ENOTFOUND'){
    console.log('Unable to connect to API servers');
  } else {
    console.log(err.message);
  }
});
