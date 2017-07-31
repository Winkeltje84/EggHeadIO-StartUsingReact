import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      items : []
    }
  }

  componentWillMount(){
    // API documentation --> https://swapi.co/documentation#json
    fetch( 'https://swapi.co/api/starships/')
      .then( response => response.json() )
      // .then( data => {} )
      // get the 'results' from the data -> call it 'items'
      // => setState --> set the items props to the value of 'items' given by the data
      .then( ({results: items}) => this.setState({ items }))
  }
  render(){
    let items = this.state.items
    return (
      <div>
        {items.map(item =>
          <Starship key={item.name} starship={item} />
        )}
      </div>
    )
  }
}

const Starship = (props) => <h4>{props.starship.name}</h4>

export default App
