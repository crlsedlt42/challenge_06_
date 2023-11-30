var searchBtn = document.querySelector("#searchBtn");

// Put fetch request inside a function

function weatherInfo() {
    var cityName = document.querySelector("#cityName").value;
    var weatherAPI = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=14db6a3dfe9576471ef5e9cdba113cb3`;
    console.log(cityName);


    fetch(weatherAPI) // Endpoint
        .then(response => response.json())
        .then(data => {
            console.log(data);
            //displayTodaysWeather(data);
            //displayFiveDayForecast(data);

            var temp = data.list.main.temp;
            var wind = data.list.wind.speed;
            var humidity = data.list.main.humidity;

            var tempEl = document.createElement("p");
            tempEl.innerText = temp + " °C";
            resultsDivTemp.appendChild(tempEl);
            
            var windEl = document.createElement("p");
            windEl.innerText = wind + " MPH";
            resultsDivWind.appendChild(windEl);

            var humidityEl = document.createElement("p");
            humidityEl.innerText = humidity + "%";
            resultsDivHum.appendChild(humidityEl);
        });



}

weatherInfo();

// // Add event listen to button for funtionality with api

// searchBtn.addEventListener("click", weatherInfo);

// // Route with inputed city name from user

// function displayTodaysWeather (dataParam) {
//     // Render Weather Data On Screen
// }

// // Funntion to display 5 day forecast

// function displayFiveDayForecast (dataParam) {

// }