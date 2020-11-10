import React from "react";
import CityImage from "./CityImage";
import CitySelector from "./CitySelector";

class Destiny extends React.Component {
  constructor(props) {
    super(props);
    this.myCity = "";
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value) {
    this.myCity = value;
    this.forceUpdate();
  }
  render() {
    return (
      <div>
        <CitySelector handleChange={this.handleChange} />
        <CityImage city={this.myCity} />
      </div>
    );
  }
}

export default Destiny;
