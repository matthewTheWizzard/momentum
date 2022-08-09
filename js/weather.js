const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const city = document.querySelector('.city');

let targetCity;
if(localStorage.getItem('city')){
  targetCity = localStorage.getItem('city')
}
else{
  targetCity = "Minsk"
}

city.placeholder = 'Введите город';


city.addEventListener('change', changeCity)

function changeCity(){
    targetCity = city.value;
    getWeather()
}

async function getWeather() {  
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${targetCity}&lang=en&appid=81e65205695a8b378f7ca0d075d6c296&units=metric`;
  const res = await fetch(url);
  const data = await res.json(); 
  
  // check if the city is not in API
  if(data.cod == 400 || data.cod == 404){ 
    weatherIcon.className = 'weather-icon owf';
    wind.textContent = ''
    temperature.textContent = ''
    humidity.textContent = ''
    weatherDescription.textContent = ''
    city.value = ''
    return false
  }
  else{
  
  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  
  wind.textContent = `Wind speed: ${(Math.floor(data.wind.speed))} m/s`
  temperature.textContent = `${(Math.floor(data.main.temp))}°C`;
  humidity.textContent = `Humidity: ${data.main.humidity}%`
  weatherDescription.textContent = data.weather[0].description;
  }
}
getWeather()