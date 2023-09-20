const song = document.getElementById("song");
const background = document.getElementById("background");
const playerFon = document.getElementById("player-fon");
const singer = document.querySelector(".singer");
const songName = document.querySelector(".song-name");
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

  songIndex = 0;

  let songs = [
    "./assets/audio/J_Balvin_and_Willy_William_-_Mi_Gente_50236773.mp3",
    "./assets/audio/Arilena_Ara_-_Nentori_Beverly_Pills_Remix_46331815.mp3",
    "./assets/audio/Florida_-_Gfdr_OST_forsazh_7_45766929.mp3"
  ];

  let playerFones = [
    "./assets/img/maxresdefault1.jpg",
    "./assets/img/maxresdefault.jpg",
    "./assets/img/img3.png"
  ];

  let singers = [
    "J Balvin, Willy William",
    "Arilena Ara",
    "Florida"
  ];

  let songNames = [
    "Me Gente",
    "Nentori",
    "Gfdr"
  ];

  function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
      songIndex = 0;
    }
    song.src = songs[songIndex];
    playerFon.src = playerFones[songIndex];
    background.src = playerFones[songIndex];
    singer.textContent = singers[songIndex];
    songName.textContent = songNames[songIndex];
    if (isPlay = true) {
      playButton.style.display = "block";
      pauseButton.style.display = "none";
      isPlay = false;
      song.pause();
      playerFon.style.transform = "scale(1)";
    }
  }

  




  
  