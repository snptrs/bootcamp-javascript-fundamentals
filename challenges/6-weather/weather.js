class Weather {
  constructor(client) {
    this.client = client;
    this.weatherData = {};
  }

  load(city) {
    return this.client.fetchWeatherData(city).then((response) => {
      return (this.weatherData = response);
    });
  }

  getWeatherData() {
    return this.weatherData;
  }

  compareWith(city) {
    return this.client.fetchWeatherData(city).then((newCityData) => {
      if (this.weatherData.main.temp > newCityData.main.temp) {
        return `${this.weatherData.name} is warmer than ${newCityData.name}`;
      } else {
        return `${newCityData.name} is warmer than ${this.weatherData.name}`;
      }
    });
  }
}

class WeatherUI {
  displayWeather(weatherData) {
    console.log(`City:         ${weatherData.name}`);
    console.log(`Weather:      ${weatherData.weather[0].main}`);
    console.log(`Temperature:  ${weatherData.main.temp}`);
    console.log(`Feels like:   ${weatherData.main.feels_like}`);
    console.log(`Humidity:     ${weatherData.main.humidity}`);
  }
}

module.exports = { Weather, WeatherUI };
