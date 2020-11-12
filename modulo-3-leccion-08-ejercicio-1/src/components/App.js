import React from "react";
import "../stylesheets/App.css";
import Card from "./Card";
import Form from "./Form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
    this.handleFormInfo = this.handleFormInfo.bind(this);
  }

  handleFormInfo(data) {
    this.setState({
      user: data,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Formulario de películas</h1>
        <Form handleFormInfo={this.handleFormInfo} />
        <Card updatedUser={this.state.user} />
      </div>
    );
  }
}

export default App;
