import React from 'react';
import ReactDom from 'react-dom';
import Languages from './components/languages.jsx';
import Stopwatch from './components/Stopwatch.jsx';
import GoButton from './components/GoButton.jsx';
import Levels from './components/Levels.jsx';

var divStyle = {

}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentLanguage: 'none',
      startTime: false,

    }
    this.handleStop = this.handleStop.bind(this);
    this.handleStart = this.handleStart.bind(this);
  }

  handleStart() {
    this.setState({
      startTime: true
    })
  }

  handleStop() {
    this.setState({
      startTime: false
    })
  }

  render () {
    return(
    <div>
      <div className="jumbotron text-center">
        <h1>SCRIPT-RACE</h1>
      </div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Languages/>
          <Levels/>
        </div>
      </nav>
      <div style={{margin: '50px', width: '500px'}}>
        <div style={{border: '1px solid green', height: '200px'}}>
          In a Box!
        </div>
        <div style={{border: '1px solid red', height: '200px'}}>
          this needs to be the data that is to be copied
        </div>
        <GoButton handleStart={this.handleStart}/>
      </div>
      <div style={{}}>
        <Stopwatch startTime={this.state.startTime} handleStop={this.handleStop}/>
      </div>
    </div>)
  }
}

ReactDom.render(<App />, document.getElementById('app'));
