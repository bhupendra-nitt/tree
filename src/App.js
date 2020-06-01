import React from 'react';
import './App.scss';
import Tree from './Tree';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tempObject: {},
      finalObject: {}
    }
  }

  handleArrayInput = input => {
    let arr = input.split('\n');
    const obj = {};
    for(let i = 0; i< arr.length; i++) {
      let currentObj = obj;
      const innerArr = arr[i].split(".");
  
      for (let j = 0; j < innerArr.length; j++) {
          let currentItem = innerArr[j];
          currentObj[currentItem] = currentObj[currentItem] || {};
          currentObj = currentObj[currentItem];
      }
    }
   this.setState({tempObject: obj});
  }

  handleInputSubmit = _ => {
    this.setState({finalObject: this.state.tempObject});
  }

  render () {
    return (
      <div className="app">
        <textarea
          className="app__array-list"
          placeholder="Enter list, use enter to add new entry to list"
          onChange={e => this.handleArrayInput(e.target.value)}
        />
        <button
          className="app__submit-btn"
          onClick={this.handleInputSubmit}
        >
          Submit
        </button>
        <Tree 
          object={this.state.finalObject}
          index={0}
        />
      </div>
    )
  }
}
export default App;


