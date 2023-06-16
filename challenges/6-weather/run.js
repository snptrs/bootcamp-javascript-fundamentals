const WeatherClient = require("./weather-client");
const Weather = require("./weather");
const client = new WeatherClient();
const weather = new Weather(client);

// weather.load("London").then((weatherData) => {
//   console.log(`Weather data for ${weatherData.name}`);
//   console.log(weatherData.main.temp);
// });

weather.load("London").then((weatherData) => {
  weather.displayWeather();
});

weather.compareWith("Paris").then((response) => {
  console.log(response);
});
