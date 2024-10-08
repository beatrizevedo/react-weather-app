import React, { useState } from 'react';
import './Weather.css';
import icon from './img/icon.png';
import axios from 'axios';

export default function Weather() {
  let [city, setCity] = useState('');
  let [temperature, setTemperature] = useState('');
  let [conditions, setConditions] = useState('');
  let [date, setDate] = useState('');
  let [iconUrl, setIconUrl] = useState('');

  function showWeather(response) {
    setTemperature(response.data.temperature.current);
    setConditions(response.data.condition.description);
    setIconUrl(
      `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
    );
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
      <h2>Sunday</h2>
      <h3>{Math.round(temperature)}ºC</h3>
      <h4>{conditions}</h4>
    </div>
  );
}
