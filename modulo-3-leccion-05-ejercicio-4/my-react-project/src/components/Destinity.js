import React from "react";
import CityImage from "./CityImage";

class Destinity extends React.Component {
  constructor(props) {
    super(props);
    this.myCity = "Praga";
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const selectedDestiny = event.currentTarget.value;
    this.myCity = selectedDestiny;
    this.forceUpdate();
  }

  render() {
    return (
      <>
        <form>
          <label htmlFor="destinity">Escoge tu destino:</label>
          <select name="destinies" id="destiny" onChange={this.handleChange}>
            <option value="">...</option>
            <option value="Buenos Aires">Buenos Aires</option>
            <option value="Sydney">Sydney</option>
            <option value="Praga">Praga</option>
            <option value="Boston">Boston</option>
            <option value="Tokio">Tokio</option>
          </select>
        </form>
        <CityImage city={this.myCity} />
      </>
    );
  }
}

export default Destinity;
