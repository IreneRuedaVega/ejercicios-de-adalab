import React from "react";
import "../stylesheets/App.css";

class Collapsable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (ev) => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const collapsablecolor = this.props.colors.map((color) => {
      const colorName = "#" + color;
      return (
        <div
          className="color"
          style={{ backgroundColor: `${colorName}` }}
        ></div>
      );
    });

    return (
      <>
        <li className="collapsible-box" onClick={this.handleClick}>
          <div className="collapsible-name">
            <h2>{this.props.name}</h2>
            <span>
              <i className="fas fa-arrow-circle-down"></i>
            </span>
          </div>

          {this.state.isOpen ? (
            <div className="content">
              <p>{this.props.source}</p>
              <div>{collapsablecolor}</div>
            </div>
          ) : null}
        </li>
      </>
    );
  }
}

export default Collapsable;
