const deg = 6;
const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

setInterval(() => {
  let day = new Date();
  let hh = (day.getHours() + day.getMinutes() / 60) * 30;
  let mm = (day.getMinutes() + day.getSeconds() / 60) * deg;
  let ss = (day.getSeconds() + day.getMilliseconds() / 1000) * deg;

  hour.style.transform = `rotateZ(${hh}deg)`;
  min.style.transform = `rotateZ(${mm}deg)`;
  sec.style.transform = `rotateZ(${ss}deg)`;
}, 10)

