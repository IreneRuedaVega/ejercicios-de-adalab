import React from "react";
import irene from "./Irene.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <header className="App-header">
          <img src={irene} className="App-logo" alt="foto irene" />
          <div className="App-description">
            <p className="App-name">irene rueda vega</p>
            <p className="App-calendar">
              <span className="span">lunes</span> 2 de noviembre de 2020
            </p>
          </div>
        </header>
        <main>
          <p className="App-main">
            Lorem ipsum dolor sit amet, consectetur adipisicing elite, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco labori nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum...
          </p>
        </main>
        <footer className="App-footer">
          <p className="App-paragraph">Leer más...</p>
          <div className="App-likes">
            <p className="App-number">37</p>
            <span className="App-heart">&#10084;</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
