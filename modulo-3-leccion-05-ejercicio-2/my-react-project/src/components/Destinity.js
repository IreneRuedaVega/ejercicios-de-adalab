import React from "react";

class Destinity extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    alert(
      "Tu destino es viajar a " +
        event.currentTarget.value +
        " siendo " +
        event.currentTarget.value +
        " la ciudad seleccionada"
    );
  }

  render() {
    return (
      <>
        <form>
          <label htmlFor="destinity">Escoge tu destino:</label>
          <select onChange={this.handleChange}>
            <option value="Buenos Aires">Buenos Aires</option>
            <option value="Sydney">Sydney</option>
            <option value="Praga">Praga</option>
            <option value="Boston">Boston</option>
            <option value="Tokio">Tokio</option>
          </select>
        </form>
      </>
    );
  }
}

export default Destinity;
