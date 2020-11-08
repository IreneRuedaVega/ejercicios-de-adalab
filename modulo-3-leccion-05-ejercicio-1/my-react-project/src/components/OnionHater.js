import React from "react";

class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    if (value.includes("cebolla")) {
      alert("ODIO LA CEBOLLA");
    }
  }

  render() {
    return (
      <form>
        <label>
          <textarea onChange={this.handleChange}></textarea>
        </label>
      </form>
    );
  }
}

export default OnionHater;
