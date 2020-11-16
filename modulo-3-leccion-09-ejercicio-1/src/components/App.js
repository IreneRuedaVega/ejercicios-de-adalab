import React from "react";
import "../stylesheets/App.css";

const numbers = [1, 4, 6, 8, 45, 89];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberListArray: numbers.map((n) => <li key={n}>{n}</li>),
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const number = parseInt(target.value);
    const numberFiltered = numbers
      .filter((n) => n > number)
      .map((n) => {
        return <li key={n}>{n}</li>;
      });
    this.setState({ numberListArray: numberFiltered });
  }

  render() {
    return (
      <>
        <ul>{this.state.numberListArray}</ul>
        <form>
          <label htmlFor="number">Introduce un número:</label>
          <input type="text" id="number" onChange={this.handleChange} />
        </form>
      </>
    );
  }
}

export default App;
