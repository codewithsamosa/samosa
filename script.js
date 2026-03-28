let audio = new Audio();
let playBtn = document.getElementById("playBtn");
let currentSongText = document.getElementById("currentSong");
let songs = document.querySelectorAll(".song");

let isPlaying = false;

songs.forEach(song => {
  song.addEventListener("click", () => {
    let src = song.getAttribute("data-src");
    audio.src = src;
    audio.play();
    isPlaying = true;
    playBtn.textContent = "⏸";
    currentSongText.textContent = song.innerText;
  });
});

playBtn.addEventListener("click", () => {
  if (!audio.src) return;

  if (isPlaying) {
    audio.pause();
    playBtn.textContent = "▶";
  } else {
    audio.play();
    playBtn.textContent = "⏸";
  }

  isPlaying = !isPlaying;
});
