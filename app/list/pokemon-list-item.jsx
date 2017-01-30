import React from 'react';

var PokemonListItem = React.createClass ({

	render() {
		return (
			<tr>
				<td>
					<img src={this.props.img} />
				</td>
				<td>
					<span>{this.props.name}</span>
				</td>
				<td>
					<span>{this.props.type}</span>
				</td>
			</tr>
		)
	}
})

export default PokemonListItem;