import React from 'react';
import ReactDom from 'react-dom';
import Languages from './components/languages.jsx';
import Stopwatch from './components/Stopwatch.jsx';

var divStyle = {
  margin: '25px',
  color: 'red',
  border: '1px dashed pink'
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentLanguage: 'none',
      start: false,

    }

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
        </div>
      </nav>
      <div className="row">
        <div className="boxed" style={divStyle}>
          In a Box!
        </div>
        <div className="col-md-9 offset-md-5" style={{margin:'20px'}}>
          this needs to be the data that is to be copied
        </div>
        <div>
          <Stopwatch/>
        </div>
      </div>
    </div>)
  }
}

ReactDom.render(<App />, document.getElementById('app'));
