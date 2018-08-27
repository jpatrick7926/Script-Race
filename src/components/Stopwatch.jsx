import React from 'react';
import ReactDom from 'react-dom';

var secondsLayout = second => Math.floor(second / 60) + ('0' + second % 60).slice(-2);

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      lastTime: null
    }
    this.handleClick = this.handleClick.bind(this);
    this.startButton = this.startButton.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.currentSec = this.state.seconds;
  };

  startButton(secs) {
    if(secs === 0){
      return <button onClick={this.handleClick}>START</button>
    }
    else {
      return <button onClick={this.handleStop}>STOP</button>
    }
  }

  stopButton(secs) {

  }

  handleClick() {
    this.currentSec = setInterval(() =>
      this.setState({
        seconds: this.state.seconds + 1
      })
      ,1000)
  }

  handleStop() {
    clearInterval(this.currentSec)
    this.setState({
      seconds: 0
    })
  }

  render() {
    return (
      <div style={{ textAlign: 'center', margin: '25px'}}>
        <h1 style={{}}>
          {secondsLayout(this.state.seconds)}
        </h1>
        {this.startButton(this.state.seconds)}
      </div>
    )
  }
}




export default Stopwatch;
