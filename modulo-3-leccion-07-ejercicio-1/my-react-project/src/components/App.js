import React, { useState } from "react";
import "../stylesheets/App.css";

function App() {
  const [age, setAge] = useState(20);

  const handleClick = () => {
    setAge(age + 1);
  };

  return (
    <div>
      <p>Hoy tengo {age} años de edad</p>
      <button onClick={handleClick}>Hazme más viejo</button>
    </div>
  );
}

export default App;
