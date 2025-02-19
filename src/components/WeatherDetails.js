import React from "react";

function WeatherDetails({ weatherData, unit }) {
    if (!weatherData) return null;

    const { name, main, weather, wind } = weatherData;
    const temperatureUnit = unit === "metric" ? "°C" : "°F";
    const windSpeedUnit = unit === "metric" ? "m/s" : "mph";

    return (
        <div>
            <h2>{name}</h2>
            <p>Temperature: {main.temp}{temperatureUnit}</p>
            <p>Weather: {weather[0].description}</p>
            <p>Humidity: {main.humidity}%</p>
            <p>Wind Speed: {wind.speed} {windSpeedUnit}</p>
            <img
                src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                alt="weather icon"
            />
        </div>
    )
}

export default WeatherDetails;