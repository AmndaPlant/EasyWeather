function getWeatherData(location) {
    $.ajax(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.long}&units=metric&appid=58abfd87d2804c10f44de168d0bf8854`)
        .then(
            function success(response) {
                displayCurrentConditions(response)
            },

            function fail(data, status) {
                console.log('Request failed. Returned status of', status);
            }
        );
}

function displayCurrentConditions(conditions) {
    document.getElementById('temp').innerHTML = `${Math.round(conditions.main.temp)}°C`;
    document.getElementById('desc').innerHTML = conditions.weather[0].description;
    document.getElementById('humidity').innerHTML = `Humidity: ${conditions.main.humidity}%`
}