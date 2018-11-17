function getWeatherDataByLatLong(location) {
    $.ajax(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.long}&units=metric&appid=58abfd87d2804c10f44de168d0bf8854`)
        .then(
            function success(response) {
                displayCurrentConditions(response);
            },

            function fail(data, status) {
                console.log('Request failed. Returned status of ', status);
            }
        );
    
        $.ajax(`https://api.openweathermap.org/data/2.5/forecast/?lat=${location.lat}&lon=${location.long}&units=metric&appId=58abfd87d2804c10f44de168d0bf8854`)
            .then(
                function success(response) {
                    displayFiveDayForecast(response);
                },

                function fail(data, status) {
                    console.log('Request failed. Returned status of ', status)
                }
            )
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

        $.ajax(`https://api.openweathermap.org/data/2.5/forecast/?q=${city}&units=metric&appId=58abfd87d2804c10f44de168d0bf8854`)
            .then(
                function success(response) {
                    displayFiveDayForecast(response);
                },

                function fail(data, status) {
                    console.log('Request failed. Returned status of ', status)
                }
            )

        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
}

function displayCurrentConditions(conditions) {
    var currentTime = new Date();
    document.getElementById('location').innerHTML = `EasyWeather - Weather for ${conditions.name}, ${conditions.sys.country} <a class="btn btn-primary" href="#search">Change location</a>`;
    document.getElementById('updated').innerHTML = `Now (updated ${currentTime.getHours() < 12 || currentTime.getHours === 0 ? currentTime.getHours() : currentTime.getHours() - 12}:${currentTime.getMinutes()})`;
    document.getElementById('temp').innerHTML = `${Math.round(conditions.main.temp)}°C`;
    document.getElementById('desc').innerHTML = conditions.weather[0].description.charAt(0).toUpperCase() + conditions.weather[0].description.substring(1);
    document.getElementById('wind').innerHTML = getWindString(conditions.wind);
    document.getElementById('pressure').innerHTML = `Pressure: ${conditions.main.pressure} hPa`;
    document.getElementById('humidity').innerHTML = `Humidity: ${conditions.main.humidity}%`
}

function displayFiveDayForecast(conditions) {
    let html = '';
    for (let i = 0; i < conditions.cnt; i++) {
        const time = new Date(conditions.list[i].dt * 1000).toLocaleString();
        const desc = conditions.list[i].weather[0].description.charAt(0).toUpperCase() + conditions.list[i].weather[0].description.substring(1)
        const high = `High: ${conditions.list[i].main.temp_max} + °C`;
        const low = `Low: ${conditions.list[i].main.temp_min} °C`;
        const wind = getWindString(conditions.list[i].wind);
        html +=
            `<div class="row"> 
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">${time}</h3>
                            <h5 class="card-text">${desc}</h5>
                            <p class="card-text">${high}</p>
                            <p class="card-text">${low}</p>
                            <p class="card-text">${wind}</p>
                        </div>
                    </div>
                </div>
            </div>`;
    }

    document.getElementById('forecast').innerHTML = html;
}

function getWindString(wind) {
    let windString = 'Wind: ' + wind.speed + ' m/s ';
    if (wind.deg) {
        let windDeg = wind.deg;
        let windDirs = [
            'N', 'NNE', 'NE', 'ENE',
            'E', 'ESE', 'SE', 'SSE',
            'S', 'SSW', 'SW', 'WSW',
            'W', 'WNW', 'NW', 'NNW'
        ];

        windDeg %= 360;
        if (windDeg < 0) windDeg += 360;
        
        windDeg += 180;

        let direction = Math.floor(windDeg * windDirs.length / 360);
        let index = direction % windDirs.length;

        windString += windDirs[index];
    }

    return windString;
}