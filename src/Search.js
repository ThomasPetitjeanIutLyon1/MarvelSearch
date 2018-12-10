import React from "react";

import CharacterList from "./CharacterList";
import BottomScrollListener from "react-bottom-scroll-listener";
import { ProgressBar } from "react-materialize";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charactersList: null,
      url: "https://gateway.marvel.com/v1/public/characters",
      apiKey: "?apikey=0038ab31b0f5cf4248d880c6edbc9764&offset=", //ATTENTION A NE PAS PUSHER
      searchResultPart: null,
      loading: true,
      offset: 0
    };
    this.onInit();
  }

  onInit = () => {
    this.fetchDataFromAPI();
  };

  addOffset = () => {
    this.setState({
      offset: this.state.offset + 20
    });
    this.fetchDataFromAPI();
  };

  fetchDataFromAPI = () => {
    fetch(this.state.url + this.state.apiKey + this.state.offset)
      .then(response => response.json())
      .then(json =>
        this.setState({
          charactersList: this.state.charactersList
            ? this.state.charactersList.concat(json.data.results)
            : json.data.results,
          loading: false
        })
      );
  };

  render() {
    return (
      <div className="content">
        <img className="logo" src="logo.png" />
        <br />
        <input
          type="text"
          className="searchInput"
          placeholder="Rechercher..."
        />
        <br />
        {this.state.charactersList && (
          <CharacterList list={this.state.charactersList} />
        )}
        {this.state.charactersList && (
          <BottomScrollListener onBottom={this.addOffset} />
        )}
        {this.state.loading && <ProgressBar />}
      </div>
    );
  }
}

export default Search;
