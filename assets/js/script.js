 $(document).ready(function() {

  var cityInputEl = document.querySelector("#search-input")

  // user search bar function for all us cities 
  var searchTerm = cityInputEl.value.trim();

  if (searchTerm) {
   getCityWeather(searchTerm); 
  } else {
    alert("Please enter a city name.")
  }
    
 
  // grab searchTerm from HTML input tag
  var getCityWeather = function(city) {
    let APIkey = "f28e06375945149aa9a3231cdaaa0e87" + city;
  
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${APIkey}` )
    .then(function(response) {
    return response.json();
    })
    .then(function(weatherData) {
    console.log(weatherData);
    // dig into weatherData object, grab data

    // make HTML elements ( cards, h1 tags) from this data

    // put past searches into localStorage.
  });


  // render info from api on the page 

  // document .ready (jquery)
  }});