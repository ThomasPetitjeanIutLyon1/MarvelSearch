import React from 'react';
import ComicDescription from '../Components/ComicDescription';
import '../Style/DetailPage.css';
import { Carousel } from 'react-materialize';

class DetailPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			url: "https://gateway.marvel.com/v1/public/characters/",
			apiKey: "?apikey=0038ab31b0f5cf4248d880c6edbc9764", //ATTENTION A NE PAS PUSHER
			datas: {
				picUrl: 'https://images-na.ssl-images-amazon.com/images/I/41XX8Bzd4vL._SX425_.jpg',
				title: 'Captain America',
				description: 'The first avenger'
			},
			character: {}

		};
	}

	componentDidMount() {
		console.log(this.props.match.params.id)
		fetch(this.state.url + this.props.match.params.id + this.state.apiKey)
			.then(response => response.json())
			.then(json =>
				this.setState({
					character: json.data.results,
				})
			);

	}

	render() {
		return (
			<div className="container">
				<ComicDescription character={this.state.character} />
				<Carousel
					images={[
						'https://lorempixel.com/250/250/nature/1',
						'https://lorempixel.com/250/250/nature/2',
						'https://lorempixel.com/250/250/nature/3',
						'https://lorempixel.com/250/250/nature/4',
						'https://lorempixel.com/250/250/nature/5'
					]}
				/>
			</div>
		);
	}
}

export default DetailPage;
