'use strict';

function clockAnimation() {
  const deg = 6;
  const hour = document.querySelector('.hour');
  const min = document.querySelector('.min');
  const sec = document.querySelector('.sec');
  const clock = document.querySelector('#clock');
  let start = clock.classList.value === 'visibleClock';

  const refreshIntervalID = setInterval(() => {
    start = clock.classList.value === 'visibleClock';
    if (!start) clearInterval(refreshIntervalID);;
    let day = new Date();
    let hh = (day.getHours() + day.getMinutes() / 60) * 30;
    let mm = (day.getMinutes() + day.getSeconds() / 60) * deg;
    let ss = (day.getSeconds() + day.getMilliseconds() / 1000) * deg;
    // console.log('1');
    hour.style.transform = `rotateZ(${hh}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;
  }, 200);
};

const onClickMenu = () => {
  const clockIcon = document.querySelector('.clockIcon');
  const stopwatchIcon = document.querySelector('.stopwatchIcon');

  if (clockIcon.classList.value === 'clockIcon') {
    clockIcon.classList.add('iconVisible');
    stopwatchIcon.classList.add('iconVisible');
  } else {
    clockIcon.classList.remove('iconVisible');
    stopwatchIcon.classList.remove('iconVisible');
  }
}

const onClickTimer = () => {
  clockAnimation();
  const clock = document.querySelector('#clock');
  const timer = document.querySelector('#stopwatch');

  clock.classList.remove('visibleClock');
  clock.classList.add('hiddenClock');
  timer.classList.remove('hiddenTimer');
  timer.classList.add('visibleTimer');
}

const onClickClock = () => {
  clockAnimation();
  const clock = document.querySelector('#clock');
  const timer = document.querySelector('#stopwatch');

  clock.classList.remove('hiddenClock');
  clock.classList.add('visibleClock');
  timer.classList.remove('visibleTimer');
  timer.classList.add('hiddenTimer');
}

class Menu extends React.Component {

  render() {
    return (
      <div className="menu">
        <img className="menuIcon" onClick={onClickMenu} src="./img/menu.png" width="68px" height="68px" />
        <img className="clockIcon" onClick={onClickClock} src="./img/clock_icon.png" width="60px" height="60px" />
        <img className="stopwatchIcon" onClick={onClickTimer} src="./img/stopwatch_icon.png" width="68px" height="68px" />
      </div>
    );
  }
}

let domContainer = document.querySelector('#menu');
ReactDOM.render(<Menu />, domContainer);


