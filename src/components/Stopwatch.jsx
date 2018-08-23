import React from 'react';
import ReactDom from 'react-dom';

var secondsLayout = second => Math.floor(second / 60) + ('0' + second % 60).slice(-2);

console.log(this);


class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      lastTime: null
    }
    this.handleClick = this.handleClick.bind(this);
    this.startButton = this.startButton.bind(this);
  };

  startButton(secs) {
    console.log(secs);
    if(secs === 0){
      return <button onClick={this.handleClick}>START</button>
    }
  }

  handleClick() {
    setInterval(() =>
      this.setState({
        seconds: this.state.seconds + 1
      })
     ,1000)
  }

  render() {
    return (
      <div style={{ textAlign: 'center'}}>
        <h1 style={{}}>
          {secondsLayout(this.state.seconds)}
        </h1>
        {this.startButton(this.state.seconds)}
      </div>
    )
  }
}




export default Stopwatch;
