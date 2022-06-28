'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function clockAnimation() {
  var deg = 6;
  var hour = document.querySelector('.hour');
  var min = document.querySelector('.min');
  var sec = document.querySelector('.sec');
  var clock = document.querySelector('#clock');
  var start = clock.classList.value === 'visibleClock';

  var refreshIntervalID = setInterval(function () {
    start = clock.classList.value === 'visibleClock';
    if (!start) clearInterval(refreshIntervalID);;
    var day = new Date();
    var hh = (day.getHours() + day.getMinutes() / 60) * 30;
    var mm = (day.getMinutes() + day.getSeconds() / 60) * deg;
    var ss = (day.getSeconds() + day.getMilliseconds() / 1000) * deg;
    // console.log('1');
    hour.style.transform = 'rotateZ(' + hh + 'deg)';
    min.style.transform = 'rotateZ(' + mm + 'deg)';
    sec.style.transform = 'rotateZ(' + ss + 'deg)';
  }, 200);
};

var onClickMenu = function onClickMenu() {
  var clockIcon = document.querySelector('.clockIcon');
  var stopwatchIcon = document.querySelector('.stopwatchIcon');

  if (clockIcon.classList.value === 'clockIcon') {
    clockIcon.classList.add('iconVisible');
    stopwatchIcon.classList.add('iconVisible');
  } else {
    clockIcon.classList.remove('iconVisible');
    stopwatchIcon.classList.remove('iconVisible');
  }
};

var onClickTimer = function onClickTimer() {
  clockAnimation();
  var clock = document.querySelector('#clock');
  var timer = document.querySelector('#stopwatch');

  clock.classList.remove('visibleClock');
  clock.classList.add('hiddenClock');
  timer.classList.remove('hiddenTimer');
  timer.classList.add('visibleTimer');
};

var onClickClock = function onClickClock() {
  clockAnimation();
  var clock = document.querySelector('#clock');
  var timer = document.querySelector('#stopwatch');

  clock.classList.remove('hiddenClock');
  clock.classList.add('visibleClock');
  timer.classList.remove('visibleTimer');
  timer.classList.add('hiddenTimer');
};

var Menu = function (_React$Component) {
  _inherits(Menu, _React$Component);

  function Menu() {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).apply(this, arguments));
  }

  _createClass(Menu, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'menu' },
        React.createElement('img', { className: 'menuIcon', onClick: onClickMenu, src: './img/menu.png', width: '68px', height: '68px' }),
        React.createElement('img', { className: 'clockIcon', onClick: onClickClock, src: './img/clock_icon.png', width: '60px', height: '60px' }),
        React.createElement('img', { className: 'stopwatchIcon', onClick: onClickTimer, src: './img/stopwatch_icon.png', width: '68px', height: '68px' })
      );
    }
  }]);

  return Menu;
}(React.Component);

var domContainer = document.querySelector('#menu');
ReactDOM.render(React.createElement(Menu, null), domContainer);