function displayTemperature(response) {
  console.log(response.data);
}

let apiKey = "d4d65b2d65c67ac793e30f32ff741c0b";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
