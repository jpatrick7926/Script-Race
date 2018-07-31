import React from 'react';
import ReactDom from 'react-dom';
import Languages from './components/languages.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

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
    </div>)
  }
}

ReactDom.render(<App />, document.getElementById('app'));
