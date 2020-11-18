import React from "react";
import "../stylesheets/App.css";
import CollapsableList from "./CollapsableList";

class App extends React.Component {
  render() {
    return (
      <div>
        <CollapsableList />
      </div>
    );
  }
}

export default App;
