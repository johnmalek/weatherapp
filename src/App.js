import React, { useState } from 'react'
import './App.css'
import WeatherForm from './components/WeatherForm';
import WeatherDetails from './components/WeatherDetails';


function App() {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);


    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

    const fetchWeather = async (city) => {
        setLoading(true);
        setError('');
        setWeatherData(null);

        try{
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
            );
            const data = await response.json();

            if(response.ok){
                setWeatherData(data);
            }else{
                setError(data.message || "City not found");
            }
        } catch {
            setError("Failed to fetch weather data.");
        }finally{
            setLoading(false);
        }
    };


    return (
        <div>
            <h1>Weather App</h1>
            <WeatherForm onSubmit={fetchWeather} />

            {loading && <p>Loading...</p>}
            {error && <p className='error'>{error}</p>}
            <WeatherDetails weatherData={weatherData}/>
        </div>
    );

}

export default App