const readline = require("node:readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "> ",
});

const WeatherClient = require("./weather-client");
const Weather = require("./weather");
const client = new WeatherClient();
const weather = new Weather(client);

rl.question("What city do you want to see the weather for? ", (city) => {
  weather
    .load(city)
    .then((weatherData) => {
      weather.displayWeather();
    })
    .then(() => {
      rl.question("Compare weather with: ", (compareCity) => {
        weather.compareWith(compareCity).then((response) => {
          return console.log(response);
        });
      });
    });
});
