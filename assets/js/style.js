// user search bar function for all us cities 
var searchTerm = "Tucson";

// displays current and future conditions for searched city and save that search to local storage
var APIkey = "f28e06375945149aa9a3231cdaaa0e87"

//api.openweathermap.org/data/2.5/forecast?q=${searchTerm}&appid=${APIkey}
fetch (
  `https://api.openweathermap.org/data/2.5/forecast?q=${searchTerm}&appid=${APIkey}`
)
.then(function(response) {
  return response.json();
})
.then(function(response) {
  console.log(response);

  var forecastDay1Date = response.list[0].dt_txt;
})


// render info from api on the page 

