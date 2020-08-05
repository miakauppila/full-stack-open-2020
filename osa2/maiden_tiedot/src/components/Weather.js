import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ country }) => {
  //console.log("props", country);
  const [weather, setWeather] = useState(null);
  //get data from weatherstack API with axios
  //useEffect runs once, updates state and component rerenders
  useEffect(() => {
    //weatherstack api key must be received on npm start
    const api_key = process.env.REACT_APP_API_KEY;
    const params = {
      access_key: api_key,
      query: `${country.capital}, ${country.name}`,
    };
    console.log("weather effect");
    axios
      .get("http://api.weatherstack.com/current", { params })
      .then((response) => {
        console.log("weather promise fulfilled");
        setWeather(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [country]);
  console.log("render", weather);

  //ternary operator shows 'Loading' before weather fetch is ready
  return weather ? (
    <div>
      <h2>Weather in {country.capital}</h2>
      <p>Tempature: {weather.current.temperature} Celsius </p>
      <img
        className="icon"
        src={weather.current.weather_icons[0]}
        alt="Weather icon"
      />
      <p>
        Wind: {weather.current.wind_speed} mph direction{" "}
        {weather.current.wind_dir}{" "}
      </p>
    </div>
  ) : (
    <div>Loading weather</div>
  );
};

export default Weather;
