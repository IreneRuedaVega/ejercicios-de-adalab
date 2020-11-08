import React from "react";

class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    /* if (event.target.value.toLowerCase().includes("cebolla ")) {
      alert("Odio la cebolla");
    } */
    const value = event.target.value;
    if (value.includes("cebolla")) {
      alert("ODIO LA CEBOLLA");
    }
  }

  render() {
    return (
      <form className="text">
        <label>
          <textarea onChange={this.handleChange}></textarea>
        </label>
      </form>
    );
  }
}

export default OnionHater;
