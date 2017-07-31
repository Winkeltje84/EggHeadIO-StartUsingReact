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
  filterFunction(e){
    // filterFunction is called by onChange property of input field
    this.setState({ filter: e.target.value})
    // a prop 'filter' added to the state with the value of what is in the input field
  }
  render(){
    let items = this.state.items
    // if prop 'filter' in state has a value (= true)
    if(this.state.filter){
      // set prop 'items' equal to --> the result of filter
      items = items.filter( item =>
        // check for every item (which is set to lowercase)
        item.name.toLowerCase()
          .includes(this.state.filter.toLowerCase())
          // whether is includes : text that is present in the 'filter' prop (turned lowercase)
        // and only the items are filtered out that include the output of the filter function
        // that filter function just returns all items that return true
        // & are put into 'items'
      )
    }
    return (
      <div>
        <input type="text" onChange={this.filterFunction.bind(this)}/>
        {items.map(item =>
          <Starship key={item.name} starship={item} />
        )}
      </div>
    )
  }
}

const Starship = (props) => <h4>{props.starship.name}</h4>

export default App
