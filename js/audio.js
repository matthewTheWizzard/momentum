const playList = [
  {      
    title: 'Aqua Caelestis',
    src: '../momentum/assets/sounds/Aqua Caelestis.mp3',
    duration: '00:58'
  },  
  {      
    title: 'River Flows In You',
    src: '../momentum/assets/sounds/River Flows In You.mp3',
    duration: '03:50'
  },
  {      
    title: 'Ennio Morricone',
    src: '../momentum/assets/sounds/Ennio Morricone.mp3',
    duration: '03:50'
  },
  {      
    title: 'Summer Wind',
    src: '../momentum/assets/sounds/Summer Wind.mp3',
    duration: '03:50'
  },
  
]

const play = document.querySelector('.play')
const playListContainer = document.querySelector('.play-list')
const prev = document.querySelector('.play-prev')
const next = document.querySelector('.play-next')
// ADD THE TRACKS
playList.forEach(el =>{
    const li = document.createElement('li');
    li.classList.add('play-item');
    li.textContent = el.title;
    playListContainer.append(li);
})


// PLAY THE AUDIO
let playNum = 0;
const audio = new Audio();
let isPlay = false;
function playAudio() {
  audio.src = playList[playNum].src;
  audio.currentTime = 0;

  if(!isPlay){
   audio.play();
   isPlay = true
   play.classList.add('pause')
  }
  else{
    audio.pause();
    isPlay = false;
    play.classList.remove('pause')
  }
  playListContainer.children[playNum].classList.add('item-active')
}

// CHANGE THE AUDIO
function playNext(){
    playListContainer.children[playNum].classList.remove('item-active')
    if(playNum == playList.length - 1){
        playNum = 0;
    }
    else{
        playNum = playNum + 1
    }
    playListContainer.children[playNum].classList.add('item-active')
    
    audio.src = playList[playNum].src;
    audio.currentTime = 0;
    audio.play();
    play.classList.add('pause')
    isPlay = true;
}

function playPrev(){
    playListContainer.children[playNum].classList.remove('item-active')
    if(playNum == 0){
        playNum = playList.length - 1;
    }
    else{
        playNum = playNum - 1
    }
    playListContainer.children[playNum].classList.add('item-active')
    
    audio.src = playList[playNum].src;
    audio.currentTime = 0;
    audio.play();
    play.classList.add('pause')
    isPlay = true;
}

prev.addEventListener('click', playPrev)
next.addEventListener('click', playNext)
play.addEventListener('click', playAudio)



// TO-DO!!!
// после окончания проигрывания первого трека, автоматически запускается проигрывание следующего. Треки проигрываются по кругу: после последнего снова проигрывается первый. 
// Для удобства проверки треки возьмите небольшой продолжительности. Обрезать треки можно здесь: https://mp3cut.net/ru/