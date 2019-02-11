import React from "react";
import { Card, CardTitle, Button, Icon } from "react-materialize";
import { Redirect } from "react-router";

class SearchItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: props.item,
      redirect: false
    };
    console.log(props);
  }

  handleClick = () => {
    console.log("click handler")
    this.setState({ redirect: true })
  }

  render() {
    return (
      <div className="characterItem">
        <Card
          id={"card_" + this.state.character.id}
          className="resultCard"
          header={
            <CardTitle
              image={
                this.state.character.thumbnail.path +
                "." +
                this.state.character.thumbnail.extension
              }
            />
          }
          actions={[<span onClick={this.handleClick} className="detailsLabel">Détails</span>]}
        >
          {this.state.redirect && <Redirect to={'/detail/' + this.props.item.id} />}
          {this.state.character.name}
        </Card>
      </div>
    );
  }
}

export default SearchItem;
