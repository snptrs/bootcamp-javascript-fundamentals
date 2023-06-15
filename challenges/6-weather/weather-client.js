class WeatherClient {
  fetchWeatherData = (city) => {
    const apiKey = require("./apiKey");
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

    return fetch(apiUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      });
  };
}

module.exports = WeatherClient;
