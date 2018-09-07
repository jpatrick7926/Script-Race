import React from 'react';
import ReactDom from 'react-dom';
import Languages from './components/Languages.jsx';
import Stopwatch from './components/Stopwatch.jsx';
import GoButton from './components/GoButton.jsx';
import Levels from './components/Levels.jsx';
import InputField from './components/InputField.jsx';

var sampleData = {
  javascript1: "console.log('Hello world! My name is bot, and I am very excited to learn more about Javascript!');",
  javascript2: "if(learnToCode === true) { console.log('I learned something today!'); };",
  cplusplus1: "cout<< 'Hello World! My name is bot, and I am very excited to learn more about C++!';"
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentLanguage: 'Javascript',
      startTime: false,
      currentLevel: '1',
      userInput: '',
      achieved: false
    }
    this.handleStop = this.handleStop.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handleLevel = this.handleLevel.bind(this);
    this.handleLanguage = this.handleLanguage.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.checkTrue = this.checkTrue.bind(this);
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

  handleLevel(event) {
    this.setState({
      currentLevel: event.target.value
    })
  }

  handleLanguage(event){
    this.setState({
      currentLanguage: event.target.value
    })
  }

  checkTrue(data) {
    if(this.state.userInput === sampleData[data]) {
      console.log('YOU GOT IT!');
      this.setState({
        achieved: true
      })
    }
  }

  handleInput(event){
    var data = this.state.currentLanguage + this.state.currentLevel
    data = data.toLowerCase();
    console.log(this.state.achieved);
    console.log(this.state.userInput);
    console.log(sampleData[data]);
    this.setState({
      userInput: event.target.value
    })

    this.checkTrue(data);
  }

  copyDataHandler() {
    var data = this.state.currentLanguage + this.state.currentLevel
    data = data.toLowerCase();
    // console.log(data.toLowerCase());
    // console.log(sampleData[data]);
    return sampleData[data];
  }

  render () {
    return(
    <div>
      <div className="jumbotron text-center">
        <h1>SCRIPT-RACE</h1>
        <h2>Language: {this.state.currentLanguage}</h2>
        <h3>Current Level: {this.state.currentLevel}</h3>
      </div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Languages handleLanguage={this.handleLanguage}/>
          <Levels handleLevel={this.handleLevel}/>
        </div>
      </nav>
      <div style={{marginLeft: '50px', marginRight: '50px', backgroundColor: '#002245'}}>
        <div style={{border: '1px solid green', height: '200px', fontSize: 40, textAlign: 'center', fontWeight: 'bold', paddingTop: '50px', color: '#2FA169'}}>
          {this.state.startTime ? <InputField handleInput={this.handleInput} achieved={this.state.achieved}/> : 'PRESS GO'}
        </div>
        <div style={{border: '1px solid pink', height: '200px', padding: '10px', color: '#f2f2f2'}}>
          {this.copyDataHandler()}
        </div>
        <GoButton style={{float: 'right'}} handleStart={this.handleStart}/>
      </div>
      <div style={{border: '2px dotted black', height: '100px', width: '100px', align: 'center', margin: 'auto'}}>
        <Stopwatch startTime={this.state.startTime} handleStop={this.handleStop}/>
      </div>
    </div>)
  }
}

ReactDom.render(<App />, document.getElementById('app'));
