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
      prevData: [],
      nextData: [],
      selected: {}
    }
  }

  componentDidMount() {
    this.getPokemon('https://pokeapi.co/api/v2/pokemon')
  }
  
  getPokemon = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log('data', data)
        this.setState({
          pokemon: data.results,
          prevData: data.prev,
          nextData: data.next,
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  selectPokemon = (name) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(res => {this.setState({ selected: res.data })
        })
        .catch(err => {console.log(err)})
  }

  handlePrev = () => {
    if (this.getPokemon(this.state.prevData)) {
      this.setState({
        pokemon: this.state.prevData,
      });
    }
  };

  handleNext = () => {
    if (this.getPokemon(this.state.nextData)) {
      this.setState({
        pokemon: this.state.nextData,
      });
    }
  };

  render() {
    return (
      <div className="App">
          <div className='navBar'>
            <Route path='/' component={NavBar} />
          </div>
          <div className='container'>
            <Route exact path ='/' render={ (props) => { return(<ListView {...props} pokemon={this.state.pokemon} selectPokemon={this.selectPokemon} />)} } />
            <button onClick={this.handlePrev}>Previous</button>
            <button onClick={this.handleNext}>Next</button>
          </div>
          <div>
            <Route exact path='/:id' render={ (props) => { return(<ViewItem {...props} selected={this.state.selected} />)}}  />
          </div>
      </div>
    );
  }
}

export default App;
