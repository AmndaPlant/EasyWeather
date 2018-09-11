$(document).ready(function() {
    // Process the form
    $('form').submit(function(event) {
        var city = $('input[name=city]').val();

        event.preventDefault();

        getWeatherByCity(city);
    });
});