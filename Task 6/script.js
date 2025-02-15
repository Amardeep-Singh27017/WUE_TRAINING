const apiKey = "3b16179e17000ba64c68b067be2e1d8b";

// Fetch default weather data for Bareilly on app load
document.addEventListener("DOMContentLoaded", () => {
    fetchWeatherData(city = "Bareilly");
});

async function fetchWeatherData(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        if (!response.ok) {
            throw new Error('Unable to fetch weather data');
        }
        const data = await response.json();
        updateWeatherApp(data)
    } catch (error) {
        console.error("Error fetching weather data");
    }
}

const cityName = document.getElementById("city");
const cityTemp = document.querySelector(".temperature");
const windSpeed = document.querySelector(".wind-speed");
const humidity = document.querySelector(".humidity");
const visibility = document.querySelector(".visivility-distance");
const weatherDesc = document.querySelector(".weather-desc");
const date = document.querySelector(".date");
const descriptionIcon = document.querySelector(".sunny")

const formData = document.querySelector(".search-form");
const inputElement = document.querySelector(".city-input");

formData.addEventListener('submit', (e) => {
    e.preventDefault()
    const city = inputElement.value.trim();
    if (city != "") {
        fetchWeatherData(city)
        inputElement.value = "";
    }
})

function updateWeatherApp(data) {
    cityName.textContent = data.name;
    cityTemp.textContent = `${Math.round(data.main.temp)}°C`;
    windSpeed.textContent = `${data.wind.speed} km/h`;
    humidity.textContent = `${data.main.humidity} %`
    visibility.textContent = `${data.visibility / 1000} km`;
    weatherDesc.textContent = data.weather[0].description;

    const currentDate = new Date()
    date.textContent = currentDate.toDateString();

    const weatherIocnName = getweatherIocnName(data.weather[0].main);
    descriptionIcon.textContent = weatherIocnName;

}

function getweatherIocnName(weatherCondition) {
    switch (weatherCondition) {
        case "Clear":
            return "sunny";
        case "Clouds":
            return "cloudy";
        case "Rain":
            return "rainy";
        case "Snow":
            return "snowy";
        case "Mist":
            return "misty";
        case "Drizzle":
            return "drizzly";
        case "Thunderstorm":
            return "thunderstorm";
        case "smoke":
            return "cloud";
        default:
            return "help";
    }
}
