import React, { useState } from "react";
import "../stylesheets/App.css";

function App() {
  const [age, setAge] = useState(20);
  const [present, setPresents] = useState(1);

  const handleClick = () => {
    setAge(age + 1);
  };

  const handlePresent = () => {
    setPresents(present + 1);
  };

  return (
    <div>
      <p>Hoy tengo {age} años de edad</p>
      <button type="button" onClick={handleClick}>
        Hazme más viejo
      </button>
      <p>Tengo {present} regalo/s</p>
      <button type="button" onClick={handlePresent}>
        Dame regalos
      </button>
    </div>
  );
}

export default App;
