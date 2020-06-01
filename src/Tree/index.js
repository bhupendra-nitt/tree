import React from 'react';
import './tree.scss';

class Tree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: []
    }
  }

  printTree  = (object, index = 0, listArray = []) => {
    const keys = Object.keys(object);
    for(let i = 0; i< keys.length; i++) {
      if(typeof(object[keys[i]]) === 'object') {
        listArray.push(<div key={keys[i]}className="tree__branch" style={{
          paddingLeft: `${index*16}px`
        }}>{keys[i]}</div>)
        this.printTree(object[keys[i]], index +1, listArray);
      }
    }
    return listArray;
  }

  render () {
    return (
      <div className="tree">
        <div className="tree__title">
          Tree structure example
        </div>
        {this.printTree(this.props.object, this.props.index)} 
      </div>
    )
  }
}
export default Tree;
