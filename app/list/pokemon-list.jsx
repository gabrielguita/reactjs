import React from 'react';
import PokemonListItem from './poke-list-item';

export class PokemonList extends React.Component {

	render() {
		var key = 0;
		return (
			<table>
				<tbody>
					{this.props.pokemons[0].results.map((pokemon) => {
						key++ ;
						let src = './assets/img/' + key + '.png';
						return <PokemonListItem img={src}
																		name={pokemon.name}
																		type="type"
																		key={"key" + key}
						/>
					})}
				</tbody>
			</table>
		)
	}
}