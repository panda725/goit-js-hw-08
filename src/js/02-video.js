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

player.setCurrentTime(localStorage.getItem(LOCAL_KEY)).catch(function (error) {
  switch (error.name) {
    // что нужно было указывать в case ?
    // setCurrentTime(seconds: number): Promise<number, (RangeError|Error)>
    case 'RangeError':
      localStorage.getItem(LOCAL_KEY) < 0;
      // the time was less than 0 or greater than the video’s duration
      break;

    default:
      alert('Invalid time duration');
      break;
  }
});
