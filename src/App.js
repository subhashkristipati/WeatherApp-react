import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WeatherForm from './Components/WeatherForm';
import WeatherDisplay from './Components/WeatherDisplay';

function App() {
  const [city, setCity] = useState('');

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<WeatherForm setCity={setCity} />} />
        <Route path="/weather" element={<WeatherDisplay city={city} />} />
      </Routes>
    </Router>
  );
}

export default App;
