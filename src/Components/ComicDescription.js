import React, { Component } from 'react';
import '../Style/ComicDescription.css';
import { CardTitle, Card, Col } from 'react-materialize';

export default class ComicDescription extends Component {
	render() {
		console.log('character', this.props.character);

		return (
			<div className="mainDiv">
				<Col m={12} s={12} className="fullWidth">
					<Card
						className="light-grey"
						horizontal
						header={
							<CardTitle
								image={
									this.props.character[0] ? (
										this.props.character[0].thumbnail.path +
										'.' +
										this.props.character[0].thumbnail.extension
									) : (
										''
									)
								}
							/>
						}
					>
						<h1>{this.props.character[0] ? this.props.character[0].name : ''}</h1>
						<p>{this.props.character[0] ? this.props.character[0].description : ''}</p>
					</Card>
				</Col>
			</div>
		);
	}
}
