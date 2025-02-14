# Weather App

WeatherX is a simple yet powerful weather application that allows users to fetch real-time weather information for any city or their current location. Built with HTML, CSS, and JavaScript, this application uses the OpenWeatherMap API to fetch weather data and display it in a clean and user-friendly interface.

### Home Screen (With Search Bar and Navbar)

![Home Screen](</assets/Screenshot 2025-02-10 at 13.37.44.png>)

## Features

- **Search Weather by City**: Users can enter a city name to fetch its weather data.
- **Current Location Weather**: Users can click a button to get the weather for their current location using geolocation.
- **5-Day Weather Forecast**: Displays the weather for the next 5 days in 3-hour intervals.
- **Current Weather Information**: Shows temperature, humidity, wind speed, weather description, sunrise and sunset times.
- **Dark/Light Mode Toggle**: Switch between dark and light themes for a better user experience.
- **Responsive Design**: The app is fully responsive, ensuring it looks great on all devices.
- **Logo**: A small logo is added in the navbar next to the search box.

## Technologies Used

- **HTML**: Structure of the app.
- **CSS**: Styling of the app (Custom styling with additional animations and responsiveness).
- **JavaScript**: Fetches weather data from the OpenWeatherMap API and handles user interaction.
- **OpenWeatherMap API**: Used to fetch current weather and forecast data.

## API Used

- **OpenWeatherMap API**: The app uses the OpenWeatherMap API to fetch weather data. You can get your own API key from [OpenWeatherMap](https://openweathermap.org/).

## Installation and Setup

Follow these steps to get the app up and running on your local machine:

 **Clone the repository**:
   ```bash
   git clone https://github.com/Devansh1974/Weather-App.git
   cd weather-app
```

## How It Works

### Fetching Weather Data

1. The app fetches weather data based on the city entered by the user or the current location using the geolocation feature.
2. It then processes the response from the OpenWeatherMap API to display the current weather details such as:
   - Temperature
   - Weather condition (e.g., Clear, Cloudy, etc.)
   - Feels like temperature
   - Humidity
   - Wind speed
   - Sunrise and sunset times
3. The app also displays a 5-day weather forecast (in 3-hour intervals).

### Dark/Light Mode Toggle

1. The user can toggle between dark and light mode using the dark/light mode button in the navbar.
2. This is handled by toggling a `dark-mode` class on the `body` element, which adjusts the styling based on the selected theme.

### Geolocation

1. The app uses the browser's geolocation API to fetch the user's current location and display weather data for that location.

## Screenshots

### 5-Day Forecast

![5-day Forecast](</assets/Screenshot 2025-02-10 at 13.38.36.png>)

## Future Improvements

- **Add more weather information**: Include more data points like UV index, air quality, etc.
- **Add more detailed UI elements**: Interactive maps, weather charts, etc.
- **Error Handling**: Improve error messages for invalid inputs or API failures.
- **Responsive Enhancements**: Improve responsiveness for various screen sizes.
- **Localization**: Show weather data in different languages and units (Celsius/Fahrenheit).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
