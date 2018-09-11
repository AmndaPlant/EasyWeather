function getWeatherData(location) {
    $.ajax(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.long}&units=metric&appid=58abfd87d2804c10f44de168d0bf8854`)
        .then(
            function success(response) {
                document.getElementById("weather").innerHTML = JSON.stringify(response);
            },

            function fail(data, status) {
                console.log('Request failed. Returned status of', status);
            }
        );
}