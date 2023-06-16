const Weather = require("./weather.js");

describe("Weather", () => {
  const mockClient = {
    fetchWeatherData: jest.fn(),
  };
  it("loads and returns the weather for a city", () => {
    mockClient.fetchWeatherData.mockResolvedValueOnce({
      name: "London",
      main: {
        temp: 25,
      },
    });

    const weather = new Weather(mockClient);
    weather.load("London").then(() => {
      expect(weather.getWeatherData().name).toEqual("London");
      expect(weather.getWeatherData().main.temp).toEqual(25);
    });
  });

  it("compares the weather for two cities", () => {
    mockClient.fetchWeatherData.mockResolvedValueOnce({
      name: "London",
      main: {
        temp: 25,
      },
    });

    const weather = new Weather(mockClient);
    weather.load("London");

    mockClient.fetchWeatherData.mockResolvedValueOnce({
      name: "Dublin",
      main: {
        temp: 24,
      },
    });

    weather.compareWith("Dublin").then((response) => {
      expect(response).toEqual("London is warmer than Dublin");
    });
  });

  it("displays the weather data using .displayWeather", () => {
    mockClient.fetchWeatherData.mockResolvedValueOnce({
      name: "Brighton",
      main: {
        temp: 24,
        feels_like: 26,
        humidity: 57,
      },
      weather: [{ main: "Sunny" }],
    });

    const weather = new Weather(mockClient);
    // TODO: not actually testing the console output here
    weather.load("Brighton").then(() => {
      expect(weather.getWeatherData().name).toEqual("Brighton");
      expect(weather.getWeatherData().main.temp).toEqual(24);
    });
  });
});
