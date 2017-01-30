import React from 'react';
import { PokemonList } from './poke-list/poke-list';

export default class App extends React.Component {

	render() {
    return (
      <div>
        <h1>Test Pokemon</h1>
        <PokemonList pokemons={this.props.list}/>
      </div>
    )
  }
}