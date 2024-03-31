import React from "react";

const WeatherData = ({ data }) => {
  if (!data) {
    return null;
  }

  const { main, wind, name, weather } = data;
  const weatherIconUrl = `http://openweathermap.org/img/w/${weather[0].icon}.png`;

  const weatherDescription =
    weather[0].description.charAt(0).toUpperCase() +
    weather[0].description.slice(1);

  const currentDate = new Date();
  const options = { weekday: 'long', month: 'short', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  return (
    <div className="bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img src={weatherIconUrl} alt="Weather Icon" className="w-12 h-12" />
          <div className="ml-4">
            <h2 className="text-3xl font-semibold text-gray-100">{name}</h2>
            <p className="text-lg text-gray-200">{weatherDescription}</p>
          </div>
        </div>
        <div className="text-lg font-bold text-gray-100">{formattedDate}</div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-lg font-bold text-gray-100">Temperature:</p>
          <p className="text-4xl text-yellow-300">{main.temp}°C</p>
        </div>
        <div>
          <p className="text-lg font-bold text-gray-100">Humidity:</p>
          <p className="text-xl text-blue-200">{main.humidity}%</p>
        </div>
        <div>
          <p className="text-lg font-bold text-gray-100">Wind Speed:</p>
          <p className="text-xl text-blue-200">{wind.speed} km/h</p>
        </div>
        <div>
          <p className="text-lg font-bold text-gray-100">Wind Direction:</p>
          <p className="text-xl text-white">{wind.deg}°</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherData;
