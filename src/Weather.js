import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherdata] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherdata({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      city: response.data.main.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{props.defaultCity}</h1>
        <ul>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>

        <div className="row">
          <div className="col-6">
            <div>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                alt="Cloudy"
              />
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}% </li>
              <li>Wind: {Math.round(weatherData.wind)}m/h% </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apikey = "72c3892be7b4efbc064a6b2d18164d51";

    let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apikey}`;
    axios.get(apiurl).then(handleResponse);

    return "Loading...";
  }
}
