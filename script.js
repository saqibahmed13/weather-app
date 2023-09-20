const apiKey = 'bd5e378503939ddaee76f12ad7a97608';
const searchButton = document.getElementById('search-button');
const cityInput = document.getElementById('city-input');
const cityName = document.getElementById('city-name');
const weatherInfo = document.getElementById('weather-info');


function addweather(){
    const city = cityInput.value;

   // Make a request to the weather API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then((response) => response.json())
        .then((data) => {
            // Update the UI with weather information
            cityName.textContent = city;
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            weatherInfo.innerHTML = `Temperature: ${temperature}°C<br>Condition: ${description}`;
        })
        .catch((error) => {
            console.error('Error fetching weather data:', error);
            weatherInfo.textContent = 'City not found. Please try again.';
        });
    }
    cityInput.addEventListener('keydown', (event)=>{
            if(event.key === 'Enter'){
            addweather();
            }
        });
        
        searchButton.addEventListener('click', () => {
            addweather();
});






// const apiKey = 'bd5e378503939ddaee76f12ad7a97608'; // Replace with your API key
// const searchButton = document.getElementById('search-button');
// const cityInput = document.getElementById('city-input');
// const cityName = document.getElementById('city-name');
// const weatherInfo = document.getElementById('weather-info');

// // Function to handle the search action
// function searchWeather() {
//     const city = cityInput.value;

//     // Make a request to the weather API
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
//         .then((response) => response.json())
//         .then((data) => {
//             // Update the UI with weather information
//             cityName.textContent = city;
//             const temperature = data.main.temp;
//             const description = data.weather[0].description;
//             weatherInfo.innerHTML = `Temperature: ${temperature}°C<br>Condition: ${description}`;
//         })
//         .catch((error) => {
//             console.error('Error fetching weather data:', error);
//             weatherInfo.textContent = 'City not found. Please try again.';
//         });
// }

// // Listen for the Enter key press on the input field
// cityInput.addEventListener('keydown', (event) => {
//     if (event.key === 'Enter') {
//         searchWeather(); // Call the searchWeather function when Enter key is pressed
//     }
// });

// // Listen for the click event on the search button
// searchButton.addEventListener('click', () => {
//     searchWeather(); // Call the searchWeather function when the button is clicked
// });




