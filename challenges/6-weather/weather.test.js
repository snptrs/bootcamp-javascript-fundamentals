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
        temp: 25,
      },
    });

    weather.compareWith("Dublin").then((response) => {
      expect(response).toEqual("London is warmer than Dublin");
    });
  });
});
