function getWeatherDataByLatLong(location) {
    $.ajax(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.long}&units=metric&appid=58abfd87d2804c10f44de168d0bf8854`)
        .then(
            function success(response) {
                displayCurrentConditions(response);
            },

            function fail(data, status) {
                console.log('Request failed. Returned status of', status);
            }
        );
}

function getWeatherByCity(city) {
    $.ajax(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=58abfd87d2804c10f44de168d0bf8854`)
        .then(
            function success(response) {
                displayCurrentConditions(response);
            },

            function fail(data, status) {
                console.log('Request failed. Returned status of', status);
            }
        )
}

function displayCurrentConditions(conditions) {
    var currentTime = new Date();
    document.getElementById('location').innerHTML = `EasyWeather - Weather for ${conditions.name}, ${conditions.sys.country}`;
    document.getElementById('updated').innerHTML = `Now (updated ${currentTime.getHours() < 12 || currentTime.getHours === 0 ? currentTime.getHours() : currentTime.getHours() - 12}:${currentTime.getMinutes()})`;
    document.getElementById('temp').innerHTML = `${Math.round(conditions.main.temp)}°C`;
    document.getElementById('desc').innerHTML = conditions.weather[0].description;
    document.getElementById('humidity').innerHTML = `Humidity: ${conditions.main.humidity}%`
    setConditionIcon(conditions.weather[0].icon);
}

function setConditionIcon(iconCode) {
    let iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`
    document.getElementById('current-icon').src = iconUrl;
}