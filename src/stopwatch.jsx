'use strict';

class Stopwatch extends React.Component {
  render() {
    return (
      <div className="stopwatchWrapper">
        <div className="externalCircles">
          <div className="circle_1">
            <img src="./img/ellipse_1.png" alt="Circle_1" />
          </div>
        </div>
        <div className="stopwatch">
          <div className="background">
            <img src="./img/clock_serifs.png" className="numbers"></img>
          </div>
          <div className="arrows">
            <img className="timerSec" src="./img/sec_dial.png"></img>
          </div>
          <div className="digitalDial">
            <p>{'00'} : {'00'} : {'00'}</p>
          </div>
        </div>
      </div>
    );
  }
}

let domContainer = document.querySelector('#stopwatch');
ReactDOM.render(<Stopwatch />, domContainer);


