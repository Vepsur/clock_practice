'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stopwatch = function (_React$Component) {
  _inherits(Stopwatch, _React$Component);

  function Stopwatch() {
    _classCallCheck(this, Stopwatch);

    return _possibleConstructorReturn(this, (Stopwatch.__proto__ || Object.getPrototypeOf(Stopwatch)).apply(this, arguments));
  }

  _createClass(Stopwatch, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "stopwatchWrapper" },
        React.createElement(
          "div",
          { className: "externalCircles" },
          React.createElement(
            "div",
            { className: "circle_1" },
            React.createElement("img", { src: "./img/ellipse_1.png", alt: "Circle_1" })
          )
        ),
        React.createElement(
          "div",
          { className: "stopwatch" },
          React.createElement(
            "div",
            { className: "background" },
            React.createElement("img", { src: "./img/clock_serifs.png", className: "numbers" })
          ),
          React.createElement(
            "div",
            { className: "arrows" },
            React.createElement("img", { className: "timerSec", src: "./img/sec_dial.png" })
          ),
          React.createElement(
            "div",
            { className: "digitalDial" },
            React.createElement(
              "p",
              null,
              '00',
              " : ",
              '00',
              " : ",
              '00'
            )
          )
        )
      );
    }
  }]);

  return Stopwatch;
}(React.Component);

var domContainer = document.querySelector('#stopwatch');
ReactDOM.render(React.createElement(Stopwatch, null), domContainer);