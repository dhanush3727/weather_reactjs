import React, { useState } from "react";
import "./Weather.css";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import humidity_icon from "../Assets/humidity.png";
import rain_icon from "../Assets/rain.png";
import search_icon from "../Assets/search.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import thunderStorm_icon from "../Assets/thunderstorm.png";
import mist_icon from "../Assets/mist.png";

const Weather = () => {
  const api = {
    key: "40d20a875850f2a1848a1264a48555c3",
    base: "https://api.openweathermap.org/data/2.5/",
  };
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const [climate, setClimate] = useState(clear_icon);

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
    // if (
    //   weather.weather[0].icon === "01d" ||
    //   weather.weather[0].icon === "01n"
    // ) {
    //   setClimate(clear_icon);
    // } else if (
    //   weather.weather[0].icon === "02d" ||
    //   weather.weather[0].icon === "02n"
    // ) {
    //   setClimate(cloud_icon);
    // } else if (
    //   weather.weather[0].icon === "03d" ||
    //   weather.weather[0].icon === "03n"
    // ) {
    //   setClimate(cloud_icon);
    // } else if (
    //   weather.weather[0].icon === "04d" ||
    //   weather.weather[0].icon === "04n"
    // ) {
    //   setClimate(cloud_icon);
    // } else if (
    //   weather.weather[0].icon === "09d" ||
    //   weather.weather[0].icon === "09n"
    // ) {
    //   setClimate(rain_icon);
    // } else if (
    //   weather.weather[0].icon === "10d" ||
    //   weather.weather[0].icon === "10n"
    // ) {
    //   setClimate(rain_icon);
    // } else if (
    //   weather.weather[0].icon === "11d" ||
    //   weather.weather[0].icon === "11n"
    // ) {
    //   setClimate(thunderStorm_icon);
    // } else if (
    //   weather.weather[0].icon === "13d" ||
    //   weather.weather[0].icon === "13n"
    // ) {
    //   setClimate(snow_icon);
    // } else if (
    //   weather.weather[0].icon === "50d" ||
    //   weather.weather[0].icon === "50n"
    // ) {
    //   setClimate(mist_icon);
    // } else {
    //   setClimate(clear_icon);
    // }
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
      {weather.main && weather.name && weather.wind !== "undefined" ? (
        <>
          {/* <div className="weather-img">
            <img src={climate} alt="" />
          </div> */}
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
