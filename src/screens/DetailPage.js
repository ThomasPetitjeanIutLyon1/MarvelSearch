import React from 'react';
import ComicDescription from '../Components/ComicDescription';
import '../Style/DetailPage.css';
import { ProgressBar } from 'react-materialize';
import { MediaBox } from 'react-materialize';

class DetailPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			url: 'https://gateway.marvel.com/v1/public/characters/',
			apiKey: '?apikey=28eaf05072bfa7e8bd854d769e3dd9de', //ATTENTION A NE PAS PUSHER
			datas: {
				picUrl: 'https://images-na.ssl-images-amazon.com/images/I/41XX8Bzd4vL._SX425_.jpg',
				title: 'Captain America',
				description: 'The first avenger'
			},
			character: {},
			charaLoaded: false,
			comicImgs: []
		};
	}

	componentWillMount() {
		console.log('CDM', this.props.history.location.state.character.id);
		fetch(this.state.url + this.props.history.location.state.character.id + this.state.apiKey)
			.then((response) => response.json())
			.then((json) =>
				this.setState({
					character: json.data.results,
					charaLoaded: true,
					comicImgs: this.state.comicImgs.concat("lel")
				})
			);
	}

	fetchComic(resourceURI) {
		console.log("Fetching with ResURI: " + resourceURI)
		fetch(resourceURI + this.state.apiKey)
			.then((response) => response.json())
			.then((json) =>
				this.setState({
					comicImgs: this.state.comicImgs.concat(json.data.results[0].images.map((img) => (img.path + img.extension)))
				})
			);
	}

	render() {
		return (
			<div className="container">
				<ComicDescription character={this.state.character} />
				{this.state.comicImgs ? console.log("true img") : console.log("false img")}
			</div>
		);
	}
}

export default DetailPage;
