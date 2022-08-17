import Player from '@vimeo/player';

const videoPlayerRef = document.querySelector('#vimeo-player');
console.log(videoPlayerRef);

const player = new Player(videoPlayerRef);

player.on('play', function () {
  console.log('played the video!');
});
