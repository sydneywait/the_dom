// Use document.querySelector() to grab a reference to each element in your HTML. Use the .innerHTML property to set the text of each element to the matching value in your object. (For example, the h1 with the id of "title" should contain the title property of your movieObject, etc).

// // // THE DOM
// // Declare a new variable that will hold the page title
//  // Grab a reference to the #page-title element
// var headingContainer = document.querySelector("#page-title");
// // Set the innerHTML of the page title
// headingContainer.innerHTML = "This is my awesome website!";
// console.log(headingContainer);
// // Build an object representing the current weather conditions
// // Build an object representing the current weather conditions
// var todaysWeather = {
//    temperature: 32,
//    date: "Saturday, Dec 8",
//    conditions: "Sunny and cold"
// }
// // Get a reference to the DOM elements
// var tempContainer = document.querySelector("#temperature");
// var dateContainer = document.querySelector("#todays-date");
// var conditionsContainer = document.querySelector("#conditions");
// // Set their innerHTML to the corresponding data
// tempContainer.innerHTML = todaysWeather.temperature;
// dateContainer.innerHTML = todaysWeather.date;
// conditionsContainer.innerHTML = todaysWeather.conditions;


var movieObject = {
    title: "Star Wars: A New Hope",
    genre: "Science Fiction",
    releaseDate: "May 25, 1977"
  }

  var titleContainer = document.querySelector("#title");
  var genreContainer = document.querySelector("#genre");
  var releaseDateContainer = document.querySelector("#release-date");

  titleContainer.innerHTML = movieObject.title;
  genreContainer.innerHTML = movieObject.genre;
  releaseDateContainer.innerHtml = movieObject.releaseDate;
  
  