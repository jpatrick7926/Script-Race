import React from 'react';
import ReactDom from 'react-dom';

class Languages extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return(<div>
      <select onChange={this.props.handleLanguage}>
        <option value="Javascript">Javascipt</option>
        <option value="Python">Python</option>
        <option value="C++">C++</option>
      </select>
    </div>)
  }
}

export default Languages;
