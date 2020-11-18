import React from "react";
import data from "../data/data.json";
import Collapsable from "./Collapsable";

class CollapsableList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      palettes: data.palettes,
    };
  }

  render() {
    const collapsibleItems = this.state.palettes.map((el) => {
      return (
        <Collapsable
          key={el.name}
          name={el.name}
          source={el.from}
          colors={el.colors}
        />
      );
    });

    return <ul>{collapsibleItems}</ul>;
  }
}

export default CollapsableList;
