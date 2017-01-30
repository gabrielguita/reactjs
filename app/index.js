import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app.jsx';
import $ from 'jquery';

function fetchFirstGenPokemons() {

	return $.ajax ({
		url: 'https://pokeapi.co/api/v2/pokemon?limit=150',
		dataType: 'json',
		success: function(response) {
			return response.results;
		},
		error: function(xhr, status, err) {
			console.error(status, err.toString());
		}
	});
}

fetchFirstGenPokemons().then((result) => {

	render( <AppContainer><App list={[result]}/></AppContainer>, document.querySelector("#app"));

	if (module && module.hot) {
		module.hot.accept('./app.jsx', () => {
			const App = require('./app.jsx').default;
			render(
				<AppContainer>
					<App/>
				</AppContainer>,
				document.querySelector("#app")
			);
		});
	}
});