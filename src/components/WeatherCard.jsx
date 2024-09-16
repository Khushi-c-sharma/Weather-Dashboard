import React from 'react';

const WeatherCard = ({ data }) => {
  // Destructure the data object to get required properties
  const { Date: date, Temperature, Day, Night } = data;

  // Correcting Date usage by creating a new Date object
  const formattedDate = new Date(date).toLocaleDateString();

  return (
    <div className="weather-card">
      <h3>{formattedDate}</h3>
      <p>Day: {Day.IconPhrase}</p>
      <p>Night: {Night.IconPhrase}</p>
      <p>Min Temp: {Math.round(Temperature.Minimum.Value)}°{Temperature.Minimum.Unit}</p>
      <p>Max Temp: {Math.round(Temperature.Maximum.Value)}°{Temperature.Maximum.Unit}</p>
    </div>
  );
};

export default WeatherCard;

