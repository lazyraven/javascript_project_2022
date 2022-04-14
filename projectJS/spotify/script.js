console.log('welcome to spotify');

//Intialize the variable

let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

const songs = [
  {
    songName: 'Aawara Shaam Hai-(Mr-Jatt.com)',
    filePath: 'songs/1.mp3',
    coverPath: 'covers/1.jpg',
  },
  {
    songName: 'Mar Jaayen - Loveshhuda  (Atif Aslam) (SongsMp3.Com)',
    filePath: 'songs/2.mp3',
    coverPath: 'covers/2.jpg',
  },
  {
    songName: '  Naina (Altamash Faridi) 190Kbps',
    filePath: 'songs/3.mp3',
    coverPath: 'covers/3.jpg',
  },
  {
    songName: 'Bolna (Kapoor & Sons ) (SongsMp3.Com) ',
    filePath: 'songs/4.mp3',
    coverPath: 'covers/4.jpg',
  },
  {
    songName: 'Dil Dhadakne Do [www.DJMaza.Com]  ',
    filePath: 'songs/5.mp3',
    coverPath: 'covers/5.jpg',
  },
  {
    songName: 'Sooraj Ki Baahon Mein [www.DJMaza.Com]',
    filePath: 'songs/6.mp3',
    coverPath: 'covers/6.jpg',
  },
  {
    songName: 'Janib (Duet Version) [Songspk.name]',
    filePath: 'songs/7.mp3',
    coverPath: 'covers/7.jpg',
  },
];

songItems.forEach((element, i) => {
  console.log(element, i);
  element.getElementsByTagName('img')[0].src = songs[i].coverPath;
  element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});
//audioElement.play();

//handle play/pause
masterPlay.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove('fa-circle-pause-');
    masterPlay.classList.add('fa-circle-play');
    gif.style.opacity = 0;
  }
});

//Listen to events
audioElement.addEventListener('timeupdate', () => {
  console.log('timeupdate');
  //update seekbar
  progress = (audioElement.currentTime / audioElement.duration) * 100;
  myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName('songItemPlay')).forEach(
    (element) => {
      element.classList.remove('fa-circle-pause');
      element.classList.add('fa-circle-play');
    }
  );
};

Array.from(document.getElementsByClassName('songItemPlay')).forEach(
  (element) => {
    console.log('songitem called');
    element.addEventListener('click', (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id); // for song list play -> current songindex update index = parseInt(e.target.id)
      e.target.classList.remove('fa-circle-play');
      e.target.classList.add('fa-circle-pause');
      audioElement.src = `songs/${songIndex + 1}.mp3`; // song audioelement change dynamically
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;

      masterPlay.classList.remove('fa-circle-play');
      masterPlay.classList.add('fa-circle-pause');
    });
  }
);

document.getElementById('next').addEventListener('click', () => {
  if (songIndex > 7) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`; // song audioelement change dynamically
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;

  masterPlay.classList.remove('fa-circle-play');
  masterPlay.classList.add('fa-circle-pause');
});

document.getElementById('previous').addEventListener('click', () => {
  if (songIndex <= 7) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`; // song audioelement change dynamically
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;

  masterPlay.classList.remove('fa-circle-play');
  masterPlay.classList.add('fa-circle-pause');
});

/// Question resolved

// 1. list play/ pause match master play/pause
//2. ui in responsive correct
//3 when song is finish move net song
