const body = document.querySelector('body');

// get a random number 
const getRandomNum = (a) => {
  return Math.floor(Math.random() * a) + 1;
}
let randomNum = getRandomNum(20);
const timeOfDay = getTimeOfDay();

// setting a new background
function setBg(){
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/matthewTheWizzard/stage1-tasks/assets/images/${timeOfDay}/${randomNum.toString().padStart(2, 0)}.jpg`;
    img.onload = () => {
        body.style.backgroundImage = `url('https://raw.githubusercontent.com/matthewTheWizzard/stage1-tasks/assets/images/${timeOfDay}/${randomNum.toString().padStart(2, 0)}.jpg')`;
    }
}
setBg();

// slider
slideNext = document.querySelector('.slide-next');
slidePrev = document.querySelector('.slide-prev');

function getSlideNext () {
    if(randomNum == 20){
      randomNum = 1;
    }
    else{
      randomNum = randomNum + 1;
    }
    setBg();
}
function getSlidePrev () {
    if(randomNum == 1){
      randomNum = 20;
    }
    else{
      randomNum = randomNum - 1;
    }
    setBg();
}

slideNext.addEventListener('click', getSlideNext)
slidePrev.addEventListener('click', getSlidePrev)