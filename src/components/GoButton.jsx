import React from 'react';
import ReactDom from 'react-dom';

class GoButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return(<button style={{color: 'green', backgroundColor: '#999999'}} onClick={this.props.handleStart}>GO!</button>)
  }
}

export default GoButton;
