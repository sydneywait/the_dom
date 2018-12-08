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

// Practice one:

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

//Practice two:

var movieSchedule = [
    {
      title: "Ralph Breaks the Internet",
      rating: "PG",
      poster: "https://lumiere-a.akamaihd.net/v1/images/r_ralphbreakstheinternet_header_ddt-17403_08ef6d92.jpeg?region=0,0,1024,1274&optimize=true"
    }, 
    {
      title: "The Grinch",
      rating: "G",
      poster: "https://images-na.ssl-images-amazon.com/images/I/71vgX4VFdiL._SY679_.jpg"
    },
    {
      title: "Fantastic Beasts: The Crimes of Grindlewald",
      rating: "PG-13",
      poster: "https://images-na.ssl-images-amazon.com/images/I/716fk%2BBZ-NL._SY606_.jpg"
    }
  ]

//   // The contents of this object will change depending on what today's special is
// var currentSpecial = {
//     name: "Fried Green Tomato BLT",
//     description: "So good you'll cry",
//     price: 9.99
//   }
  
//   // We'll use the object to build up an HTML string 
//   var htmlString = `
//     <h3 class="dish-name">${currentSpecial.name}</h3>
//     <p class="dish-description">
//       ${currentSpecial.description}
//     </p>
//     <h5 class= "dish-price">${currentSpecial.price}</h5>
//   `
//   // Then we'll put the html string in the #daily-special div
//   document.querySelector("#daily-special").innerHTML = htmlString;

console.log(movieSchedule);

var htmlString = `
<h3 class ="title">${movieSchedule[0].title}</h3>
<p class = "rating">Rated: ${movieSchedule[0].rating}<p>
<img class = "movie-poster" src=${movieSchedule[0].poster} alt = Movie Poster"/>
<br/>
<h3 class ="title">${movieSchedule[1].title}</h3>
<p class = "rating">Rated: ${movieSchedule[1].rating}<p>
<img class = "movie-poster" src=${movieSchedule[1].poster} alt = Movie Poster"/>
<br/>
<h3 class ="title">${movieSchedule[2].title}</h3>
<p class = "rating">Rated: ${movieSchedule[2].rating}<p>
<img class = "movie-poster" src=${movieSchedule[2].poster} alt = Movie Poster"/>


`

console.log(htmlString);

document.querySelector("#movie-schedule").innerHTML = htmlString;





  
  