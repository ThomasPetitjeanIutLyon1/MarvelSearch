import React from 'react';

import CharacterList from './CharacterList';
import BottomScrollListener from 'react-bottom-scroll-listener';
import { ProgressBar, Button } from 'react-materialize';
import { withRouter } from 'react-router-dom';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			charactersList: [],
			url: 'https://gateway.marvel.com/v1/public/characters',
			apiKey: '?apikey=0038ab31b0f5cf4248d880c6edbc9764', //ATTENTION A NE PAS PUSHER
			loading: true,
			searchValue: '',
			offset: 0
		};
		this.onInit();
	}

	onInit = () => {
		this.fetchDataFromAPI();
	};

	addOffset = () => {
		this.setState({
			offset: this.state.offset + 20,
			loading: true
		});
		this.fetchDataFromAPI();
	};

	fetchDataFromAPI = () => {
		fetch(this.state.url + this.state.apiKey + "&offset=" + this.state.offset).then((response) => response.json()).then((json) =>
			this.setState({
				charactersList: this.state.charactersList
					? this.state.charactersList.concat(json.data.results)
					: json.data.results,
				loading: false,

			})
		);
	};

	updateItemList = (evt) => {
		this.setState({
			searchValue: evt.target.value.substr(0, 20)
		});
	};

	searchCharacters() {
		this.setState({ loading: true })
		let searchVal = this.state.searchValue
		console.log(searchVal)
		fetch(this.state.url + this.state.apiKey + "&nameStartsWith=" + searchVal).then((response) => response.json()).then((json) =>
			this.setState({
				charactersList: json.data.results,
				loading: false,
			})
		);
	}

	onClickSearch = () => {
		this.searchCharacters()
	}

	keyPressSearch = (key) => {
		if (key.keyCode != 13) {
			return;
		}
		this.searchCharacters()
	}

	render() {

		let filteredItems = this.state.charactersList
		return (
			<div className="content">
				<img className="logo" src="logo.png" />
				<br />
				<input
					type="text"
					value={this.state.searchValue}
					className="searchInput"
					placeholder="Rechercher..."
					onKeyDown={this.keyPressSearch}
					onChange={this.updateItemList}
				/>
				<Button onClick={this.onClickSearch} className="red btnSearch" waves="light">Rechercher</Button>
				<br />
				{this.state.charactersList.length != 0 ?
					(filteredItems.length === 0 ? <h4>Impossible de trouver les données</h4> : <CharacterList list={filteredItems} history={this.props.history} />) :
					null}
				{this.state.charactersList && <BottomScrollListener onBottom={this.addOffset} />}
				{this.state.loading && <ProgressBar className="red" />}
			</div>
		);
	}
}

/*

	let filteredItems = this.state.charactersList.filter((chara) => {
			return chara.name.indexOf(this.state.searchValue) !== -1;
		});
		console.log(this.props);

*/

export default withRouter(Search);
