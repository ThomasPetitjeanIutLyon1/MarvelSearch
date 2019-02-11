import React from 'react';

import CharacterList from './CharacterList';
import BottomScrollListener from 'react-bottom-scroll-listener';
import { ProgressBar } from 'react-materialize';
import { withRouter } from 'react-router-dom';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			charactersList: [],
			url: 'https://gateway.marvel.com/v1/public/characters',
			apiKey: '?apikey=0038ab31b0f5cf4248d880c6edbc9764&offset=', //ATTENTION A NE PAS PUSHER
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
		fetch(this.state.url + this.state.apiKey + this.state.offset).then((response) => response.json()).then((json) =>
			this.setState({
				charactersList: this.state.charactersList
					? this.state.charactersList.concat(json.data.results)
					: json.data.results,
				loading: false
			})
		);
	};

	updateItemList = (evt) => {
		this.setState({
			searchValue: evt.target.value.substr(0, 20)
		});
	};

	render() {
		let filteredItems = this.state.charactersList.filter((chara) => {
			return chara.name.indexOf(this.state.searchValue) !== -1;
		});
		console.log(this.props);

		return (
			<div className="content">
				<img className="logo" src="logo.png" />
				<br />
				<input
					type="text"
					value={this.state.searchValue}
					className="searchInput"
					placeholder="Rechercher..."
					onChange={this.updateItemList}
				/>
				<br />
				{this.state.charactersList && <CharacterList list={filteredItems} history={this.props.history} />}
				{this.state.charactersList && <BottomScrollListener onBottom={this.addOffset} />}
				{this.state.loading && <ProgressBar className="red" />}
			</div>
		);
	}
}

export default withRouter(Search);
