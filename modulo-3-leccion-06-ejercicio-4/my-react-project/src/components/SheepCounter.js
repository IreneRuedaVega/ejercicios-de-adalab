import React from "react";

class SheepCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  onIncrementClick = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  handleClick() {
    this.onIncrementClick();
  }

  render() {
    return (
      <div className="wrapper">
        <button className="btn" onClick={this.handleClick}>
          Contador
        </button>
        <p className="text">{this.state.counter}</p>
      </div>
    );
  }
}

export default SheepCounter;
