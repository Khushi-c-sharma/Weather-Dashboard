# Weather Dashboard
This project is a weather dashboard application built with React, using the AccuWeather API to display weather data for up to 5 days for any given city. It includes functionality to add cities to a favorites list and display recently searched cities. The UI includes a sidebar for city management and a weather card section for detailed weather reports.

## Features
* Search Weather: Search for weather forecasts in any city.
* 5-day Forecast: View up to 5 days of weather forecasts for each city.
* Favorites: Add cities to your favorites list for quick access.
* Recent Searches: View a list of recently searched cities.
* Dynamic Weather Cards: Display weather data for each city with custom background images.

## Technologies Used
* React: For building the user interface.
* AccuWeather API: For fetching real-time weather data.
* Axios: For making API requests.

## Setup and Installation
1. Clone the repository:
`git clone https://github.com/Khushi-c-sharma/Weather-Dashboard.git`
`cd weather-dashboard`

2. Install the dependencies:
`npm install`
3. Create an account on AccuWeather and get your API key.
4. Create a .env file in the root directory and add your AccuWeather API key:
`REACT_APP_ACCUWEATHER_API_KEY=your_api_key_here`
6. Start the development server:
`npm run dev`
8. Open your browser and go to http://localhost:3000.

## Usage
* Search a City: Use the input field to search for a city. The weather information will be displayed for the city.
* Add to Favorites: Click the "Add to Favorites" button to save cities for easy access.
* Remove from Favorites: Click the "Remove" button next to any city in the favorites list.
* View Recent Searches: The sidebar displays a list of your recently searched cities.

## File structure
├── public
│   └── index.html          # Main HTML file
├── src
│   ├── components
│   │   ├── Sidebar.jsx     # Sidebar for managing cities
│   │   ├── WeatherApp.jsx  # Main app component
│   │   ├── WeatherCard.jsx # Weather card component
│   └── styles
│       └── App.css         # CSS styles for the app
├── .env                    # Environment variables (API key)
├── package.json            # Project dependencies
└── README.md               # Readme file

## API Usage
This app uses the AccuWeather API to fetch real-time weather data.

* AccuWeather API: To fetch data, we use Axios to make GET requests to the AccuWeather API endpoints, retrieving the weather forecast for the requested cities.
* API Documentation: You can find more details on the AccuWeather API here.

## Dependencies
1. React
2. Axios
3. AccuWeather API

## Future Enhancements
* Hourly Forecast: Add hourly forecast data for each day.
* Weather Alerts: Integrate weather alerts (e.g., severe weather warnings).
* Custom User Settings: Allow users to customize their experience (e.g., Celsius/Fahrenheit toggle).
