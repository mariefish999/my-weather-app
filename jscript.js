// Get the current date and time
let now = new Date();

// Arrays for the day names
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Get the current day
let day = days[now.getDay()];

// Get the current hour and minute
let hours = now.getHours();
let minutes = now.getMinutes();

if (minutes < 10) {
  minutes = "0" + minutes;
}

// Update the paragraph
let currentInfo = document.querySelector("#current-day");

currentInfo.innerHTML = `
  ${day} ${hours}:${minutes}, cloudy <br>
  Humidity: <strong class="humidity">87%</strong>,
  Wind: <strong class="speed">7.2Km/h</strong>
`;

// Runs when the form is submitted
function displayTemperature(response) {
  let temperature = Math.round(response.data.temperature.current);

  document.querySelector(".current-temperature-value").textContent =
    temperature;
}

function searchCity(event) {
  event.preventDefault();

  let city = document.querySelector(".city-input").value;
  cityHeading.textContent = city;

  let apiKey = "bfa13fc054ba9da9t363eaa0a63ef4oa";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(displayTemperature);
}

let searchForm = document.querySelector("#search-form");
let cityHeading = document.querySelector(".current-city h1");

searchForm.addEventListener("submit", searchCity);
