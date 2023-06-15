const WeatherData = require("./index");
const client = new WeatherData();

client.fetchWeatherData("London").then((weatherData) => {
  console.log(`Weather data for ${weatherData.name}`);
  console.log(weatherData.main.temp);
});
1;
