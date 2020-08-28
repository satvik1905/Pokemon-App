import React, {Component} from 'react';
import './App.css';
import Pokegame from './Pokegame';
import './App.css';
import Pokedex from './Pokedex';

class App extends Component{
  render(){
    return(
      <div className="App">
        <Pokegame />
      </div>
    );
  }
}
export default App;
