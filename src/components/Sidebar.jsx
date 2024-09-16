import React from 'react';

const Sidebar = ({ favorites, recentSearches, onFavoriteClick, onRemoveFavorite }) => {
  return (
    <div className="sidebar">
      <h2>Favorites</h2>
      <ul>
        {favorites.map((city, index) => (
          <li key={index}>
            {city}
            <button onClick={() => onFavoriteClick(city)}>View</button>
            <button onClick={() => onRemoveFavorite(city)}>Remove</button>
          </li>
        ))}
      </ul>
      <h2>Recent Searches</h2>
      <ul>
        {recentSearches.map((city, index) => (
          <li key={index}>
            {city}
            <button onClick={() => onFavoriteClick(city)}>View</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
