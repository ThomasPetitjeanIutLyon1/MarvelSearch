import React from 'react';
import ComicDescription from '../Components/ComicDescription';
import '../Style/DetailPage.css';
import { MediaBox, ProgressBar, Button, Icon } from 'react-materialize';

class DetailPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			url: 'https://gateway.marvel.com/v1/public/characters/',
			apiKey: '?apikey=0038ab31b0f5cf4248d880c6edbc9764', //ATTENTION A NE PAS PUSHER
			datas: {
				picUrl: 'https://images-na.ssl-images-amazon.com/images/I/41XX8Bzd4vL._SX425_.jpg',
				title: 'Captain America',
				description: 'The first avenger'
			},
			character: {},
			charaLoaded: false,
			comicsLoading: false,
			comicImgs: []
		};
	}

	componentWillMount() {
		console.log('CDM', this.props.history.location.state.character.id)
		this.fetchCharacter()
	}

	async fetchCharacter() {
		await fetch(this.state.url + this.props.history.location.state.character.id + this.state.apiKey)
			.then((response) => response.json())
			.then((json) =>
				this.setState({
					character: json.data.results,
					charaLoaded: true
				})
			);
	}

	fetchComic(comics) {
		this.setState({ comicsLoading: true })
		comics.map(async (item) => {
			await fetch(item.resourceURI + this.state.apiKey)
				.then((response) => response.json())
				.then((json) => json.data.results[0].images.map((img) => {
					this.setState({ comicImgs: this.state.comicImgs.concat(img.path + "." + img.extension) })
				}));
		})
	}

	clickBack = () => {
		this.props.history.push({
			pathname: "/"
		});
	}

	render() {
		return (
			<div className="container">
				<Button waves="light" className="red btnBack" onClick={this.clickBack}>Retour<Icon left>arrow_back</Icon></Button>
				<ComicDescription character={this.state.character} />
				{Object.keys(this.state.character).length != 0 && this.state.comicsLoading === false ? this.fetchComic(this.state.character[0].comics.items) : null}
				<h4>Apparitions dans les comics</h4><br />
				<div className="comicContainer">
					{this.state.comicImgs.length === 0 ? <ProgressBar className="red" /> :
						this.state.comicImgs.map((img) => (<MediaBox key={img} className="comicImg" src={img} width="250" />))
					}
				</div>

			</div>
		);
	}
}

export default DetailPage;
