// greeting function
const greeting = document.querySelector('.greeting');

function showGreeting(){
    const timeOfDay = getTimeOfDay();
    greeting.textContent = `Good ${timeOfDay},`;
}

function getTimeOfDay(){
    const greetingDate = new Date ();
    const hours = greetingDate.getHours();
    if(hours>=0 && hours < 6){
        return 'night'
    }
    else if(hours >=6 && hours < 12){
        return "morning"
    }
    else if(hours >=12 && hours < 18){
        return "afternoon"
    }
    else {
        return "evening"
    }
}

// Local storage
function setLocalStorage() {
  // greeting
  const name = document.querySelector('.name');
  localStorage.setItem('name', name.value);
  localStorage.setItem('city', city.value)
}

function getLocalStorage() {
  const name = document.querySelector('.name');
  if(localStorage.getItem('name')) {
    name.value = localStorage.getItem('name');
  }
  if(localStorage.getItem('city')) {
    city.value = localStorage.getItem('city')
    
  }
  else{
    city.value = 'Minsk';
    targetCity = city.value;
  }
}


window.addEventListener('beforeunload', setLocalStorage)
window.addEventListener('load', getLocalStorage)

