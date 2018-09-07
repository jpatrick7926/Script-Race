import React from 'react';
import ReactDom from 'react-dom';

var inputStyle = {
  width: '100%',
  resize: 'none',
  fontSize: '20px',
  color: '#F200BA'
}

class InputField extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    if(this.props.achieved) {
      return 'YOU GOT IT!';
    } else {
      return <input type='text' onChange={this.props.handleInput} style={inputStyle}/>
    }
    // return({this.props.achieved ? <input type='text' onChange={this.props.handleInput}/>})
  }
}

export default InputField;
