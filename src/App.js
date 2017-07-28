import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
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
      </div>
    )
  }
}

App.propTypes = {
  txt: PropTypes.string,
  nr: PropTypes.number.isRequired
}

export default App
