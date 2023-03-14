/* 1. Next code-line import Player from the "@vimeo/player" library 
and the throttle function from the "lodash.throttle" library. */

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

/* 2. Next code-line select the iframe element with the id
"vimeo-player" and create a new Player object. 
3. Call the rebootPage() function.
*/

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
rebootPage();

/* 4. Next code-line declare the onPlay() function which takes a parameter "data" and
stores the value of the "seconds" property of the "data" parameter 
in the "time" variable. The function then returns the value of the
"getCurrentTimeAddLocalStorage()" function with the "time" parameter.
*/

const onPlay = data => {
  const time = data.seconds;
  console.log(getCurrentTimeAddLocalStorage(time));
};

/* 5. Next code-line declare the getCurrentTimeAddLocalStorage() function 
which takes a parameter "second" and stores the value of the "second" parameter 
in the "videoplayer-current-time" item of localStorage. The function then returns 
the value of the "videoplayer-current-time" item of localStorage.
*/

const getCurrentTimeAddLocalStorage = second => {
  localStorage.setItem('videoplayer-current-time', `${second}`);
  return localStorage.getItem('videoplayer-current-time');
};

/* 6. Next code-line add an event listener for the "timeupdate" event to the 
player object and pass the "onPlay" function as the first parameter and the 
throttle() function with the parameters "onPlay" and "1000" as the second parameter.
*/

player.on('timeupdate', throttle(onPlay, 1000));

/* 7. Next code-line set the current time of the player object 
to the value of the "videoplayer-current-time" item of localStorage.
*/

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

/* 8. Next code-line declare the rebootPage() function which checks if the
"videoplayer-current-time" item of localStorage is null and if so, sets the
value of the "videoplayer-current-time" item of localStorage to 0.
*/

function rebootPage() {
  if (!localStorage.getItem('videoplayer-current-time'))
    localStorage.setItem('videoplayer-current-time', 0);
}
