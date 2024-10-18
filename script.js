document.getElementById('get-location').addEventListener('click', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                // Success callback
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                document.getElementById('location-info').innerHTML = 
                    `Latitude: ${lat}<br>Longitude: ${lon}`;
            },
            function(error) {
                // Error callback
                let errorMessage = 'Unable to retrieve your location.';
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        errorMessage = 'User denied the request for Geolocation.';
                        break;
                    case error.POSITION_UNAVAILABLE:
                        errorMessage = 'Location information is unavailable.';
                        break;
                    case error.TIMEOUT:
                        errorMessage = 'The request to get user location timed out.';
                        break;
                    case error.UNKNOWN_ERROR:
                        errorMessage = 'An unknown error occurred.';
                        break;
                }
                document.getElementById('location-info').innerHTML = errorMessage;
            }
        );
    } else {
        // Geolocation is not supported
        document.getElementById('location-info').innerHTML = 
            'Geolocation is not supported by this browser.';
    }
});
function gotoStyles() {
    const element = document.getElementById("news_section");
    element.scrollIntoView({ behavior: 'smooth'});
}
function gotoTrending() {
    const element = document.getElementById("trendz");
    element.scrollIntoView({ behavior: 'smooth'});
}
function gotoBrands() {
    const element = document.getElementById("brands");
    element.scrollIntoView({ behavior: 'smooth'});
}
function gotoAboutus() {
    const element = document.getElementById("ab_out");
    element.scrollIntoView({ behavior: 'smooth'});
}
function gotoHome() {
    const element = document.getElementById("home");
    element.scrollIntoView({ behavior: 'smooth'});
 }
 function gotoCampus() {
    const element = document.getElementById("camp-us");
    element.scrollIntoView({ behavior: 'smooth'});
}