import React, { useState } from "react";
import "./Weather.css";
import humidity_icon from "../Assets/humidity.png";
import search_icon from "../Assets/search.png";
import wind_icon from "../Assets/wind.png";

const Weather = () => {
  const api = {
    key: "40d20a875850f2a1848a1264a48555c3",
    base: "https://api.openweathermap.org/data/2.5/",
  };
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchCity = () => {
    try {
      fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          setWeather(result);
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container">
      <div className="top-bar">
        <input
          type="text"
          className="cityName"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="search-icon" onClick={searchCity}>
          <img src={search_icon} alt="" />
        </div>
      </div>
      {typeof weather.main && weather.name && weather.wind !== "undefined" ? (
        <>
          <div className="weather-temp">{weather.main.temp}°C </div>
          <div className="weather-location">{weather.name}</div>
          <div className="data-container">
            <div className="element">
              <img src={humidity_icon} alt="" className="icon" />
              <div className="data">
                <div className="humidity-percentage">
                  {weather.main.humidity}%
                </div>
                <div className="text">Humidity</div>
              </div>
            </div>
            <div className="element">
              <img src={wind_icon} alt="" className="icon" />
              <div className="data">
                <div className="wind-rate">{weather.wind.speed}km/h</div>
                <div className="text">Wind Speed</div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="error">
            <h3>{weather.message}</h3>
          </div>
          <div className="weather-temp">---</div>
          <div className="weather-location">---</div>
          <div className="data-container">
            <div className="element">
              <img src={humidity_icon} alt="" className="icon" />
              <div className="data">
                <div className="humidity-percentage">---</div>
                <div className="text">Humidity</div>
              </div>
            </div>
            <div className="element">
              <img src="" alt="" className="icon" />
              <div className="data">
                <div className="wind-rate">---</div>
                <div className="text">Wind Speed</div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;
