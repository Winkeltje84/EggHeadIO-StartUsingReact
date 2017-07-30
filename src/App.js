import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(){
    super(); // super() will give the keyword 'this' the context within our component rather then its parent class React.Component
    this.state = {
      someText: 'This is the initial state "someText"'
    }
  }

  update ( e ){
    this.setState( {someText: e.target.value} )
  }

  render(){
    return (
      <div>
        <h3>{this.state.someText}</h3>
        <Widget update={this.update.bind(this)}/>
        <Widget update={this.update.bind(this)}/>
      </div>
    )
  }
}

const Widget = (props) => // new child component that takes in props given by parent and updates the state of its parent
  <input type="text" onChange={props.update}/> // it calls the update prop when onChange

App.propTypes = {
  txt: PropTypes.string,
  nr: PropTypes.number.isRequired
}

App.defaultProps = {
  txt: "this is the default 'txt' if no prop of 'txt' is added by parent"
}

export default App
