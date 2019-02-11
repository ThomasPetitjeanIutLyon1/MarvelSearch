import React, { Component } from 'react';
import '../Style/ComicDescription.css';
import { CardTitle, Card, Col } from 'react-materialize';

export default class ComicDescription extends Component {
	render() {
		return (
			<div className="mainDiv">
				<Col m={12} s={12} className="fullWidth">
					<Card className="light-grey" horizontal header={<CardTitle image={this.props.data.picUrl} />}>
						<h1>Title</h1>
						<p>I am a very simple card. I am good at containing small bits of information</p>
					</Card>
				</Col>
			</div>
		);
	}
}
