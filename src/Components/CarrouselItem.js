import React, { Component } from 'react';

export default class CarrouselItem extends Component {
	render() {
		return (
			<div className="white">
				<h4>{this.props.data.title}</h4>
				<img src={this.props.data.picUrl} />
			</div>
		);
	}
}
