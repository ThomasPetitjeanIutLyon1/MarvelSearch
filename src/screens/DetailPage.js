import React from 'react';
import ComicDescription from '../Components/ComicDescription';
import '../Style/DetailPage.css';
import { Carousel } from 'react-materialize';

class DetailPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			datas: {
				picUrl: 'https://images-na.ssl-images-amazon.com/images/I/41XX8Bzd4vL._SX425_.jpg',
				title: 'Captain America',
				description: 'The first avenger'
			}
		};
	}

	render() {
		return (
			<div className="container">
				<ComicDescription data={this.state.datas} />
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
