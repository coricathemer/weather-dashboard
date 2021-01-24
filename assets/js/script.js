 $(document).ready(function() {

  // user search bar function for all us cities 
  var searchTerm = "Tucson";
  // grab searchTerm from HTML input tag

  var APIkey = "f28e06375945149aa9a3231cdaaa0e87"

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${APIkey}` )
  .then(function(response) {
  return response.json();
  })
  .then(function(weatherData) {
  console.log(weatherData);
  // dig into weatherData object, grab data

  // make HTML elements ( cards, h1 tags) from this data

  // put past searches into localStorage.
  })


  // render info from api on the page 

  // document .ready (jquery)
});