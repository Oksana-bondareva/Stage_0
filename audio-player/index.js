const song = document.getElementById('song');
const background = document.getElementById("background");
const playerFon = document.getElementById("player-fon");
const singer = document.getElementById("singer");
const songName = document.getElementById("song-name");
let progress = document.getElementById("progress");
let durationTime = document.getElementById("duration-time");
let currentTime = document.getElementById("current-time");
let playButton = document.getElementById("play-button");
let pauseButton = document.getElementById("pause-button");
let nextButton = document.getElementById("next-song-button");
let prevButton = document.getElementById("prev-song-button");
let isPlay = false;

function playAudio() {
    if(!isPlay) {
      playButton.style.display = "none";
      pauseButton.style.display = "block";
      playerFon.style.transform = "scale(1.15)";
      song.play();
      isPlay = true;
    } else {
      playButton.style.display = "block";
      pauseButton.style.display = "none";
      isPlay = false;
      song.pause();
      playerFon.style.transform = "scale(1)";
    }
  };



  
  