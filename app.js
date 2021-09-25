
let weather = {
  api_key: "f7e2c1f8567b334eb52550100edf2d34",
  fetchWeather: async function (city) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f7e2c1f8567b334eb52550100edf2d34`
    );
    const data = await response.json();
    this.displayWeather(data);
  },


  displayWeather: function (data) {
    try {
      const { name } = data;
      const { description, icon } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
//       console.log(name, description, icon, temp, humidity, speed);
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

const input = document.querySelector(".search-bar");
const button = document.querySelector(".search button");

button.addEventListener("click", function () {
  weather.fetchWeather(input.value);
  input.value = "";
});

document.querySelector(".search-bar").addEventListener("keyup", function (e) {
  if (e.key == "Enter") {
    weather.fetchWeather(input.value);
    input.value = "";
  }
});
