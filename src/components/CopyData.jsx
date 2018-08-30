import React from 'react';
import ReactDom from 'react-dom';

class CopyData extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }

  }

  render() {
    return(
      <p>
        {this.props.sampleData.javascript1}
      </p>
    )
  }

}

export default CopyData;
