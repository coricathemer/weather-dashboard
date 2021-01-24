// user search bar function for all us cities 
$(document).ready(function() {


var searchTerm = "Tucson";

// displays current and future conditions for searched city and save that search to local storage
var APIkey = "f28e06375945149aa9a3231cdaaa0e87"

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
fetch (
  `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${APIkey}`
)
.then(function(response) {
  return response.json();
})
.then(function(response) {
  console.log(response);
})


// render info from api on the page 

// document .ready (jquery)
});