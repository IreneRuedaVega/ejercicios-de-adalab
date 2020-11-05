import React from "react";

class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.currentTarget.value.toLowerCase().includes("cebolla ")) {
      alert("Odio la cebolla");
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
