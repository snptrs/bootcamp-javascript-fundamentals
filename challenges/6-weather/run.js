const readline = require("node:readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "> ",
});

const WeatherClient = require("./weather-client");
const client = new WeatherClient();
const weatherClasses = require("./weather");
const weather = new weatherClasses.Weather(client);
const weatherUI = new weatherClasses.WeatherUI();

rl.question("What city do you want to see the weather for? ", (city) => {
  weather
    .load(city)
    .then(() => {
      weatherUI.displayWeather(weather.getWeatherData());
    })
    .then(() => {
      rl.question("Compare weather with: ", (compareCity) => {
        weather.compareWith(compareCity).then((response) => {
          console.log(response);
          rl.close();
          return;
        });
      });
    });
});
