import React from "react";
import { Card, CardTitle, Button, Icon } from "react-materialize";

class SearchItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: props.item
    };
    console.log(props);
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
          actions={[<a href="#" class="detailsLabel">Détails</a>]}
        >
          {this.state.character.name}
        </Card>
      </div>
    );
  }
}

export default SearchItem;
