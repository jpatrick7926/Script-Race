import React from 'react';
import ReactDom from 'react-dom';

var selectStlye = {
  borderRadius: '4px',
  backgroundColor: '#f1f1f1'
}

class Levels extends React.Component {
constructor(props){
  super(props);

}

  render() {
    return (
      <div>
        <select onChange={this.props.handleLevel} style={selectStlye}>
          <option value='1'>Level 1</option>
          <option value='2'>Level 2</option>
          <option value='3'>Level 3</option>
          <option value='4'>Level 4</option>
          <option value='5'>Level 5</option>
        </select>
      </div>
    );
  }
};

export default Levels;
