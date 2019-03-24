import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import axios from 'axios';
import NavBar from './components/NavBar';
import ListView from './components/ListView';
import ViewItem from './components/ViewItem';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
      selected: {}
    }
  }

  componentDidMount() {
    axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then(res => {
        console.log(res);
        const pokemon = res.data.results;
        this.setState({ pokemon })
        })
        .catch(err => {console.log(err)
        })
  }

  selectPokemon = (name) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(res => {this.setState({ selected: res.data })
        })
        .catch(err => {console.log(err)})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className='navBar'>
            <Route path='/' component={NavBar} />
          </div>
          <div className='container'>
            <Route exact path ='/' render={ (props) => { return(<ListView {...props} pokemon={this.state.pokemon} selectPokemon={this.selectPokemon} />)} } />
            <Route exact path='/:id' render={ (props) => { return(<ViewItem {...props} selected={this.state.selected} />)}}  />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
