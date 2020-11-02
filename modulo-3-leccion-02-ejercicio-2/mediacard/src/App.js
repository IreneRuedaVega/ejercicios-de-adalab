import React from "react";
import irene from "./Irene.jpg";
import "./App.css";

class App extends React.Component {
  /* constructor(props) {
    super(props);
  } */

  render() {
    const appHeader = (
      <header className="App-header">
        <img src={irene} className="App-logo" alt="foto irene" />
        <div className="App-description">
          <p className="App-name">irene rueda vega</p>
          <p className="App-calendar">
            <span className="span">lunes</span> 2 de noviembre de 2020
          </p>
        </div>
      </header>
    );

    const appMain = (
      <main>
        <p className="App-main">
          Lorem ipsum dolor sit amet, consectetur adipisicing elite, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco labori nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum...
        </p>
      </main>
    );

    const appFooter = (
      <footer className="App-footer">
        <p className="App-paragraph">Leer más...</p>
        <div className="App-likes">
          <p className="App-number">37</p>
          <span className="App-heart">&#10084;</span>
        </div>
      </footer>
    );

    const appContainer = (
      <div className="App-container">
        {appHeader}
        {appMain}
        {appFooter}
      </div>
    );

    const appRoot = <div className="App">{appContainer}</div>;

    return appRoot;
  }
}

export default App;
