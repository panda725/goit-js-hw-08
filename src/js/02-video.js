import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const videoPlayerRef = document.querySelector('#vimeo-player');
const LOCAL_KEY = 'videoplayer-current-time';

const player = new Player(videoPlayerRef);

player.on(
  'timeupdate',
  throttle(e => {
    localStorage.setItem(LOCAL_KEY, e.seconds);
  }),
  1000
);

player.setCurrentTime(localStorage.getItem(LOCAL_KEY));
