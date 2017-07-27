import React from 'react';

class App extends React.Component {
  render(){
    let txt = this.props.txt;
    return (
      <div>
        <h1>This is a component</h1>
        <p>when adding an extra tag it needs to be wrapped into
        one, because only one can be returned.</p>
        <p>{txt}</p>
      </div>
    )
  }
}

export default App
