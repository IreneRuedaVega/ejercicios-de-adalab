import React from "react";

const MediaCard = (props) => {
  return (
    <div className="App-container">
      <header className="App-header">
        <img src={props.image} className="App-logo" alt="foto irene" />
        <div className="App-description">
          <p className="App-name">{props.name}</p>
          <p className="App-calendar">{props.date}</p>
        </div>
      </header>
      <main>
        <p className="App-main">{props.text}</p>
      </main>
      <footer className="App-footer">
        <p className="App-paragraph">Leer más...</p>
        <div className="App-likes">
          <p className="App-number">{props.likes}</p>
          <i class="fas fa-heart">{props.heart}</i>
        </div>
      </footer>
    </div>
  );
};

export default MediaCard;
