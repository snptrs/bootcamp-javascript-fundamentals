const WeatherClient = require("./weather-client");
const Weather = require("./weather");
const client = new WeatherClient();
const weather = new Weather(client);

weather.load("London").then((weatherData) => {
  console.log(`Weather data for ${weatherData.name}`);
  console.log(weatherData.main.temp);
});

weather.compareWith("Dublin").then((response) => {
  console.log(response);
});
