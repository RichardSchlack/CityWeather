/**
 * JavaScript file for getting the weather for a given city. 
 * 
 * Author: Richard Schlack
 */
const key = "5f90f90921541e20860cd7b0bea71efa";
const btn = document.querySelector('button');

/**
 * Asynchronous function that gets weather data from given city. If the givin city
 * is not valid, will print the message:
 * {city} is not a valid city: Please try again. 
 */
async function getWeather() {
  let location = document.getElementById('city-box').value;

  let response = await fetch("http://api.openweathermap.org/data/2.5/weather?q=" + location + "&APPID=" + key + "&units=imperial");
  const data = await response.json();
  const loc = data.name;
  if(loc) {
    document.getElementById('not-valid-city').textContent = null;
    const des = data.weather[0].main;
    const temp = data.main.temp;
    const min = data.main.temp_min;
    const max = data.main.temp_max;
    const win = Math.round(data.wind.speed * 2.2369);

    document.getElementById('loc').textContent = loc;
    document.getElementById('des').textContent = des;
    document.getElementById('temp').textContent = temp + "° F";
    document.getElementById('min').textContent = min + "° F";
    document.getElementById('max').textContent = max + "° F";
    document.getElementById('win').textContent = win + "mph";
  } else {
    document.getElementById('not-valid-city').textContent = location + " is not a valid city: Please try again. ";

    document.getElementById('loc').textContent = null;
    document.getElementById('des').textContent = null;
    document.getElementById('temp').textContent = null;
    document.getElementById('min').textContent = null;
    document.getElementById('max').textContent = null;
    document.getElementById('win').textContent = null;
  }
  
}

btn.onclick = getWeather;