import React from 'react';
import ReactDom from 'react-dom';

var selectStlye = {
  borderRadius: '4px',
  backgroundColor: '#f1f1f1'
}

class Languages extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return(<div>
      <select onChange={this.props.handleLanguage} style={selectStlye}>
        <option value="Javascript">Javascipt</option>
        <option value="Python">Python</option>
        <option value="Cplusplus">C++</option>
      </select>
    </div>)
  }
}

export default Languages;
