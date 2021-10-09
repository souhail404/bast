const daysel = document.getElementById('days'); 
const hoursel = document.getElementById('hours');
const minutsel = document.getElementById('minuts');
const secondsel = document.getElementById('seconds');

const newyears = '10 oct 2021'
function countdown(){
      const newyearsdate= new Date(newyears);
      const currentdate= new Date();
      const ttseconds = (newyearsdate - currentdate + 75600000) /1000;
      const Days = Math.floor(ttseconds /3600 / 24);
      const hours = Math.floor(ttseconds/3600) % 24;
      const minuts = Math.floor(ttseconds /60) % 60;
      const seconds = Math.floor(ttseconds % 60);
      console.log(Days ,hours, minuts, seconds );

      daysel.innerHTML = timeformat(Days);
      hoursel.innerHTML = timeformat(hours);
      minutsel.innerHTML = timeformat(minuts);
      secondsel.innerHTML = timeformat(seconds);
}
    function  timeformat(time){
          return time <10 ? `0${time}` : time;
      }

countdown();
setInterval(countdown , 1000);
