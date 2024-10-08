import React, { useState } from 'react';
import './Weather.css';
import axios from 'axios';
import { Oval } from 'react-loader-spinner';

export default function Weather() {
  let [ready, setReady] = useState(false);
  let [city, setCity] = useState('');
  let [temperature, setTemperature] = useState('');
  let [conditions, setConditions] = useState('');
  let [iconUrl, setIconUrl] = useState('');
  let [humidity, setHumidity] = useState('');
  let [temperatureFeel, setTemperatureFeel] = useState('');

  function showWeather(response) {
    setTemperature(response.data.temperature.current);
    setConditions(response.data.condition.description);
    setHumidity(response.data.temperature.humidity);
    setIconUrl(
      `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
    );
    setTemperatureFeel(response.data.temperature.feels_like);
    setReady(true);
  }

  function updateWeather(event) {
    event.preventDefault();
    let apiKey = '049to2dbdcb7ffe54d8674f61d4413a5';
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiURL).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form onSubmit={updateWeather}>
          <input
            type="search"
            placeholder="Enter your city"
            className="search-city"
            onChange={updateCity}
          />
          <input type="submit" value="Search" className="submit-button" />
        </form>
        <img src={iconUrl} alt="weather-icon" />
        <h1>{city}</h1>
        <h2>{Math.round(temperature)}ºC</h2>
        <p>Feels like {Math.round(temperatureFeel)}ºC</p>
        <h3>{conditions}</h3>
        <p>Humidity of {humidity}%</p>
      </div>
    );
  } else {
    let apiKey = '049to2dbdcb7ffe54d8674f61d4413a5';
    let city = 'Porto';
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiURL).then(showWeather);

    return (
      <Oval
        visible={true}
        height="80"
        width="80"
        color="#ffdb26"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    );
  }
}
