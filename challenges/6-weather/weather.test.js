const Weather = require("./weather.js");

describe("Weather", () => {
  it("loads and returns the weather for a city ", () => {
    const mockClient = {
      fetchWeatherData: jest.fn(),
    };

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
});
