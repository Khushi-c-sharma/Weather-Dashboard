import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';
import Sidebar from './Sidebar';

const API_KEY = 'xtu4YvGYHk83Rso6joBdOrwzrGlg103Y'; // Replace with your AccuWeather API key

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // Load favorites and recent searches from local storage
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const storedRecentSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
    setFavorites(storedFavorites);
    setRecentSearches(storedRecentSearches);
  }, []);

  useEffect(() => {
    // Save favorites and recent searches to local storage
    localStorage.setItem('favorites', JSON.stringify(favorites));
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
  }, [favorites, recentSearches]);

  const fetchWeather = async (cityName) => {
    try {
      setError('');
      // Step 1: Get the location key for the city
      const locationResponse = await axios.get(
        `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${cityName}`
      );

      if (locationResponse.data.length === 0) {
        setError('City not found.');
        return;
      }

      const locationKey = locationResponse.data[0].Key;
      const cityNameFromApi = locationResponse.data[0].LocalizedName;

      // Step 2: Fetch 5-day weather forecast using the location key
      const weatherResponse = await axios.get(
        `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}&metric=true`
      );

      setWeatherData(weatherResponse.data.DailyForecasts);

      if (!recentSearches.includes(cityNameFromApi)) {
        setRecentSearches([cityNameFromApi, ...recentSearches.slice(0, 4)]); // Limit to 5 recent searches
      }
    } catch (error) {
      setError('Error fetching weather data. Please try again.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) fetchWeather(city);
  };

  const handleFavorite = (cityName) => {
    if (!favorites.includes(cityName)) {
      setFavorites([...favorites, cityName]);
    }
  };

  const handleRemoveFavorite = (cityName) => {
    setFavorites(favorites.filter((fav) => fav !== cityName));
  };

  return (
    <div className="weather-app-container">
      <Sidebar
        favorites={favorites}
        recentSearches={recentSearches}
        onFavoriteClick={fetchWeather}
        onRemoveFavorite={handleRemoveFavorite}
      />
      <div className="weather-app">
        <h1>Weather Dashboard</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
          />
          <button type="submit">Get Weather</button>
        </form>
        {error && <p className="error">{error}</p>}
        <button onClick={() => handleFavorite(city)} disabled={!city || favorites.includes(city)}>
          Add to Favorites
        </button>
        <div className="weather-cards">
          {weatherData.map((data, index) => (
            <WeatherCard key={index} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;