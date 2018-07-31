import React from 'react';
import ReactDom from 'react-dom';

class Languages extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      language: ''
    }
  }

  render() {
    return(<div>
      <select>
        <option value="javascript">Javascipt</option>
        <option value="python">Python</option>
        <option value="C++">C++</option>
      </select>
    </div>)
  }
}

export default Languages;
