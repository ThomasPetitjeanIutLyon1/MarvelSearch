import React, { Component } from 'react';
import { Carousel } from 'react-materialize';
import CarrouselItem from './CarrouselItem';

export default class Carrousel extends Component {
	render() {
		return (
			<div>
				<Carousel>{this.props.data.map((value) => <CarrouselItem data={value} />)}</Carousel>
			</div>
		);
	}
}
