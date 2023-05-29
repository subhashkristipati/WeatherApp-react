import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function WeatherForm({ setCity }) {
    const [inputCity, setInputCity] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setCity(inputCity);
        navigate('/weather');
    };

    return (
        <div className="container">
            <h1>Weather App</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="city">Enter city:</label>
                <input
                    type="text"
                    id="city"
                    value={inputCity}
                    onChange={(e) => setInputCity(e.target.value)}
                />
                <button type="submit">Get Weather</button>
            </form>
        </div>
    );
}

export default WeatherForm;
