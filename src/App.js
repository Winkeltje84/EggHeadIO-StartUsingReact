import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(){
    super(); // super() will give the keyword 'this' the context within our component rather then its parent class React.Component
    this.state = {
      someText: 'This is the state "someText"'
    }
  }

  render(){
    let txt = this.props.txt;
    let nr = this.props.nr;
    return (
      <div>
        <h1>This is a component</h1>
        <p>when adding an extra tag it needs to be wrapped into
        one, because only one can be returned.</p>
        <p>some text from props: {txt}</p>
        <p>a number from props: {nr}</p>
        <h3>{this.state.someText}</h3>
      </div>
    )
  }
}

App.propTypes = {
  txt: PropTypes.string,
  nr: PropTypes.number.isRequired
}

App.defaultProps = {
  txt: "this is the default 'txt' if no prop of 'txt' is added by parent"
}

export default App
