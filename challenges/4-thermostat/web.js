const Thermostat = require("./thermostat");
const express = require("express");
const app = express();
const port = 3000;

const thermostat = new Thermostat();

app.get("/", (req, res) => {
  res.send(`${thermostat.getTemperature()}`);
});

app.post("/up", (req, res) => {
  thermostat.up();
  res.send(`${thermostat.getTemperature()}`);
});

console.log(`Server listening on localhost:${port}`);
app.listen(port);
