import React, { useState, useEffect } from "react";
import WeatherData from "./WeatherData";
import InputSearch from "./InputSearch";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const api_key = "361130d32bd48bc0cb762e1acf1a7955";

  useEffect(() => {
    searchWeather("London");
  }, []);

  const searchWeather = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${api_key}`;
      const response = await fetch(url);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-purple-200 to-blue-400 rounded-lg shadow-lg p-6 mb-6">
        <h1 className="text-4xl font-bold text-white mb-4 font-mono italic text-center  text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue ">
         Today's Weather
        </h1>
        <InputSearch onSearch={searchWeather} />
      </div>
      <WeatherData data={weatherData} />
    </div>
  );
};

export default WeatherApp;
