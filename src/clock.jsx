'use strict';

class Clock extends React.Component {

  render() {
    return (
      <div className="clockWrapper">
        <div className="externalCircles">
          <div className="circle_1">
            <img src="./img/ellipse_1.png" alt="Circle_1" />
          </div>
        </div>
        <div className="clock">
          <div className="background">
            <img src="./img/numbers.png" className="numbers"></img>
          </div>
          <div className="arrows">
            <img className="hour" src="./img/hour_dial.png"></img>
            <img className="min" src="./img/min_dial.png"></img>
            <img className="sec" src="./img/sec_dial.png"></img>
            <div className="central_dot"></div>
          </div>
        </div>
      </div>
    );
  }
}

let domContainer = document.querySelector('#clock');
ReactDOM.render(<Clock />, domContainer);


