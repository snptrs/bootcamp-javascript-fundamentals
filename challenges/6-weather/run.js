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

const reloadData = () => {};

rl.question("What city do you want to see the weather for? ", (city) => {
  weather.load(city).then((weatherData) => {
    weatherUI.displayWeather(weather.getWeatherData());
    setInterval(weather.refresh, 5000, weatherUI, weather, weatherData.name);
  });
});
