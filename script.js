const apiKey = "6a77f56d0f4870e0a23dae85fe4c9512";

const searchBtn = document.getElementById("searchBtn");
const locationBtn = document.getElementById("locationBtn");
const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weatherResult");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const feelsLike = document.getElementById("feelsLike");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const weatherIcon = document.getElementById("weatherIcon");
const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");
const spinner = document.getElementById("spinner");
const forecastContainer = document.getElementById("forecastContainer");
const forecastSection = document.getElementById("forecast");
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city === "") {
        alert("Please enter a city name!");
        return;
    }
    fetchWeatherByCity(city);
});

locationBtn.addEventListener("click", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                fetchWeatherByCoords(latitude, longitude);
            },
            (error) => {
                alert("Geolocation failed: " + error.message);
            }
        );
    } else {
        alert("Geolocation is not supported by your browser.");
    }
});

async function fetchWeatherByCity(city) {
    spinner.classList.remove("hidden");
    try {
        // Fetch Current Weather Data
        const currentWeatherResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        if (!currentWeatherResponse.ok) {
            throw new Error("City not found!");
        }

        const currentWeatherData = await currentWeatherResponse.json();
        console.log("Current Weather Data:", currentWeatherData); // Debugging

        // Fetch Forecast Data
        const forecastResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
        );

        if (!forecastResponse.ok) {
            throw new Error("City not found!");
        }

        const forecastData = await forecastResponse.json();
        console.log("Forecast Data:", forecastData); // Debugging

        // Display Weather and Forecast
        displayWeather(forecastData.city, currentWeatherData, forecastData.list[0]);
        displayForecast(forecastData.list);

    } catch (error) {
        alert(error.message);
    } finally {
        spinner.classList.add("hidden");
    }
}

function displayWeather(cityData, currentWeatherData, weatherData) {
    // Display City Name and Country
    cityName.textContent = `Weather in ${cityData.name}, ${cityData.country}`;

    // Display Weather Information
    temperature.textContent = `Temperature: ${weatherData.main.temp}°C`;
    description.textContent = `Condition: ${weatherData.weather[0].description}`;
    feelsLike.textContent = `Feels Like: ${weatherData.main.feels_like}°C`;
    humidity.textContent = `Humidity: ${weatherData.main.humidity}%`;
    windSpeed.textContent = `Wind Speed: ${weatherData.wind.speed} m/s`;

    // Display Weather Icon
    const iconCode = weatherData.weather[0].icon;
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    // Convert Sunrise and Sunset to Readable Time
    if (currentWeatherData.sys && currentWeatherData.sys.sunrise && currentWeatherData.sys.sunset) {
        console.log("Sunrise timestamp:", currentWeatherData.sys.sunrise);
        console.log("Sunset timestamp:", currentWeatherData.sys.sunset);

        const sunriseTime = new Date(currentWeatherData.sys.sunrise * 1000).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: true });
        const sunsetTime = new Date(currentWeatherData.sys.sunset * 1000).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: true });

        sunrise.textContent = `Sunrise: ${sunriseTime}`;
        sunset.textContent = `Sunset: ${sunsetTime}`;
    } else {
        console.log("Sunrise/Sunset data is missing!");
        sunrise.textContent = "Sunrise: Not Available";
        sunset.textContent = "Sunset: Not Available";
    }

    weatherResult.classList.remove("hidden");
}

function displayForecast(forecast) {
    forecastSection.classList.remove("hidden");
    forecastContainer.innerHTML = ""; // Clear previous forecast
    forecast.forEach((forecastData, index) => {
        if (index % 8 === 0) { // Show weather every 24 hours (3-hour intervals)
            const date = new Date(forecastData.dt * 1000);
            const weatherCard = document.createElement("div");
            weatherCard.classList.add("forecast-card");
            weatherCard.innerHTML = `
                <p>${date.toLocaleDateString()}</p>
                <img src="https://openweathermap.org/img/wn/${forecastData.weather[0].icon}@2x.png" alt="Icon">
                <p>Temp: ${forecastData.main.temp}°C</p>
            `;
            forecastContainer.appendChild(weatherCard);
        }
    });
}
