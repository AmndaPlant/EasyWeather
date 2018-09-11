function ipLookUp() {
    $.ajax('http://ip-api.com/json')
        .then(
            function success(response) {
                var location = {
                    lat: response.lat,
                    long: response.lon
                };
                getWeatherDataByLatLong(location);
            },

            function fail(data, status) {
                console.log('Request Failed. Returned status of', status);
            }
        );
}

if ('geolocation' in navigator) {
    // Check if geolocation is supported on the current browser
    navigator.geolocation.getCurrentPosition(
        function success(position) {
            // Getting location was a success
            var location = {
                lat: position.coords.latitude,
                long: position.coords.longitude
            };
            getWeatherDataByLatLong(location);
        },
        function error(error_message) {
            // Getting location resulted in an error
            console.error('An error occured when trying to retrive location', error_message);
            ipLookUp();
        }
    );
} else {
    // Geolocation isn't supported
    // Get location some other way
    console.log('geolocation is not enabled on this browser');
    ipLookUp();
}