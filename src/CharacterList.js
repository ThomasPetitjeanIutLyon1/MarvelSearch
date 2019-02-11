import React from 'react';
import SearchItem from './SearchItem';

export default function CharactersList(props) {
	return (
		<div className="searchResult">
			{props.list.map((character) => <SearchItem key={character.id} item={character} history={props.history} />)}
		</div>
	);
}
