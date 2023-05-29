import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BallTriangle } from 'react-loader-spinner';
import { Link } from 'react-router-dom';

function WeatherDisplay({ city }) {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9fbc2404f5ad3f9c12f712b9627574d8`
                );
                setWeatherData(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchWeather();
    }, [city]);

    if (loading) {
        return (
            <div className="container">
                <div className="loader-container">
                    <BallTriangle color="#007bff" height={80} width={80} />
                </div>
            </div>
        );
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="container">
            <h1>Weather in {city}</h1>
            <div className="weather-display">
                <p>Temperature: {weatherData.main.temp} °C</p>
                <p>Humidity: {weatherData.main.humidity}%</p>
                <p>Wind Speed: {weatherData.wind.speed} m/s</p>
                <Link to="/"><button style={{ display: "center" }}>New search</button></Link>
            </div>
        </div>

    );
}

export default WeatherDisplay;
