var searchBtn = document.querySelector("#searchBtn");

// Put fetch request inside a function

function weatherInfo() {
    var cityName = document.querySelector("#cityName").value;
    var weatherAPI = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=456382b69ba78bc0d18ae825d9b6baff`;
    console.log(cityName);


    fetch(weatherAPI) // Endpoint
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayTodaysWeather(data);
            displayFiveDayForecast(data);
        });



}

// Add event listen to button for funtionality with api

searchBtn.addEventListener("click", weatherInfo);

// Route with inputed city name from user

function displayTodaysWeather (dataParam) {
    // Render Weather Data On Screen
}

// Funntion to display 5 day forecast

function displayFiveDayForecast (dataParam) {

}