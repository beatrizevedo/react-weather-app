import React from 'react';
import './Weather.css';
import icon from './img/icon.png';

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input type="search" placeholder=" Enter your city" />
        <input type="submit" value="Search" />
      </form>
      <img src={icon} alt="weather-icon" />
      <h1>Porto</h1>
      <h2>Sunday</h2>
      <h3>29ºC</h3>
      <h4>Sunny</h4>
    </div>
  );
}
