const time = document.querySelector('.time');
const date = document.querySelector('.date');

// getting a date
function showDate(){
    const dateDate = new Date();
    const options = {weekday: 'long', month: 'long', day: 'numeric'};
    const currentDate = dateDate.toLocaleDateString('en-EN', options);
    date.textContent = currentDate;
}

// Call the function with time and greeting

function showTime(){
   const dateTime = new Date();
   const currentTime = dateTime.toLocaleTimeString('en-EN',{hour12 : false});
   time.textContent = currentTime;
   setTimeout(showTime, 1000);
   showDate();
   showGreeting();
};

showTime();

