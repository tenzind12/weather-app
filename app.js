// b96becff413f27af66e84acd6ed6de36

// const weather = async (city) => {
//   const res = await fetch(
//     `http://api.weatherstack.com/current?access_key=b96becff413f27af66e84acd6ed6de36&query=${city}`
//   );
//   const data = res.json();
//   console.log(data.json());
// };

// weather("berlin");

// const weather = async (city) => {
//   const res = await axios.get(
//     `http://api.weatherstack.com/current?access_key=b96becff413f27af66e84acd6ed6de36&query=${city}`
//   );
//   console.log(res);
// };

// document.addEventListener("DOMContentLoaded", async () => {

// function getUserLocation() {
//   const pos = navigator.geolocation.getCurrentPosition((position) => {
//     const { latitude, longitude } = position.coords;
//     // console.log(latitude, longitude);
//     // console.log(position);
//     // return latitude, longitude;

//     console.log(`https://www.google.fr/maps/@${latitude},${longitude},13z`);
//   });
// }
// getUserLocation();

let weather = {
  api_key: "f7e2c1f8567b334eb52550100edf2d34",
  fetchWeather: function (city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f7e2c1f8567b334eb52550100edf2d34`
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  // fetchWeather: async function (city) {
  //   const response = await fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f7e2c1f8567b334eb52550100edf2d34`
  //   );
  //   const data = await response.json();
  //   // return data;
  //   console.log(data);
  // },

  displayWeather: function (data) {
    try {
      const { name } = data;
      const { description, icon } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      console.log(name, description, icon, temp, humidity, speed);
      document.querySelector(".city").innerText = `Weather in ${name}`;
      document.querySelector(".temp").textContent = `${temp}° Celcius`;
      document.querySelector(".icon").src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      document.querySelector(".description").innerText = description;
      document.querySelector(".humidity").innerText = `${humidity}%`;
      document.querySelector(".wind").innerText = `Wind speed: ${speed} km/h`;
    } catch (error) {
      document.querySelector(".city").innerText =
        "Sorry, the location is not found. Please check the input again. ☹";
    }
  },
};

// weather.fetchWeather("paris");

const input = document.querySelector(".search-bar");
const button = document.querySelector(".search button");

button.addEventListener("click", function () {
  weather.fetchWeather(input.value);
});

document.querySelector(".search-bar").addEventListener("keyup", function (e) {
  if (e.key == "Enter") {
    weather.fetchWeather(input.value);
  }
});
