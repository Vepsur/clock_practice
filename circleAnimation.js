function debounce(f, ms) {
  let isCooldown = false;

  return function () {
    if (isCooldown) return;
    f.apply(this, arguments);
    isCooldown = true;
    setTimeout(() => isCooldown = false, ms);
  };
}

function circleAnimation(circle, check, check2) {
  animate({
    duration: 1000,
    timing: bounceEaseOut,
    draw: (progress) => {
      const skewCircle = () => {
        check2 ?
          circle.style.transform = `scale(${progress / 10 + 1}, ${progress / 10 + 1})` :
          circle.style.transform = `scale(${1.1 - progress / 10}, ${1.1 - progress / 10})`;
      }
      (check) ? skewCircle(check2) : skewCircle(check2);
    }
  })
}

function makeEaseOut(timing) {
  return function (timeFraction) {
    return 1 - timing(1 - timeFraction);
  }
}

function bounce(timeFraction) {
  for (let a = 0, b = 1; 1; a += b, b /= 2) {
    if (timeFraction >= (7 - 4 * a) / 11) {
      return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
    }
  }
}

function animate(options) {

  var start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction от 0 до 1
    var timeFraction = (time - start) / options.duration;
    if (timeFraction > 1) timeFraction = 1;

    // текущее состояние анимации
    var progress = options.timing(timeFraction)

    options.draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
}

let bounceEaseOut = makeEaseOut(bounce);
const circle = document.querySelector(".circle_1");
if (circle) {
  document.querySelector('body').addEventListener('mousemove', debounce((event) => {

    const centerY = (circle.getBoundingClientRect().top + circle.getBoundingClientRect().bottom) / 2;
    const centerX = (circle.getBoundingClientRect().left + circle.getBoundingClientRect().right) / 2;
    let xc = centerX - event.pageX;
    let yc = centerY - event.pageY;
    let distance = Math.sqrt(xc * xc + yc * yc);
    let check = distance < (circle.getBoundingClientRect().width / 2) && distance < (circle.getBoundingClientRect().height / 2)
    let check2 = circle.style.transform !== 'scale(1.1, 1.1)';

    if (check) circleAnimation(circle, check, check2);
  }, 1050));
}